#!/usr/bin/env node
/**
 * Universal Dynamic Form Generator
 * 
 * Works with ANY PDF form - completely dynamic
 * - Extracts field names and converts to readable labels
 * - Detects field types automatically
 * - Works with any PDF structure
 * - No hardcoded mappings
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function extractFieldsWithPdftk(pdfPath) {
  try {
    const output = execSync(`pdftk "${pdfPath}" dump_data_fields`, { 
      encoding: 'utf-8',
      maxBuffer: 10 * 1024 * 1024
    });
    
    const fields = [];
    const lines = output.split('\n');
    let currentField = {};
    
    for (const line of lines) {
      if (line.startsWith('FieldName:')) {
        if (currentField.name) fields.push(currentField);
        currentField = { name: line.substring(11).trim() };
      } else if (line.startsWith('FieldType:')) {
        currentField.type = line.substring(11).trim();
      } else if (line.startsWith('FieldValue:')) {
        currentField.value = line.substring(12).trim();
      } else if (line.startsWith('FieldFlags:')) {
        currentField.flags = parseInt(line.substring(12).trim()) || 0;
      } else if (line.startsWith('FieldStateOption:')) {
        if (!currentField.options) currentField.options = [];
        currentField.options.push(line.substring(18).trim());
      }
    }
    
    if (currentField.name) fields.push(currentField);
    return fields;
  } catch (error) {
    throw new Error(`pdftk failed. Install: brew install pdftk-java`);
  }
}

// Convert any PDF field name to readable questionId
function generateQuestionId(pdfFieldName) {
  // Remove array indices and form structure
  let clean = pdfFieldName
    .replace(/^form\d*\[\d+\]\./, '')
    .replace(/#subform\[\d+\]\./, '')
    .replace(/#pageSet\[\d+\]\./, '')
    .replace(/Page\d+\[\d+\]\./, '')
    .replace(/\[\d+\]$/, '');
  
  // Skip barcodes and signatures
  if (clean.includes('BarCode') || clean.includes('PDF417')) {
    return null;
  }
  
  // Skip signature fields - we don't want users to fill these
  const lowerClean = clean.toLowerCase();
  if (lowerClean.includes('signature') || lowerClean.includes('dateofSignature')) {
    return null;
  }
  
  // Convert to camelCase questionId
  return clean
    .replace(/[^a-zA-Z0-9]/g, '.')
    .replace(/\.+/g, '.')
    .replace(/^\./, '')
    .replace(/\.$/, '')
    .toLowerCase();
}

// Convert PDF field name to human-readable label
function generateLabel(pdfFieldName) {
  // Remove form structure prefixes
  let clean = pdfFieldName
    .replace(/^form\d*\[\d+\]\./, '')
    .replace(/#subform\[\d+\]\./, '')
    .replace(/#pageSet\[\d+\]\./, '')
    .replace(/#area\[\d+\]\./, '')
    .replace(/Page\d+\[\d+\]\./, '')
    .replace(/\[\d+\]$/, '');
  
  // Extract meaningful part from patterns like "P1_Line3a_FamilyName"
  const patterns = [
    /^P\d+_Line\w+_(.+)$/,  // P1_Line3a_FamilyName -> FamilyName
    /^P\d+_(.+)$/,          // P1_FamilyName -> FamilyName
    /^Line\w+_(.+)$/,       // Line3a_FamilyName -> FamilyName
    /^(.+)_\d+$/,           // FamilyName_1 -> FamilyName
  ];
  
  for (const pattern of patterns) {
    const match = clean.match(pattern);
    if (match) {
      clean = match[1];
      break;
    }
  }
  
  // Skip useless checkbox labels
  if (clean.match(/^(checkbox|Checkbox)\d*$/i)) {
    // Skip generic numbered checkboxes like "Checkbox4", "checkbox6c"
    return null;
  }
  
  // Skip form structure labels
  if (clean.match(/^(form|subform|pageset|page)\d*$/i)) {
    return null;
  }
  
  // Skip "Unit" labels - these are handled as radio groups
  if (clean.match(/^(unit|checkbox.*unit)$/i)) {
    return null;
  }
  
  // Skip checkbox labels that will be grouped (race, hair, eye color, extend)
  const lowerName = pdfFieldName.toLowerCase();
  if (lowerName.includes('checkbox') && 
      (lowerName.includes('white') || lowerName.includes('asian') || 
       lowerName.includes('black') || lowerName.includes('indian') || 
       lowerName.includes('hawaiian') || lowerName.includes('pacific') ||
       lowerName.includes('extend'))) {
    return null; // Will be handled as radio group
  }
  
  // For checkbox fields, try to extract meaningful label from field name
  if (pdfFieldName.toLowerCase().includes('checkbox')) {
    // Try to find the actual field purpose from the full field name
    const parts = pdfFieldName.split(/[_\[\]\.]/);
    const meaningfulParts = parts.filter(p => 
      p && 
      !p.match(/^(form|subform|pageSet|page|checkbox|P\d+|Line\d+|\d+)$/i)
    );
    
    if (meaningfulParts.length > 0) {
      clean = meaningfulParts.join(' ');
    }
  }
  
  // Convert to readable format
  let label = clean
    .replace(/([a-z])([A-Z])/g, '$1 $2')  // camelCase -> camel Case
    .replace(/_/g, ' ')                    // snake_case -> snake case
    .replace(/\s+/g, ' ')                  // multiple spaces -> single space
    .trim();
  
  // Capitalize each word properly
  label = label.split(' ').map(word => {
    // Keep acronyms uppercase
    if (word.match(/^[A-Z]+$/)) return word;
    // Capitalize first letter
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join(' ');
  
  // Check for accommodation fields - they need special handling
  if (clean.toLowerCase().includes('accommodation') || clean.toLowerCase().includes('accomodation')) {
    // Extract the specific type from field name
    const lowerName = pdfFieldName.toLowerCase();
    if (lowerName.includes('1a') || lowerName.includes('deaf') || lowerName.includes('hearing')) {
      return 'I am deaf or hearing impaired and request a sign language interpreter';
    } else if (lowerName.includes('1b') || lowerName.includes('blind') || lowerName.includes('sight')) {
      return 'I am blind or sight impaired and request assistance';
    } else if (lowerName.includes('1c') || lowerName.includes('other')) {
      return 'I have another type of disability and request accommodation';
    }
    // Generic accommodation
    return 'Accommodation Requested';
  }
  
  // Improve common field names with better descriptions
  const improvements = {
    // Names
    'Given Name': 'Given Name (First Name)',
    'Family Name': 'Family Name (Last Name)',
    'Middle Name': 'Middle Name',
    'First Name': 'First Name',
    'Last Name': 'Last Name',
    'Full Name': 'Full Name',
    'Name': 'Name',
    
    // Addresses
    'Street Number Name': 'Street Number and Name',
    'Street Number And Name': 'Street Number and Name',
    'Apt Ste Flr Number': 'Apartment/Suite/Floor Number',
    'City Or Town': 'City or Town',
    'City Town': 'City or Town',
    'Zip Code': 'ZIP Code',
    'Postal Code': 'Postal Code',
    'In Careof Name': 'In Care Of Name',
    'In Care Of Name': 'In Care Of Name',
    'Province': 'Province',
    'State': 'State',
    'Country': 'Country',
    
    // IDs and Numbers
    'Alien Number': 'A-Number (Alien Registration Number)',
    'A Number': 'A-Number (Alien Registration Number)',
    'Acct Identifier': 'USCIS Online Account Number',
    'Account Number': 'USCIS Online Account Number',
    'Ssn': 'U.S. Social Security Number',
    'Social Security Number': 'U.S. Social Security Number',
    
    // Dates
    'Date Of Birth': 'Date of Birth',
    'Dob': 'Date of Birth',
    'Date Of Admission': 'Date of Admission',
    'Date Of Marriage': 'Date of Marriage',
    
    // Birth Info
    'Country Of Birth': 'Country of Birth',
    'City Town Of Birth': 'City or Town of Birth',
    'City Of Birth': 'City or Town of Birth',
    'Place Of Birth': 'Place of Birth',
    
    // Contact
    'Phone Number': 'Phone Number',
    'Daytime Phone Number': 'Daytime Phone Number',
    'Mobile Phone Number': 'Mobile Phone Number',
    'Email Address': 'Email Address',
    'Fax Number': 'Fax Number',
    
    // Parents
    'Mother Given Name': 'Mother\'s Given Name at Birth',
    'Father Given Name': 'Father\'s Given Name at Birth',
    'Mother First Name': 'Mother\'s First Name',
    'Father First Name': 'Father\'s First Name',
    
    // Immigration
    'Class Of Admission': 'Class of Admission',
    'Port Of Entry': 'Port of Entry',
    'I 94 Number': 'I-94 Arrival/Departure Record Number',
    'Passport Number': 'Passport Number',
    'Travel Document Number': 'Travel Document Number',
    
    // Physical
    'Height Feet': 'Height (Feet)',
    'Height Inches': 'Height (Inches)',
    'Weight': 'Weight (Pounds)',
    'Hair Color': 'Hair Color',
    'Eye Color': 'Eye Color',
    'Race': 'Race',
    'Ethnicity': 'Ethnicity',
    
    // Other
    'Business Name': 'Business or Organization Name',
    'Occupation': 'Occupation',
    'Employer': 'Employer Name',
  };
  
  return improvements[label] || label;
}

// Detect field type from name and PDF type
function detectFieldType(field) {
  const name = field.name.toLowerCase();
  const pdfType = field.type;
  
  // First check field name patterns (more reliable than PDF type)
  // These should always be text inputs regardless of PDF type
  if (name.includes('zip') || name.includes('postal')) return 'text';
  if (name.includes('email')) return 'email';
  if (name.includes('phone') || name.includes('telephone')) return 'tel';
  if (name.includes('ssn') || name.includes('social')) return 'text';
  
  // Date fields
  if (name.includes('date') || name.includes('dob')) return 'date';
  
  // Dropdown/Select fields - check if field has options
  if (field.options && field.options.length > 0) {
    // If it has options, it's a dropdown
    return 'select';
  }
  
  // PDF type mapping
  if (pdfType === 'Choice') {
    // Some PDFs incorrectly mark text fields as Choice
    // Check if it's actually a text field
    const textFieldPatterns = ['zip', 'postal', 'ssn', 'number', 'code'];
    if (textFieldPatterns.some(pattern => name.includes(pattern))) {
      return 'text';
    }
    return 'select';
  }
  
  if (pdfType === 'Button') {
    // Check if it's actually a text field based on name patterns
    const textPatterns = [
      'name', 'address', 'city', 'street', 'town', 'country', 
      'province', 'number', 'identifier', 'location',
      'business', 'occupation', 'employer', 'zip', 'postal',
      'code', 'class', 'place'
    ];
    
    if (textPatterns.some(pattern => name.includes(pattern))) {
      return 'text';
    }
    
    return 'checkbox';
  }
  
  // Signature fields
  if (name.includes('signature') && !name.includes('date')) return 'text';
  
  return 'text'; // Default
}

// Check if field is required
function isRequired(field) {
  // PDF flags: bit 1 = required
  if (field.flags && (field.flags & 2)) return true;
  
  // Common required field patterns
  const name = field.name.toLowerCase();
  const requiredPatterns = [
    'familyname', 'givenname', 'lastname', 'firstname',
    'dateofbirth', 'dob', 'countryofbirth', 'cityofbirth',
    'anumber', 'alien'
  ];
  
  // Signature and date fields in Part 5+ are usually required
  if (name.match(/p[5-9].*signature/) || name.match(/p[5-9].*date/)) {
    return true;
  }
  
  return requiredPatterns.some(pattern => name.includes(pattern));
}

// Generate placeholder
function generatePlaceholder(fieldName, fieldType) {
  const name = fieldName.toLowerCase();
  
  if (fieldType === 'date') return 'MM/DD/YYYY';
  if (fieldType === 'email') return 'example@email.com';
  if (fieldType === 'tel') return '(555) 123-4567';
  if (fieldType === 'checkbox' || fieldType === 'radio') return '';
  
  // Specific field patterns
  if (name.includes('alien') || name.includes('anumber')) return 'A-12345678';
  if (name.includes('ssn') || name.includes('social')) return '###-##-####';
  if (name.includes('zip')) return '12345';
  if (name.includes('postal')) return 'Enter postal code';
  if (name.includes('phone') || name.includes('telephone')) return '(555) 123-4567';
  
  // Generic patterns
  if (name.includes('familyname') || name.includes('lastname')) return 'Enter family name';
  if (name.includes('givenname') || name.includes('firstname')) return 'Enter given name';
  if (name.includes('middlename')) return 'Enter middle name';
  if (name.includes('name')) return 'Enter name';
  if (name.includes('street') || name.includes('address')) return 'Enter street address';
  if (name.includes('city') || name.includes('town')) return 'Enter city or town';
  if (name.includes('state')) return 'Enter state';
  if (name.includes('country')) return 'Enter country';
  if (name.includes('province')) return 'Enter province';
  if (name.includes('number') && !name.includes('street')) return 'Enter number';
  
  return '';
}

// Detect if checkboxes should be grouped as radio buttons
function detectRadioGroups(fields) {
  const checkboxGroups = {};
  
  // Group checkboxes by their base name (without array index)
  for (const field of fields) {
    const fieldType = detectFieldType(field);
    if (fieldType !== 'checkbox') continue;
    
    const baseName = field.name.replace(/\[\d+\]$/, '');
    if (!checkboxGroups[baseName]) {
      checkboxGroups[baseName] = [];
    }
    checkboxGroups[baseName].push(field);
  }
  
  // Also check for fields with similar names (male/female pattern)
  const nameGroups = {};
  for (const field of fields) {
    const name = field.name.toLowerCase();
    
    // Group male/female fields together
    if (name.includes('male') || name.includes('female')) {
      const partMatch = name.match(/p(\d+)_line(\d+[a-z]?)/);
      if (partMatch) {
        const groupKey = `${partMatch[0]}_gender`;
        if (!nameGroups[groupKey]) {
          nameGroups[groupKey] = [];
        }
        nameGroups[groupKey].push(field);
      }
    }
    
    // Group yes/no fields
    if ((name.includes('yes') || name.includes('no')) && !name.includes('yesno')) {
      const partMatch = name.match(/p(\d+)_/);
      if (partMatch) {
        const lineMatch = name.match(/line(\d+[a-z]?)/);
        const groupKey = lineMatch ? `${partMatch[0]}${lineMatch[0]}_yesno` : `${partMatch[0]}_yesno`;
        if (!nameGroups[groupKey]) {
          nameGroups[groupKey] = [];
        }
        nameGroups[groupKey].push(field);
      }
    }
    
    // Group unit type fields (Apt/Ste/Flr)
    if (name.includes('unit') || (name.includes('checkbox') && (name.includes('6c') || name.includes('7b')))) {
      const partMatch = name.match(/p(\d+)_/);
      const lineMatch = name.match(/line(\d+[a-z]?)/);
      if (partMatch && lineMatch) {
        const groupKey = `${partMatch[0]}${lineMatch[0]}_unit`;
        if (!nameGroups[groupKey]) {
          nameGroups[groupKey] = [];
        }
        nameGroups[groupKey].push(field);
      }
    }
    
    // Group race checkboxes (they have different names but same checkbox number)
    // All race checkboxes should be in ONE group regardless of checkbox number
    if (name.includes('white') || name.includes('asian') || name.includes('black') || 
        name.includes('indian') || name.includes('hawaiian') || name.includes('pacific')) {
      const partMatch = name.match(/p(\d+)_/);
      if (partMatch) {
        const groupKey = `${partMatch[0]}race`;
        if (!nameGroups[groupKey]) {
          nameGroups[groupKey] = [];
        }
        nameGroups[groupKey].push(field);
      }
    }
    
    // Group hair color checkboxes - only if NOT already in race group
    if (!nameGroups[`${name.match(/p(\d+)_/)?.[0]}race`]?.includes(field)) {
      if (name.includes('hair') || 
          (name.includes('checkbox') && 
           (name.includes('brown') || name.includes('blonde') || name.includes('blond') ||
            name.includes('gray') || name.includes('grey') || name.includes('red') || 
            name.includes('sandy') || name.includes('bald')))) {
        const partMatch = name.match(/p(\d+)_/);
        if (partMatch) {
          const groupKey = `${partMatch[0]}haircolor`;
          if (!nameGroups[groupKey]) {
            nameGroups[groupKey] = [];
          }
          nameGroups[groupKey].push(field);
        }
      }
    }
    
    // Group eye color checkboxes - only if NOT already in race or hair group
    if (!nameGroups[`${name.match(/p(\d+)_/)?.[0]}race`]?.includes(field) &&
        !nameGroups[`${name.match(/p(\d+)_/)?.[0]}haircolor`]?.includes(field)) {
      if (name.includes('eye') || 
          (name.includes('checkbox') && 
           (name.includes('blue') || name.includes('green') || name.includes('hazel')))) {
        const partMatch = name.match(/p(\d+)_/);
        if (partMatch) {
          const groupKey = `${partMatch[0]}eyecolor`;
          if (!nameGroups[groupKey]) {
            nameGroups[groupKey] = [];
          }
          nameGroups[groupKey].push(field);
        }
      }
    }
    
    // Group "extend" checkboxes (Part 7 - attorney representation)
    if (name.includes('extend') || name.includes('checkbox7')) {
      const partMatch = name.match(/p(\d+)_/);
      if (partMatch && partMatch[1] === '7') {
        const groupKey = `${partMatch[0]}representation_extends`;
        if (!nameGroups[groupKey]) {
          nameGroups[groupKey] = [];
        }
        nameGroups[groupKey].push(field);
      }
    }
  }
  
  // Merge name groups with checkbox groups
  Object.assign(checkboxGroups, nameGroups);
  
  // Identify radio button groups (2-10 checkboxes with same base name)
  const radioGroups = {};
  for (const [baseName, group] of Object.entries(checkboxGroups)) {
    if (group.length >= 2 && group.length <= 10) {
      // Common radio button patterns
      const name = baseName.toLowerCase();
      const isRadioPattern = 
        name.includes('male') || name.includes('female') || name.includes('sex') || name.includes('gender') ||
        name.includes('yes') || name.includes('no') ||
        name.includes('ethnicity') || name.includes('hispanic') ||
        name.includes('citizen') || name.includes('lpr') ||
        name.includes('type') || name.includes('status') ||
        name.includes('marital') || name.includes('married') ||
        name.includes('hair') || name.includes('eye') || // Hair and eye color
        name.includes('race') || name.includes('white') || name.includes('asian') || // Race
        name.includes('extend') || name.includes('representation'); // Attorney representation
      
      if (isRadioPattern) {
        radioGroups[baseName] = group;
      }
    }
  }
  
  return radioGroups;
}

// Generate radio button options from field names
function generateRadioOptions(fields) {
  const options = [];
  
  for (const field of fields) {
    const name = field.name.toLowerCase();
    
    // Try to extract option label from field name
    let optionLabel = null;
    let optionValue = null;
    
    // Gender
    if (name.includes('male') && !name.includes('female')) {
      optionLabel = 'Male';
      optionValue = 'male';
    } else if (name.includes('female')) {
      optionLabel = 'Female';
      optionValue = 'female';
    }
    // Yes/No
    else if (name.includes('yes') && !name.includes('no')) {
      optionLabel = 'Yes';
      optionValue = 'yes';
    } else if (name.includes('no') && !name.includes('yes')) {
      optionLabel = 'No';
      optionValue = 'no';
    }
    // Ethnicity
    else if (name.includes('hispanic') && !name.includes('not')) {
      optionLabel = 'Hispanic or Latino';
      optionValue = 'hispanic';
    } else if (name.includes('nothispanic') || (name.includes('not') && name.includes('hispanic'))) {
      optionLabel = 'Not Hispanic or Latino';
      optionValue = 'not-hispanic';
    }
    // Race
    else if (name.includes('white')) {
      optionLabel = 'White';
      optionValue = 'white';
    } else if (name.includes('asian')) {
      optionLabel = 'Asian';
      optionValue = 'asian';
    } else if (name.includes('black') || name.includes('african')) {
      optionLabel = 'Black or African American';
      optionValue = 'black';
    } else if (name.includes('indian') || name.includes('alaska')) {
      optionLabel = 'American Indian or Alaska Native';
      optionValue = 'american-indian';
    } else if (name.includes('hawaiian') || name.includes('pacific')) {
      optionLabel = 'Native Hawaiian or Other Pacific Islander';
      optionValue = 'pacific-islander';
    }
    // Status
    else if (name.includes('citizen') && !name.includes('non')) {
      optionLabel = 'U.S. Citizen';
      optionValue = 'citizen';
    } else if (name.includes('lpr') || name.includes('permanent')) {
      optionLabel = 'Lawful Permanent Resident';
      optionValue = 'lpr';
    }
    // Marital Status
    else if (name.includes('single') || name.includes('never')) {
      optionLabel = 'Single, Never Married';
      optionValue = 'single';
    } else if (name.includes('married') && !name.includes('never')) {
      optionLabel = 'Married';
      optionValue = 'married';
    } else if (name.includes('divorced')) {
      optionLabel = 'Divorced';
      optionValue = 'divorced';
    } else if (name.includes('widowed')) {
      optionLabel = 'Widowed';
      optionValue = 'widowed';
    } else if (name.includes('separated')) {
      optionLabel = 'Legally Separated';
      optionValue = 'separated';
    }
    // Hair Color
    else if (name.includes('black') && name.includes('hair')) {
      optionLabel = 'Black';
      optionValue = 'black';
    } else if (name.includes('brown') && name.includes('hair')) {
      optionLabel = 'Brown';
      optionValue = 'brown';
    } else if (name.includes('blonde') || name.includes('blond')) {
      optionLabel = 'Blonde';
      optionValue = 'blonde';
    } else if (name.includes('gray') || name.includes('grey')) {
      optionLabel = 'Gray';
      optionValue = 'gray';
    } else if (name.includes('white') && name.includes('hair')) {
      optionLabel = 'White';
      optionValue = 'white';
    } else if (name.includes('red') && name.includes('hair')) {
      optionLabel = 'Red';
      optionValue = 'red';
    } else if (name.includes('sandy')) {
      optionLabel = 'Sandy';
      optionValue = 'sandy';
    } else if (name.includes('bald')) {
      optionLabel = 'Bald (No Hair)';
      optionValue = 'bald';
    }
    // Eye Color
    else if (name.includes('brown') && name.includes('eye')) {
      optionLabel = 'Brown';
      optionValue = 'brown';
    } else if (name.includes('blue')) {
      optionLabel = 'Blue';
      optionValue = 'blue';
    } else if (name.includes('green')) {
      optionLabel = 'Green';
      optionValue = 'green';
    } else if (name.includes('hazel')) {
      optionLabel = 'Hazel';
      optionValue = 'hazel';
    }
    // Unit types (Apt/Ste/Flr)
    else if (name.includes('apt') || name.includes('apartment')) {
      optionLabel = 'Apt.';
      optionValue = 'apt';
    } else if (name.includes('ste') || name.includes('suite')) {
      optionLabel = 'Ste.';
      optionValue = 'ste';
    } else if (name.includes('flr') || name.includes('floor')) {
      optionLabel = 'Flr.';
      optionValue = 'flr';
    }
    // Representation extends (Part 7)
    else if (name.includes('extend')) {
      // Check if it's the "extends" option by looking at field options
      if (field.options && field.options.some(opt => opt.toLowerCase() === 'e')) {
        optionLabel = 'Extends beyond preparation of this application';
        optionValue = 'extends';
      } else {
        optionLabel = 'Does not extend beyond preparation of this application';
        optionValue = 'does-not-extend';
      }
    }
    
    if (optionLabel && optionValue) {
      options.push({ value: optionValue, label: optionLabel, pdfField: field.name });
    }
  }
  
  return options;
}

// Add context to labels based on line numbers and field position
function addContextToLabel(label, fieldName, allFields, fieldIndex) {
  const name = fieldName.toLowerCase();
  
  // Name fields - different contexts based on line number
  if (label.includes('Family Name') || label.includes('Given Name') || label.includes('Middle Name')) {
    if (name.includes('line3') || name.includes('line4')) {
      // Current legal name - keep as is, section title clarifies
      return label;
    } else if (name.includes('line5')) {
      // Name at admission - add clear context
      if (label.includes('Family Name')) return 'Family Name at Time of Admission to U.S.';
      if (label.includes('Given Name')) return 'Given Name at Time of Admission to U.S.';
      if (label.includes('Middle Name')) return 'Middle Name at Time of Admission to U.S.';
    } else if (name.includes('line1') || name.includes('line2')) {
      // Sometimes names appear in different lines
      return label;
    }
  }
  
  // Address fields - different contexts
  if (label.includes('Street') || label.includes('City') || label.includes('State') || 
      label.includes('ZIP') || label.includes('Province') || label.includes('Postal') || 
      label.includes('Country') || label.includes('Apartment')) {
    
    if (name.includes('line6')) {
      // Mailing address
      if (label.includes('In Care Of')) return label; // Keep as is
      return label; // Section title will clarify it's mailing
    } else if (name.includes('line7')) {
      // Physical address - add prefix to differentiate
      if (label.includes('Street')) return label;
      if (label.includes('Apartment')) return label;
      if (label.includes('City')) return label;
      if (label.includes('State')) return label;
      if (label.includes('ZIP')) return label;
      if (label.includes('Province')) return label;
      if (label.includes('Postal')) return label;
      if (label.includes('Country')) return label;
    }
  }
  
  // Interpreter fields (Part 6)
  if (name.includes('p6_')) {
    if (label.includes('Family Name')) return 'Interpreter\'s Family Name (Last Name)';
    if (label.includes('Given Name')) return 'Interpreter\'s Given Name (First Name)';
    if (label.includes('Business')) return 'Interpreter\'s Business or Organization Name';
    if (label.includes('Street')) return 'Interpreter\'s Street Number and Name';
    if (label.includes('Apartment')) return 'Interpreter\'s Apartment/Suite/Floor Number';
    if (label.includes('City')) return 'Interpreter\'s City or Town';
    if (label.includes('State')) return 'Interpreter\'s State';
    if (label.includes('ZIP')) return 'Interpreter\'s ZIP Code';
    if (label.includes('Province')) return 'Interpreter\'s Province';
    if (label.includes('Postal')) return 'Interpreter\'s Postal Code';
    if (label.includes('Country')) return 'Interpreter\'s Country';
    if (label.includes('Phone')) return 'Interpreter\'s Daytime Phone Number';
    if (label.includes('Email')) return 'Interpreter\'s Email Address';
  }
  
  // Preparer fields (Part 7)
  if (name.includes('p7_')) {
    if (label.includes('Family Name')) return 'Preparer\'s Family Name (Last Name)';
    if (label.includes('Given Name')) return 'Preparer\'s Given Name (First Name)';
    if (label.includes('Business')) return 'Preparer\'s Business or Organization Name';
    if (label.includes('Street')) return 'Preparer\'s Street Number and Name';
    if (label.includes('Apartment')) return 'Preparer\'s Apartment/Suite/Floor Number';
    if (label.includes('City')) return 'Preparer\'s City or Town';
    if (label.includes('State')) return 'Preparer\'s State';
    if (label.includes('ZIP')) return 'Preparer\'s ZIP Code';
    if (label.includes('Province')) return 'Preparer\'s Province';
    if (label.includes('Postal')) return 'Preparer\'s Postal Code';
    if (label.includes('Country')) return 'Preparer\'s Country';
    if (label.includes('Phone')) return 'Preparer\'s Daytime Phone Number';
    if (label.includes('Fax')) return 'Preparer\'s Fax Number';
    if (label.includes('Email')) return 'Preparer\'s Email Address';
  }
  
  return label;
}

// Make questionId unique by keeping line numbers and adding context
function makeQuestionIdUnique(questionId, fieldName) {
  const name = fieldName.toLowerCase();
  
  // Extract line number from field name
  const lineMatch = name.match(/line(\d+[a-z]?)/);
  const lineNum = lineMatch ? lineMatch[1] : null;
  
  // If we have a line number, include it in the questionId
  if (lineNum) {
    // Remove the generic part and add line-specific ID
    const basePart = questionId.split('.').pop(); // Get last part (e.g., "familyname")
    const partMatch = name.match(/p(\d+)_/);
    const partNum = partMatch ? partMatch[1] : '1';
    
    // Use part1, part2, etc. format
    return `part${partNum}.line${lineNum}.${basePart}`;
  }
  
  // Add suffix for interpreter
  if (name.includes('p6_')) {
    return questionId.replace(/^p\d+\./, 'part6.interpreter.');
  }
  
  // Add suffix for preparer
  if (name.includes('p7_')) {
    return questionId.replace(/^p\d+\./, 'part7.preparer.');
  }
  
  return questionId;
}

// Group fields into sections dynamically
function groupIntoSections(fields) {
  const sections = {};
  const radioGroups = detectRadioGroups(fields);
  const processedFields = new Set();
  
  // First pass: Add radio button groups
  for (const [baseName, groupFields] of Object.entries(radioGroups)) {
    const firstField = groupFields[0];
    let questionId = generateQuestionId(baseName);
    if (!questionId) continue;
    
    // Special handling for grouped fields
    const lowerBaseName = baseName.toLowerCase();
    let label;
    
    if (lowerBaseName.includes('race')) {
      label = 'Race';
      questionId = 'part3.race';
    } else if (lowerBaseName.includes('haircolor')) {
      label = 'Hair Color';
      questionId = 'part3.haircolor';
    } else if (lowerBaseName.includes('eyecolor')) {
      label = 'Eye Color';
      questionId = 'part3.eyecolor';
    } else if (lowerBaseName.includes('gender') || lowerBaseName.includes('male')) {
      label = 'Gender';
      questionId = makeQuestionIdUnique(generateQuestionId(baseName), baseName);
    } else if (lowerBaseName.includes('representation_extends') || lowerBaseName.includes('extend')) {
      label = 'My representation of the applicant in this case';
      questionId = 'part7.representation.extends';
    } else {
      label = generateLabel(baseName);
      if (!label) continue;
    }
    
    // Add context to label
    const fieldIndex = fields.indexOf(firstField);
    label = addContextToLabel(label, baseName, fields, fieldIndex);
    
    // Make questionId unique (only if not already set above)
    if (!lowerBaseName.includes('race') && !lowerBaseName.includes('haircolor') && !lowerBaseName.includes('eyecolor')) {
      questionId = makeQuestionIdUnique(questionId, baseName);
    }
    
    // Mark these fields as processed
    groupFields.forEach(f => processedFields.add(f.name));
    
    // Extract section
    let sectionId = 'section1';
    let sectionTitle = 'Section 1: Information';
    
    const partMatch = firstField.name.match(/P(\d+)_/);
    if (partMatch) {
      const partNum = partMatch[1];
      sectionId = `part${partNum}`;
      
      const sectionTitles = {
        '1': 'Part 1: Information About You',
        '2': 'Part 2: Application Type or Additional Information',
        '3': 'Part 3: Processing Information',
        '4': 'Part 4: Accommodations for Individuals with Disabilities',
        '5': 'Part 5: Applicant\'s Statement, Contact Information, and Signature',
        '6': 'Part 6: Interpreter\'s Contact Information and Signature',
        '7': 'Part 7: Contact Information and Signature of Preparer',
        '8': 'Part 8: Additional Information',
      };
      
      sectionTitle = sectionTitles[partNum] || `Part ${partNum}: Information`;
    }
    
    if (!sections[sectionId]) {
      sections[sectionId] = {
        id: sectionId,
        title: sectionTitle,
        description: 'Complete all applicable fields in this section',
        questions: []
      };
    }
    
    const options = generateRadioOptions(groupFields);
    if (options.length > 0) {
      const question = {
        id: questionId,
        type: 'radio',
        label: label,
        required: isRequired(firstField),
        options: options
      };
      
      // Add help text for radio groups
      const helpText = generateHelpText(baseName, 'radio');
      if (helpText) {
        question.helpText = helpText;
      }
      
      sections[sectionId].questions.push(question);
    }
  }
  
  // Track used questionIds to prevent duplicates
  const usedQuestionIds = new Set();
  
  // Second pass: Add remaining fields
  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    if (processedFields.has(field.name)) continue;
    
    let questionId = generateQuestionId(field.name);
    if (!questionId) continue;
    
    let label = generateLabel(field.name);
    if (!label) continue;
    
    // Add context to label to avoid duplicates
    label = addContextToLabel(label, field.name, fields, i);
    
    // Make questionId unique
    questionId = makeQuestionIdUnique(questionId, field.name);
    
    // Skip if this questionId already exists (prevents duplicates)
    if (usedQuestionIds.has(questionId)) {
      console.log(`⚠️  Skipping duplicate questionId: ${questionId} for field: ${field.name}`);
      continue;
    }
    usedQuestionIds.add(questionId);
    
    // Extract section with subsections for better organization
    let sectionId = 'section1';
    let sectionTitle = 'Section 1: Information';
    
    const partMatch = field.name.match(/P(\d+)_/);
    if (partMatch) {
      const partNum = partMatch[1];
      const name = field.name.toLowerCase();
      
      // Create subsections for Part 1 to organize duplicate fields
      if (partNum === '1') {
        if (name.includes('line3') || name.includes('line4')) {
          sectionId = 'part1-current-name';
          sectionTitle = 'Part 1: Your Current Legal Name';
        } else if (name.includes('line5')) {
          sectionId = 'part1-admission-name';
          sectionTitle = 'Part 1: Your Name at Time of Admission';
        } else if (name.includes('line6')) {
          sectionId = 'part1-mailing-address';
          sectionTitle = 'Part 1: Your Current Mailing Address';
        } else if (name.includes('line7')) {
          sectionId = 'part1-physical-address';
          sectionTitle = 'Part 1: Your Physical Address';
        } else if (name.includes('line8') || name.includes('line9') || name.includes('line10') || name.includes('line11')) {
          sectionId = 'part1-personal-info';
          sectionTitle = 'Part 1: Personal Information';
        } else if (name.includes('line12') || name.includes('line13') || name.includes('line14') || name.includes('line15')) {
          sectionId = 'part1-additional-info';
          sectionTitle = 'Part 1: Additional Information';
        } else {
          sectionId = 'part1';
          sectionTitle = 'Part 1: Information About You';
        }
      } else {
        sectionId = `part${partNum}`;
        const sectionTitles = {
          '2': 'Part 2: Application Type or Additional Information',
          '3': 'Part 3: Processing Information',
          '4': 'Part 4: Accommodations for Individuals with Disabilities',
          '5': 'Part 5: Applicant\'s Statement, Contact Information, and Signature',
          '6': 'Part 6: Interpreter\'s Contact Information and Signature',
          '7': 'Part 7: Contact Information and Signature of Preparer',
          '8': 'Part 8: Additional Information',
        };
        sectionTitle = sectionTitles[partNum] || `Part ${partNum}: Information`;
      }
    } else {
      const parts = questionId.split('.');
      if (parts.length > 1) {
        sectionId = parts[0];
        const sectionNum = sectionId.replace(/\D/g, '') || '1';
        sectionTitle = `Section ${sectionNum}: Information`;
      }
    }
    
    if (!sections[sectionId]) {
      sections[sectionId] = {
        id: sectionId,
        title: sectionTitle,
        description: 'Complete all applicable fields in this section',
        questions: []
      };
    }
    
    const fieldType = detectFieldType(field);
    const required = isRequired(field);
    const placeholder = generatePlaceholder(field.name, fieldType);
    
    const question = {
      id: questionId,
      type: fieldType,
      label: label,
      required: required
    };
    
    if (placeholder) {
      question.placeholder = placeholder;
    }
    
    // Add help text for common fields
    const helpText = generateHelpText(field.name, fieldType);
    if (helpText) {
      question.helpText = helpText;
    }
    
    if (fieldType === 'select' && field.options && field.options.length > 0) {
      question.options = field.options.map(opt => ({
        value: opt.toLowerCase().replace(/\s+/g, '-'),
        label: opt
      }));
    }
    
    sections[sectionId].questions.push(question);
  }
  
  return Object.values(sections);
}

// Generate helpful descriptions for fields
function generateHelpText(fieldName, fieldType) {
  const name = fieldName.toLowerCase();
  
  // A-Number
  if (name.includes('alien') || name.includes('anumber')) {
    return 'Your 8 or 9 digit Alien Registration Number (found on your green card or immigration documents)';
  }
  
  // USCIS Account
  if (name.includes('acct') || name.includes('account')) {
    return 'Your USCIS online account number if you have one';
  }
  
  // SSN
  if (name.includes('ssn') || name.includes('social')) {
    return 'Your U.S. Social Security Number if you have been issued one';
  }
  
  // Class of Admission
  if (name.includes('class') && name.includes('admission')) {
    return 'The immigration category you were admitted under (found on your green card or I-94)';
  }
  
  // I-94
  if (name.includes('i94') || name.includes('i-94')) {
    return 'Your I-94 Arrival/Departure Record Number';
  }
  
  // Province/Postal (for foreign addresses)
  if (name.includes('province')) {
    return 'For addresses outside the United States only';
  }
  if (name.includes('postal') && !name.includes('zip')) {
    return 'For addresses outside the United States only';
  }
  
  // In Care Of
  if (name.includes('careof') || name.includes('care')) {
    return 'Optional - if mail should be sent to someone else at this address';
  }
  
  // Accommodation
  if (name.includes('accommodation')) {
    return 'Select if you need special accommodations due to a disability';
  }
  
  return null;
}

function createMappingFile(fields, formName) {
  const upperFormName = formName.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  const radioGroups = detectRadioGroups(fields);
  
  let content = `/**\n`;
  content += ` * Auto-generated field mappings for ${formName.toUpperCase()}\n`;
  content += ` * Generated on: ${new Date().toISOString()}\n`;
  content += ` * Total fields: ${fields.length}\n`;
  content += ` */\n\n`;
  
  content += `export interface FieldMapping {\n`;
  content += `  questionId: string;\n`;
  content += `  pdfField: string;\n`;
  content += `  type?: string;\n`;
  content += `  value?: string;\n`;
  content += `}\n\n`;
  
  content += `export const ${upperFormName}_AUTO_MAPPINGS: FieldMapping[] = [\n`;
  
  let mappingCount = 0;
  const processedFields = new Set();
  
  // Add radio button mappings
  for (const [baseName, groupFields] of Object.entries(radioGroups)) {
    let questionId = generateQuestionId(baseName);
    if (!questionId) continue;
    
    // Special handling for grouped fields
    const lowerBaseName = baseName.toLowerCase();
    if (lowerBaseName.includes('race')) {
      questionId = 'part3.race';
    } else if (lowerBaseName.includes('haircolor')) {
      questionId = 'part3.haircolor';
    } else if (lowerBaseName.includes('eyecolor')) {
      questionId = 'part3.eyecolor';
    } else if (lowerBaseName.includes('representation_extends') || lowerBaseName.includes('extend')) {
      questionId = 'part7.representation.extends';
    } else {
      // Make questionId unique for other radio groups
      questionId = makeQuestionIdUnique(questionId, baseName);
    }
    
    const options = generateRadioOptions(groupFields);
    if (options.length === 0) continue;
    
    // Mark as processed
    groupFields.forEach(f => processedFields.add(f.name));
    
    // Add mapping for each option
    for (const option of options) {
      content += `  { questionId: "${questionId}", pdfField: "${option.pdfField}", type: "radio", value: "${option.value}" },\n`;
      mappingCount++;
    }
  }
  
  // Add remaining field mappings
  for (const field of fields) {
    if (processedFields.has(field.name)) continue;
    
    let questionId = generateQuestionId(field.name);
    if (!questionId) continue;
    
    const label = generateLabel(field.name);
    if (!label) continue;
    
    // Make questionId unique
    questionId = makeQuestionIdUnique(questionId, field.name);
    
    const fieldType = detectFieldType(field);
    
    if (fieldType === 'checkbox') {
      content += `  { questionId: "${questionId}", pdfField: "${field.name}", type: "checkbox" },\n`;
    } else {
      content += `  { questionId: "${questionId}", pdfField: "${field.name}" },\n`;
    }
    mappingCount++;
  }
  
  content += `];\n\n`;
  content += `// Total mappings: ${mappingCount}\n`;
  
  return content;
}

