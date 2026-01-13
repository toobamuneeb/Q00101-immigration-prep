/**
 * I-129 Form Definition
 * Generated automatically from field mappings
 * Date: 2026-01-06T04:58:05.379Z
 */

import { FormDefinition } from "../forms-registry";
import { I_129_FIELD_MAPPINGS } from "../form-mappings/i-129-field-mappings";

export const I_129_DEFINITION: FormDefinition = {
  "id": "i-129",
  "code": "I-129",
  "name": "Petition for a Nonimmigrant Worker",
  "description": "Petition for nonimmigrant worker classification (H-1B, L-1, O-1, etc.)",
  "category": "employment",
  "estimatedTime": "45-60 minutes",
  "filingFee": 460,
  "price": 60,
  "sections": [
    {
      "id": "section_0",
      "title": "Section 0",
      "questions": [
        {
          "id": "line.cityTown",
          "type": "text",
          "label": "Line - City Town",
          "required": false
        },
        {
          "id": "line1.familyName",
          "type": "text",
          "label": "Line1 - Family Name",
          "required": false
        },
        {
          "id": "line1.givenName",
          "type": "text",
          "label": "Line1 - Given Name",
          "required": false
        },
        {
          "id": "line1.middleName",
          "type": "text",
          "label": "Line1 - Middle Name",
          "required": false
        },
        {
          "id": "line2.daytimePhoneNumber1.part8",
          "type": "text",
          "label": "Line2 - Daytime Phone Number1 - Part8",
          "required": false
        },
        {
          "id": "line3.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "line3.companyorOrgName",
          "type": "text",
          "label": "Line3 - Companyor Org Name",
          "required": false
        },
        {
          "id": "line3.mobilePhoneNumber1.part8",
          "type": "text",
          "label": "Line3 - Mobile Phone Number1 - Part8",
          "required": false
        },
        {
          "id": "line3.unit",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "line3.unit_2",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "line3.unit_3",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "line7a.inCareofName",
          "type": "text",
          "label": "Line7a - In Careof Name",
          "required": false
        },
        {
          "id": "line7b.streetNumberName",
          "type": "text",
          "label": "Line7b - Street Number Name",
          "required": false
        },
        {
          "id": "line9.emailAddress",
          "type": "text",
          "label": "Line9 - Email Address",
          "required": false
        },
        {
          "id": "p1.line3.country",
          "type": "text",
          "label": "P1 - Line3 - Country",
          "required": false
        },
        {
          "id": "p1.line3.postalCode",
          "type": "text",
          "label": "P1 - Line3 - Postal Code",
          "required": false
        },
        {
          "id": "p1.line3.province",
          "type": "text",
          "label": "P1 - Line3 - Province",
          "required": false
        },
        {
          "id": "p1.line3.state",
          "type": "select",
          "label": "P1 - Line3 - State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "p1.line3.zipCode",
          "type": "text",
          "label": "P1 - Line3 - Zip Code",
          "required": false
        },
        {
          "id": "p1Line6.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p1Line6.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "textField1",
          "type": "text",
          "label": "Text Field1",
          "required": false
        }
      ]
    },
    {
      "id": "section_1",
      "title": "Section 1",
      "questions": [
        {
          "id": "amended",
          "type": "checkbox",
          "label": "Amended",
          "required": false
        },
        {
          "id": "change",
          "type": "checkbox",
          "label": "Change",
          "required": false
        },
        {
          "id": "concurrent",
          "type": "checkbox",
          "label": "Concurrent",
          "required": false
        },
        {
          "id": "continuation",
          "type": "checkbox",
          "label": "Continuation",
          "required": false
        },
        {
          "id": "line1.receiptNumber",
          "type": "text",
          "label": "Line1 - Receipt Number",
          "required": false
        },
        {
          "id": "line3.taxNumber",
          "type": "text",
          "label": "Line3 - Tax Number",
          "required": false
        },
        {
          "id": "line4.sSN",
          "type": "text",
          "label": "Line4 - S S N",
          "required": false
        },
        {
          "id": "new",
          "type": "checkbox",
          "label": "New",
          "required": false
        },
        {
          "id": "p2Checkbox4",
          "type": "checkbox",
          "label": "A",
          "required": false
        },
        {
          "id": "p2Checkbox4_2",
          "type": "checkbox",
          "label": "B",
          "required": false
        },
        {
          "id": "p2Checkbox4_3",
          "type": "checkbox",
          "label": "C",
          "required": false
        },
        {
          "id": "p2Checkbox4_4",
          "type": "checkbox",
          "label": "D",
          "required": false
        },
        {
          "id": "p2Checkbox4_5",
          "type": "checkbox",
          "label": "E",
          "required": false
        },
        {
          "id": "p2Checkbox4_6",
          "type": "checkbox",
          "label": "F",
          "required": false
        },
        {
          "id": "p3Line1.checkbox",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "p3Line1.checkbox_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "part2.classificationSymbol",
          "type": "text",
          "label": "Part2 - Classification Symbol",
          "required": false
        },
        {
          "id": "part3.line2.familyName",
          "type": "text",
          "label": "Part3 - Line2 - Family Name",
          "required": false
        },
        {
          "id": "part3.line2.givenName",
          "type": "text",
          "label": "Part3 - Line2 - Given Name",
          "required": false
        },
        {
          "id": "part3.line2.middleName",
          "type": "text",
          "label": "Part3 - Line2 - Middle Name",
          "required": false
        },
        {
          "id": "part7LineD.emp1Name",
          "type": "text",
          "label": "Part7 Line D - Emp1 Name",
          "required": false
        },
        {
          "id": "previouschange",
          "type": "checkbox",
          "label": "Previouschange",
          "required": false
        },
        {
          "id": "ttlNumbersofWorker",
          "type": "text",
          "label": "Ttl Numbersof Worker",
          "required": false
        }
      ]
    },
    {
      "id": "section_2",
      "title": "Section 2",
      "questions": [
        {
          "id": "line.countryOfIssuance",
          "type": "text",
          "label": "Line - Country Of Issuance",
          "required": false
        },
        {
          "id": "line1.alienNumber",
          "type": "text",
          "label": "Line1 - Alien Number",
          "required": false
        },
        {
          "id": "line1.gender.p3",
          "type": "checkbox",
          "label": "Male",
          "required": false
        },
        {
          "id": "line1.gender.p3_2",
          "type": "checkbox",
          "label": "Female",
          "required": false
        },
        {
          "id": "line11e.expDate",
          "type": "text",
          "label": "Line11e - Exp Date",
          "required": false
        },
        {
          "id": "line11e.expDate_2",
          "type": "text",
          "label": "Line11e - Exp Date_2",
          "required": false
        },
        {
          "id": "line11g.currentNon",
          "type": "select",
          "label": "Line11g - Current Non",
          "required": false,
          "options": [
            {
              "label": "       ",
              "value": "       "
            },
            {
              "label": "1B1 - H-1B1 SPECIALITY OCCUPATION",
              "value": "1B1 - H-1B1 SPECIALITY OCCUPATION"
            },
            {
              "label": "1B2 - H-1B2 DoD SPECIALITY",
              "value": "1B2 - H-1B2 DoD SPECIALITY"
            },
            {
              "label": "1B3 - H-1B3 FASHION MODEL",
              "value": "1B3 - H-1B3 FASHION MODEL"
            },
            {
              "label": "1B4 - H-1B4 UNIQUE PGM ARTIST-ENT",
              "value": "1B4 - H-1B4 UNIQUE PGM ARTIST-ENT"
            },
            {
              "label": "1B5 - H-1B5 ALIEN ATHLETE",
              "value": "1B5 - H-1B5 ALIEN ATHLETE"
            },
            {
              "label": "1BS - SUPPORT PERSON OF H-1",
              "value": "1BS - SUPPORT PERSON OF H-1"
            },
            {
              "label": "A1 - AMBASSADOR, DIPLOMAT",
              "value": "A1 - AMBASSADOR, DIPLOMAT"
            },
            {
              "label": "A2 - OTHER DIPLOMATIC OFFICIALS",
              "value": "A2 - OTHER DIPLOMATIC OFFICIALS"
            },
            {
              "label": "A3 - ATTENDANTS OF A-1, A-2",
              "value": "A3 - ATTENDANTS OF A-1, A-2"
            },
            {
              "label": "AS - ASYLUM",
              "value": "AS - ASYLUM"
            },
            {
              "label": "ASD - ASYLUM STATUS DENIED",
              "value": "ASD - ASYLUM STATUS DENIED"
            },
            {
              "label": "AW - RAW APPLIED FOR AT A PORT",
              "value": "AW - RAW APPLIED FOR AT A PORT"
            },
            {
              "label": "B1 - TEMPORARY VISITOR FOR BUSINESS",
              "value": "B1 - TEMPORARY VISITOR FOR BUSINESS"
            },
            {
              "label": "B1A - NI PERSNL-DOM SRVANT OF NI EMP",
              "value": "B1A - NI PERSNL-DOM SRVANT OF NI EMP"
            },
            {
              "label": "B1B - NI DOMESTIC SERVANT OF USC",
              "value": "B1B - NI DOMESTIC SERVANT OF USC"
            },
            {
              "label": "B1C - NI EMPLOYED BY FOREIGN AIRLINE",
              "value": "B1C - NI EMPLOYED BY FOREIGN AIRLINE"
            },
            {
              "label": "B1D - NI - MISSIONARIES",
              "value": "B1D - NI - MISSIONARIES"
            },
            {
              "label": "B2 - TEMPORARY VISITOR FOR PLEASURE",
              "value": "B2 - TEMPORARY VISITOR FOR PLEASURE"
            },
            {
              "label": "BE - BERING STRAIT ENTRIES",
              "value": "BE - BERING STRAIT ENTRIES"
            },
            {
              "label": "C1 - ALIEN IN TRANSIT THROUGH U.S.",
              "value": "C1 - ALIEN IN TRANSIT THROUGH U.S."
            },
            {
              "label": "C2 - ALIEN IN TRANSIT TO UN HQ",
              "value": "C2 - ALIEN IN TRANSIT TO UN HQ"
            },
            {
              "label": "C3 - FRN GOV OFF IN TRANSIT THRU US",
              "value": "C3 - FRN GOV OFF IN TRANSIT THRU US"
            },
            {
              "label": "C4 - TRANSIT WITHOUT A VISA",
              "value": "C4 - TRANSIT WITHOUT A VISA"
            },
            {
              "label": "CC - CUBAN MASS MIGRATION PROJECT",
              "value": "CC - CUBAN MASS MIGRATION PROJECT"
            },
            {
              "label": "CH - PAROLEE (HUMANITARIAN-HQ AUTH)",
              "value": "CH - PAROLEE (HUMANITARIAN-HQ AUTH)"
            },
            {
              "label": "CP - PAROLEE (PUBLIC INT-HQ AUTH)",
              "value": "CP - PAROLEE (PUBLIC INT-HQ AUTH)"
            },
            {
              "label": "CW1 - PRINCIPAL TRANSITIONAL WORKERS",
              "value": "CW1 - PRINCIPAL TRANSITIONAL WORKERS"
            },
            {
              "label": "CW2 - DEPENDENT OF CW1",
              "value": "CW2 - DEPENDENT OF CW1"
            },
            {
              "label": "D1 - ALIEN CREW DEPART SAME VESSEL",
              "value": "D1 - ALIEN CREW DEPART SAME VESSEL"
            },
            {
              "label": "D2 - ALIEN CREW DEPART OTHER VESSEL",
              "value": "D2 - ALIEN CREW DEPART OTHER VESSEL"
            },
            {
              "label": "DA - ADVANCE PAROLE (DISTRICT AUTH)",
              "value": "DA - ADVANCE PAROLE (DISTRICT AUTH)"
            },
            {
              "label": "DE - PAROLEE (DEFERRED INSPECTION)",
              "value": "DE - PAROLEE (DEFERRED INSPECTION)"
            },
            {
              "label": "DT - PAROLEE (DISTRICT-POE AUTH)",
              "value": "DT - PAROLEE (DISTRICT-POE AUTH)"
            },
            {
              "label": "DX - CREW ARRIVING DETAINED ON SHIP",
              "value": "DX - CREW ARRIVING DETAINED ON SHIP"
            },
            {
              "label": "E1 - TREATY TRADER-SPOUSE-CHILDREN",
              "value": "E1 - TREATY TRADER-SPOUSE-CHILDREN"
            },
            {
              "label": "E2 - TREATY INVESTOR-SPOUSE-CHILD",
              "value": "E2 - TREATY INVESTOR-SPOUSE-CHILD"
            },
            {
              "label": "E2C - CNMI INVESTOR",
              "value": "E2C - CNMI INVESTOR"
            },
            {
              "label": "E3 - AUSTRALIA FREE TRADE AGREEMENT",
              "value": "E3 - AUSTRALIA FREE TRADE AGREEMENT"
            },
            {
              "label": "EAO - EMPLOYMENT ADVISORY OPTION",
              "value": "EAO - EMPLOYMENT ADVISORY OPTION"
            },
            {
              "label": "EWI - ENTRY WITHOUT INSPECTION",
              "value": "EWI - ENTRY WITHOUT INSPECTION"
            },
            {
              "label": "X - EOIR",
              "value": "X - EOIR"
            },
            {
              "label": "F1 - STUDENT - ACADEMIC",
              "value": "F1 - STUDENT - ACADEMIC"
            },
            {
              "label": "F2 - SPOUSE-CHILD OF F-1",
              "value": "F2 - SPOUSE-CHILD OF F-1"
            },
            {
              "label": "FSM - CFA ADM FED STATES MICRONESIA",
              "value": "FSM - CFA ADM FED STATES MICRONESIA"
            },
            {
              "label": "FUG - FAMILY UNITY GRANTED",
              "value": "FUG - FAMILY UNITY GRANTED"
            },
            {
              "label": "G1 - PRINCIPAL REP. FOREIGN GOVT",
              "value": "G1 - PRINCIPAL REP. FOREIGN GOVT"
            },
            {
              "label": "G2 - OTHER REP FOREIGN GOVT",
              "value": "G2 - OTHER REP FOREIGN GOVT"
            },
            {
              "label": "G3 - REP NON-RECOGNIZED FOREIGN GOV",
              "value": "G3 - REP NON-RECOGNIZED FOREIGN GOV"
            },
            {
              "label": "G4 - OFFICER-EMPLOYEE INTL. ORG.",
              "value": "G4 - OFFICER-EMPLOYEE INTL. ORG."
            },
            {
              "label": "G5 - ATTENDANTS OF G1, G2, G3, G4",
              "value": "G5 - ATTENDANTS OF G1, G2, G3, G4"
            },
            {
              "label": "GB - VISITOR WITHOUT A VISA 15 DAYS",
              "value": "GB - VISITOR WITHOUT A VISA 15 DAYS"
            },
            {
              "label": "GT - VISITOR WITHOUT A VISA 15 DAYS",
              "value": "GT - VISITOR WITHOUT A VISA 15 DAYS"
            },
            {
              "label": "H1 - ALIEN OF DIST MERIT & ABILITY",
              "value": "H1 - ALIEN OF DIST MERIT & ABILITY"
            },
            {
              "label": "H1A - REGISTERED NURSE",
              "value": "H1A - REGISTERED NURSE"
            },
            {
              "label": "H1B - SPECIALITY OCCUPATION",
              "value": "H1B - SPECIALITY OCCUPATION"
            },
            {
              "label": "H1C - NURSE RELIEF",
              "value": "H1C - NURSE RELIEF"
            },
            {
              "label": "H2 - TEMPORARY LABOR CERTIFICATION",
              "value": "H2 - TEMPORARY LABOR CERTIFICATION"
            },
            {
              "label": "H2A - TEMPORARY AGRICULTURAL WORKER",
              "value": "H2A - TEMPORARY AGRICULTURAL WORKER"
            },
            {
              "label": "H2B - TEMPORARY NON-AG WORKER",
              "value": "H2B - TEMPORARY NON-AG WORKER"
            },
            {
              "label": "H2R - RET(H2B)WRKR NOT SUBJCT TO CAP",
              "value": "H2R - RET(H2B)WRKR NOT SUBJCT TO CAP"
            },
            {
              "label": "H3 - ALIEN TRAINEE",
              "value": "H3 - ALIEN TRAINEE"
            },
            {
              "label": "H3A - TRAINEE",
              "value": "H3A - TRAINEE"
            },
            {
              "label": "H3B - SPECIAL EDUCATION TRAINING",
              "value": "H3B - SPECIAL EDUCATION TRAINING"
            },
            {
              "label": "H4 - SPS OR CHLD OF H1,H2,H3 OR H2R",
              "value": "H4 - SPS OR CHLD OF H1,H2,H3 OR H2R"
            },
            {
              "label": "HSC - FREE TRADE H1B1",
              "value": "HSC - FREE TRADE H1B1"
            },
            {
              "label": "I - FOREIGN PRESS",
              "value": "I - FOREIGN PRESS"
            },
            {
              "label": "IMM - IMMIGRANT",
              "value": "IMM - IMMIGRANT"
            },
            {
              "label": "IN - INDEFINITE PAROLE",
              "value": "IN - INDEFINITE PAROLE"
            },
            {
              "label": "J1 - EXCHANGE VISITOR - OTHERS",
              "value": "J1 - EXCHANGE VISITOR - OTHERS"
            },
            {
              "label": "J1S - EXCHANGE VISITOR - STUDENT",
              "value": "J1S - EXCHANGE VISITOR - STUDENT"
            },
            {
              "label": "J2 - SPOUSE-CHILD OF J-1",
              "value": "J2 - SPOUSE-CHILD OF J-1"
            },
            {
              "label": "J2S - SPOUSE-CHILD OF J-1S",
              "value": "J2S - SPOUSE-CHILD OF J-1S"
            },
            {
              "label": "K1 - ALIEN FIANCE(E) OF USC",
              "value": "K1 - ALIEN FIANCE(E) OF USC"
            },
            {
              "label": "K2 - CHILD OF K1",
              "value": "K2 - CHILD OF K1"
            },
            {
              "label": "K3 - SPOUSE OF USC",
              "value": "K3 - SPOUSE OF USC"
            },
            {
              "label": "K4 - CHILD OF USC",
              "value": "K4 - CHILD OF USC"
            },
            {
              "label": "L1 - INTRA-COMPANY TRANSFEREE",
              "value": "L1 - INTRA-COMPANY TRANSFEREE"
            },
            {
              "label": "L1A - MANAGER OR EXECUTIVE",
              "value": "L1A - MANAGER OR EXECUTIVE"
            },
            {
              "label": "L1B - SPECIALIZED KNOWLEDGE ALIEN",
              "value": "L1B - SPECIALIZED KNOWLEDGE ALIEN"
            },
            {
              "label": "L2 - SPOUSE-CHILD OF L-1",
              "value": "L2 - SPOUSE-CHILD OF L-1"
            },
            {
              "label": "LZ - BLANKET L PETITION",
              "value": "LZ - BLANKET L PETITION"
            },
            {
              "label": "M1 - STUDENT - VOCATIONAL-NON-ACAD.",
              "value": "M1 - STUDENT - VOCATIONAL-NON-ACAD."
            },
            {
              "label": "M2 - SPOUSE-CHILD OF M-1",
              "value": "M2 - SPOUSE-CHILD OF M-1"
            },
            {
              "label": "MIS - CFA ADM REP MARSHALL ISLANDS",
              "value": "MIS - CFA ADM REP MARSHALL ISLANDS"
            },
            {
              "label": "ML - PAROLEE-MEDICAL, LEGAL, HUMAN",
              "value": "ML - PAROLEE-MEDICAL, LEGAL, HUMAN"
            },
            {
              "label": "N1 - PRINCIPAL REP. OF NATO MEMBER",
              "value": "N1 - PRINCIPAL REP. OF NATO MEMBER"
            },
            {
              "label": "N2 - OTHER REP. OF NATO MEMBER",
              "value": "N2 - OTHER REP. OF NATO MEMBER"
            },
            {
              "label": "N3 - CLERICAL STAFF FOR N-1, N-2",
              "value": "N3 - CLERICAL STAFF FOR N-1, N-2"
            },
            {
              "label": "N4 - OFFICIALS OF NATO",
              "value": "N4 - OFFICIALS OF NATO"
            },
            {
              "label": "N5 - EXPERTS EMPLOYED BY NATO",
              "value": "N5 - EXPERTS EMPLOYED BY NATO"
            },
            {
              "label": "N6 - CIVILIAN COMPONENT OF NATO",
              "value": "N6 - CIVILIAN COMPONENT OF NATO"
            },
            {
              "label": "N7 - ATTENDANTS OF N-1 THROUGH N-6",
              "value": "N7 - ATTENDANTS OF N-1 THROUGH N-6"
            },
            {
              "label": "N8 - PARENT OF SPEC IMMIGRANT CHILD",
              "value": "N8 - PARENT OF SPEC IMMIGRANT CHILD"
            },
            {
              "label": "N9 - SPOUSE-CHILD OF N8",
              "value": "N9 - SPOUSE-CHILD OF N8"
            },
            {
              "label": "O1 - ALIEN W-EXTRAORDINARY ABILITY",
              "value": "O1 - ALIEN W-EXTRAORDINARY ABILITY"
            },
            {
              "label": "O1A - EXTRAORDINARY ALIEN - NON-ARTS",
              "value": "O1A - EXTRAORDINARY ALIEN - NON-ARTS"
            },
            {
              "label": "O1B - EXTRAORDINARY ALIEN IN ARTS",
              "value": "O1B - EXTRAORDINARY ALIEN IN ARTS"
            },
            {
              "label": "O2 - ACCOMPANYING ALIEN TO O1",
              "value": "O2 - ACCOMPANYING ALIEN TO O1"
            },
            {
              "label": "O3 - SPOUSE-CHILD OF O-1, O-2",
              "value": "O3 - SPOUSE-CHILD OF O-1, O-2"
            },
            {
              "label": "OP - PAROLEE (OVERSEAS AUTHORIZED)",
              "value": "OP - PAROLEE (OVERSEAS AUTHORIZED)"
            },
            {
              "label": "P1 - ATHLETE OR ENTERTAINER",
              "value": "P1 - ATHLETE OR ENTERTAINER"
            },
            {
              "label": "P1A - ALIEN WITH ATHLETIC EVENT",
              "value": "P1A - ALIEN WITH ATHLETIC EVENT"
            },
            {
              "label": "P1B - ALIEN WITH ENTERTAINMENT GROUP",
              "value": "P1B - ALIEN WITH ENTERTAINMENT GROUP"
            },
            {
              "label": "P1S - SUPPORT PERSON OF P-1",
              "value": "P1S - SUPPORT PERSON OF P-1"
            },
            {
              "label": "P2 - EXHANGE ARTIST-ENTERTAINER",
              "value": "P2 - EXHANGE ARTIST-ENTERTAINER"
            },
            {
              "label": "P2S - SUPPORT PERSON OF P-2",
              "value": "P2S - SUPPORT PERSON OF P-2"
            },
            {
              "label": "P3 - UNIQUE PGM ARTIST-ENTERTAINER",
              "value": "P3 - UNIQUE PGM ARTIST-ENTERTAINER"
            },
            {
              "label": "P3S - SUPPORT PERSON OF P-3",
              "value": "P3S - SUPPORT PERSON OF P-3"
            },
            {
              "label": "P4 - SPOUSE-CHILD OF P-1, P-2, P-3",
              "value": "P4 - SPOUSE-CHILD OF P-1, P-2, P-3"
            },
            {
              "label": "PAL - CFA ADMISSION PALAU",
              "value": "PAL - CFA ADMISSION PALAU"
            },
            {
              "label": "PAR - PAROLEE",
              "value": "PAR - PAROLEE"
            },
            {
              "label": "PI - PACIFIC ISLANDER",
              "value": "PI - PACIFIC ISLANDER"
            },
            {
              "label": "Q1 - INTL CULTURAL XCHG VISITORS",
              "value": "Q1 - INTL CULTURAL XCHG VISITORS"
            },
            {
              "label": "Q2 - IRISH PEACE PROCESS PARTICPNTS",
              "value": "Q2 - IRISH PEACE PROCESS PARTICPNTS"
            },
            {
              "label": "Q3 - SPOUSE-CHILD OF Q2",
              "value": "Q3 - SPOUSE-CHILD OF Q2"
            },
            {
              "label": "R1 - RELIGIOUS OCCUPATION",
              "value": "R1 - RELIGIOUS OCCUPATION"
            },
            {
              "label": "R2 - SPOUSE-CHILD OF R-1",
              "value": "R2 - SPOUSE-CHILD OF R-1"
            },
            {
              "label": "RE - REFUGEE",
              "value": "RE - REFUGEE"
            },
            {
              "label": "RE5 - HAITIAN W-GRANTED REFUGEE STAT",
              "value": "RE5 - HAITIAN W-GRANTED REFUGEE STAT"
            },
            {
              "label": "RW - RAW APPLIED FOR AT A US CO",
              "value": "RW - RAW APPLIED FOR AT A US CO"
            },
            {
              "label": "S1 - SPECIAL AGRICULTURAL WORKER",
              "value": "S1 - SPECIAL AGRICULTURAL WORKER"
            },
            {
              "label": "S2 - SPECIAL AGRICULTURAL WORKER",
              "value": "S2 - SPECIAL AGRICULTURAL WORKER"
            },
            {
              "label": "S9 - EMERGENCY FARM WORKER",
              "value": "S9 - EMERGENCY FARM WORKER"
            },
            {
              "label": "SDF - SUSPECTED DOCUMENT FRAUD",
              "value": "SDF - SUSPECTED DOCUMENT FRAUD"
            },
            {
              "label": "ST - STOWAWAY",
              "value": "ST - STOWAWAY"
            },
            {
              "label": "T1 - VICTIM OF SEVERE FORM OF TRAFK",
              "value": "T1 - VICTIM OF SEVERE FORM OF TRAFK"
            },
            {
              "label": "T2 - SPOUSE OF T1",
              "value": "T2 - SPOUSE OF T1"
            },
            {
              "label": "T3 - CHILD OF T1",
              "value": "T3 - CHILD OF T1"
            },
            {
              "label": "T4 - PARENT OF T1",
              "value": "T4 - PARENT OF T1"
            },
            {
              "label": "T5 - UNMARRIED UNDER 18 SIBLG T1 NI",
              "value": "T5 - UNMARRIED UNDER 18 SIBLG T1 NI"
            },
            {
              "label": "TB - SPOUSE OR CHILD OF CAN. FR",
              "value": "TB - SPOUSE OR CHILD OF CAN. FR"
            },
            {
              "label": "TC - CANADIAN FREE TRADE AGREEMENT",
              "value": "TC - CANADIAN FREE TRADE AGREEMENT"
            },
            {
              "label": "TD - NAFTA DEPENDENT",
              "value": "TD - NAFTA DEPENDENT"
            },
            {
              "label": "TN1 - NAFTA PRINCIPAL (CANADA)",
              "value": "TN1 - NAFTA PRINCIPAL (CANADA)"
            },
            {
              "label": "TN2 - NAFTA PRINCIPAL (MEXICO)",
              "value": "TN2 - NAFTA PRINCIPAL (MEXICO)"
            },
            {
              "label": "TWO - TRANSIT WITHOUT A VISA",
              "value": "TWO - TRANSIT WITHOUT A VISA"
            },
            {
              "label": "U1 - VICTIM OF CRIMINAL ACTIVITY",
              "value": "U1 - VICTIM OF CRIMINAL ACTIVITY"
            },
            {
              "label": "U2 - SPOUSE OF U1",
              "value": "U2 - SPOUSE OF U1"
            },
            {
              "label": "U3 - CHILD OF U1",
              "value": "U3 - CHILD OF U1"
            },
            {
              "label": "U4 - PARENT OF U1",
              "value": "U4 - PARENT OF U1"
            },
            {
              "label": "U5 - UNMARRIED UNDER 18 SIBLG U1 NI",
              "value": "U5 - UNMARRIED UNDER 18 SIBLG U1 NI"
            },
            {
              "label": "UN - UNKNOWN",
              "value": "UN - UNKNOWN"
            },
            {
              "label": "UU - UNKNOWN",
              "value": "UU - UNKNOWN"
            },
            {
              "label": "V1 - SPOUSE OF LPR",
              "value": "V1 - SPOUSE OF LPR"
            },
            {
              "label": "V2 - CHILD OF LPR",
              "value": "V2 - CHILD OF LPR"
            },
            {
              "label": "V3 - CHILD OF V2",
              "value": "V3 - CHILD OF V2"
            },
            {
              "label": "WB - VISITOR FOR BUSINESS - VWPP",
              "value": "WB - VISITOR FOR BUSINESS - VWPP"
            },
            {
              "label": "WD - WITHDRAWL (I-275)",
              "value": "WD - WITHDRAWL (I-275)"
            },
            {
              "label": "WI - WITHOUT INSPECTION",
              "value": "WI - WITHOUT INSPECTION"
            },
            {
              "label": "WT - VISITOR FOR PLEASURE - VWPP",
              "value": "WT - VISITOR FOR PLEASURE - VWPP"
            }
          ]
        },
        {
          "id": "line11h.dateStatusExpires",
          "type": "text",
          "label": "Line11h - Date Status Expires",
          "required": false
        },
        {
          "id": "line3.familyName1",
          "type": "text",
          "label": "Line3 - Family Name1",
          "required": false
        },
        {
          "id": "line3.familyName2",
          "type": "text",
          "label": "Line3 - Family Name2",
          "required": false
        },
        {
          "id": "line3.familyName3",
          "type": "text",
          "label": "Line3 - Family Name3",
          "required": false
        },
        {
          "id": "line3.givenName1",
          "type": "text",
          "label": "Line3 - Given Name1",
          "required": false
        },
        {
          "id": "line3.givenName2",
          "type": "text",
          "label": "Line3 - Given Name2",
          "required": false
        },
        {
          "id": "line3.givenName3",
          "type": "text",
          "label": "Line3 - Given Name3",
          "required": false
        },
        {
          "id": "line3.middleName1",
          "type": "text",
          "label": "Line3 - Middle Name1",
          "required": false
        },
        {
          "id": "line3.middleName2",
          "type": "text",
          "label": "Line3 - Middle Name2",
          "required": false
        },
        {
          "id": "line3.middleName3",
          "type": "text",
          "label": "Line3 - Middle Name3",
          "required": false
        },
        {
          "id": "line5.eAD",
          "type": "text",
          "label": "Line5 - E A D",
          "required": false
        },
        {
          "id": "line5.sEVIS",
          "type": "text",
          "label": "Line5 - S E V I S",
          "required": false
        },
        {
          "id": "line5.sSN",
          "type": "text",
          "label": "Line5 - S S N",
          "required": false
        },
        {
          "id": "line6.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "line6.dateOfBirth",
          "type": "text",
          "label": "Line6 - Date Of Birth",
          "required": false
        },
        {
          "id": "line6.unit",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "line6.unit_2",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "line6.unit_3",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "line8a.streetNumberName",
          "type": "text",
          "label": "Line8a - Street Number Name",
          "required": false
        },
        {
          "id": "line8d.cityTown",
          "type": "text",
          "label": "Line8d - City Town",
          "required": false
        },
        {
          "id": "line8e.state",
          "type": "select",
          "label": "Line8e - State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "line8f.zipCode",
          "type": "text",
          "label": "Line8f - Zip Code",
          "required": false
        },
        {
          "id": "officeAddressCity",
          "type": "text",
          "label": "Office Address City",
          "required": false
        },
        {
          "id": "part3Line4.countryOfBirth",
          "type": "text",
          "label": "Part3 Line4 - Country Of Birth",
          "required": false
        },
        {
          "id": "part3Line4.countryOfCitizenship",
          "type": "text",
          "label": "Part3 Line4 - Country Of Citizenship",
          "required": false
        },
        {
          "id": "part3Line5.arrivalDeparture",
          "type": "text",
          "label": "Part3 Line5 - Arrival Departure",
          "required": false
        },
        {
          "id": "part3Line5.dateofArrival",
          "type": "text",
          "label": "Part3 Line5 - Dateof Arrival",
          "required": false
        },
        {
          "id": "part3Line5.passportorTravDoc",
          "type": "text",
          "label": "Part3 Line5 - Passportor Trav Doc",
          "required": false
        },
        {
          "id": "part4.1c.state.or.country",
          "type": "text",
          "label": "Part4 - 1c - State - Or - Country",
          "required": false
        },
        {
          "id": "part4Line3.dProvince",
          "type": "text",
          "label": "Part4 Line3 - D Province",
          "required": false
        },
        {
          "id": "typeofOffice",
          "type": "checkbox",
          "label": "CON",
          "required": false
        },
        {
          "id": "typeofOffice_2",
          "type": "checkbox",
          "label": "PFI",
          "required": false
        },
        {
          "id": "typeofOffice_3",
          "type": "checkbox",
          "label": "POE",
          "required": false
        }
      ]
    },
    {
      "id": "section_3",
      "title": "Section 3",
      "questions": [
        {
          "id": "line.country",
          "type": "text",
          "label": "Line - Country",
          "required": false
        },
        {
          "id": "line2b.streetNumberName",
          "type": "text",
          "label": "Line2b - Street Number Name",
          "required": false
        },
        {
          "id": "line2b2.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "line2b2.unit",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "line2b2.unit_2",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "line2b2.unit_3",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "line2c.cityTown",
          "type": "text",
          "label": "Line2c - City Town",
          "required": false
        },
        {
          "id": "line2g2.province",
          "type": "text",
          "label": "Line2g2 - Province",
          "required": false
        },
        {
          "id": "line2g2.province_2",
          "type": "text",
          "label": "Line2g2 - Province_2",
          "required": false
        },
        {
          "id": "line3f.postalCode",
          "type": "text",
          "label": "Line3f - Postal Code",
          "required": false
        },
        {
          "id": "p4.line11b",
          "type": "text",
          "label": "P4 - Line11b",
          "required": false
        },
        {
          "id": "p4Line10.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line10.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line11a.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line11a.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line2.checkbox",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "p4Line2.checkbox_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line3.howMany",
          "type": "text",
          "label": "P4 Line3 - How Many",
          "required": false
        },
        {
          "id": "p4Line3.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line3.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line4.howMany",
          "type": "text",
          "label": "P4 Line4 - How Many",
          "required": false
        },
        {
          "id": "p4Line4.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line4.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line5.howMany",
          "type": "text",
          "label": "P4 Line5 - How Many",
          "required": false
        },
        {
          "id": "p4Line5.howMany_2",
          "type": "text",
          "label": "P4 Line5 - How Many_2",
          "required": false
        },
        {
          "id": "p4Line5.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line5.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line6.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line6.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line7",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "p4Line7_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line8",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line8_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "p4Line8a.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line8a.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line8b.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line8b.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line9.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p4Line9.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        }
      ]
    },
    {
      "id": "section_4",
      "title": "Section 4",
      "questions": [
        {
          "id": "line10.explanation",
          "type": "text",
          "label": "Line10 - Explanation",
          "required": false
        },
        {
          "id": "line8.per",
          "type": "text",
          "label": "Line8 - Per",
          "required": false
        },
        {
          "id": "line8.wages",
          "type": "text",
          "label": "Line8 - Wages",
          "required": false
        },
        {
          "id": "p5Line3",
          "type": "checkbox",
          "label": "0",
          "required": false
        },
        {
          "id": "p5Line3_2",
          "type": "checkbox",
          "label": "P5 Line3_2",
          "required": false
        },
        {
          "id": "p5Line3a.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "p5Line3a.cityTown",
          "type": "text",
          "label": "P5 Line3a - City Town",
          "required": false
        },
        {
          "id": "p5Line3a.state",
          "type": "select",
          "label": "P5 Line3a - State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "p5Line3a.streetNumberName",
          "type": "text",
          "label": "P5 Line3a - Street Number Name",
          "required": false
        },
        {
          "id": "p5Line3a.thirdpartyOrganization",
          "type": "text",
          "label": "P5 Line3a - Thirdparty Organization",
          "required": false
        },
        {
          "id": "p5Line3a.unit",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "p5Line3a.unit_2",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "p5Line3a.unit_3",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "p5Line3a.zipCode",
          "type": "text",
          "label": "P5 Line3a - Zip Code",
          "required": false
        },
        {
          "id": "p5Line3Add",
          "type": "checkbox",
          "label": "0",
          "required": false
        },
        {
          "id": "p5Line3Add_2",
          "type": "checkbox",
          "label": "P5 Line3 Add_2",
          "required": false
        },
        {
          "id": "p5Line3b.aptSteFlrNumber2",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "p5Line3b.cityTown",
          "type": "text",
          "label": "P5 Line3b - City Town",
          "required": false
        },
        {
          "id": "p5Line3b.state2",
          "type": "select",
          "label": "P5 Line3b - State2",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "p5Line3b.streetNumberName2",
          "type": "text",
          "label": "P5 Line3b - Street Number Name2",
          "required": false
        },
        {
          "id": "p5Line3b.thirdpartyOrganization2",
          "type": "text",
          "label": "P5 Line3b - Thirdparty Organization2",
          "required": false
        },
        {
          "id": "p5Line3b.unit2",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "p5Line3b.unit2_2",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "p5Line3b.unit2_3",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "p5Line3b.zipCode2",
          "type": "text",
          "label": "P5 Line3b - Zip Code2",
          "required": false
        },
        {
          "id": "p5Line4.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p5Line4.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p5Line5.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p5Line5.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p5Line6.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p5Line6.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p5Line7.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p5Line7.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p5Line9.hours",
          "type": "text",
          "label": "P5 Line9 - Hours",
          "required": false
        },
        {
          "id": "part5.q1.jobTitle",
          "type": "text",
          "label": "Part5 - Q1 - Job Title",
          "required": false
        },
        {
          "id": "part5.q10.dateFrom",
          "type": "text",
          "label": "Part5 - Q10 - Date From",
          "required": false
        },
        {
          "id": "part5.q10.dateTo",
          "type": "text",
          "label": "Part5 - Q10 - Date To",
          "required": false
        },
        {
          "id": "part5.q2.lCAorETA",
          "type": "text",
          "label": "Part5 - Q2 - L C Aor E T A",
          "required": false
        }
      ]
    },
    {
      "id": "section_5",
      "title": "Section 5",
      "questions": [
        {
          "id": "deemed",
          "type": "checkbox",
          "label": "Deemed",
          "required": false
        },
        {
          "id": "line15.grossAnnualIncome",
          "type": "text",
          "label": "Line15 - Gross Annual Income",
          "required": false
        },
        {
          "id": "line16.netAnnualIncome",
          "type": "text",
          "label": "Line16 - Net Annual Income",
          "required": false
        },
        {
          "id": "line1a.petitionerLastName",
          "type": "text",
          "label": "Line1a - Petitioner Last Name",
          "required": false
        },
        {
          "id": "line1a.petitionerLastName_2",
          "type": "text",
          "label": "Line1a - Petitioner Last Name_2",
          "required": false
        },
        {
          "id": "line1b.petitionerFirstName",
          "type": "text",
          "label": "Line1b - Petitioner First Name",
          "required": false
        },
        {
          "id": "noDeemed",
          "type": "checkbox",
          "label": "No Deemed",
          "required": false
        },
        {
          "id": "p5Line13.yearEstablished",
          "type": "text",
          "label": "P5 Line13 - Year Established",
          "required": false
        },
        {
          "id": "p5Line14.numberofEmployees",
          "type": "text",
          "label": "P5 Line14 - Numberof Employees",
          "required": false
        },
        {
          "id": "p5Line15.cB",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "p5Line15.cB_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "part5Line12.typeofBusiness",
          "type": "text",
          "label": "Part5 Line12 - Typeof Business",
          "required": false
        }
      ]
    },
    {
      "id": "section_6",
      "title": "Section 6",
      "questions": [
        {
          "id": "emailAddress",
          "type": "text",
          "label": "Email Address",
          "required": false
        },
        {
          "id": "line.businessName",
          "type": "text",
          "label": "Line - Business Name",
          "required": false
        },
        {
          "id": "line.cityTown_2",
          "type": "text",
          "label": "Line - City Town_2",
          "required": false
        },
        {
          "id": "line.dateofSignature",
          "type": "text",
          "label": "Line - Dateof Signature",
          "required": false
        },
        {
          "id": "line.preparerFamilyName",
          "type": "text",
          "label": "Line - Preparer Family Name",
          "required": false
        },
        {
          "id": "line.preparerGivenName",
          "type": "text",
          "label": "Line - Preparer Given Name",
          "required": false
        },
        {
          "id": "line.signature",
          "type": "text",
          "label": "Line - Signature",
          "required": false
        },
        {
          "id": "line1b.dateofSignature",
          "type": "text",
          "label": "Line1b - Dateof Signature",
          "required": false
        },
        {
          "id": "line7b.streetNumberName_2",
          "type": "text",
          "label": "Line7b - Street Number Name_2",
          "required": false
        },
        {
          "id": "p5.line6a.signatureofApplicant",
          "type": "text",
          "label": "P5 - Line6a - Signatureof Applicant",
          "required": false
        },
        {
          "id": "p8.line3.country",
          "type": "text",
          "label": "P8 - Line3 - Country",
          "required": false
        },
        {
          "id": "p8.line3.postalCode",
          "type": "text",
          "label": "P8 - Line3 - Postal Code",
          "required": false
        },
        {
          "id": "p8.line3.province",
          "type": "text",
          "label": "P8 - Line3 - Province",
          "required": false
        },
        {
          "id": "p8.line3.state",
          "type": "select",
          "label": "P8 - Line3 - State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "p8.line3.zipCode",
          "type": "text",
          "label": "P8 - Line3 - Zip Code",
          "required": false
        },
        {
          "id": "part8Line3.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "part8Line3.unit",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "part8Line3.unit_2",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "part8Line3.unit_3",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "pt7Line3.daytimePhoneNumber1",
          "type": "text",
          "label": "Pt7 Line3 - Daytime Phone Number1",
          "required": false
        },
        {
          "id": "pt7Line3.emailAddress",
          "type": "text",
          "label": "Pt7 Line3 - Email Address",
          "required": false
        },
        {
          "id": "pt8Line4.daytimePhoneNumber1",
          "type": "text",
          "label": "Pt8 Line4 - Daytime Phone Number1",
          "required": false
        },
        {
          "id": "pt8Line4.daytimePhoneNumber1_2",
          "type": "text",
          "label": "Pt8 Line4 - Daytime Phone Number1_2",
          "required": false
        }
      ]
    },
    {
      "id": "section_7",
      "title": "Section 7",
      "questions": [
        {
          "id": "line10.alienNumber",
          "type": "text",
          "label": "Line10 - Alien Number",
          "required": false
        },
        {
          "id": "line2.additionalInfo",
          "type": "text",
          "label": "Line2 - Additional Info",
          "required": false
        },
        {
          "id": "line2a.pageNumber",
          "type": "text",
          "label": "Line2a - Page Number",
          "required": false
        },
        {
          "id": "line2b.partNumber",
          "type": "text",
          "label": "Line2b - Part Number",
          "required": false
        },
        {
          "id": "line2c.itemNumber",
          "type": "text",
          "label": "Line2c - Item Number",
          "required": false
        },
        {
          "id": "line3.additionalInfo",
          "type": "text",
          "label": "Line3 - Additional Info",
          "required": false
        },
        {
          "id": "line4.additionalInfo",
          "type": "text",
          "label": "Line4 - Additional Info",
          "required": false
        },
        {
          "id": "line4a.pageNumber",
          "type": "text",
          "label": "Line4a - Page Number",
          "required": false
        },
        {
          "id": "line4a.pageNumber_2",
          "type": "text",
          "label": "Line4a - Page Number_2",
          "required": false
        },
        {
          "id": "line4b.partNumber",
          "type": "text",
          "label": "Line4b - Part Number",
          "required": false
        },
        {
          "id": "line4b.partNumber_2",
          "type": "text",
          "label": "Line4b - Part Number_2",
          "required": false
        },
        {
          "id": "line4c.itemNumber",
          "type": "text",
          "label": "Line4c - Item Number",
          "required": false
        },
        {
          "id": "line4c.itemNumber_2",
          "type": "text",
          "label": "Line4c - Item Number_2",
          "required": false
        }
      ]
    },
    {
      "id": "section_8",
      "title": "Section 8",
      "questions": [
        {
          "id": "e1.treatyTrader",
          "type": "checkbox",
          "label": "E1 - Treaty Trader",
          "required": false
        },
        {
          "id": "e2.cNMI",
          "type": "checkbox",
          "label": "E2 - C N M I",
          "required": false
        },
        {
          "id": "e2.treatyInvestor",
          "type": "checkbox",
          "label": "E2 - Treaty Investor",
          "required": false
        },
        {
          "id": "line.cityTown_3",
          "type": "text",
          "label": "Line - City Town_3",
          "required": false
        },
        {
          "id": "line.country_2",
          "type": "text",
          "label": "Line - Country_2",
          "required": false
        },
        {
          "id": "line1.familyName_2",
          "type": "text",
          "label": "Line1 - Family Name_2",
          "required": false
        },
        {
          "id": "line1.givenName_2",
          "type": "text",
          "label": "Line1 - Given Name_2",
          "required": false
        },
        {
          "id": "line1.middleName_2",
          "type": "text",
          "label": "Line1 - Middle Name_2",
          "required": false
        },
        {
          "id": "line2.ttlNumberofEmployees",
          "type": "text",
          "label": "Line2 - Ttl Numberof Employees",
          "required": false
        },
        {
          "id": "line3.companyorOrgName_2",
          "type": "text",
          "label": "Line3 - Companyor Org Name_2",
          "required": false
        },
        {
          "id": "line4.description",
          "type": "text",
          "label": "Line4 - Description",
          "required": false
        },
        {
          "id": "line5.employeePositionDescription",
          "type": "text",
          "label": "Line5 - Employee Position Description",
          "required": false
        },
        {
          "id": "line7b.streetNumberName_3",
          "type": "text",
          "label": "Line7b - Street Number Name_3",
          "required": false
        },
        {
          "id": "s1.line3.country",
          "type": "text",
          "label": "S1 - Line3 - Country",
          "required": false
        },
        {
          "id": "s1.line3.postalCode",
          "type": "text",
          "label": "S1 - Line3 - Postal Code",
          "required": false
        },
        {
          "id": "s1.line3.province",
          "type": "text",
          "label": "S1 - Line3 - Province",
          "required": false
        },
        {
          "id": "s1.line3.state",
          "type": "select",
          "label": "S1 - Line3 - State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "s1.line3.zipCode",
          "type": "text",
          "label": "S1 - Line3 - Zip Code",
          "required": false
        },
        {
          "id": "sec1Line3.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "sec1Line3.unit",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "sec1Line3.unit_2",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "sec1Line3.unit_3",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "supELine1.nameofEmployer",
          "type": "text",
          "label": "Sup E Line1 - Nameof Employer",
          "required": false
        },
        {
          "id": "supELine5.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supELine5.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        }
      ]
    },
    {
      "id": "section_9",
      "title": "Section 9",
      "questions": [
        {
          "id": "eSec3Line1.ttlAnnualGross",
          "type": "text",
          "label": "E Sec3 Line1 - Ttl Annual Gross",
          "required": false
        },
        {
          "id": "eSec3Line2.yearEnding",
          "type": "text",
          "label": "E Sec3 Line2 - Year Ending",
          "required": false
        },
        {
          "id": "eSec3Line3.percentOfTtlGross",
          "type": "text",
          "label": "E Sec3 Line3 - Percent Of Ttl Gross",
          "required": false
        },
        {
          "id": "eSec4.cash",
          "type": "text",
          "label": "E Sec4 - Cash",
          "required": false
        },
        {
          "id": "eSec4.equipment",
          "type": "text",
          "label": "E Sec4 - Equipment",
          "required": false
        },
        {
          "id": "eSec4.inventory",
          "type": "text",
          "label": "E Sec4 - Inventory",
          "required": false
        },
        {
          "id": "eSec4.other",
          "type": "text",
          "label": "E Sec4 - Other",
          "required": false
        },
        {
          "id": "eSec4.premises",
          "type": "text",
          "label": "E Sec4 - Premises",
          "required": false
        },
        {
          "id": "eSec4.totla",
          "type": "text",
          "label": "E Sec4 - Totla",
          "required": false
        },
        {
          "id": "line2a.typeofBusiness",
          "type": "text",
          "label": "Line2a - Typeof Business",
          "required": false
        },
        {
          "id": "line2b.dateEstablished",
          "type": "text",
          "label": "Line2b - Date Established",
          "required": false
        },
        {
          "id": "line2d.grossAnnualIncome",
          "type": "text",
          "label": "Line2d - Gross Annual Income",
          "required": false
        },
        {
          "id": "line2e.netAnnualIncome",
          "type": "text",
          "label": "Line2e - Net Annual Income",
          "required": false
        },
        {
          "id": "line3.jobDescription",
          "type": "text",
          "label": "Line3 - Job Description",
          "required": false
        },
        {
          "id": "p5Line.yearEstablished",
          "type": "text",
          "label": "P5 Line - Year Established",
          "required": false
        },
        {
          "id": "sect2.affiliate",
          "type": "checkbox",
          "label": "Sect2 - Affiliate",
          "required": false
        },
        {
          "id": "sect2.branch",
          "type": "checkbox",
          "label": "Sect2 - Branch",
          "required": false
        },
        {
          "id": "sect2.jointVenture",
          "type": "checkbox",
          "label": "Sect2 - Joint Venture",
          "required": false
        },
        {
          "id": "sect2.parent",
          "type": "checkbox",
          "label": "Sect2 - Parent",
          "required": false
        },
        {
          "id": "sect2.subsidiary",
          "type": "checkbox",
          "label": "Sect2 - Subsidiary",
          "required": false
        },
        {
          "id": "supELine7a.howMany",
          "type": "text",
          "label": "Sup E Line7a - How Many",
          "required": false
        },
        {
          "id": "supELine7b.howMany",
          "type": "text",
          "label": "Sup E Line7b - How Many",
          "required": false
        },
        {
          "id": "supELine7c.totalNumber",
          "type": "text",
          "label": "Sup E Line7c - Total Number",
          "required": false
        },
        {
          "id": "supELine7d.totalNumber",
          "type": "text",
          "label": "Sup E Line7d - Total Number",
          "required": false
        },
        {
          "id": "table1.row1.immigrationStatus.line1",
          "type": "text",
          "label": "Table1 - Row1 - Immigration Status - Line1",
          "required": false
        },
        {
          "id": "table1.row1.nAME.line1",
          "type": "text",
          "label": "Table1 - Row1 - N A M E - Line1",
          "required": false
        },
        {
          "id": "table1.row1.nationality.line1",
          "type": "text",
          "label": "Table1 - Row1 - Nationality - Line1",
          "required": false
        },
        {
          "id": "table1.row1.percentOwnership.line1",
          "type": "text",
          "label": "Table1 - Row1 - Percent Ownership - Line1",
          "required": false
        },
        {
          "id": "table1.row2.immigrationStatus.line2",
          "type": "text",
          "label": "Table1 - Row2 - Immigration Status - Line2",
          "required": false
        },
        {
          "id": "table1.row2.nAME.line2",
          "type": "text",
          "label": "Table1 - Row2 - N A M E - Line2",
          "required": false
        },
        {
          "id": "table1.row2.nationality.line2",
          "type": "text",
          "label": "Table1 - Row2 - Nationality - Line2",
          "required": false
        },
        {
          "id": "table1.row2.percentOwnership.line2",
          "type": "text",
          "label": "Table1 - Row2 - Percent Ownership - Line2",
          "required": false
        },
        {
          "id": "table1.row3.immigrationStatus.line3",
          "type": "text",
          "label": "Table1 - Row3 - Immigration Status - Line3",
          "required": false
        },
        {
          "id": "table1.row3.nAME.line3",
          "type": "text",
          "label": "Table1 - Row3 - N A M E - Line3",
          "required": false
        },
        {
          "id": "table1.row3.nationality.line3",
          "type": "text",
          "label": "Table1 - Row3 - Nationality - Line3",
          "required": false
        },
        {
          "id": "table1.row3.percentOwnership.line3",
          "type": "text",
          "label": "Table1 - Row3 - Percent Ownership - Line3",
          "required": false
        },
        {
          "id": "table1.row4.immigrationStatus.line4",
          "type": "text",
          "label": "Table1 - Row4 - Immigration Status - Line4",
          "required": false
        },
        {
          "id": "table1.row4.nAME.line4",
          "type": "text",
          "label": "Table1 - Row4 - N A M E - Line4",
          "required": false
        },
        {
          "id": "table1.row4.nationality.line4",
          "type": "text",
          "label": "Table1 - Row4 - Nationality - Line4",
          "required": false
        },
        {
          "id": "table1.row4.percentOwnership.line4",
          "type": "text",
          "label": "Table1 - Row4 - Percent Ownership - Line4",
          "required": false
        },
        {
          "id": "table1.row5.immigrationStatus.line5",
          "type": "text",
          "label": "Table1 - Row5 - Immigration Status - Line5",
          "required": false
        },
        {
          "id": "table1.row5.immigrationStatus.line6",
          "type": "text",
          "label": "Table1 - Row5 - Immigration Status - Line6",
          "required": false
        },
        {
          "id": "table1.row5.immigrationStatus.line7",
          "type": "text",
          "label": "Table1 - Row5 - Immigration Status - Line7",
          "required": false
        },
        {
          "id": "table1.row5.nAME.line6",
          "type": "text",
          "label": "Table1 - Row5 - N A M E - Line6",
          "required": false
        },
        {
          "id": "table1.row5.nAME.line7",
          "type": "text",
          "label": "Table1 - Row5 - N A M E - Line7",
          "required": false
        },
        {
          "id": "table1.row5.nAME5",
          "type": "text",
          "label": "Table1 - Row5 - N A M E5",
          "required": false
        },
        {
          "id": "table1.row5.nationality.line5",
          "type": "text",
          "label": "Table1 - Row5 - Nationality - Line5",
          "required": false
        },
        {
          "id": "table1.row5.nationality.line6",
          "type": "text",
          "label": "Table1 - Row5 - Nationality - Line6",
          "required": false
        },
        {
          "id": "table1.row5.nationality.line7",
          "type": "text",
          "label": "Table1 - Row5 - Nationality - Line7",
          "required": false
        },
        {
          "id": "table1.row5.percentOwnership.line5",
          "type": "text",
          "label": "Table1 - Row5 - Percent Ownership - Line5",
          "required": false
        },
        {
          "id": "table1.row5.percentOwnership.line6",
          "type": "text",
          "label": "Table1 - Row5 - Percent Ownership - Line6",
          "required": false
        },
        {
          "id": "table1.row5.percentOwnership.line7",
          "type": "text",
          "label": "Table1 - Row5 - Percent Ownership - Line7",
          "required": false
        }
      ]
    },
    {
      "id": "section_11",
      "title": "Section 11",
      "questions": [
        {
          "id": "a.canada",
          "type": "checkbox",
          "label": "A - Canada",
          "required": false
        },
        {
          "id": "b.mexico",
          "type": "checkbox",
          "label": "B - Mexico",
          "required": false
        },
        {
          "id": "c.chile",
          "type": "checkbox",
          "label": "C - Chile",
          "required": false
        },
        {
          "id": "d.singapore",
          "type": "checkbox",
          "label": "D - Singapore",
          "required": false
        },
        {
          "id": "e.other",
          "type": "checkbox",
          "label": "E - Other",
          "required": false
        },
        {
          "id": "employer",
          "type": "checkbox",
          "label": "F",
          "required": false
        },
        {
          "id": "employer_2",
          "type": "checkbox",
          "label": "U",
          "required": false
        },
        {
          "id": "f.chileOrSingapore",
          "type": "checkbox",
          "label": "F - Chile Or Singapore",
          "required": false
        },
        {
          "id": "line4.country",
          "type": "text",
          "label": "Line4 - Country",
          "required": false
        },
        {
          "id": "p5.line6a.signatureofApplicant_2",
          "type": "text",
          "label": "P5 - Line6a - Signatureof Applicant_2",
          "required": false
        },
        {
          "id": "tASupLine1.nameofBeneficiary",
          "type": "text",
          "label": "T A Sup Line1 - Nameof Beneficiary",
          "required": false
        },
        {
          "id": "tASupLine1.nameofPetitioner",
          "type": "text",
          "label": "T A Sup Line1 - Nameof Petitioner",
          "required": false
        },
        {
          "id": "tASupLine1a.petitionerLastName",
          "type": "text",
          "label": "T A Sup Line1a - Petitioner Last Name",
          "required": false
        },
        {
          "id": "tASupLine1b.petitionerFirstName",
          "type": "text",
          "label": "T A Sup Line1b - Petitioner First Name",
          "required": false
        },
        {
          "id": "tASupLine2.daytimePhoneNumber1",
          "type": "text",
          "label": "T A Sup Line2 - Daytime Phone Number1",
          "required": false
        },
        {
          "id": "tASupLine2b.dateofSignature",
          "type": "text",
          "label": "T A Sup Line2b - Dateof Signature",
          "required": false
        },
        {
          "id": "tASupLine3.mobilePhoneNumber1",
          "type": "text",
          "label": "T A Sup Line3 - Mobile Phone Number1",
          "required": false
        },
        {
          "id": "tASupLine5.email",
          "type": "text",
          "label": "T A Sup Line5 - Email",
          "required": false
        }
      ]
    },
    {
      "id": "section_12",
      "title": "Section 12",
      "questions": [
        {
          "id": "line.businessName_2",
          "type": "text",
          "label": "Line - Business Name_2",
          "required": false
        },
        {
          "id": "line.cityTown_4",
          "type": "text",
          "label": "Line - City Town_4",
          "required": false
        },
        {
          "id": "line.dateofSignature_2",
          "type": "text",
          "label": "Line - Dateof Signature_2",
          "required": false
        },
        {
          "id": "line.preparerFamilyName_2",
          "type": "text",
          "label": "Line - Preparer Family Name_2",
          "required": false
        },
        {
          "id": "line.preparerGivenName_2",
          "type": "text",
          "label": "Line - Preparer Given Name_2",
          "required": false
        },
        {
          "id": "line.signature_2",
          "type": "text",
          "label": "Line - Signature_2",
          "required": false
        },
        {
          "id": "line7b.streetNumberName_4",
          "type": "text",
          "label": "Line7b - Street Number Name_4",
          "required": false
        },
        {
          "id": "pt8Line4.daytimePhoneNumber1_3",
          "type": "text",
          "label": "Pt8 Line4 - Daytime Phone Number1_3",
          "required": false
        },
        {
          "id": "s3.line3.country",
          "type": "text",
          "label": "S3 - Line3 - Country",
          "required": false
        },
        {
          "id": "s3.line3.postalCode",
          "type": "text",
          "label": "S3 - Line3 - Postal Code",
          "required": false
        },
        {
          "id": "s3.line3.province",
          "type": "text",
          "label": "S3 - Line3 - Province",
          "required": false
        },
        {
          "id": "s3.line3.state",
          "type": "select",
          "label": "S3 - Line3 - State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "s3.line3.zipCode",
          "type": "text",
          "label": "S3 - Line3 - Zip Code",
          "required": false
        },
        {
          "id": "sec3Line3.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "sec3Line3.unit",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "sec3Line3.unit_2",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "sec3Line3.unit_3",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "tASupLine2.daytimePhoneNumber1_2",
          "type": "text",
          "label": "T A Sup Line2 - Daytime Phone Number1_2",
          "required": false
        },
        {
          "id": "tASupLine5.email_2",
          "type": "text",
          "label": "T A Sup Line5 - Email_2",
          "required": false
        }
      ]
    },
    {
      "id": "section_13",
      "title": "Section 13",
      "questions": [
        {
          "id": "line1.petitionerName",
          "type": "text",
          "label": "Line1 - Petitioner Name",
          "required": false
        },
        {
          "id": "line2.beneficiaryName",
          "type": "text",
          "label": "Line2 - Beneficiary Name",
          "required": false
        },
        {
          "id": "line2.ttlNumberofBeneficiaries",
          "type": "text",
          "label": "Line2 - Ttl Numberof Beneficiaries",
          "required": false
        },
        {
          "id": "subHLine4.class",
          "type": "checkbox",
          "label": "A",
          "required": false
        },
        {
          "id": "subHLine4.class_2",
          "type": "checkbox",
          "label": "B",
          "required": false
        },
        {
          "id": "subHLine4.class_3",
          "type": "checkbox",
          "label": "C",
          "required": false
        },
        {
          "id": "subHLine4.class_4",
          "type": "checkbox",
          "label": "D",
          "required": false
        },
        {
          "id": "subHLine4.class_5",
          "type": "checkbox",
          "label": "E",
          "required": false
        },
        {
          "id": "subHLine4.class_6",
          "type": "checkbox",
          "label": "G",
          "required": false
        },
        {
          "id": "subHLine4.class_7",
          "type": "checkbox",
          "label": "H",
          "required": false
        },
        {
          "id": "subHLine4.class_8",
          "type": "checkbox",
          "label": "F",
          "required": false
        },
        {
          "id": "subHLine5.confirmationNum",
          "type": "text",
          "label": "Sub H Line5 - Confirmation Num",
          "required": false
        },
        {
          "id": "table1.row2.dateFrom.line1",
          "type": "text",
          "label": "Table1 - Row2 - Date From - Line1",
          "required": false
        },
        {
          "id": "table1.row2.dateTo.line1",
          "type": "text",
          "label": "Table1 - Row2 - Date To - Line1",
          "required": false
        },
        {
          "id": "table1.row2.name.line1",
          "type": "text",
          "label": "Table1 - Row2 - Name - Line1",
          "required": false
        },
        {
          "id": "table1.row3.dateFrom.line2",
          "type": "text",
          "label": "Table1 - Row3 - Date From - Line2",
          "required": false
        },
        {
          "id": "table1.row3.dateTo.line2",
          "type": "text",
          "label": "Table1 - Row3 - Date To - Line2",
          "required": false
        },
        {
          "id": "table1.row3.name.line2",
          "type": "text",
          "label": "Table1 - Row3 - Name - Line2",
          "required": false
        },
        {
          "id": "table1.row4.dateFrom.line3",
          "type": "text",
          "label": "Table1 - Row4 - Date From - Line3",
          "required": false
        },
        {
          "id": "table1.row4.dateTo.line3",
          "type": "text",
          "label": "Table1 - Row4 - Date To - Line3",
          "required": false
        },
        {
          "id": "table1.row4.name.line3",
          "type": "text",
          "label": "Table1 - Row4 - Name - Line3",
          "required": false
        },
        {
          "id": "table1.row5.dateFrom.line4",
          "type": "text",
          "label": "Table1 - Row5 - Date From - Line4",
          "required": false
        },
        {
          "id": "table1.row5.dateTo.line4",
          "type": "text",
          "label": "Table1 - Row5 - Date To - Line4",
          "required": false
        },
        {
          "id": "table1.row5.name.line4",
          "type": "text",
          "label": "Table1 - Row5 - Name - Line4",
          "required": false
        },
        {
          "id": "table1.row6.dateFrom.line5",
          "type": "text",
          "label": "Table1 - Row6 - Date From - Line5",
          "required": false
        },
        {
          "id": "table1.row6.dateFrom.line6",
          "type": "text",
          "label": "Table1 - Row6 - Date From - Line6",
          "required": false
        },
        {
          "id": "table1.row6.dateTo.line5",
          "type": "text",
          "label": "Table1 - Row6 - Date To - Line5",
          "required": false
        },
        {
          "id": "table1.row6.dateTo.line6",
          "type": "text",
          "label": "Table1 - Row6 - Date To - Line6",
          "required": false
        },
        {
          "id": "table1.row6.name.line5",
          "type": "text",
          "label": "Table1 - Row6 - Name - Line5",
          "required": false
        },
        {
          "id": "table1.row6.name.line6",
          "type": "text",
          "label": "Table1 - Row6 - Name - Line6",
          "required": false
        }
      ]
    },
    {
      "id": "section_15",
      "title": "Section 15",
      "questions": [
        {
          "id": "classHLine5b.countryOfIssuance",
          "type": "text",
          "label": "Class H Line5b - Country Of Issuance",
          "required": false
        },
        {
          "id": "classHLine5b.expDate",
          "type": "text",
          "label": "Class H Line5b - Exp Date",
          "required": false
        },
        {
          "id": "classHLine5b.passportorTravDoc",
          "type": "text",
          "label": "Class H Line5b - Passportor Trav Doc",
          "required": false
        },
        {
          "id": "line1.duties",
          "type": "text",
          "label": "Line1 - Duties",
          "required": false
        },
        {
          "id": "line2.summaryofWorkExperience",
          "type": "text",
          "label": "Line2 - Summaryof Work Experience",
          "required": false
        },
        {
          "id": "line8a.check",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "line8a.check_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "line8b.explain",
          "type": "text",
          "label": "Line8b - Explain",
          "required": false
        },
        {
          "id": "p5.line6a.signatureofApplicant_3",
          "type": "text",
          "label": "P5 - Line6a - Signatureof Applicant_3",
          "required": false
        },
        {
          "id": "sect1.dateSignedByPetitioner",
          "type": "text",
          "label": "Sect1 - Date Signed By Petitioner",
          "required": false
        },
        {
          "id": "sect1.petitionerPrintedName",
          "type": "text",
          "label": "Sect1 - Petitioner Printed Name",
          "required": false
        },
        {
          "id": "supHLine5.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine5.no_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine5.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine5.yes_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        }
      ]
    },
    {
      "id": "section_16",
      "title": "Section 16",
      "questions": [
        {
          "id": "a.seasonal",
          "type": "checkbox",
          "label": "A - Seasonal",
          "required": false
        },
        {
          "id": "a.unpredictable",
          "type": "checkbox",
          "label": "A - Unpredictable",
          "required": false
        },
        {
          "id": "b.peakload",
          "type": "checkbox",
          "label": "B - Peakload",
          "required": false
        },
        {
          "id": "b.periodic",
          "type": "checkbox",
          "label": "B - Periodic",
          "required": false
        },
        {
          "id": "c.intermittent",
          "type": "checkbox",
          "label": "C - Intermittent",
          "required": false
        },
        {
          "id": "c.recurrent",
          "type": "checkbox",
          "label": "C - Recurrent",
          "required": false
        },
        {
          "id": "d.onetime",
          "type": "checkbox",
          "label": "D - Onetime",
          "required": false
        },
        {
          "id": "line3.explanation",
          "type": "text",
          "label": "Line3 - Explanation",
          "required": false
        },
        {
          "id": "sect1.authorizedOfficialName",
          "type": "text",
          "label": "Sect1 - Authorized Official Name",
          "required": false
        },
        {
          "id": "sect1.authorizedOfficialSignature",
          "type": "text",
          "label": "Sect1 - Authorized Official Signature",
          "required": false
        },
        {
          "id": "sect1.dateSignedByAuthorizedOfficial",
          "type": "text",
          "label": "Sect1 - Date Signed By Authorized Official",
          "required": false
        },
        {
          "id": "sect1.dateSignedByDODPM",
          "type": "text",
          "label": "Sect1 - Date Signed By D O D P M",
          "required": false
        },
        {
          "id": "sect1.dODPMName",
          "type": "text",
          "label": "Sect1 - D O D P M Name",
          "required": false
        },
        {
          "id": "sect1.dODPMSignature",
          "type": "text",
          "label": "Sect1 - D O D P M Signature",
          "required": false
        },
        {
          "id": "supHLine5",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine5_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine6",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine6_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine6a",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine6a_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        }
      ]
    },
    {
      "id": "section_17",
      "title": "Section 17",
      "questions": [
        {
          "id": "line7.familyName",
          "type": "text",
          "label": "Line7 - Family Name",
          "required": false
        },
        {
          "id": "line7.givenName",
          "type": "text",
          "label": "Line7 - Given Name",
          "required": false
        },
        {
          "id": "line7.middleName",
          "type": "text",
          "label": "Line7 - Middle Name",
          "required": false
        },
        {
          "id": "line7.recruitOrganization",
          "type": "text",
          "label": "Line7 - Recruit Organization",
          "required": false
        },
        {
          "id": "sec2Line7c.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "sec2Line7c.cityTown",
          "type": "text",
          "label": "Sec2 Line7c - City Town",
          "required": false
        },
        {
          "id": "sec2Line7c.state",
          "type": "select",
          "label": "Sec2 Line7c - State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "sec2Line7c.streetNumberName",
          "type": "text",
          "label": "Sec2 Line7c - Street Number Name",
          "required": false
        },
        {
          "id": "sec2Line7c.unit",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "sec2Line7c.unit_2",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "sec2Line7c.unit_3",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "sec2Line7c.zipCode",
          "type": "text",
          "label": "Sec2 Line7c - Zip Code",
          "required": false
        },
        {
          "id": "supHLine11",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine11_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine12",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine12_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine13",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine13_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine8a",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine8a_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine8a1.types",
          "type": "text",
          "label": "Sup H Line8a1 - Types",
          "required": false
        },
        {
          "id": "supHLine8c",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine8c_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        }
      ]
    },
    {
      "id": "section_18",
      "title": "Section 18",
      "questions": [
        {
          "id": "supHLine14",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine14_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine15",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine15_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine16",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine16_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine17",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine17_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine18",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine18_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine19",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine19_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine20",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine20_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        }
      ]
    },
    {
      "id": "section_19",
      "title": "Section 19",
      "questions": [
        {
          "id": "date",
          "type": "text",
          "label": "Date",
          "required": false
        },
        {
          "id": "line24.familyName",
          "type": "text",
          "label": "Line24 - Family Name",
          "required": false
        },
        {
          "id": "line24.givenName",
          "type": "text",
          "label": "Line24 - Given Name",
          "required": false
        },
        {
          "id": "line24.middleName",
          "type": "text",
          "label": "Line24 - Middle Name",
          "required": false
        },
        {
          "id": "line24.petitionerName",
          "type": "text",
          "label": "Line24 - Petitioner Name",
          "required": false
        },
        {
          "id": "p5.line6a.signatureofApplicant_4",
          "type": "text",
          "label": "P5 - Line6a - Signatureof Applicant_4",
          "required": false
        },
        {
          "id": "sect3.partA.dateSignedByPetitioner",
          "type": "text",
          "label": "Sect3 - Part A - Date Signed By Petitioner",
          "required": false
        },
        {
          "id": "sect3.partA.petitionerName",
          "type": "text",
          "label": "Sect3 - Part A - Petitioner Name",
          "required": false
        },
        {
          "id": "sect3.partB.employerSignature",
          "type": "text",
          "label": "Sect3 - Part B - Employer Signature",
          "required": false
        },
        {
          "id": "supHLine21",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine21_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine22",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine22_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "supHLine23",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "supHLine23_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "textField5",
          "type": "text",
          "label": "Text Field5",
          "required": false
        }
      ]
    },
    {
      "id": "section_20",
      "title": "Section 20",
      "questions": [
        {
          "id": "line24.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "line24.cityTown",
          "type": "text",
          "label": "Line24 - City Town",
          "required": false
        },
        {
          "id": "line24.country",
          "type": "text",
          "label": "Line24 - Country",
          "required": false
        },
        {
          "id": "line24.daytimePhoneNumber1",
          "type": "text",
          "label": "Line24 - Daytime Phone Number1",
          "required": false
        },
        {
          "id": "line24.emailAddress",
          "type": "text",
          "label": "Line24 - Email Address",
          "required": false
        },
        {
          "id": "line24.inCareofName",
          "type": "text",
          "label": "Line24 - In Careof Name",
          "required": false
        },
        {
          "id": "line24.mobilePhoneNumber1",
          "type": "text",
          "label": "Line24 - Mobile Phone Number1",
          "required": false
        },
        {
          "id": "line24.postalCode",
          "type": "text",
          "label": "Line24 - Postal Code",
          "required": false
        },
        {
          "id": "line24.province",
          "type": "text",
          "label": "Line24 - Province",
          "required": false
        },
        {
          "id": "line24.state",
          "type": "select",
          "label": "Line24 - State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "line24.streetNumberName",
          "type": "text",
          "label": "Line24 - Street Number Name",
          "required": false
        },
        {
          "id": "line24.unit",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "line24.unit_2",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "line24.unit_3",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "line24.zipCode",
          "type": "text",
          "label": "Line24 - Zip Code",
          "required": false
        },
        {
          "id": "line25.eIN",
          "type": "text",
          "label": "Line25 - E I N",
          "required": false
        },
        {
          "id": "line25.sSN",
          "type": "text",
          "label": "Line25 - S S N",
          "required": false
        },
        {
          "id": "line25.taxNumber",
          "type": "text",
          "label": "Line25 - Tax Number",
          "required": false
        },
        {
          "id": "line26.grossAnnualIncome",
          "type": "text",
          "label": "Line26 - Gross Annual Income",
          "required": false
        },
        {
          "id": "line26.netAnnualIncome",
          "type": "text",
          "label": "Line26 - Net Annual Income",
          "required": false
        },
        {
          "id": "line26.numberofEmployees",
          "type": "text",
          "label": "Line26 - Numberof Employees",
          "required": false
        },
        {
          "id": "line26.typeofBusiness",
          "type": "text",
          "label": "Line26 - Typeof Business",
          "required": false
        },
        {
          "id": "line26.yearEstablished",
          "type": "text",
          "label": "Line26 - Year Established",
          "required": false
        },
        {
          "id": "line27.familyName",
          "type": "text",
          "label": "Line27 - Family Name",
          "required": false
        },
        {
          "id": "line27.givenName",
          "type": "text",
          "label": "Line27 - Given Name",
          "required": false
        },
        {
          "id": "line27.title",
          "type": "text",
          "label": "Line27 - Title",
          "required": false
        },
        {
          "id": "sect3.partC.dateSigned1",
          "type": "text",
          "label": "Sect3 - Part C - Date Signed1",
          "required": false
        },
        {
          "id": "sect3.partC.signature1",
          "type": "text",
          "label": "Sect3 - Part C - Signature1",
          "required": false
        }
      ]
    },
    {
      "id": "section_21",
      "title": "Section 21",
      "questions": [
        {
          "id": "hSec3Line1a.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "hSec3Line1a.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "hSec3Line1b.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "hSec3Line1b.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "hSec3Line1c.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "hSec3Line1c.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "hSec3Line1d.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "hSec3Line1d.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "hSec3Line1e.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "hSec3Line1e.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "hSec3Line7.check",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "hSec3Line7.check_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "line2.explanation",
          "type": "text",
          "label": "Line2 - Explanation",
          "required": false
        }
      ]
    },
    {
      "id": "section_22",
      "title": "Section 22",
      "questions": [
        {
          "id": "a.no.diploma",
          "type": "checkbox",
          "label": "A - No - Diploma",
          "required": false
        },
        {
          "id": "b.hSDiploma",
          "type": "checkbox",
          "label": "B - H S Diploma",
          "required": false
        },
        {
          "id": "c.some.college",
          "type": "checkbox",
          "label": "C - Some - College",
          "required": false
        },
        {
          "id": "d.collegeplus",
          "type": "checkbox",
          "label": "D - Collegeplus",
          "required": false
        },
        {
          "id": "e.associateDegree",
          "type": "checkbox",
          "label": "E - Associate Degree",
          "required": false
        },
        {
          "id": "f.bachelorDegree",
          "type": "checkbox",
          "label": "F - Bachelor Degree",
          "required": false
        },
        {
          "id": "g.masterDegree",
          "type": "checkbox",
          "label": "G - Master Degree",
          "required": false
        },
        {
          "id": "h.professionalDegree",
          "type": "checkbox",
          "label": "H - Professional Degree",
          "required": false
        },
        {
          "id": "h1BSec2Line1.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line1.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line2.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line2.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSecALine1a.no",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "h1BSecALine1a.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSecALine1b.no",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "h1BSecALine1b.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSecALine1c.no",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "h1BSecALine1c.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSecALine1c1.no",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "h1BSecALine1c1.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSecALine1c2.no",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "h1BSecALine1c2.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSecALine1d.no",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "h1BSecALine1d.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSecALine1d1.no",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "h1BSecALine1d1.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "i.doctorateDegree",
          "type": "checkbox",
          "label": "I - Doctorate Degree",
          "required": false
        },
        {
          "id": "line1.familyName_3",
          "type": "text",
          "label": "Line1 - Family Name_3",
          "required": false
        },
        {
          "id": "line1.familyName_4",
          "type": "text",
          "label": "Line1 - Family Name_4",
          "required": false
        },
        {
          "id": "line2f.line5.dOTCode",
          "type": "text",
          "label": "Line2f - Line5 - D O T Code",
          "required": false
        },
        {
          "id": "line2f.line6.nAICSCode",
          "type": "text",
          "label": "Line2f - Line6 - N A I C S Code",
          "required": false
        },
        {
          "id": "line4.rateofPayPerYear",
          "type": "text",
          "label": "Line4 - Rateof Pay Per Year",
          "required": false
        },
        {
          "id": "partA.q3.field.of.study",
          "type": "text",
          "label": "Part A - Q3 - Field - Of - Study",
          "required": false
        }
      ]
    },
    {
      "id": "section_23",
      "title": "Section 23",
      "questions": [
        {
          "id": "cap",
          "type": "checkbox",
          "label": "A",
          "required": false
        },
        {
          "id": "cap_2",
          "type": "checkbox",
          "label": "B",
          "required": false
        },
        {
          "id": "cap_3",
          "type": "checkbox",
          "label": "C",
          "required": false
        },
        {
          "id": "cap_4",
          "type": "checkbox",
          "label": "D",
          "required": false
        },
        {
          "id": "h1BSec2Line3.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line3.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line4.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line4.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line5.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line5.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line6.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line6.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line7.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line7.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line8.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line8.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line9.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec2Line9.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1bSec3Line2a.name",
          "type": "text",
          "label": "H1b Sec3 Line2a - Name",
          "required": false
        },
        {
          "id": "h1bSec3Line2b.dateDegreeAwarded",
          "type": "text",
          "label": "H1b Sec3 Line2b - Date Degree Awarded",
          "required": false
        },
        {
          "id": "h1bSec3Line2c.typeofDegree",
          "type": "text",
          "label": "H1b Sec3 Line2c - Typeof Degree",
          "required": false
        },
        {
          "id": "h1bSec3Line2d.streetName",
          "type": "text",
          "label": "H1b Sec3 Line2d - Street Name",
          "required": false
        },
        {
          "id": "lineb.unit",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "lineb.unit_2",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "lineb.unit_3",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "part7LineB.bEmp1City",
          "type": "text",
          "label": "Part7 Line B - B Emp1 City",
          "required": false
        },
        {
          "id": "part7LineB.bEmp1State",
          "type": "select",
          "label": "Part7 Line B - B Emp1 State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "part7LineB.bEmp1ZipCode",
          "type": "text",
          "label": "Part7 Line B - B Emp1 Zip Code",
          "required": false
        },
        {
          "id": "sec3.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        }
      ]
    },
    {
      "id": "section_24",
      "title": "Section 24",
      "questions": [
        {
          "id": "h1BSec4Line1a.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec4Line1a.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec4Line1b.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec4Line1b.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec4Line1c.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "h1BSec4Line1c.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "partC.3aCheckbox",
          "type": "checkbox",
          "label": "Part C - 3a Checkbox",
          "required": false
        },
        {
          "id": "partC.3bCheckbox",
          "type": "checkbox",
          "label": "Part C - 3b Checkbox",
          "required": false
        },
        {
          "id": "partC.3cCheckbox",
          "type": "checkbox",
          "label": "Part C - 3c Checkbox",
          "required": false
        },
        {
          "id": "partC.3dCheckbox",
          "type": "checkbox",
          "label": "Part C - 3d Checkbox",
          "required": false
        },
        {
          "id": "partC.3eCheckbox",
          "type": "checkbox",
          "label": "Part C - 3e Checkbox",
          "required": false
        },
        {
          "id": "partC.3fCheckbox",
          "type": "checkbox",
          "label": "Part C - 3f Checkbox",
          "required": false
        },
        {
          "id": "partC.3gCheckbox",
          "type": "checkbox",
          "label": "Part C - 3g Checkbox",
          "required": false
        },
        {
          "id": "partC.3hCheckbox",
          "type": "checkbox",
          "label": "Part C - 3h Checkbox",
          "required": false
        }
      ]
    },
    {
      "id": "section_25",
      "title": "Section 25",
      "questions": [
        {
          "id": "a.individual",
          "type": "checkbox",
          "label": "A - Individual",
          "required": false
        },
        {
          "id": "a.l1A",
          "type": "checkbox",
          "label": "A - L1 A",
          "required": false
        },
        {
          "id": "b.blanket",
          "type": "checkbox",
          "label": "B - Blanket",
          "required": false
        },
        {
          "id": "b.l1B",
          "type": "checkbox",
          "label": "B - L1 B",
          "required": false
        },
        {
          "id": "hSupLine2.familyName",
          "type": "text",
          "label": "H Sup Line2 - Family Name",
          "required": false
        },
        {
          "id": "lClassLine4.unit",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "lClassLine4.unit_2",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "lClassLine4.unit_3",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "line1.familyName_5",
          "type": "text",
          "label": "Line1 - Family Name_5",
          "required": false
        },
        {
          "id": "line2.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "lSuppLine3.nameofEmployerAbroad",
          "type": "text",
          "label": "L Supp Line3 - Nameof Employer Abroad",
          "required": false
        },
        {
          "id": "lSuppLine4a",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "lSuppLine4a_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "lSuppLine4b.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "lSuppLine4b.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "part3Line2.city",
          "type": "text",
          "label": "Part3 Line2 - City",
          "required": false
        },
        {
          "id": "part3Line2.country",
          "type": "text",
          "label": "Part3 Line2 - Country",
          "required": false
        },
        {
          "id": "part3Line2.postalCode",
          "type": "text",
          "label": "Part3 Line2 - Postal Code",
          "required": false
        },
        {
          "id": "part3Line2.province",
          "type": "text",
          "label": "Part3 Line2 - Province",
          "required": false
        },
        {
          "id": "part3Line2.state",
          "type": "select",
          "label": "Part3 Line2 - State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "part3Line2.streetName",
          "type": "text",
          "label": "Part3 Line2 - Street Name",
          "required": false
        },
        {
          "id": "part3Line2.zipCode",
          "type": "text",
          "label": "Part3 Line2 - Zip Code",
          "required": false
        },
        {
          "id": "table2.row1.dateFrom.line1",
          "type": "text",
          "label": "Table2 - Row1 - Date From - Line1",
          "required": false
        },
        {
          "id": "table2.row1.dateTo.line1",
          "type": "text",
          "label": "Table2 - Row1 - Date To - Line1",
          "required": false
        },
        {
          "id": "table2.row1.sect1.name.line1",
          "type": "text",
          "label": "Table2 - Row1 - Sect1 - Name - Line1",
          "required": false
        },
        {
          "id": "table2.row2.dateFrom.line2",
          "type": "text",
          "label": "Table2 - Row2 - Date From - Line2",
          "required": false
        },
        {
          "id": "table2.row2.dateTo.line2",
          "type": "text",
          "label": "Table2 - Row2 - Date To - Line2",
          "required": false
        },
        {
          "id": "table2.row2.sect1.name.line2",
          "type": "text",
          "label": "Table2 - Row2 - Sect1 - Name - Line2",
          "required": false
        },
        {
          "id": "table2.row3.dateFrom.line3",
          "type": "text",
          "label": "Table2 - Row3 - Date From - Line3",
          "required": false
        },
        {
          "id": "table2.row3.dateTo.line3",
          "type": "text",
          "label": "Table2 - Row3 - Date To - Line3",
          "required": false
        },
        {
          "id": "table2.row3.sect1.name.line3",
          "type": "text",
          "label": "Table2 - Row3 - Sect1 - Name - Line3",
          "required": false
        },
        {
          "id": "table2.row4.dateFrom.line3",
          "type": "text",
          "label": "Table2 - Row4 - Date From - Line3",
          "required": false
        },
        {
          "id": "table2.row4.dateFrom.line3_2",
          "type": "text",
          "label": "Table2 - Row4 - Date From - Line3_2",
          "required": false
        },
        {
          "id": "table2.row4.dateFrom.line3_3",
          "type": "text",
          "label": "Table2 - Row4 - Date From - Line3_3",
          "required": false
        },
        {
          "id": "table2.row4.dateFrom.line3_4",
          "type": "text",
          "label": "Table2 - Row4 - Date From - Line3_4",
          "required": false
        },
        {
          "id": "table2.row4.dateTo.line3",
          "type": "text",
          "label": "Table2 - Row4 - Date To - Line3",
          "required": false
        },
        {
          "id": "table2.row4.dateTo.line3_2",
          "type": "text",
          "label": "Table2 - Row4 - Date To - Line3_2",
          "required": false
        },
        {
          "id": "table2.row4.dateTo.line3_3",
          "type": "text",
          "label": "Table2 - Row4 - Date To - Line3_3",
          "required": false
        },
        {
          "id": "table2.row4.dateTo.line3_4",
          "type": "text",
          "label": "Table2 - Row4 - Date To - Line3_4",
          "required": false
        },
        {
          "id": "table2.row4.sect1.name.line3",
          "type": "text",
          "label": "Table2 - Row4 - Sect1 - Name - Line3",
          "required": false
        },
        {
          "id": "table2.row4.sect1.name.line3_2",
          "type": "text",
          "label": "Table2 - Row4 - Sect1 - Name - Line3_2",
          "required": false
        },
        {
          "id": "table2.row4.sect1.name.line3_3",
          "type": "text",
          "label": "Table2 - Row4 - Sect1 - Name - Line3_3",
          "required": false
        },
        {
          "id": "table2.row4.sect1.name.line3_4",
          "type": "text",
          "label": "Table2 - Row4 - Sect1 - Name - Line3_4",
          "required": false
        }
      ]
    },
    {
      "id": "section_27",
      "title": "Section 27",
      "questions": [
        {
          "id": "a.parent",
          "type": "checkbox",
          "label": "A - Parent",
          "required": false
        },
        {
          "id": "b.branch",
          "type": "checkbox",
          "label": "B - Branch",
          "required": false
        },
        {
          "id": "c.subsidiary",
          "type": "checkbox",
          "label": "C - Subsidiary",
          "required": false
        },
        {
          "id": "d.affiliate",
          "type": "checkbox",
          "label": "D - Affiliate",
          "required": false
        },
        {
          "id": "e.jointVenture",
          "type": "checkbox",
          "label": "E - Joint Venture",
          "required": false
        },
        {
          "id": "line3.jobDescription_2",
          "type": "text",
          "label": "Line3 - Job Description_2",
          "required": false
        },
        {
          "id": "line3.jobDescription_3",
          "type": "text",
          "label": "Line3 - Job Description_3",
          "required": false
        },
        {
          "id": "line3.jobDescription_4",
          "type": "text",
          "label": "Line3 - Job Description_4",
          "required": false
        },
        {
          "id": "table3.row1.q5.dateFrom.line1",
          "type": "text",
          "label": "Table3 - Row1 - Q5 - Date From - Line1",
          "required": false
        },
        {
          "id": "table3.row1.q5.dateTo.line1",
          "type": "text",
          "label": "Table3 - Row1 - Q5 - Date To - Line1",
          "required": false
        },
        {
          "id": "table3.row1.q5.explanation.line1",
          "type": "text",
          "label": "Table3 - Row1 - Q5 - Explanation - Line1",
          "required": false
        },
        {
          "id": "table3.row2.q5.dateFrom.line2",
          "type": "text",
          "label": "Table3 - Row2 - Q5 - Date From - Line2",
          "required": false
        },
        {
          "id": "table3.row2.q5.dateTo.line2",
          "type": "text",
          "label": "Table3 - Row2 - Q5 - Date To - Line2",
          "required": false
        },
        {
          "id": "table3.row2.q5.explanation.line2",
          "type": "text",
          "label": "Table3 - Row2 - Q5 - Explanation - Line2",
          "required": false
        },
        {
          "id": "table3.row3.q5.dateFrom.line3",
          "type": "text",
          "label": "Table3 - Row3 - Q5 - Date From - Line3",
          "required": false
        },
        {
          "id": "table3.row3.q5.dateTo.line3",
          "type": "text",
          "label": "Table3 - Row3 - Q5 - Date To - Line3",
          "required": false
        },
        {
          "id": "table3.row3.q5.explanation.line3",
          "type": "text",
          "label": "Table3 - Row3 - Q5 - Explanation - Line3",
          "required": false
        },
        {
          "id": "table3.row4.q5.dateFrom.line4",
          "type": "text",
          "label": "Table3 - Row4 - Q5 - Date From - Line4",
          "required": false
        },
        {
          "id": "table3.row4.q5.dateFrom.line5",
          "type": "text",
          "label": "Table3 - Row4 - Q5 - Date From - Line5",
          "required": false
        },
        {
          "id": "table3.row4.q5.dateFrom.line6",
          "type": "text",
          "label": "Table3 - Row4 - Q5 - Date From - Line6",
          "required": false
        },
        {
          "id": "table3.row4.q5.dateTo.line4",
          "type": "text",
          "label": "Table3 - Row4 - Q5 - Date To - Line4",
          "required": false
        },
        {
          "id": "table3.row4.q5.dateTo.line5",
          "type": "text",
          "label": "Table3 - Row4 - Q5 - Date To - Line5",
          "required": false
        },
        {
          "id": "table3.row4.q5.dateTo.line6",
          "type": "text",
          "label": "Table3 - Row4 - Q5 - Date To - Line6",
          "required": false
        },
        {
          "id": "table3.row4.q5.explanation.line4",
          "type": "text",
          "label": "Table3 - Row4 - Q5 - Explanation - Line4",
          "required": false
        },
        {
          "id": "table3.row4.q5.explanation.line5",
          "type": "text",
          "label": "Table3 - Row4 - Q5 - Explanation - Line5",
          "required": false
        },
        {
          "id": "table3.row4.q5.explanation.line6",
          "type": "text",
          "label": "Table3 - Row4 - Q5 - Explanation - Line6",
          "required": false
        }
      ]
    },
    {
      "id": "section_29",
      "title": "Section 29",
      "questions": [
        {
          "id": "line3.jobDescription_5",
          "type": "text",
          "label": "Line3 - Job Description_5",
          "required": false
        },
        {
          "id": "line3.jobDescription_6",
          "type": "text",
          "label": "Line3 - Job Description_6",
          "required": false
        },
        {
          "id": "lSec1Line11.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "lSec1Line11.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "lSec1Line12",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "lSec1Line12_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "lSec1Line12.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "lSec1Line12.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "table4.row1.fEIN.line1",
          "type": "text",
          "label": "Table4 - Row1 - F E I N - Line1",
          "required": false
        },
        {
          "id": "table4.row1.line1",
          "type": "text",
          "label": "Table4 - Row1 - Line1",
          "required": false
        },
        {
          "id": "table4.row2.fEIN.line2",
          "type": "text",
          "label": "Table4 - Row2 - F E I N - Line2",
          "required": false
        },
        {
          "id": "table4.row2.line2",
          "type": "text",
          "label": "Table4 - Row2 - Line2",
          "required": false
        },
        {
          "id": "table4.row3.fEIN.line3",
          "type": "text",
          "label": "Table4 - Row3 - F E I N - Line3",
          "required": false
        },
        {
          "id": "table4.row3.line3",
          "type": "text",
          "label": "Table4 - Row3 - Line3",
          "required": false
        },
        {
          "id": "table4.row4.fEIN.line4",
          "type": "text",
          "label": "Table4 - Row4 - F E I N - Line4",
          "required": false
        },
        {
          "id": "table4.row4.fEIN.line5",
          "type": "text",
          "label": "Table4 - Row4 - F E I N - Line5",
          "required": false
        },
        {
          "id": "table4.row4.line4",
          "type": "text",
          "label": "Table4 - Row4 - Line4",
          "required": false
        },
        {
          "id": "table4.row4.line5",
          "type": "text",
          "label": "Table4 - Row4 - Line5",
          "required": false
        }
      ]
    },
    {
      "id": "section_31",
      "title": "Section 31",
      "questions": [
        {
          "id": "table5.row1.cell1",
          "type": "text",
          "label": "Table5 - Row1 - Cell1",
          "required": false
        },
        {
          "id": "table5.row1.cell2",
          "type": "text",
          "label": "Table5 - Row1 - Cell2",
          "required": false
        },
        {
          "id": "table5.row2.cell1",
          "type": "text",
          "label": "Table5 - Row2 - Cell1",
          "required": false
        },
        {
          "id": "table5.row2.cell2",
          "type": "text",
          "label": "Table5 - Row2 - Cell2",
          "required": false
        },
        {
          "id": "table5.row3.cell1",
          "type": "text",
          "label": "Table5 - Row3 - Cell1",
          "required": false
        },
        {
          "id": "table5.row3.cell2",
          "type": "text",
          "label": "Table5 - Row3 - Cell2",
          "required": false
        },
        {
          "id": "table5.row4.cell1",
          "type": "text",
          "label": "Table5 - Row4 - Cell1",
          "required": false
        },
        {
          "id": "table5.row4.cell1_2",
          "type": "text",
          "label": "Table5 - Row4 - Cell1_2",
          "required": false
        },
        {
          "id": "table5.row4.cell1_3",
          "type": "text",
          "label": "Table5 - Row4 - Cell1_3",
          "required": false
        },
        {
          "id": "table5.row4.cell1_4",
          "type": "text",
          "label": "Table5 - Row4 - Cell1_4",
          "required": false
        },
        {
          "id": "table5.row4.cell1_5",
          "type": "text",
          "label": "Table5 - Row4 - Cell1_5",
          "required": false
        },
        {
          "id": "table5.row4.cell2",
          "type": "text",
          "label": "Table5 - Row4 - Cell2",
          "required": false
        },
        {
          "id": "table5.row4.cell2_2",
          "type": "text",
          "label": "Table5 - Row4 - Cell2_2",
          "required": false
        },
        {
          "id": "table5.row4.cell2_3",
          "type": "text",
          "label": "Table5 - Row4 - Cell2_3",
          "required": false
        },
        {
          "id": "table5.row4.cell2_4",
          "type": "text",
          "label": "Table5 - Row4 - Cell2_4",
          "required": false
        },
        {
          "id": "table5.row4.cell2_5",
          "type": "text",
          "label": "Table5 - Row4 - Cell2_5",
          "required": false
        }
      ]
    },
    {
      "id": "section_33",
      "title": "Section 33",
      "questions": [
        {
          "id": "a.o1A",
          "type": "checkbox",
          "label": "A - O1 A",
          "required": false
        },
        {
          "id": "b.o1B",
          "type": "checkbox",
          "label": "B - O1 B",
          "required": false
        },
        {
          "id": "c.o2",
          "type": "checkbox",
          "label": "C - O2",
          "required": false
        },
        {
          "id": "d.p1.majorleague",
          "type": "checkbox",
          "label": "D - P1 - Majorleague",
          "required": false
        },
        {
          "id": "e.p1",
          "type": "checkbox",
          "label": "E - P1",
          "required": false
        },
        {
          "id": "f.p1S",
          "type": "checkbox",
          "label": "F - P1 S",
          "required": false
        },
        {
          "id": "g.p2",
          "type": "checkbox",
          "label": "G - P2",
          "required": false
        },
        {
          "id": "h.p2S",
          "type": "checkbox",
          "label": "H - P2 S",
          "required": false
        },
        {
          "id": "hSupLine2.familyName_2",
          "type": "text",
          "label": "H Sup Line2 - Family Name_2",
          "required": false
        },
        {
          "id": "i.p3",
          "type": "checkbox",
          "label": "I - P3",
          "required": false
        },
        {
          "id": "j.p3S",
          "type": "checkbox",
          "label": "J - P3 S",
          "required": false
        },
        {
          "id": "line1.familyName_6",
          "type": "text",
          "label": "Line1 - Family Name_6",
          "required": false
        },
        {
          "id": "line2.ttlNumberofBeneficiaries_2",
          "type": "text",
          "label": "Line2 - Ttl Numberof Beneficiaries_2",
          "required": false
        },
        {
          "id": "line3.jobDescription_7",
          "type": "text",
          "label": "Line3 - Job Description_7",
          "required": false
        },
        {
          "id": "line3.jobDescription_8",
          "type": "text",
          "label": "Line3 - Job Description_8",
          "required": false
        },
        {
          "id": "line3.jobDescription_9",
          "type": "text",
          "label": "Line3 - Job Description_9",
          "required": false
        },
        {
          "id": "oandPSuppLine7",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "oandPSuppLine7_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        }
      ]
    },
    {
      "id": "section_34",
      "title": "Section 34",
      "questions": [
        {
          "id": "line1.duties_2",
          "type": "text",
          "label": "Line1 - Duties_2",
          "required": false
        },
        {
          "id": "line10b.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "line10b.unit",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "line10b.unit_2",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "line10b.unit_3",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "line11b.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "line11b.unit",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "line11b.unit_2",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "line11b.unit_3",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "line12b.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "line12b.unit",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "line12b.unit_2",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "line12b.unit_3",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "lSuppLine10a.nameofPeer",
          "type": "text",
          "label": "L Supp Line10a - Nameof Peer",
          "required": false
        },
        {
          "id": "lSuppLine11a.nameofPeer",
          "type": "text",
          "label": "L Supp Line11a - Nameof Peer",
          "required": false
        },
        {
          "id": "lSuppLine12a.nameofPeer",
          "type": "text",
          "label": "L Supp Line12a - Nameof Peer",
          "required": false
        },
        {
          "id": "oandPSuppLine7.no",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "oandPSuppLine7.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "oandPSuppLine8",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "oandPSuppLine8_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "oandPSuppLine8_3",
          "type": "checkbox",
          "label": "A",
          "required": false
        },
        {
          "id": "part7Lin11c.emp1FromDate",
          "type": "text",
          "label": "Part7 Lin11c - Emp1 From Date",
          "required": false
        },
        {
          "id": "part7Line10b.emp1State",
          "type": "select",
          "label": "Part7 Line10b - Emp1 State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "part7Line10b.emp1StreetName",
          "type": "text",
          "label": "Part7 Line10b - Emp1 Street Name",
          "required": false
        },
        {
          "id": "part7Line10b.emp1ZipCode",
          "type": "text",
          "label": "Part7 Line10b - Emp1 Zip Code",
          "required": false
        },
        {
          "id": "part7Line10b.empCity",
          "type": "text",
          "label": "Part7 Line10b - Emp City",
          "required": false
        },
        {
          "id": "part7Line10c.emp1FromDate",
          "type": "text",
          "label": "Part7 Line10c - Emp1 From Date",
          "required": false
        },
        {
          "id": "part7Line11b.emp1State",
          "type": "select",
          "label": "Part7 Line11b - Emp1 State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "part7Line11b.emp1StreetName",
          "type": "text",
          "label": "Part7 Line11b - Emp1 Street Name",
          "required": false
        },
        {
          "id": "part7Line11b.emp1ZipCode",
          "type": "text",
          "label": "Part7 Line11b - Emp1 Zip Code",
          "required": false
        },
        {
          "id": "part7Line11b.empCity",
          "type": "text",
          "label": "Part7 Line11b - Emp City",
          "required": false
        },
        {
          "id": "part7Line12b.emp1State",
          "type": "select",
          "label": "Part7 Line12b - Emp1 State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "part7Line12b.emp1StreetName",
          "type": "text",
          "label": "Part7 Line12b - Emp1 Street Name",
          "required": false
        },
        {
          "id": "part7Line12b.emp1ZipCode",
          "type": "text",
          "label": "Part7 Line12b - Emp1 Zip Code",
          "required": false
        },
        {
          "id": "part7Line12b.empCity",
          "type": "text",
          "label": "Part7 Line12b - Emp City",
          "required": false
        },
        {
          "id": "part7Line12c.emp1FromDate",
          "type": "text",
          "label": "Part7 Line12c - Emp1 From Date",
          "required": false
        },
        {
          "id": "preparer.daytimePhoneNumber1.10d",
          "type": "text",
          "label": "Preparer - Daytime Phone Number1 - 10d",
          "required": false
        },
        {
          "id": "preparer.daytimePhoneNumber1.11d",
          "type": "text",
          "label": "Preparer - Daytime Phone Number1 - 11d",
          "required": false
        },
        {
          "id": "preparer.daytimePhoneNumber1.12d",
          "type": "text",
          "label": "Preparer - Daytime Phone Number1 - 12d",
          "required": false
        }
      ]
    },
    {
      "id": "section_35",
      "title": "Section 35",
      "questions": [
        {
          "id": "line1.familyName_7",
          "type": "text",
          "label": "Line1 - Family Name_7",
          "required": false
        },
        {
          "id": "line1.givenName_3",
          "type": "text",
          "label": "Line1 - Given Name_3",
          "required": false
        },
        {
          "id": "line1.middleName_3",
          "type": "text",
          "label": "Line1 - Middle Name_3",
          "required": false
        },
        {
          "id": "line13b.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "line13b.unit",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "line13b.unit_2",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "line13b.unit_3",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "line1b.dateofSignature_2",
          "type": "text",
          "label": "Line1b - Dateof Signature_2",
          "required": false
        },
        {
          "id": "lSuppLine13a.nameofPeer",
          "type": "text",
          "label": "L Supp Line13a - Nameof Peer",
          "required": false
        },
        {
          "id": "p5.line6a.signatureofApplicant_5",
          "type": "text",
          "label": "P5 - Line6a - Signatureof Applicant_5",
          "required": false
        },
        {
          "id": "part7Line13b.emp1State",
          "type": "select",
          "label": "Part7 Line13b - Emp1 State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "part7Line13b.emp1StreetName",
          "type": "text",
          "label": "Part7 Line13b - Emp1 Street Name",
          "required": false
        },
        {
          "id": "part7Line13b.emp1ZipCode",
          "type": "text",
          "label": "Part7 Line13b - Emp1 Zip Code",
          "required": false
        },
        {
          "id": "part7Line13b.empCity",
          "type": "text",
          "label": "Part7 Line13b - Emp City",
          "required": false
        },
        {
          "id": "part7Line13c.emp1FromDate",
          "type": "text",
          "label": "Part7 Line13c - Emp1 From Date",
          "required": false
        },
        {
          "id": "preparer.daytimePhoneNumber1.13d",
          "type": "text",
          "label": "Preparer - Daytime Phone Number1 - 13d",
          "required": false
        },
        {
          "id": "pt7Line3.daytimePhoneNumber1_2",
          "type": "text",
          "label": "Pt7 Line3 - Daytime Phone Number1_2",
          "required": false
        },
        {
          "id": "pt7Line3.emailAddress_2",
          "type": "text",
          "label": "Pt7 Line3 - Email Address_2",
          "required": false
        }
      ]
    },
    {
      "id": "section_36",
      "title": "Section 36",
      "questions": [
        {
          "id": "hSupLine2.familyName_3",
          "type": "text",
          "label": "H Sup Line2 - Family Name_3",
          "required": false
        },
        {
          "id": "line1.familyName_8",
          "type": "text",
          "label": "Line1 - Family Name_8",
          "required": false
        },
        {
          "id": "line1.familyName_9",
          "type": "text",
          "label": "Line1 - Family Name_9",
          "required": false
        },
        {
          "id": "line1.givenName_4",
          "type": "text",
          "label": "Line1 - Given Name_4",
          "required": false
        },
        {
          "id": "line1.middleName_4",
          "type": "text",
          "label": "Line1 - Middle Name_4",
          "required": false
        },
        {
          "id": "line1b.dateofSignature_3",
          "type": "text",
          "label": "Line1b - Dateof Signature_3",
          "required": false
        },
        {
          "id": "p5.line6a.signatureofApplicant_6",
          "type": "text",
          "label": "P5 - Line6a - Signatureof Applicant_6",
          "required": false
        },
        {
          "id": "pt7Line3.daytimePhoneNumber1_3",
          "type": "text",
          "label": "Pt7 Line3 - Daytime Phone Number1_3",
          "required": false
        },
        {
          "id": "pt7Line3.emailAddress_3",
          "type": "text",
          "label": "Pt7 Line3 - Email Address_3",
          "required": false
        }
      ]
    },
    {
      "id": "section_37",
      "title": "Section 37",
      "questions": [
        {
          "id": "line1.petitionerName_2",
          "type": "text",
          "label": "Line1 - Petitioner Name_2",
          "required": false
        },
        {
          "id": "line2.beneficiaryName_2",
          "type": "text",
          "label": "Line2 - Beneficiary Name_2",
          "required": false
        },
        {
          "id": "r1Sec1Line2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "r1Sec1Line2_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "table2.row1.familyMemberName.line1",
          "type": "text",
          "label": "Table2 - Row1 - Family Member Name - Line1",
          "required": false
        },
        {
          "id": "table2.row1.fromDate1",
          "type": "text",
          "label": "Table2 - Row1 - From Date1",
          "required": false
        },
        {
          "id": "table2.row1.toDate1",
          "type": "text",
          "label": "Table2 - Row1 - To Date1",
          "required": false
        },
        {
          "id": "table2.row2.familyMemberName2",
          "type": "text",
          "label": "Table2 - Row2 - Family Member Name2",
          "required": false
        },
        {
          "id": "table2.row2.fromDate2",
          "type": "text",
          "label": "Table2 - Row2 - From Date2",
          "required": false
        },
        {
          "id": "table2.row2.toDate2",
          "type": "text",
          "label": "Table2 - Row2 - To Date2",
          "required": false
        },
        {
          "id": "table2.row3.familyMemberName3",
          "type": "text",
          "label": "Table2 - Row3 - Family Member Name3",
          "required": false
        },
        {
          "id": "table2.row3.familyMemberName4",
          "type": "text",
          "label": "Table2 - Row3 - Family Member Name4",
          "required": false
        },
        {
          "id": "table2.row3.familyMemberName5",
          "type": "text",
          "label": "Table2 - Row3 - Family Member Name5",
          "required": false
        },
        {
          "id": "table2.row3.familyMemberName6",
          "type": "text",
          "label": "Table2 - Row3 - Family Member Name6",
          "required": false
        },
        {
          "id": "table2.row3.familyMemberName7",
          "type": "text",
          "label": "Table2 - Row3 - Family Member Name7",
          "required": false
        },
        {
          "id": "table2.row3.fromDate3",
          "type": "text",
          "label": "Table2 - Row3 - From Date3",
          "required": false
        },
        {
          "id": "table2.row3.fromDate4",
          "type": "text",
          "label": "Table2 - Row3 - From Date4",
          "required": false
        },
        {
          "id": "table2.row3.fromDate5",
          "type": "text",
          "label": "Table2 - Row3 - From Date5",
          "required": false
        },
        {
          "id": "table2.row3.fromDate6",
          "type": "text",
          "label": "Table2 - Row3 - From Date6",
          "required": false
        },
        {
          "id": "table2.row3.fromDate7",
          "type": "text",
          "label": "Table2 - Row3 - From Date7",
          "required": false
        },
        {
          "id": "table2.row3.toDate3",
          "type": "text",
          "label": "Table2 - Row3 - To Date3",
          "required": false
        },
        {
          "id": "table2.row3.toDate4",
          "type": "text",
          "label": "Table2 - Row3 - To Date4",
          "required": false
        },
        {
          "id": "table2.row3.toDate5",
          "type": "text",
          "label": "Table2 - Row3 - To Date5",
          "required": false
        },
        {
          "id": "table2.row3.toDate6",
          "type": "text",
          "label": "Table2 - Row3 - To Date6",
          "required": false
        },
        {
          "id": "table2.row3.toDate7",
          "type": "text",
          "label": "Table2 - Row3 - To Date7",
          "required": false
        },
        {
          "id": "ttlNumbersofWorker_2",
          "type": "text",
          "label": "Ttl Numbersof Worker_2",
          "required": false
        },
        {
          "id": "ttlNumbersofWorker_3",
          "type": "text",
          "label": "Ttl Numbersof Worker_3",
          "required": false
        },
        {
          "id": "ttlNumbersofWorker_4",
          "type": "text",
          "label": "Ttl Numbersof Worker_4",
          "required": false
        },
        {
          "id": "ttlNumbersofWorker_5",
          "type": "text",
          "label": "Ttl Numbersof Worker_5",
          "required": false
        }
      ]
    },
    {
      "id": "section_39",
      "title": "Section 39",
      "questions": [
        {
          "id": "line3.jobDescription_10",
          "type": "text",
          "label": "Line3 - Job Description_10",
          "required": false
        },
        {
          "id": "line3.jobDescription_11",
          "type": "text",
          "label": "Line3 - Job Description_11",
          "required": false
        },
        {
          "id": "line3.jobDescription_12",
          "type": "text",
          "label": "Line3 - Job Description_12",
          "required": false
        },
        {
          "id": "line3.jobDescription_13",
          "type": "text",
          "label": "Line3 - Job Description_13",
          "required": false
        },
        {
          "id": "line3.jobDescription_14",
          "type": "text",
          "label": "Line3 - Job Description_14",
          "required": false
        },
        {
          "id": "table3.row1.position1",
          "type": "text",
          "label": "Table3 - Row1 - Position1",
          "required": false
        },
        {
          "id": "table3.row1.summary1",
          "type": "text",
          "label": "Table3 - Row1 - Summary1",
          "required": false
        },
        {
          "id": "table3.row2.position2",
          "type": "text",
          "label": "Table3 - Row2 - Position2",
          "required": false
        },
        {
          "id": "table3.row2.position3",
          "type": "text",
          "label": "Table3 - Row2 - Position3",
          "required": false
        },
        {
          "id": "table3.row2.position4",
          "type": "text",
          "label": "Table3 - Row2 - Position4",
          "required": false
        },
        {
          "id": "table3.row2.position5",
          "type": "text",
          "label": "Table3 - Row2 - Position5",
          "required": false
        },
        {
          "id": "table3.row2.position6",
          "type": "text",
          "label": "Table3 - Row2 - Position6",
          "required": false
        },
        {
          "id": "table3.row2.summary2",
          "type": "text",
          "label": "Table3 - Row2 - Summary2",
          "required": false
        },
        {
          "id": "table3.row2.summary3",
          "type": "text",
          "label": "Table3 - Row2 - Summary3",
          "required": false
        },
        {
          "id": "table3.row2.summary4",
          "type": "text",
          "label": "Table3 - Row2 - Summary4",
          "required": false
        },
        {
          "id": "table3.row2.summary5",
          "type": "text",
          "label": "Table3 - Row2 - Summary5",
          "required": false
        },
        {
          "id": "table3.row2.summary6",
          "type": "text",
          "label": "Table3 - Row2 - Summary6",
          "required": false
        }
      ]
    },
    {
      "id": "section_41",
      "title": "Section 41",
      "questions": [
        {
          "id": "line3.jobDescription_15",
          "type": "text",
          "label": "Line3 - Job Description_15",
          "required": false
        },
        {
          "id": "r1Sec1Line6a",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "r1Sec1Line6a_2",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "r1Sec1Line6a1.explanation",
          "type": "text",
          "label": "R1 Sec1 Line6a1 - Explanation",
          "required": false
        },
        {
          "id": "r1Sec1Line7a",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "r1Sec1Line7a_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "r1Sec1Line7a1.explanation",
          "type": "text",
          "label": "R1 Sec1 Line7a1 - Explanation",
          "required": false
        },
        {
          "id": "r1Sec1Line8a",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "r1Sec1Line8a_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "r1Sec1Line8a1.explanation",
          "type": "text",
          "label": "R1 Sec1 Line8a1 - Explanation",
          "required": false
        },
        {
          "id": "r1Sec1Line9a",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "r1Sec1Line9a_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "r1Sec1Line9a1.explanation",
          "type": "text",
          "label": "R1 Sec1 Line9a1 - Explanation",
          "required": false
        }
      ]
    },
    {
      "id": "section_42",
      "title": "Section 42",
      "questions": [
        {
          "id": "line5.jobTitle",
          "type": "text",
          "label": "Line5 - Job Title",
          "required": false
        },
        {
          "id": "p5.line6a.signatureofApplicant_7",
          "type": "text",
          "label": "P5 - Line6a - Signatureof Applicant_7",
          "required": false
        },
        {
          "id": "part14.dateofSignature",
          "type": "text",
          "label": "Part14 - Dateof Signature",
          "required": false
        },
        {
          "id": "part14.firmName",
          "type": "text",
          "label": "Part14 - Firm Name",
          "required": false
        },
        {
          "id": "part14.preparerPrintedName",
          "type": "text",
          "label": "Part14 - Preparer Printed Name",
          "required": false
        },
        {
          "id": "r1Sec1Line10a",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "r1Sec1Line10a_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "r1Sec1Line10a1.explanation",
          "type": "text",
          "label": "R1 Sec1 Line10a1 - Explanation",
          "required": false
        },
        {
          "id": "r1Sec1Line11a.no",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "r1Sec1Line11a.yes",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "r1Sec1Line11a1.explanation",
          "type": "text",
          "label": "R1 Sec1 Line11a1 - Explanation",
          "required": false
        },
        {
          "id": "r1Sec1Line12a",
          "type": "checkbox",
          "label": "Y",
          "required": false
        },
        {
          "id": "r1Sec1Line12a_2",
          "type": "checkbox",
          "label": "N",
          "required": false
        },
        {
          "id": "r1Sec1Line12a1.explanation",
          "type": "text",
          "label": "R1 Sec1 Line12a1 - Explanation",
          "required": false
        }
      ]
    },
    {
      "id": "section_43",
      "title": "Section 43",
      "questions": [
        {
          "id": "attest.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "attest.unit",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "attest.unit_2",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "attest.unit_3",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "employingOrgName",
          "type": "text",
          "label": "Employing Org Name",
          "required": false
        },
        {
          "id": "line2.state",
          "type": "select",
          "label": "Line2 - State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "line2.state_2",
          "type": "select",
          "label": "Line2 - State_2",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "line5.jobTitle_2",
          "type": "text",
          "label": "Line5 - Job Title_2",
          "required": false
        },
        {
          "id": "nameOfReligiousDenomination",
          "type": "text",
          "label": "Name Of Religious Denomination",
          "required": false
        },
        {
          "id": "part14.city",
          "type": "text",
          "label": "Part14 - City",
          "required": false
        },
        {
          "id": "part14.city_2",
          "type": "text",
          "label": "Part14 - City_2",
          "required": false
        },
        {
          "id": "part14.dateofSignature_2",
          "type": "text",
          "label": "Part14 - Dateof Signature_2",
          "required": false
        },
        {
          "id": "part14.emailAddress",
          "type": "text",
          "label": "Part14 - Email Address",
          "required": false
        },
        {
          "id": "part14.emailAddress_2",
          "type": "text",
          "label": "Part14 - Email Address_2",
          "required": false
        },
        {
          "id": "part14.firmName_2",
          "type": "text",
          "label": "Part14 - Firm Name_2",
          "required": false
        },
        {
          "id": "part14.preparerPrintedName_2",
          "type": "text",
          "label": "Part14 - Preparer Printed Name_2",
          "required": false
        },
        {
          "id": "part14.streetName",
          "type": "text",
          "label": "Part14 - Street Name",
          "required": false
        },
        {
          "id": "part14.streetName_2",
          "type": "text",
          "label": "Part14 - Street Name_2",
          "required": false
        },
        {
          "id": "part14.zipCode",
          "type": "text",
          "label": "Part14 - Zip Code",
          "required": false
        },
        {
          "id": "part14.zipCode_2",
          "type": "text",
          "label": "Part14 - Zip Code_2",
          "required": false
        },
        {
          "id": "preparer.daytimePhoneNumber1",
          "type": "text",
          "label": "Preparer - Daytime Phone Number1",
          "required": false
        },
        {
          "id": "preparer.daytimePhoneNumber1_2",
          "type": "text",
          "label": "Preparer - Daytime Phone Number1_2",
          "required": false
        },
        {
          "id": "preparers.faxPhoneNumber1",
          "type": "text",
          "label": "Preparers - Fax Phone Number1",
          "required": false
        },
        {
          "id": "preparers.faxPhoneNumber1_2",
          "type": "text",
          "label": "Preparers - Fax Phone Number1_2",
          "required": false
        },
        {
          "id": "preparerSignature",
          "type": "text",
          "label": "Preparer Signature",
          "required": false
        },
        {
          "id": "sec1.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "sec1.unit",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "sec1.unit_2",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "sec1.unit_3",
          "type": "checkbox",
          "label": "APT",
          "required": false
        }
      ]
    },
    {
      "id": "section_44",
      "title": "Section 44",
      "questions": [
        {
          "id": "a1.country",
          "type": "text",
          "label": "A1 - Country",
          "required": false
        },
        {
          "id": "a1.postalCode",
          "type": "text",
          "label": "A1 - Postal Code",
          "required": false
        },
        {
          "id": "a1.province",
          "type": "text",
          "label": "A1 - Province",
          "required": false
        },
        {
          "id": "a1.state",
          "type": "select",
          "label": "A1 - State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "a1.zipCode",
          "type": "text",
          "label": "A1 - Zip Code",
          "required": false
        },
        {
          "id": "att1.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "att1.unit",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "att1.unit_2",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "att1.unit_3",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "for.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "for.unit",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "for.unit_2",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "for.unit_3",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "line.cityTown_5",
          "type": "text",
          "label": "Line - City Town_5",
          "required": false
        },
        {
          "id": "line.country_3",
          "type": "text",
          "label": "Line - Country_3",
          "required": false
        },
        {
          "id": "line.country_4",
          "type": "text",
          "label": "Line - Country_4",
          "required": false
        },
        {
          "id": "line.country_5",
          "type": "text",
          "label": "Line - Country_5",
          "required": false
        },
        {
          "id": "line1.alienNumber_2",
          "type": "text",
          "label": "Line1 - Alien Number_2",
          "required": false
        },
        {
          "id": "line1.gender",
          "type": "checkbox",
          "label": "Male",
          "required": false
        },
        {
          "id": "line1.gender_2",
          "type": "checkbox",
          "label": "Female",
          "required": false
        },
        {
          "id": "line11a.dateofArrival",
          "type": "text",
          "label": "Line11a - Dateof Arrival",
          "required": false
        },
        {
          "id": "line14a.arrivalDeparture",
          "type": "text",
          "label": "Line14a - Arrival Departure",
          "required": false
        },
        {
          "id": "line14b.passport",
          "type": "text",
          "label": "Line14b - Passport",
          "required": false
        },
        {
          "id": "line14b.passport_2",
          "type": "text",
          "label": "Line14b - Passport_2",
          "required": false
        },
        {
          "id": "line14b.passport_3",
          "type": "text",
          "label": "Line14b - Passport_3",
          "required": false
        },
        {
          "id": "line14e.expDate",
          "type": "text",
          "label": "Line14e - Exp Date",
          "required": false
        },
        {
          "id": "line14e.expDate_2",
          "type": "text",
          "label": "Line14e - Exp Date_2",
          "required": false
        },
        {
          "id": "line15.currentNon",
          "type": "select",
          "label": "Line15 - Current Non",
          "required": false,
          "options": [
            {
              "label": "       ",
              "value": "       "
            },
            {
              "label": "1B1 - H-1B1 SPECIALITY OCCUPATION",
              "value": "1B1 - H-1B1 SPECIALITY OCCUPATION"
            },
            {
              "label": "1B2 - H-1B2 DoD SPECIALITY",
              "value": "1B2 - H-1B2 DoD SPECIALITY"
            },
            {
              "label": "1B3 - H-1B3 FASHION MODEL",
              "value": "1B3 - H-1B3 FASHION MODEL"
            },
            {
              "label": "1B4 - H-1B4 UNIQUE PGM ARTIST-ENT",
              "value": "1B4 - H-1B4 UNIQUE PGM ARTIST-ENT"
            },
            {
              "label": "1B5 - H-1B5 ALIEN ATHLETE",
              "value": "1B5 - H-1B5 ALIEN ATHLETE"
            },
            {
              "label": "1BS - SUPPORT PERSON OF H-1",
              "value": "1BS - SUPPORT PERSON OF H-1"
            },
            {
              "label": "A1 - AMBASSADOR, DIPLOMAT",
              "value": "A1 - AMBASSADOR, DIPLOMAT"
            },
            {
              "label": "A2 - OTHER DIPLOMATIC OFFICIALS",
              "value": "A2 - OTHER DIPLOMATIC OFFICIALS"
            },
            {
              "label": "A3 - ATTENDANTS OF A-1, A-2",
              "value": "A3 - ATTENDANTS OF A-1, A-2"
            },
            {
              "label": "AS - ASYLUM",
              "value": "AS - ASYLUM"
            },
            {
              "label": "ASD - ASYLUM STATUS DENIED",
              "value": "ASD - ASYLUM STATUS DENIED"
            },
            {
              "label": "AW - RAW APPLIED FOR AT A PORT",
              "value": "AW - RAW APPLIED FOR AT A PORT"
            },
            {
              "label": "B1 - TEMPORARY VISITOR FOR BUSINESS",
              "value": "B1 - TEMPORARY VISITOR FOR BUSINESS"
            },
            {
              "label": "B1A - NI PERSNL-DOM SRVANT OF NI EMP",
              "value": "B1A - NI PERSNL-DOM SRVANT OF NI EMP"
            },
            {
              "label": "B1B - NI DOMESTIC SERVANT OF USC",
              "value": "B1B - NI DOMESTIC SERVANT OF USC"
            },
            {
              "label": "B1C - NI EMPLOYED BY FOREIGN AIRLINE",
              "value": "B1C - NI EMPLOYED BY FOREIGN AIRLINE"
            },
            {
              "label": "B1D - NI - MISSIONARIES",
              "value": "B1D - NI - MISSIONARIES"
            },
            {
              "label": "B2 - TEMPORARY VISITOR FOR PLEASURE",
              "value": "B2 - TEMPORARY VISITOR FOR PLEASURE"
            },
            {
              "label": "BE - BERING STRAIT ENTRIES",
              "value": "BE - BERING STRAIT ENTRIES"
            },
            {
              "label": "C1 - ALIEN IN TRANSIT THROUGH U.S.",
              "value": "C1 - ALIEN IN TRANSIT THROUGH U.S."
            },
            {
              "label": "C2 - ALIEN IN TRANSIT TO UN HQ",
              "value": "C2 - ALIEN IN TRANSIT TO UN HQ"
            },
            {
              "label": "C3 - FRN GOV OFF IN TRANSIT THRU US",
              "value": "C3 - FRN GOV OFF IN TRANSIT THRU US"
            },
            {
              "label": "C4 - TRANSIT WITHOUT A VISA",
              "value": "C4 - TRANSIT WITHOUT A VISA"
            },
            {
              "label": "CC - CUBAN MASS MIGRATION PROJECT",
              "value": "CC - CUBAN MASS MIGRATION PROJECT"
            },
            {
              "label": "CH - PAROLEE (HUMANITARIAN-HQ AUTH)",
              "value": "CH - PAROLEE (HUMANITARIAN-HQ AUTH)"
            },
            {
              "label": "CP - PAROLEE (PUBLIC INT-HQ AUTH)",
              "value": "CP - PAROLEE (PUBLIC INT-HQ AUTH)"
            },
            {
              "label": "CW1 - PRINCIPAL TRANSITIONAL WORKERS",
              "value": "CW1 - PRINCIPAL TRANSITIONAL WORKERS"
            },
            {
              "label": "CW2 - DEPENDENT OF CW1",
              "value": "CW2 - DEPENDENT OF CW1"
            },
            {
              "label": "D1 - ALIEN CREW DEPART SAME VESSEL",
              "value": "D1 - ALIEN CREW DEPART SAME VESSEL"
            },
            {
              "label": "D2 - ALIEN CREW DEPART OTHER VESSEL",
              "value": "D2 - ALIEN CREW DEPART OTHER VESSEL"
            },
            {
              "label": "DA - ADVANCE PAROLE (DISTRICT AUTH)",
              "value": "DA - ADVANCE PAROLE (DISTRICT AUTH)"
            },
            {
              "label": "DE - PAROLEE (DEFERRED INSPECTION)",
              "value": "DE - PAROLEE (DEFERRED INSPECTION)"
            },
            {
              "label": "DT - PAROLEE (DISTRICT-POE AUTH)",
              "value": "DT - PAROLEE (DISTRICT-POE AUTH)"
            },
            {
              "label": "DX - CREW ARRIVING DETAINED ON SHIP",
              "value": "DX - CREW ARRIVING DETAINED ON SHIP"
            },
            {
              "label": "E1 - TREATY TRADER-SPOUSE-CHILDREN",
              "value": "E1 - TREATY TRADER-SPOUSE-CHILDREN"
            },
            {
              "label": "E2 - TREATY INVESTOR-SPOUSE-CHILD",
              "value": "E2 - TREATY INVESTOR-SPOUSE-CHILD"
            },
            {
              "label": "E2C - CNMI INVESTOR",
              "value": "E2C - CNMI INVESTOR"
            },
            {
              "label": "E3 - AUSTRALIA FREE TRADE AGREEMENT",
              "value": "E3 - AUSTRALIA FREE TRADE AGREEMENT"
            },
            {
              "label": "EAO - EMPLOYMENT ADVISORY OPTION",
              "value": "EAO - EMPLOYMENT ADVISORY OPTION"
            },
            {
              "label": "EWI - ENTRY WITHOUT INSPECTION",
              "value": "EWI - ENTRY WITHOUT INSPECTION"
            },
            {
              "label": "X - EOIR",
              "value": "X - EOIR"
            },
            {
              "label": "F1 - STUDENT - ACADEMIC",
              "value": "F1 - STUDENT - ACADEMIC"
            },
            {
              "label": "F2 - SPOUSE-CHILD OF F-1",
              "value": "F2 - SPOUSE-CHILD OF F-1"
            },
            {
              "label": "FSM - CFA ADM FED STATES MICRONESIA",
              "value": "FSM - CFA ADM FED STATES MICRONESIA"
            },
            {
              "label": "FUG - FAMILY UNITY GRANTED",
              "value": "FUG - FAMILY UNITY GRANTED"
            },
            {
              "label": "G1 - PRINCIPAL REP. FOREIGN GOVT",
              "value": "G1 - PRINCIPAL REP. FOREIGN GOVT"
            },
            {
              "label": "G2 - OTHER REP FOREIGN GOVT",
              "value": "G2 - OTHER REP FOREIGN GOVT"
            },
            {
              "label": "G3 - REP NON-RECOGNIZED FOREIGN GOV",
              "value": "G3 - REP NON-RECOGNIZED FOREIGN GOV"
            },
            {
              "label": "G4 - OFFICER-EMPLOYEE INTL. ORG.",
              "value": "G4 - OFFICER-EMPLOYEE INTL. ORG."
            },
            {
              "label": "G5 - ATTENDANTS OF G1, G2, G3, G4",
              "value": "G5 - ATTENDANTS OF G1, G2, G3, G4"
            },
            {
              "label": "GB - VISITOR WITHOUT A VISA 15 DAYS",
              "value": "GB - VISITOR WITHOUT A VISA 15 DAYS"
            },
            {
              "label": "GT - VISITOR WITHOUT A VISA 15 DAYS",
              "value": "GT - VISITOR WITHOUT A VISA 15 DAYS"
            },
            {
              "label": "H1 - ALIEN OF DIST MERIT & ABILITY",
              "value": "H1 - ALIEN OF DIST MERIT & ABILITY"
            },
            {
              "label": "H1A - REGISTERED NURSE",
              "value": "H1A - REGISTERED NURSE"
            },
            {
              "label": "H1B - SPECIALITY OCCUPATION",
              "value": "H1B - SPECIALITY OCCUPATION"
            },
            {
              "label": "H1C - NURSE RELIEF",
              "value": "H1C - NURSE RELIEF"
            },
            {
              "label": "H2 - TEMPORARY LABOR CERTIFICATION",
              "value": "H2 - TEMPORARY LABOR CERTIFICATION"
            },
            {
              "label": "H2A - TEMPORARY AGRICULTURAL WORKER",
              "value": "H2A - TEMPORARY AGRICULTURAL WORKER"
            },
            {
              "label": "H2B - TEMPORARY NON-AG WORKER",
              "value": "H2B - TEMPORARY NON-AG WORKER"
            },
            {
              "label": "H2R - RET(H2B)WRKR NOT SUBJCT TO CAP",
              "value": "H2R - RET(H2B)WRKR NOT SUBJCT TO CAP"
            },
            {
              "label": "H3 - ALIEN TRAINEE",
              "value": "H3 - ALIEN TRAINEE"
            },
            {
              "label": "H3A - TRAINEE",
              "value": "H3A - TRAINEE"
            },
            {
              "label": "H3B - SPECIAL EDUCATION TRAINING",
              "value": "H3B - SPECIAL EDUCATION TRAINING"
            },
            {
              "label": "H4 - SPS OR CHLD OF H1,H2,H3 OR H2R",
              "value": "H4 - SPS OR CHLD OF H1,H2,H3 OR H2R"
            },
            {
              "label": "HSC - FREE TRADE H1B1",
              "value": "HSC - FREE TRADE H1B1"
            },
            {
              "label": "I - FOREIGN PRESS",
              "value": "I - FOREIGN PRESS"
            },
            {
              "label": "IMM - IMMIGRANT",
              "value": "IMM - IMMIGRANT"
            },
            {
              "label": "IN - INDEFINITE PAROLE",
              "value": "IN - INDEFINITE PAROLE"
            },
            {
              "label": "J1 - EXCHANGE VISITOR - OTHERS",
              "value": "J1 - EXCHANGE VISITOR - OTHERS"
            },
            {
              "label": "J1S - EXCHANGE VISITOR - STUDENT",
              "value": "J1S - EXCHANGE VISITOR - STUDENT"
            },
            {
              "label": "J2 - SPOUSE-CHILD OF J-1",
              "value": "J2 - SPOUSE-CHILD OF J-1"
            },
            {
              "label": "J2S - SPOUSE-CHILD OF J-1S",
              "value": "J2S - SPOUSE-CHILD OF J-1S"
            },
            {
              "label": "K1 - ALIEN FIANCE(E) OF USC",
              "value": "K1 - ALIEN FIANCE(E) OF USC"
            },
            {
              "label": "K2 - CHILD OF K1",
              "value": "K2 - CHILD OF K1"
            },
            {
              "label": "K3 - SPOUSE OF USC",
              "value": "K3 - SPOUSE OF USC"
            },
            {
              "label": "K4 - CHILD OF USC",
              "value": "K4 - CHILD OF USC"
            },
            {
              "label": "L1 - INTRA-COMPANY TRANSFEREE",
              "value": "L1 - INTRA-COMPANY TRANSFEREE"
            },
            {
              "label": "L1A - MANAGER OR EXECUTIVE",
              "value": "L1A - MANAGER OR EXECUTIVE"
            },
            {
              "label": "L1B - SPECIALIZED KNOWLEDGE ALIEN",
              "value": "L1B - SPECIALIZED KNOWLEDGE ALIEN"
            },
            {
              "label": "L2 - SPOUSE-CHILD OF L-1",
              "value": "L2 - SPOUSE-CHILD OF L-1"
            },
            {
              "label": "LZ - BLANKET L PETITION",
              "value": "LZ - BLANKET L PETITION"
            },
            {
              "label": "M1 - STUDENT - VOCATIONAL-NON-ACAD.",
              "value": "M1 - STUDENT - VOCATIONAL-NON-ACAD."
            },
            {
              "label": "M2 - SPOUSE-CHILD OF M-1",
              "value": "M2 - SPOUSE-CHILD OF M-1"
            },
            {
              "label": "MIS - CFA ADM REP MARSHALL ISLANDS",
              "value": "MIS - CFA ADM REP MARSHALL ISLANDS"
            },
            {
              "label": "ML - PAROLEE-MEDICAL, LEGAL, HUMAN",
              "value": "ML - PAROLEE-MEDICAL, LEGAL, HUMAN"
            },
            {
              "label": "N1 - PRINCIPAL REP. OF NATO MEMBER",
              "value": "N1 - PRINCIPAL REP. OF NATO MEMBER"
            },
            {
              "label": "N2 - OTHER REP. OF NATO MEMBER",
              "value": "N2 - OTHER REP. OF NATO MEMBER"
            },
            {
              "label": "N3 - CLERICAL STAFF FOR N-1, N-2",
              "value": "N3 - CLERICAL STAFF FOR N-1, N-2"
            },
            {
              "label": "N4 - OFFICIALS OF NATO",
              "value": "N4 - OFFICIALS OF NATO"
            },
            {
              "label": "N5 - EXPERTS EMPLOYED BY NATO",
              "value": "N5 - EXPERTS EMPLOYED BY NATO"
            },
            {
              "label": "N6 - CIVILIAN COMPONENT OF NATO",
              "value": "N6 - CIVILIAN COMPONENT OF NATO"
            },
            {
              "label": "N7 - ATTENDANTS OF N-1 THROUGH N-6",
              "value": "N7 - ATTENDANTS OF N-1 THROUGH N-6"
            },
            {
              "label": "N8 - PARENT OF SPEC IMMIGRANT CHILD",
              "value": "N8 - PARENT OF SPEC IMMIGRANT CHILD"
            },
            {
              "label": "N9 - SPOUSE-CHILD OF N8",
              "value": "N9 - SPOUSE-CHILD OF N8"
            },
            {
              "label": "O1 - ALIEN W-EXTRAORDINARY ABILITY",
              "value": "O1 - ALIEN W-EXTRAORDINARY ABILITY"
            },
            {
              "label": "O1A - EXTRAORDINARY ALIEN - NON-ARTS",
              "value": "O1A - EXTRAORDINARY ALIEN - NON-ARTS"
            },
            {
              "label": "O1B - EXTRAORDINARY ALIEN IN ARTS",
              "value": "O1B - EXTRAORDINARY ALIEN IN ARTS"
            },
            {
              "label": "O2 - ACCOMPANYING ALIEN TO O1",
              "value": "O2 - ACCOMPANYING ALIEN TO O1"
            },
            {
              "label": "O3 - SPOUSE-CHILD OF O-1, O-2",
              "value": "O3 - SPOUSE-CHILD OF O-1, O-2"
            },
            {
              "label": "OP - PAROLEE (OVERSEAS AUTHORIZED)",
              "value": "OP - PAROLEE (OVERSEAS AUTHORIZED)"
            },
            {
              "label": "P1 - ATHLETE OR ENTERTAINER",
              "value": "P1 - ATHLETE OR ENTERTAINER"
            },
            {
              "label": "P1A - ALIEN WITH ATHLETIC EVENT",
              "value": "P1A - ALIEN WITH ATHLETIC EVENT"
            },
            {
              "label": "P1B - ALIEN WITH ENTERTAINMENT GROUP",
              "value": "P1B - ALIEN WITH ENTERTAINMENT GROUP"
            },
            {
              "label": "P1S - SUPPORT PERSON OF P-1",
              "value": "P1S - SUPPORT PERSON OF P-1"
            },
            {
              "label": "P2 - EXHANGE ARTIST-ENTERTAINER",
              "value": "P2 - EXHANGE ARTIST-ENTERTAINER"
            },
            {
              "label": "P2S - SUPPORT PERSON OF P-2",
              "value": "P2S - SUPPORT PERSON OF P-2"
            },
            {
              "label": "P3 - UNIQUE PGM ARTIST-ENTERTAINER",
              "value": "P3 - UNIQUE PGM ARTIST-ENTERTAINER"
            },
            {
              "label": "P3S - SUPPORT PERSON OF P-3",
              "value": "P3S - SUPPORT PERSON OF P-3"
            },
            {
              "label": "P4 - SPOUSE-CHILD OF P-1, P-2, P-3",
              "value": "P4 - SPOUSE-CHILD OF P-1, P-2, P-3"
            },
            {
              "label": "PAL - CFA ADMISSION PALAU",
              "value": "PAL - CFA ADMISSION PALAU"
            },
            {
              "label": "PAR - PAROLEE",
              "value": "PAR - PAROLEE"
            },
            {
              "label": "PI - PACIFIC ISLANDER",
              "value": "PI - PACIFIC ISLANDER"
            },
            {
              "label": "Q1 - INTL CULTURAL XCHG VISITORS",
              "value": "Q1 - INTL CULTURAL XCHG VISITORS"
            },
            {
              "label": "Q2 - IRISH PEACE PROCESS PARTICPNTS",
              "value": "Q2 - IRISH PEACE PROCESS PARTICPNTS"
            },
            {
              "label": "Q3 - SPOUSE-CHILD OF Q2",
              "value": "Q3 - SPOUSE-CHILD OF Q2"
            },
            {
              "label": "R1 - RELIGIOUS OCCUPATION",
              "value": "R1 - RELIGIOUS OCCUPATION"
            },
            {
              "label": "R2 - SPOUSE-CHILD OF R-1",
              "value": "R2 - SPOUSE-CHILD OF R-1"
            },
            {
              "label": "RE - REFUGEE",
              "value": "RE - REFUGEE"
            },
            {
              "label": "RE5 - HAITIAN W-GRANTED REFUGEE STAT",
              "value": "RE5 - HAITIAN W-GRANTED REFUGEE STAT"
            },
            {
              "label": "RW - RAW APPLIED FOR AT A US CO",
              "value": "RW - RAW APPLIED FOR AT A US CO"
            },
            {
              "label": "S1 - SPECIAL AGRICULTURAL WORKER",
              "value": "S1 - SPECIAL AGRICULTURAL WORKER"
            },
            {
              "label": "S2 - SPECIAL AGRICULTURAL WORKER",
              "value": "S2 - SPECIAL AGRICULTURAL WORKER"
            },
            {
              "label": "S9 - EMERGENCY FARM WORKER",
              "value": "S9 - EMERGENCY FARM WORKER"
            },
            {
              "label": "SDF - SUSPECTED DOCUMENT FRAUD",
              "value": "SDF - SUSPECTED DOCUMENT FRAUD"
            },
            {
              "label": "ST - STOWAWAY",
              "value": "ST - STOWAWAY"
            },
            {
              "label": "T1 - VICTIM OF SEVERE FORM OF TRAFK",
              "value": "T1 - VICTIM OF SEVERE FORM OF TRAFK"
            },
            {
              "label": "T2 - SPOUSE OF T1",
              "value": "T2 - SPOUSE OF T1"
            },
            {
              "label": "T3 - CHILD OF T1",
              "value": "T3 - CHILD OF T1"
            },
            {
              "label": "T4 - PARENT OF T1",
              "value": "T4 - PARENT OF T1"
            },
            {
              "label": "T5 - UNMARRIED UNDER 18 SIBLG T1 NI",
              "value": "T5 - UNMARRIED UNDER 18 SIBLG T1 NI"
            },
            {
              "label": "TB - SPOUSE OR CHILD OF CAN. FR",
              "value": "TB - SPOUSE OR CHILD OF CAN. FR"
            },
            {
              "label": "TC - CANADIAN FREE TRADE AGREEMENT",
              "value": "TC - CANADIAN FREE TRADE AGREEMENT"
            },
            {
              "label": "TD - NAFTA DEPENDENT",
              "value": "TD - NAFTA DEPENDENT"
            },
            {
              "label": "TN1 - NAFTA PRINCIPAL (CANADA)",
              "value": "TN1 - NAFTA PRINCIPAL (CANADA)"
            },
            {
              "label": "TN2 - NAFTA PRINCIPAL (MEXICO)",
              "value": "TN2 - NAFTA PRINCIPAL (MEXICO)"
            },
            {
              "label": "TWO - TRANSIT WITHOUT A VISA",
              "value": "TWO - TRANSIT WITHOUT A VISA"
            },
            {
              "label": "U1 - VICTIM OF CRIMINAL ACTIVITY",
              "value": "U1 - VICTIM OF CRIMINAL ACTIVITY"
            },
            {
              "label": "U2 - SPOUSE OF U1",
              "value": "U2 - SPOUSE OF U1"
            },
            {
              "label": "U3 - CHILD OF U1",
              "value": "U3 - CHILD OF U1"
            },
            {
              "label": "U4 - PARENT OF U1",
              "value": "U4 - PARENT OF U1"
            },
            {
              "label": "U5 - UNMARRIED UNDER 18 SIBLG U1 NI",
              "value": "U5 - UNMARRIED UNDER 18 SIBLG U1 NI"
            },
            {
              "label": "UN - UNKNOWN",
              "value": "UN - UNKNOWN"
            },
            {
              "label": "UU - UNKNOWN",
              "value": "UU - UNKNOWN"
            },
            {
              "label": "V1 - SPOUSE OF LPR",
              "value": "V1 - SPOUSE OF LPR"
            },
            {
              "label": "V2 - CHILD OF LPR",
              "value": "V2 - CHILD OF LPR"
            },
            {
              "label": "V3 - CHILD OF V2",
              "value": "V3 - CHILD OF V2"
            },
            {
              "label": "WB - VISITOR FOR BUSINESS - VWPP",
              "value": "WB - VISITOR FOR BUSINESS - VWPP"
            },
            {
              "label": "WD - WITHDRAWL (I-275)",
              "value": "WD - WITHDRAWL (I-275)"
            },
            {
              "label": "WI - WITHOUT INSPECTION",
              "value": "WI - WITHOUT INSPECTION"
            },
            {
              "label": "WT - VISITOR FOR PLEASURE - VWPP",
              "value": "WT - VISITOR FOR PLEASURE - VWPP"
            }
          ]
        },
        {
          "id": "line16.dateStatusExpires",
          "type": "text",
          "label": "Line16 - Date Status Expires",
          "required": false
        },
        {
          "id": "line3.familyName1_2",
          "type": "text",
          "label": "Line3 - Family Name1_2",
          "required": false
        },
        {
          "id": "line3.familyName1_3",
          "type": "text",
          "label": "Line3 - Family Name1_3",
          "required": false
        },
        {
          "id": "line3.givenName1_2",
          "type": "text",
          "label": "Line3 - Given Name1_2",
          "required": false
        },
        {
          "id": "line3.givenName1_3",
          "type": "text",
          "label": "Line3 - Given Name1_3",
          "required": false
        },
        {
          "id": "line3.middleName1_2",
          "type": "text",
          "label": "Line3 - Middle Name1_2",
          "required": false
        },
        {
          "id": "line3.middleName1_3",
          "type": "text",
          "label": "Line3 - Middle Name1_3",
          "required": false
        },
        {
          "id": "line5.sSN_2",
          "type": "text",
          "label": "Line5 - S S N_2",
          "required": false
        },
        {
          "id": "line6.dateOfBirth_2",
          "type": "text",
          "label": "Line6 - Date Of Birth_2",
          "required": false
        },
        {
          "id": "line7b.streetNumberName_5",
          "type": "text",
          "label": "Line7b - Street Number Name_5",
          "required": false
        },
        {
          "id": "part7LineA.emp1State",
          "type": "select",
          "label": "Part7 Line A - Emp1 State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "part7LineA.emp1StreetName",
          "type": "text",
          "label": "Part7 Line A - Emp1 Street Name",
          "required": false
        },
        {
          "id": "part7LineA.emp1ZipCode",
          "type": "text",
          "label": "Part7 Line A - Emp1 Zip Code",
          "required": false
        },
        {
          "id": "part7LineA.empCity",
          "type": "text",
          "label": "Part7 Line A - Emp City",
          "required": false
        }
      ]
    },
    {
      "id": "section_45",
      "title": "Section 45",
      "questions": [
        {
          "id": "att2.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "att2.unit",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "att2.unit_2",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "att2.unit_3",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "for2.aptSteFlrNumber",
          "type": "text",
          "label": "Apt. / Ste. / Flr.",
          "required": false
        },
        {
          "id": "for2.unit",
          "type": "checkbox",
          "label": "STE",
          "required": false
        },
        {
          "id": "for2.unit_2",
          "type": "checkbox",
          "label": "APT",
          "required": false
        },
        {
          "id": "for2.unit_3",
          "type": "checkbox",
          "label": "FLR",
          "required": false
        },
        {
          "id": "fR.country",
          "type": "text",
          "label": "F R - Country",
          "required": false
        },
        {
          "id": "fR.postalCode",
          "type": "text",
          "label": "F R - Postal Code",
          "required": false
        },
        {
          "id": "fR.province",
          "type": "text",
          "label": "F R - Province",
          "required": false
        },
        {
          "id": "fR.state",
          "type": "select",
          "label": "F R - State",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "fR.zipCode",
          "type": "text",
          "label": "F R - Zip Code",
          "required": false
        },
        {
          "id": "line.cityTown_6",
          "type": "text",
          "label": "Line - City Town_6",
          "required": false
        },
        {
          "id": "line.country_6",
          "type": "text",
          "label": "Line - Country_6",
          "required": false
        },
        {
          "id": "line.country_7",
          "type": "text",
          "label": "Line - Country_7",
          "required": false
        },
        {
          "id": "line.country_8",
          "type": "text",
          "label": "Line - Country_8",
          "required": false
        },
        {
          "id": "line1.alienNumber_3",
          "type": "text",
          "label": "Line1 - Alien Number_3",
          "required": false
        },
        {
          "id": "line11a.dateofArrival_2",
          "type": "text",
          "label": "Line11a - Dateof Arrival_2",
          "required": false
        },
        {
          "id": "line14a.arrivalDeparture_2",
          "type": "text",
          "label": "Line14a - Arrival Departure_2",
          "required": false
        },
        {
          "id": "line14b.eAD",
          "type": "text",
          "label": "Line14b - E A D",
          "required": false
        },
        {
          "id": "line14b.passport_4",
          "type": "text",
          "label": "Line14b - Passport_4",
          "required": false
        },
        {
          "id": "line14b.sEVIS",
          "type": "text",
          "label": "Line14b - S E V I S",
          "required": false
        },
        {
          "id": "line14e.expDate_3",
          "type": "text",
          "label": "Line14e - Exp Date_3",
          "required": false
        },
        {
          "id": "line14e.expDate_4",
          "type": "text",
          "label": "Line14e - Exp Date_4",
          "required": false
        },
        {
          "id": "line15.currentNon_2",
          "type": "select",
          "label": "Line15 - Current Non_2",
          "required": false,
          "options": [
            {
              "label": "       ",
              "value": "       "
            },
            {
              "label": "1B1 - H-1B1 SPECIALITY OCCUPATION",
              "value": "1B1 - H-1B1 SPECIALITY OCCUPATION"
            },
            {
              "label": "1B2 - H-1B2 DoD SPECIALITY",
              "value": "1B2 - H-1B2 DoD SPECIALITY"
            },
            {
              "label": "1B3 - H-1B3 FASHION MODEL",
              "value": "1B3 - H-1B3 FASHION MODEL"
            },
            {
              "label": "1B4 - H-1B4 UNIQUE PGM ARTIST-ENT",
              "value": "1B4 - H-1B4 UNIQUE PGM ARTIST-ENT"
            },
            {
              "label": "1B5 - H-1B5 ALIEN ATHLETE",
              "value": "1B5 - H-1B5 ALIEN ATHLETE"
            },
            {
              "label": "1BS - SUPPORT PERSON OF H-1",
              "value": "1BS - SUPPORT PERSON OF H-1"
            },
            {
              "label": "A1 - AMBASSADOR, DIPLOMAT",
              "value": "A1 - AMBASSADOR, DIPLOMAT"
            },
            {
              "label": "A2 - OTHER DIPLOMATIC OFFICIALS",
              "value": "A2 - OTHER DIPLOMATIC OFFICIALS"
            },
            {
              "label": "A3 - ATTENDANTS OF A-1, A-2",
              "value": "A3 - ATTENDANTS OF A-1, A-2"
            },
            {
              "label": "AS - ASYLUM",
              "value": "AS - ASYLUM"
            },
            {
              "label": "ASD - ASYLUM STATUS DENIED",
              "value": "ASD - ASYLUM STATUS DENIED"
            },
            {
              "label": "AW - RAW APPLIED FOR AT A PORT",
              "value": "AW - RAW APPLIED FOR AT A PORT"
            },
            {
              "label": "B1 - TEMPORARY VISITOR FOR BUSINESS",
              "value": "B1 - TEMPORARY VISITOR FOR BUSINESS"
            },
            {
              "label": "B1A - NI PERSNL-DOM SRVANT OF NI EMP",
              "value": "B1A - NI PERSNL-DOM SRVANT OF NI EMP"
            },
            {
              "label": "B1B - NI DOMESTIC SERVANT OF USC",
              "value": "B1B - NI DOMESTIC SERVANT OF USC"
            },
            {
              "label": "B1C - NI EMPLOYED BY FOREIGN AIRLINE",
              "value": "B1C - NI EMPLOYED BY FOREIGN AIRLINE"
            },
            {
              "label": "B1D - NI - MISSIONARIES",
              "value": "B1D - NI - MISSIONARIES"
            },
            {
              "label": "B2 - TEMPORARY VISITOR FOR PLEASURE",
              "value": "B2 - TEMPORARY VISITOR FOR PLEASURE"
            },
            {
              "label": "BE - BERING STRAIT ENTRIES",
              "value": "BE - BERING STRAIT ENTRIES"
            },
            {
              "label": "C1 - ALIEN IN TRANSIT THROUGH U.S.",
              "value": "C1 - ALIEN IN TRANSIT THROUGH U.S."
            },
            {
              "label": "C2 - ALIEN IN TRANSIT TO UN HQ",
              "value": "C2 - ALIEN IN TRANSIT TO UN HQ"
            },
            {
              "label": "C3 - FRN GOV OFF IN TRANSIT THRU US",
              "value": "C3 - FRN GOV OFF IN TRANSIT THRU US"
            },
            {
              "label": "C4 - TRANSIT WITHOUT A VISA",
              "value": "C4 - TRANSIT WITHOUT A VISA"
            },
            {
              "label": "CC - CUBAN MASS MIGRATION PROJECT",
              "value": "CC - CUBAN MASS MIGRATION PROJECT"
            },
            {
              "label": "CH - PAROLEE (HUMANITARIAN-HQ AUTH)",
              "value": "CH - PAROLEE (HUMANITARIAN-HQ AUTH)"
            },
            {
              "label": "CP - PAROLEE (PUBLIC INT-HQ AUTH)",
              "value": "CP - PAROLEE (PUBLIC INT-HQ AUTH)"
            },
            {
              "label": "CW1 - PRINCIPAL TRANSITIONAL WORKERS",
              "value": "CW1 - PRINCIPAL TRANSITIONAL WORKERS"
            },
            {
              "label": "CW2 - DEPENDENT OF CW1",
              "value": "CW2 - DEPENDENT OF CW1"
            },
            {
              "label": "D1 - ALIEN CREW DEPART SAME VESSEL",
              "value": "D1 - ALIEN CREW DEPART SAME VESSEL"
            },
            {
              "label": "D2 - ALIEN CREW DEPART OTHER VESSEL",
              "value": "D2 - ALIEN CREW DEPART OTHER VESSEL"
            },
            {
              "label": "DA - ADVANCE PAROLE (DISTRICT AUTH)",
              "value": "DA - ADVANCE PAROLE (DISTRICT AUTH)"
            },
            {
              "label": "DE - PAROLEE (DEFERRED INSPECTION)",
              "value": "DE - PAROLEE (DEFERRED INSPECTION)"
            },
            {
              "label": "DT - PAROLEE (DISTRICT-POE AUTH)",
              "value": "DT - PAROLEE (DISTRICT-POE AUTH)"
            },
            {
              "label": "DX - CREW ARRIVING DETAINED ON SHIP",
              "value": "DX - CREW ARRIVING DETAINED ON SHIP"
            },
            {
              "label": "E1 - TREATY TRADER-SPOUSE-CHILDREN",
              "value": "E1 - TREATY TRADER-SPOUSE-CHILDREN"
            },
            {
              "label": "E2 - TREATY INVESTOR-SPOUSE-CHILD",
              "value": "E2 - TREATY INVESTOR-SPOUSE-CHILD"
            },
            {
              "label": "E2C - CNMI INVESTOR",
              "value": "E2C - CNMI INVESTOR"
            },
            {
              "label": "E3 - AUSTRALIA FREE TRADE AGREEMENT",
              "value": "E3 - AUSTRALIA FREE TRADE AGREEMENT"
            },
            {
              "label": "EAO - EMPLOYMENT ADVISORY OPTION",
              "value": "EAO - EMPLOYMENT ADVISORY OPTION"
            },
            {
              "label": "EWI - ENTRY WITHOUT INSPECTION",
              "value": "EWI - ENTRY WITHOUT INSPECTION"
            },
            {
              "label": "X - EOIR",
              "value": "X - EOIR"
            },
            {
              "label": "F1 - STUDENT - ACADEMIC",
              "value": "F1 - STUDENT - ACADEMIC"
            },
            {
              "label": "F2 - SPOUSE-CHILD OF F-1",
              "value": "F2 - SPOUSE-CHILD OF F-1"
            },
            {
              "label": "FSM - CFA ADM FED STATES MICRONESIA",
              "value": "FSM - CFA ADM FED STATES MICRONESIA"
            },
            {
              "label": "FUG - FAMILY UNITY GRANTED",
              "value": "FUG - FAMILY UNITY GRANTED"
            },
            {
              "label": "G1 - PRINCIPAL REP. FOREIGN GOVT",
              "value": "G1 - PRINCIPAL REP. FOREIGN GOVT"
            },
            {
              "label": "G2 - OTHER REP FOREIGN GOVT",
              "value": "G2 - OTHER REP FOREIGN GOVT"
            },
            {
              "label": "G3 - REP NON-RECOGNIZED FOREIGN GOV",
              "value": "G3 - REP NON-RECOGNIZED FOREIGN GOV"
            },
            {
              "label": "G4 - OFFICER-EMPLOYEE INTL. ORG.",
              "value": "G4 - OFFICER-EMPLOYEE INTL. ORG."
            },
            {
              "label": "G5 - ATTENDANTS OF G1, G2, G3, G4",
              "value": "G5 - ATTENDANTS OF G1, G2, G3, G4"
            },
            {
              "label": "GB - VISITOR WITHOUT A VISA 15 DAYS",
              "value": "GB - VISITOR WITHOUT A VISA 15 DAYS"
            },
            {
              "label": "GT - VISITOR WITHOUT A VISA 15 DAYS",
              "value": "GT - VISITOR WITHOUT A VISA 15 DAYS"
            },
            {
              "label": "H1 - ALIEN OF DIST MERIT & ABILITY",
              "value": "H1 - ALIEN OF DIST MERIT & ABILITY"
            },
            {
              "label": "H1A - REGISTERED NURSE",
              "value": "H1A - REGISTERED NURSE"
            },
            {
              "label": "H1B - SPECIALITY OCCUPATION",
              "value": "H1B - SPECIALITY OCCUPATION"
            },
            {
              "label": "H1C - NURSE RELIEF",
              "value": "H1C - NURSE RELIEF"
            },
            {
              "label": "H2 - TEMPORARY LABOR CERTIFICATION",
              "value": "H2 - TEMPORARY LABOR CERTIFICATION"
            },
            {
              "label": "H2A - TEMPORARY AGRICULTURAL WORKER",
              "value": "H2A - TEMPORARY AGRICULTURAL WORKER"
            },
            {
              "label": "H2B - TEMPORARY NON-AG WORKER",
              "value": "H2B - TEMPORARY NON-AG WORKER"
            },
            {
              "label": "H2R - RET(H2B)WRKR NOT SUBJCT TO CAP",
              "value": "H2R - RET(H2B)WRKR NOT SUBJCT TO CAP"
            },
            {
              "label": "H3 - ALIEN TRAINEE",
              "value": "H3 - ALIEN TRAINEE"
            },
            {
              "label": "H3A - TRAINEE",
              "value": "H3A - TRAINEE"
            },
            {
              "label": "H3B - SPECIAL EDUCATION TRAINING",
              "value": "H3B - SPECIAL EDUCATION TRAINING"
            },
            {
              "label": "H4 - SPS OR CHLD OF H1,H2,H3 OR H2R",
              "value": "H4 - SPS OR CHLD OF H1,H2,H3 OR H2R"
            },
            {
              "label": "HSC - FREE TRADE H1B1",
              "value": "HSC - FREE TRADE H1B1"
            },
            {
              "label": "I - FOREIGN PRESS",
              "value": "I - FOREIGN PRESS"
            },
            {
              "label": "IMM - IMMIGRANT",
              "value": "IMM - IMMIGRANT"
            },
            {
              "label": "IN - INDEFINITE PAROLE",
              "value": "IN - INDEFINITE PAROLE"
            },
            {
              "label": "J1 - EXCHANGE VISITOR - OTHERS",
              "value": "J1 - EXCHANGE VISITOR - OTHERS"
            },
            {
              "label": "J1S - EXCHANGE VISITOR - STUDENT",
              "value": "J1S - EXCHANGE VISITOR - STUDENT"
            },
            {
              "label": "J2 - SPOUSE-CHILD OF J-1",
              "value": "J2 - SPOUSE-CHILD OF J-1"
            },
            {
              "label": "J2S - SPOUSE-CHILD OF J-1S",
              "value": "J2S - SPOUSE-CHILD OF J-1S"
            },
            {
              "label": "K1 - ALIEN FIANCE(E) OF USC",
              "value": "K1 - ALIEN FIANCE(E) OF USC"
            },
            {
              "label": "K2 - CHILD OF K1",
              "value": "K2 - CHILD OF K1"
            },
            {
              "label": "K3 - SPOUSE OF USC",
              "value": "K3 - SPOUSE OF USC"
            },
            {
              "label": "K4 - CHILD OF USC",
              "value": "K4 - CHILD OF USC"
            },
            {
              "label": "L1 - INTRA-COMPANY TRANSFEREE",
              "value": "L1 - INTRA-COMPANY TRANSFEREE"
            },
            {
              "label": "L1A - MANAGER OR EXECUTIVE",
              "value": "L1A - MANAGER OR EXECUTIVE"
            },
            {
              "label": "L1B - SPECIALIZED KNOWLEDGE ALIEN",
              "value": "L1B - SPECIALIZED KNOWLEDGE ALIEN"
            },
            {
              "label": "L2 - SPOUSE-CHILD OF L-1",
              "value": "L2 - SPOUSE-CHILD OF L-1"
            },
            {
              "label": "LZ - BLANKET L PETITION",
              "value": "LZ - BLANKET L PETITION"
            },
            {
              "label": "M1 - STUDENT - VOCATIONAL-NON-ACAD.",
              "value": "M1 - STUDENT - VOCATIONAL-NON-ACAD."
            },
            {
              "label": "M2 - SPOUSE-CHILD OF M-1",
              "value": "M2 - SPOUSE-CHILD OF M-1"
            },
            {
              "label": "MIS - CFA ADM REP MARSHALL ISLANDS",
              "value": "MIS - CFA ADM REP MARSHALL ISLANDS"
            },
            {
              "label": "ML - PAROLEE-MEDICAL, LEGAL, HUMAN",
              "value": "ML - PAROLEE-MEDICAL, LEGAL, HUMAN"
            },
            {
              "label": "N1 - PRINCIPAL REP. OF NATO MEMBER",
              "value": "N1 - PRINCIPAL REP. OF NATO MEMBER"
            },
            {
              "label": "N2 - OTHER REP. OF NATO MEMBER",
              "value": "N2 - OTHER REP. OF NATO MEMBER"
            },
            {
              "label": "N3 - CLERICAL STAFF FOR N-1, N-2",
              "value": "N3 - CLERICAL STAFF FOR N-1, N-2"
            },
            {
              "label": "N4 - OFFICIALS OF NATO",
              "value": "N4 - OFFICIALS OF NATO"
            },
            {
              "label": "N5 - EXPERTS EMPLOYED BY NATO",
              "value": "N5 - EXPERTS EMPLOYED BY NATO"
            },
            {
              "label": "N6 - CIVILIAN COMPONENT OF NATO",
              "value": "N6 - CIVILIAN COMPONENT OF NATO"
            },
            {
              "label": "N7 - ATTENDANTS OF N-1 THROUGH N-6",
              "value": "N7 - ATTENDANTS OF N-1 THROUGH N-6"
            },
            {
              "label": "N8 - PARENT OF SPEC IMMIGRANT CHILD",
              "value": "N8 - PARENT OF SPEC IMMIGRANT CHILD"
            },
            {
              "label": "N9 - SPOUSE-CHILD OF N8",
              "value": "N9 - SPOUSE-CHILD OF N8"
            },
            {
              "label": "O1 - ALIEN W-EXTRAORDINARY ABILITY",
              "value": "O1 - ALIEN W-EXTRAORDINARY ABILITY"
            },
            {
              "label": "O1A - EXTRAORDINARY ALIEN - NON-ARTS",
              "value": "O1A - EXTRAORDINARY ALIEN - NON-ARTS"
            },
            {
              "label": "O1B - EXTRAORDINARY ALIEN IN ARTS",
              "value": "O1B - EXTRAORDINARY ALIEN IN ARTS"
            },
            {
              "label": "O2 - ACCOMPANYING ALIEN TO O1",
              "value": "O2 - ACCOMPANYING ALIEN TO O1"
            },
            {
              "label": "O3 - SPOUSE-CHILD OF O-1, O-2",
              "value": "O3 - SPOUSE-CHILD OF O-1, O-2"
            },
            {
              "label": "OP - PAROLEE (OVERSEAS AUTHORIZED)",
              "value": "OP - PAROLEE (OVERSEAS AUTHORIZED)"
            },
            {
              "label": "P1 - ATHLETE OR ENTERTAINER",
              "value": "P1 - ATHLETE OR ENTERTAINER"
            },
            {
              "label": "P1A - ALIEN WITH ATHLETIC EVENT",
              "value": "P1A - ALIEN WITH ATHLETIC EVENT"
            },
            {
              "label": "P1B - ALIEN WITH ENTERTAINMENT GROUP",
              "value": "P1B - ALIEN WITH ENTERTAINMENT GROUP"
            },
            {
              "label": "P1S - SUPPORT PERSON OF P-1",
              "value": "P1S - SUPPORT PERSON OF P-1"
            },
            {
              "label": "P2 - EXHANGE ARTIST-ENTERTAINER",
              "value": "P2 - EXHANGE ARTIST-ENTERTAINER"
            },
            {
              "label": "P2S - SUPPORT PERSON OF P-2",
              "value": "P2S - SUPPORT PERSON OF P-2"
            },
            {
              "label": "P3 - UNIQUE PGM ARTIST-ENTERTAINER",
              "value": "P3 - UNIQUE PGM ARTIST-ENTERTAINER"
            },
            {
              "label": "P3S - SUPPORT PERSON OF P-3",
              "value": "P3S - SUPPORT PERSON OF P-3"
            },
            {
              "label": "P4 - SPOUSE-CHILD OF P-1, P-2, P-3",
              "value": "P4 - SPOUSE-CHILD OF P-1, P-2, P-3"
            },
            {
              "label": "PAL - CFA ADMISSION PALAU",
              "value": "PAL - CFA ADMISSION PALAU"
            },
            {
              "label": "PAR - PAROLEE",
              "value": "PAR - PAROLEE"
            },
            {
              "label": "PI - PACIFIC ISLANDER",
              "value": "PI - PACIFIC ISLANDER"
            },
            {
              "label": "Q1 - INTL CULTURAL XCHG VISITORS",
              "value": "Q1 - INTL CULTURAL XCHG VISITORS"
            },
            {
              "label": "Q2 - IRISH PEACE PROCESS PARTICPNTS",
              "value": "Q2 - IRISH PEACE PROCESS PARTICPNTS"
            },
            {
              "label": "Q3 - SPOUSE-CHILD OF Q2",
              "value": "Q3 - SPOUSE-CHILD OF Q2"
            },
            {
              "label": "R1 - RELIGIOUS OCCUPATION",
              "value": "R1 - RELIGIOUS OCCUPATION"
            },
            {
              "label": "R2 - SPOUSE-CHILD OF R-1",
              "value": "R2 - SPOUSE-CHILD OF R-1"
            },
            {
              "label": "RE - REFUGEE",
              "value": "RE - REFUGEE"
            },
            {
              "label": "RE5 - HAITIAN W-GRANTED REFUGEE STAT",
              "value": "RE5 - HAITIAN W-GRANTED REFUGEE STAT"
            },
            {
              "label": "RW - RAW APPLIED FOR AT A US CO",
              "value": "RW - RAW APPLIED FOR AT A US CO"
            },
            {
              "label": "S1 - SPECIAL AGRICULTURAL WORKER",
              "value": "S1 - SPECIAL AGRICULTURAL WORKER"
            },
            {
              "label": "S2 - SPECIAL AGRICULTURAL WORKER",
              "value": "S2 - SPECIAL AGRICULTURAL WORKER"
            },
            {
              "label": "S9 - EMERGENCY FARM WORKER",
              "value": "S9 - EMERGENCY FARM WORKER"
            },
            {
              "label": "SDF - SUSPECTED DOCUMENT FRAUD",
              "value": "SDF - SUSPECTED DOCUMENT FRAUD"
            },
            {
              "label": "ST - STOWAWAY",
              "value": "ST - STOWAWAY"
            },
            {
              "label": "T1 - VICTIM OF SEVERE FORM OF TRAFK",
              "value": "T1 - VICTIM OF SEVERE FORM OF TRAFK"
            },
            {
              "label": "T2 - SPOUSE OF T1",
              "value": "T2 - SPOUSE OF T1"
            },
            {
              "label": "T3 - CHILD OF T1",
              "value": "T3 - CHILD OF T1"
            },
            {
              "label": "T4 - PARENT OF T1",
              "value": "T4 - PARENT OF T1"
            },
            {
              "label": "T5 - UNMARRIED UNDER 18 SIBLG T1 NI",
              "value": "T5 - UNMARRIED UNDER 18 SIBLG T1 NI"
            },
            {
              "label": "TB - SPOUSE OR CHILD OF CAN. FR",
              "value": "TB - SPOUSE OR CHILD OF CAN. FR"
            },
            {
              "label": "TC - CANADIAN FREE TRADE AGREEMENT",
              "value": "TC - CANADIAN FREE TRADE AGREEMENT"
            },
            {
              "label": "TD - NAFTA DEPENDENT",
              "value": "TD - NAFTA DEPENDENT"
            },
            {
              "label": "TN1 - NAFTA PRINCIPAL (CANADA)",
              "value": "TN1 - NAFTA PRINCIPAL (CANADA)"
            },
            {
              "label": "TN2 - NAFTA PRINCIPAL (MEXICO)",
              "value": "TN2 - NAFTA PRINCIPAL (MEXICO)"
            },
            {
              "label": "TWO - TRANSIT WITHOUT A VISA",
              "value": "TWO - TRANSIT WITHOUT A VISA"
            },
            {
              "label": "U1 - VICTIM OF CRIMINAL ACTIVITY",
              "value": "U1 - VICTIM OF CRIMINAL ACTIVITY"
            },
            {
              "label": "U2 - SPOUSE OF U1",
              "value": "U2 - SPOUSE OF U1"
            },
            {
              "label": "U3 - CHILD OF U1",
              "value": "U3 - CHILD OF U1"
            },
            {
              "label": "U4 - PARENT OF U1",
              "value": "U4 - PARENT OF U1"
            },
            {
              "label": "U5 - UNMARRIED UNDER 18 SIBLG U1 NI",
              "value": "U5 - UNMARRIED UNDER 18 SIBLG U1 NI"
            },
            {
              "label": "UN - UNKNOWN",
              "value": "UN - UNKNOWN"
            },
            {
              "label": "UU - UNKNOWN",
              "value": "UU - UNKNOWN"
            },
            {
              "label": "V1 - SPOUSE OF LPR",
              "value": "V1 - SPOUSE OF LPR"
            },
            {
              "label": "V2 - CHILD OF LPR",
              "value": "V2 - CHILD OF LPR"
            },
            {
              "label": "V3 - CHILD OF V2",
              "value": "V3 - CHILD OF V2"
            },
            {
              "label": "WB - VISITOR FOR BUSINESS - VWPP",
              "value": "WB - VISITOR FOR BUSINESS - VWPP"
            },
            {
              "label": "WD - WITHDRAWL (I-275)",
              "value": "WD - WITHDRAWL (I-275)"
            },
            {
              "label": "WI - WITHOUT INSPECTION",
              "value": "WI - WITHOUT INSPECTION"
            },
            {
              "label": "WT - VISITOR FOR PLEASURE - VWPP",
              "value": "WT - VISITOR FOR PLEASURE - VWPP"
            }
          ]
        },
        {
          "id": "line16.dateStatusExpires_2",
          "type": "text",
          "label": "Line16 - Date Status Expires_2",
          "required": false
        },
        {
          "id": "line2.gender",
          "type": "checkbox",
          "label": "Male",
          "required": false
        },
        {
          "id": "line2.gender_2",
          "type": "checkbox",
          "label": "Female",
          "required": false
        },
        {
          "id": "line3.familyName1_4",
          "type": "text",
          "label": "Line3 - Family Name1_4",
          "required": false
        },
        {
          "id": "line3.familyName1_5",
          "type": "text",
          "label": "Line3 - Family Name1_5",
          "required": false
        },
        {
          "id": "line3.givenName1_4",
          "type": "text",
          "label": "Line3 - Given Name1_4",
          "required": false
        },
        {
          "id": "line3.givenName1_5",
          "type": "text",
          "label": "Line3 - Given Name1_5",
          "required": false
        },
        {
          "id": "line3.middleName1_4",
          "type": "text",
          "label": "Line3 - Middle Name1_4",
          "required": false
        },
        {
          "id": "line3.middleName1_5",
          "type": "text",
          "label": "Line3 - Middle Name1_5",
          "required": false
        },
        {
          "id": "line5.sSN_3",
          "type": "text",
          "label": "Line5 - S S N_3",
          "required": false
        },
        {
          "id": "line6.dateOfBirth_3",
          "type": "text",
          "label": "Line6 - Date Of Birth_3",
          "required": false
        },
        {
          "id": "line7b.streetNumberName_6",
          "type": "text",
          "label": "Line7b - Street Number Name_6",
          "required": false
        },
        {
          "id": "part7LineA.emp1State_2",
          "type": "select",
          "label": "Part7 Line A - Emp1 State_2",
          "required": false,
          "options": [
            {
              "label": " ",
              "value": " "
            },
            {
              "label": "AA",
              "value": "AA"
            },
            {
              "label": "AE",
              "value": "AE"
            },
            {
              "label": "AK",
              "value": "AK"
            },
            {
              "label": "AL",
              "value": "AL"
            },
            {
              "label": "AP",
              "value": "AP"
            },
            {
              "label": "AR",
              "value": "AR"
            },
            {
              "label": "AS",
              "value": "AS"
            },
            {
              "label": "AZ",
              "value": "AZ"
            },
            {
              "label": "CA",
              "value": "CA"
            },
            {
              "label": "CO",
              "value": "CO"
            },
            {
              "label": "CT",
              "value": "CT"
            },
            {
              "label": "DC",
              "value": "DC"
            },
            {
              "label": "DE",
              "value": "DE"
            },
            {
              "label": "FL",
              "value": "FL"
            },
            {
              "label": "FM",
              "value": "FM"
            },
            {
              "label": "GA",
              "value": "GA"
            },
            {
              "label": "GU",
              "value": "GU"
            },
            {
              "label": "HI",
              "value": "HI"
            },
            {
              "label": "IA",
              "value": "IA"
            },
            {
              "label": "ID",
              "value": "ID"
            },
            {
              "label": "IL",
              "value": "IL"
            },
            {
              "label": "IN",
              "value": "IN"
            },
            {
              "label": "KS",
              "value": "KS"
            },
            {
              "label": "KY",
              "value": "KY"
            },
            {
              "label": "LA",
              "value": "LA"
            },
            {
              "label": "MA",
              "value": "MA"
            },
            {
              "label": "MD",
              "value": "MD"
            },
            {
              "label": "ME",
              "value": "ME"
            },
            {
              "label": "MH",
              "value": "MH"
            },
            {
              "label": "MI",
              "value": "MI"
            },
            {
              "label": "MN",
              "value": "MN"
            },
            {
              "label": "MO",
              "value": "MO"
            },
            {
              "label": "MP",
              "value": "MP"
            },
            {
              "label": "MS",
              "value": "MS"
            },
            {
              "label": "MT",
              "value": "MT"
            },
            {
              "label": "NC",
              "value": "NC"
            },
            {
              "label": "ND",
              "value": "ND"
            },
            {
              "label": "NE",
              "value": "NE"
            },
            {
              "label": "NH",
              "value": "NH"
            },
            {
              "label": "NJ",
              "value": "NJ"
            },
            {
              "label": "NM",
              "value": "NM"
            },
            {
              "label": "NV",
              "value": "NV"
            },
            {
              "label": "NY",
              "value": "NY"
            },
            {
              "label": "OH",
              "value": "OH"
            },
            {
              "label": "OK",
              "value": "OK"
            },
            {
              "label": "OR",
              "value": "OR"
            },
            {
              "label": "PA",
              "value": "PA"
            },
            {
              "label": "PR",
              "value": "PR"
            },
            {
              "label": "PW",
              "value": "PW"
            },
            {
              "label": "RI",
              "value": "RI"
            },
            {
              "label": "SC",
              "value": "SC"
            },
            {
              "label": "SD",
              "value": "SD"
            },
            {
              "label": "TN",
              "value": "TN"
            },
            {
              "label": "TX",
              "value": "TX"
            },
            {
              "label": "UT",
              "value": "UT"
            },
            {
              "label": "VA",
              "value": "VA"
            },
            {
              "label": "VI",
              "value": "VI"
            },
            {
              "label": "VT",
              "value": "VT"
            },
            {
              "label": "WA",
              "value": "WA"
            },
            {
              "label": "WI",
              "value": "WI"
            },
            {
              "label": "WV",
              "value": "WV"
            },
            {
              "label": "WY",
              "value": "WY"
            }
          ]
        },
        {
          "id": "part7LineA.emp1StreetName_2",
          "type": "text",
          "label": "Part7 Line A - Emp1 Street Name_2",
          "required": false
        },
        {
          "id": "part7LineA.emp1ZipCode_2",
          "type": "text",
          "label": "Part7 Line A - Emp1 Zip Code_2",
          "required": false
        },
        {
          "id": "part7LineA.empCity_2",
          "type": "text",
          "label": "Part7 Line A - Emp City_2",
          "required": false
        }
      ]
    },
    {
      "id": "section_9999",
      "title": "Section 9999",
      "questions": [
        {
          "id": "form1.pDF417BarCode1",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_10",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_10",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_11",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_11",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_12",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_12",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_13",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_13",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_14",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_14",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_15",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_15",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_16",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_16",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_17",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_17",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_18",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_18",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_19",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_19",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_2",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_2",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_20",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_20",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_21",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_21",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_22",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_22",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_23",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_23",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_24",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_24",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_25",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_25",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_26",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_26",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_27",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_27",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_28",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_28",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_29",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_29",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_3",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_3",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_30",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_30",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_31",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_31",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_32",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_32",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_33",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_33",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_34",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_34",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_35",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_35",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_36",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_36",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_37",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_37",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_38",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_38",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_4",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_4",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_5",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_5",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_6",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_6",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_7",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_7",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_8",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_8",
          "required": false
        },
        {
          "id": "form1.pDF417BarCode1_9",
          "type": "text",
          "label": "Form1 - P D F417 Bar Code1_9",
          "required": false
        }
      ]
    }
  ],
  "pdfFieldMappings": I_129_FIELD_MAPPINGS
};