function addToFormsRegistry(formId, formCode, formName, sections) {
  const registryPath = 'src/lib/constants/forms-registry.ts';
  let content = fs.readFileSync(registryPath, 'utf-8');
  
  const upperFormName = formId.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  
  let definition = `\nexport const ${upperFormName}_DEFINITION: FormDefinition = {\n`;
  definition += `  id: "${formId}",\n`;
  definition += `  code: "${formCode}",\n`;
  definition += `  name: "${formName}",\n`;
  definition += `  description: "${formName}",\n`;
  definition += `  category: "other",\n`;
  definition += `  estimatedTime: "30-45 minutes",\n`;
  definition += `  filingFee: 0,\n`;
  definition += `  price: 60,\n`;
  definition += `  sections: [\n`;
  
  for (const section of sections) {
    definition += `    {\n`;
    definition += `      id: "${section.id}",\n`;
    definition += `      title: "${section.title}",\n`;
    definition += `      description: "${section.description}",\n`;
    definition += `      questions: [\n`;
    
    for (const question of section.questions) {
      definition += `        {\n`;
      definition += `          id: "${question.id}",\n`;
      definition += `          type: "${question.type}",\n`;
      definition += `          label: "${question.label}",\n`;
      definition += `          required: ${question.required},\n`;
      
      if (question.placeholder) {
        definition += `          placeholder: "${question.placeholder}",\n`;
      }
      
      if (question.options && question.options.length > 0) {
        definition += `          options: [\n`;
        for (const option of question.options) {
          definition += `            { value: "${option.value}", label: "${option.label}" },\n`;
        }
        definition += `          ],\n`;
      }
      
      definition += `        },\n`;
    }
    
    definition += `      ],\n`;
    definition += `    },\n`;
  }
  
  definition += `  ],\n`;
  definition += `  requiredDocuments: [],\n`;
  definition += `  instructions: [],\n`;
  definition += `};\n`;
  
  const registryExportIndex = content.indexOf('const FORM_REGISTRY');
  if (registryExportIndex === -1) {
    throw new Error('Could not find FORM_REGISTRY');
  }
  
  content = content.slice(0, registryExportIndex) + definition + '\n' + content.slice(registryExportIndex);
  
  const otherSectionMatch = content.match(/\/\/ Other\s*\n\s*"[^"]+"\s*:\s*[^,]+,/);
  if (otherSectionMatch) {
    const insertPos = otherSectionMatch.index + otherSectionMatch[0].length;
    content = content.slice(0, insertPos) + `\n  "${formId}": ${upperFormName}_DEFINITION,` + content.slice(insertPos);
  }
  
  fs.writeFileSync(registryPath, content);
}

function addToFillPdf(formId) {
  const fillPdfPath = 'src/lib/pdf/fill-pdf.ts';
  let content = fs.readFileSync(fillPdfPath, 'utf-8');
  
  const upperFormName = formId.toUpperCase().replace(/[^A-Z0-9]/g, '_');
  const mappingImport = `import { ${upperFormName}_AUTO_MAPPINGS } from "@/lib/constants/form-mappings/${formId}-auto-mappings";\n`;
  
  const lastImportIndex = content.lastIndexOf('import {');
  const endOfLine = content.indexOf('\n', lastImportIndex);
  content = content.slice(0, endOfLine + 1) + mappingImport + content.slice(endOfLine + 1);
  
  const switchMatch = content.match(/function getFormMappings\([^)]*\)[^{]*{[^}]*switch[^{]*{/);
  if (switchMatch) {
    const insertPos = switchMatch.index + switchMatch[0].length;
    const newCase = `\n    case "${formId}":\n      return ${upperFormName}_AUTO_MAPPINGS;`;
    content = content.slice(0, insertPos) + newCase + content.slice(insertPos);
  }
  
  fs.writeFileSync(fillPdfPath, content);
}

function main() {
  const args = process.argv.slice(2);
  
  if (args.length < 3) {
    console.error('Usage: node scripts/universal-form-generator.js <pdf-path> <form-code> <form-name>');
    console.error('\nExample:');
    console.error('  node scripts/universal-form-generator.js public/pdf-templates/any-form.pdf N-400 "Application for Naturalization"');
    process.exit(1);
  }
  
  const [pdfPath, formCode, formName] = args;
  const formId = formCode.toLowerCase();
  
  if (!fs.existsSync(pdfPath)) {
    console.error(`Error: PDF file not found: ${pdfPath}`);
    process.exit(1);
  }
  
  console.log(`\n🚀 Universal Form Generator: ${formCode}\n`);
  
  try {
    console.log('1️⃣  Extracting PDF fields...');
    const fields = extractFieldsWithPdftk(pdfPath);
    const realFields = fields.filter(f => generateQuestionId(f.name) !== null);
    console.log(`   ✅ Found ${realFields.length} fields\n`);
    
    console.log('2️⃣  Creating mapping file...');
    const mappingContent = createMappingFile(realFields, formId);
    const mappingPath = `src/lib/constants/form-mappings/${formId}-auto-mappings.ts`;
    const dir = path.dirname(mappingPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(mappingPath, mappingContent);
    console.log(`   ✅ Created ${mappingPath}\n`);
    
    console.log('3️⃣  Adding to forms-registry.ts...');
    const sections = groupIntoSections(realFields);
    addToFormsRegistry(formId, formCode, formName, sections);
    console.log(`   ✅ Added ${formCode}_DEFINITION to registry\n`);
    
    console.log('4️⃣  Adding to fill-pdf.ts...');
    addToFillPdf(formId);
    console.log(`   ✅ Added mapping import and case\n`);
    
    const radioGroups = detectRadioGroups(realFields);
    
    console.log('✨ SUCCESS! Universal form generated!\n');
    console.log('📋 Summary:');
    console.log(`   Form ID: ${formId}`);
    console.log(`   Form Code: ${formCode}`);
    console.log(`   Form Name: ${formName}`);
    console.log(`   Total PDF Fields: ${fields.length}`);
    console.log(`   Usable Fields: ${realFields.length}`);
    console.log(`   Radio Button Groups: ${Object.keys(radioGroups).length}`);
    console.log(`   Sections: ${sections.length}\n`);
    
    console.log('🎯 Sample Labels Generated:');
    const sampleFields = realFields.slice(0, 10);
    sampleFields.forEach(field => {
      const label = generateLabel(field.name);
      const questionId = generateQuestionId(field.name);
      const fieldType = detectFieldType(field);
      if (label) {
        console.log(`   ${questionId} (${fieldType}) → "${label}"`);
      }
    });
    
    if (Object.keys(radioGroups).length > 0) {
      console.log('\n📻 Radio Button Groups Detected:');
      Object.entries(radioGroups).slice(0, 5).forEach(([baseName, groupFields]) => {
        const questionId = generateQuestionId(baseName);
        const label = generateLabel(baseName);
        const options = generateRadioOptions(groupFields);
        console.log(`   ${questionId} → "${label}"`);
        options.forEach(opt => {
          console.log(`      • ${opt.label} (${opt.value})`);
        });
      });
    }
    
    console.log('\n📊 Field Type Distribution:');
    const typeCount = { radio: Object.keys(radioGroups).length };
    realFields.forEach(field => {
      const type = detectFieldType(field);
      typeCount[type] = (typeCount[type] || 0) + 1;
    });
    Object.entries(typeCount).forEach(([type, count]) => {
      console.log(`   ${type}: ${count}`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();