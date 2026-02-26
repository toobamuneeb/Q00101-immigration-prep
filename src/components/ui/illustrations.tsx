export function DocumentsIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background with gradient */}
      <rect width="400" height="300" fill="url(#docGradient)"/>
      
      {/* Floating particles */}
      <circle cx="50" cy="50" r="3" fill="#0066CC" opacity="0.3">
        <animate attributeName="cy" values="50;45;50" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="350" cy="80" r="2" fill="#10B981" opacity="0.4">
        <animate attributeName="cy" values="80;75;80" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="80" cy="250" r="2.5" fill="#8B5CF6" opacity="0.3">
        <animate attributeName="cy" values="250;245;250" dur="3.5s" repeatCount="indefinite"/>
      </circle>
      
      {/* AI Assistant Character */}
      <g transform="translate(50, 80)">
        {/* Body */}
        <ellipse cx="60" cy="120" rx="45" ry="50" fill="url(#bodyGradient)"/>
        
        {/* Arms */}
        <path d="M25 100 Q15 110 20 125" stroke="#0066CC" strokeWidth="8" strokeLinecap="round" fill="none"/>
        <path d="M95 100 Q105 110 100 125" stroke="#0066CC" strokeWidth="8" strokeLinecap="round" fill="none"/>
        
        {/* Head */}
        <circle cx="60" cy="60" r="35" fill="url(#headGradient)"/>
        
        {/* Face - Happy expression */}
        <circle cx="50" cy="55" r="4" fill="#1E293B"/>
        <circle cx="70" cy="55" r="4" fill="#1E293B"/>
        <path d="M45 70 Q60 78 75 70" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" fill="none"/>
        
        {/* Antenna */}
        <line x1="60" y1="25" x2="60" y2="15" stroke="#0066CC" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="60" cy="12" r="5" fill="#10B981">
          <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>
        </circle>
        
        {/* Chest panel */}
        <rect x="45" y="105" width="30" height="25" rx="4" fill="#E0F2FE" stroke="#0066CC" strokeWidth="2"/>
        <line x1="52" y1="112" x2="68" y2="112" stroke="#0066CC" strokeWidth="2"/>
        <line x1="52" y1="118" x2="68" y2="118" stroke="#0066CC" strokeWidth="2"/>
        <line x1="52" y1="124" x2="68" y2="124" stroke="#0066CC" strokeWidth="2"/>
      </g>
      
      {/* Floating Documents */}
      <g transform="translate(180, 60)">
        {/* Document 1 */}
        <g>
          <rect x="0" y="0" width="140" height="100" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" opacity="0.95">
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-5; 0,0" dur="3s" repeatCount="indefinite"/>
          </rect>
          <rect x="15" y="15" width="80" height="6" rx="3" fill="#0066CC" opacity="0.3"/>
          <rect x="15" y="28" width="110" height="4" rx="2" fill="#CBD5E1"/>
          <rect x="15" y="38" width="100" height="4" rx="2" fill="#E2E8F0"/>
          <rect x="15" y="48" width="90" height="4" rx="2" fill="#E2E8F0"/>
          <circle cx="25" cy="75" r="12" fill="#10B981" opacity="0.2"/>
          <path d="M20 75 L23 78 L30 71" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </g>
        
        {/* Document 2 - Behind */}
        <g transform="translate(20, 120)">
          <rect x="0" y="0" width="140" height="100" rx="8" fill="white" stroke="#E2E8F0" strokeWidth="2" opacity="0.9">
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-3; 0,0" dur="3.5s" repeatCount="indefinite"/>
          </rect>
          <rect x="15" y="15" width="70" height="6" rx="3" fill="#8B5CF6" opacity="0.3"/>
          <rect x="15" y="28" width="110" height="4" rx="2" fill="#CBD5E1"/>
          <rect x="15" y="38" width="95" height="4" rx="2" fill="#E2E8F0"/>
          <rect x="15" y="48" width="85" height="4" rx="2" fill="#E2E8F0"/>
        </g>
      </g>
      
      {/* Sparkles */}
      <g opacity="0.6">
        <path d="M320 100 L322 105 L327 107 L322 109 L320 114 L318 109 L313 107 L318 105 Z" fill="#F59E0B">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M340 180 L341 183 L344 184 L341 185 L340 188 L339 185 L336 184 L339 183 Z" fill="#10B981">
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
        </path>
      </g>
      
      <defs>
        <linearGradient id="docGradient" x1="0" y1="0" x2="400" y2="300">
          <stop offset="0%" stopColor="#EFF6FF"/>
          <stop offset="100%" stopColor="#DBEAFE"/>
        </linearGradient>
        <linearGradient id="bodyGradient" x1="0" y1="0" x2="0" y2="100">
          <stop offset="0%" stopColor="#0066CC"/>
          <stop offset="100%" stopColor="#004C99"/>
        </linearGradient>
        <linearGradient id="headGradient" x1="0" y1="0" x2="0" y2="70">
          <stop offset="0%" stopColor="#60A5FA"/>
          <stop offset="100%" stopColor="#3B82F6"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ProgressIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="400" height="300" fill="url(#progressGradient)"/>
      
      {/* Floating elements */}
      <circle cx="60" cy="40" r="2.5" fill="#10B981" opacity="0.4">
        <animate attributeName="cy" values="40;35;40" dur="3s" repeatCount="indefinite"/>
      </circle>
      <circle cx="340" cy="260" r="3" fill="#0066CC" opacity="0.3">
        <animate attributeName="cy" values="260;255;260" dur="2.8s" repeatCount="indefinite"/>
      </circle>
      
      {/* Professional Human Character */}
      <g transform="translate(240, 80)">
        {/* Body - Business attire */}
        <ellipse cx="60" cy="120" rx="45" ry="55" fill="#1E40AF"/>
        
        {/* Collar/Shirt */}
        <path d="M30 90 L60 100 L90 90" fill="white" stroke="#CBD5E1" strokeWidth="2"/>
        <circle cx="60" cy="100" r="3" fill="#0066CC"/>
        <circle cx="60" cy="108" r="3" fill="#0066CC"/>
        
        {/* Arms */}
        <ellipse cx="20" cy="110" rx="12" ry="35" fill="#1E40AF" transform="rotate(-15 20 110)"/>
        <ellipse cx="100" cy="110" rx="12" ry="35" fill="#1E40AF" transform="rotate(15 100 110)"/>
        
        {/* Head - Skin tone */}
        <circle cx="60" cy="60" r="35" fill="#FBBF24"/>
        
        {/* Hair */}
        <path d="M30 50 Q60 25 90 50" fill="#1F2937" stroke="#1F2937" strokeWidth="2"/>
        <ellipse cx="60" cy="35" rx="32" ry="20" fill="#1F2937"/>
        
        {/* Face - Professional expression */}
        <circle cx="48" cy="58" r="4" fill="#1E293B"/>
        <circle cx="72" cy="58" r="4" fill="#1E293B"/>
        <path d="M48 72 Q60 76 72 72" stroke="#1E293B" strokeWidth="2" fill="none" strokeLinecap="round"/>
        
        {/* Glasses */}
        <circle cx="48" cy="58" r="8" fill="none" stroke="#1E293B" strokeWidth="2"/>
        <circle cx="72" cy="58" r="8" fill="none" stroke="#1E293B" strokeWidth="2"/>
        <line x1="56" y1="58" x2="64" y2="58" stroke="#1E293B" strokeWidth="2"/>
        
        {/* Thumbs up gesture */}
        <g transform="translate(95, 95)">
          <rect x="0" y="10" width="12" height="20" rx="3" fill="#FBBF24"/>
          <rect x="0" y="0" width="8" height="15" rx="3" fill="#FBBF24" transform="rotate(-30 4 0)"/>
        </g>
        
        {/* Briefcase/Document */}
        <g transform="translate(10, 130)">
          <rect x="0" y="0" width="20" height="15" rx="2" fill="#64748B" stroke="#475569" strokeWidth="1.5"/>
          <rect x="8" y="-3" width="4" height="3" rx="1" fill="#475569"/>
        </g>
      </g>
      
      {/* Progress Steps with checkmarks */}
      <g transform="translate(40, 80)">
        {/* Step 1 - Completed */}
        <g>
          <circle cx="30" cy="30" r="22" fill="#10B981" stroke="#059669" strokeWidth="2"/>
          <path d="M20 30 L27 37 L40 24" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <rect x="60" y="15" width="120" height="30" rx="6" fill="white" stroke="#10B981" strokeWidth="2" opacity="0.95"/>
          <rect x="70" y="23" width="80" height="4" rx="2" fill="#10B981" opacity="0.4"/>
          <rect x="70" y="31" width="60" height="3" rx="1.5" fill="#10B981" opacity="0.3"/>
        </g>
        
        {/* Connector */}
        <line x1="30" y1="52" x2="30" y2="78" stroke="#CBD5E1" strokeWidth="3" strokeDasharray="5 5">
          <animate attributeName="stroke-dashoffset" values="0;10" dur="1s" repeatCount="indefinite"/>
        </line>
        
        {/* Step 2 - In Progress */}
        <g>
          <circle cx="30" cy="100" r="22" fill="#0066CC" stroke="#004C99" strokeWidth="2"/>
          <circle cx="30" cy="100" r="22" fill="#0066CC" opacity="0.3">
            <animate attributeName="r" values="22;28;22" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
          <text x="30" y="108" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">2</text>
          <rect x="60" y="85" width="120" height="30" rx="6" fill="white" stroke="#0066CC" strokeWidth="2" opacity="0.95"/>
          <rect x="70" y="93" width="70" height="4" rx="2" fill="#0066CC" opacity="0.4"/>
          <rect x="70" y="101" width="50" height="3" rx="1.5" fill="#CBD5E1"/>
        </g>
        
        {/* Connector */}
        <line x1="30" y1="122" x2="30" y2="148" stroke="#E2E8F0" strokeWidth="3" strokeDasharray="5 5"/>
        
        {/* Step 3 - Pending */}
        <g opacity="0.5">
          <circle cx="30" cy="170" r="22" fill="#E2E8F0" stroke="#CBD5E1" strokeWidth="2"/>
          <text x="30" y="178" textAnchor="middle" fill="#64748B" fontSize="18" fontWeight="bold">3</text>
          <rect x="60" y="155" width="120" height="30" rx="6" fill="white" stroke="#E2E8F0" strokeWidth="2"/>
          <rect x="70" y="163" width="50" height="4" rx="2" fill="#E2E8F0"/>
          <rect x="70" y="171" width="35" height="3" rx="1.5" fill="#E2E8F0"/>
        </g>
      </g>
      
      {/* Sparkles around robot */}
      <g opacity="0.7">
        <path d="M310 80 L312 85 L317 87 L312 89 L310 94 L308 89 L303 87 L308 85 Z" fill="#F59E0B">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite"/>
        </path>
        <path d="M330 200 L331 203 L334 204 L331 205 L330 208 L329 205 L326 204 L329 203 Z" fill="#10B981">
          <animate attributeName="opacity" values="0.7;1;0.7" dur="2.3s" repeatCount="indefinite"/>
        </path>
      </g>
      
      <defs>
        <linearGradient id="progressGradient" x1="0" y1="0" x2="400" y2="300">
          <stop offset="0%" stopColor="#ECFDF5"/>
          <stop offset="100%" stopColor="#D1FAE5"/>
        </linearGradient>
        <linearGradient id="robotBody" x1="0" y1="0" x2="0" y2="70">
          <stop offset="0%" stopColor="#60A5FA"/>
          <stop offset="100%" stopColor="#3B82F6"/>
        </linearGradient>
        <linearGradient id="robotHead" x1="0" y1="0" x2="0" y2="55">
          <stop offset="0%" stopColor="#93C5FD"/>
          <stop offset="100%" stopColor="#60A5FA"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function FormsGridIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="400" height="300" fill="url(#gradient3)"/>
      
      {/* Friendly Robot Character */}
      <g transform="translate(50, 100)">
        {/* Body */}
        <rect x="30" y="80" width="80" height="90" rx="12" fill="#60A5FA" stroke="#1E40AF" strokeWidth="3"/>
        
        {/* Screen/Display on chest */}
        <rect x="45" y="100" width="50" height="35" rx="4" fill="#1E40AF"/>
        <rect x="50" y="105" width="40" height="5" rx="2" fill="#10B981">
          <animate attributeName="width" values="40;20;40" dur="2s" repeatCount="indefinite"/>
        </rect>
        <rect x="50" y="115" width="40" height="5" rx="2" fill="#10B981">
          <animate attributeName="width" values="40;30;40" dur="2.5s" repeatCount="indefinite"/>
        </rect>
        <rect x="50" y="125" width="40" height="5" rx="2" fill="#10B981">
          <animate attributeName="width" values="40;25;40" dur="2.2s" repeatCount="indefinite"/>
        </rect>
        
        {/* Arms */}
        <rect x="5" y="90" width="20" height="60" rx="10" fill="#60A5FA" stroke="#1E40AF" strokeWidth="2"/>
        <rect x="115" y="90" width="20" height="60" rx="10" fill="#60A5FA" stroke="#1E40AF" strokeWidth="2"/>
        
        {/* Hands holding forms */}
        <circle cx="15" cy="155" r="10" fill="#FBBF24"/>
        <circle cx="125" cy="155" r="10" fill="#FBBF24"/>
        
        {/* Head */}
        <rect x="40" y="30" width="60" height="55" rx="8" fill="#60A5FA" stroke="#1E40AF" strokeWidth="3"/>
        
        {/* Eyes - Digital display */}
        <rect x="50" y="45" width="15" height="15" rx="2" fill="#1E40AF"/>
        <rect x="75" y="45" width="15" height="15" rx="2" fill="#1E40AF"/>
        <circle cx="57" cy="52" r="4" fill="#10B981">
          <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle cx="82" cy="52" r="4" fill="#10B981">
          <animate attributeName="opacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
        </circle>
        
        {/* Smile */}
        <path d="M55 68 Q70 75 85 68" stroke="#1E40AF" strokeWidth="3" fill="none" strokeLinecap="round"/>
        
        {/* Antenna */}
        <line x1="70" y1="30" x2="70" y2="15" stroke="#1E40AF" strokeWidth="3"/>
        <circle cx="70" cy="10" r="6" fill="#EF4444">
          <animate attributeName="fill" values="#EF4444;#FCD34D;#EF4444" dur="2s" repeatCount="indefinite"/>
        </circle>
      </g>
      
      {/* Floating Form Cards */}
      <g transform="translate(180, 40)">
        {/* Form 1 */}
        <g>
          <rect x="0" y="0" width="70" height="90" rx="6" fill="white" stroke="#0066CC" strokeWidth="2">
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-10; 0,0" dur="3s" repeatCount="indefinite"/>
          </rect>
          <rect x="10" y="10" width="50" height="6" rx="3" fill="#0066CC" opacity="0.3"/>
          <rect x="10" y="22" width="40" height="4" rx="2" fill="#CBD5E1"/>
          <rect x="10" y="30" width="45" height="4" rx="2" fill="#CBD5E1"/>
          <circle cx="35" cy="55" r="15" fill="#10B981" opacity="0.2"/>
          <path d="M28 55 L33 60 L42 51" stroke="#10B981" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </g>
        
        {/* Form 2 */}
        <g transform="translate(85, 20)">
          <rect x="0" y="0" width="70" height="90" rx="6" fill="white" stroke="#10B981" strokeWidth="2">
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-8; 0,0" dur="2.5s" repeatCount="indefinite"/>
          </rect>
          <rect x="10" y="10" width="50" height="6" rx="3" fill="#10B981" opacity="0.3"/>
          <rect x="10" y="22" width="40" height="4" rx="2" fill="#CBD5E1"/>
          <rect x="10" y="30" width="45" height="4" rx="2" fill="#CBD5E1"/>
          <circle cx="35" cy="55" r="15" fill="#0066CC" opacity="0.2"/>
          <text x="35" y="61" textAnchor="middle" fill="#0066CC" fontSize="16" fontWeight="bold">i</text>
        </g>
        
        {/* Form 3 */}
        <g transform="translate(40, 110)">
          <rect x="0" y="0" width="70" height="90" rx="6" fill="white" stroke="#8B5CF6" strokeWidth="2">
            <animateTransform attributeName="transform" type="translate" values="0,0; 0,-12; 0,0" dur="3.5s" repeatCount="indefinite"/>
          </rect>
          <rect x="10" y="10" width="50" height="6" rx="3" fill="#8B5CF6" opacity="0.3"/>
          <rect x="10" y="22" width="40" height="4" rx="2" fill="#CBD5E1"/>
          <rect x="10" y="30" width="45" height="4" rx="2" fill="#CBD5E1"/>
          <circle cx="35" cy="55" r="15" fill="#F59E0B" opacity="0.2"/>
          <path d="M30 50 L35 45 L40 50 L35 65 Z" fill="#F59E0B"/>
        </g>
      </g>
      
      {/* Sparkles */}
      <circle cx="160" cy="60" r="3" fill="#FCD34D">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite"/>
      </circle>
      <circle cx="320" cy="120" r="4" fill="#FCD34D">
        <animate attributeName="opacity" values="1;0.3;1" dur="2.5s" repeatCount="indefinite"/>
      </circle>
      <circle cx="180" cy="220" r="3" fill="#FCD34D">
        <animate attributeName="opacity" values="1;0.3;1" dur="2.2s" repeatCount="indefinite"/>
      </circle>
      
      <defs>
        <linearGradient id="gradient3" x1="0" y1="0" x2="400" y2="300">
          <stop offset="0%" stopColor="#F0F9FF"/>
          <stop offset="100%" stopColor="#E0F2FE"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

export function SecureDataIllustration() {
  return (
    <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background */}
      <rect width="400" height="300" fill="url(#gradient4)"/>
      
      {/* Shield with Lock */}
      <g transform="translate(150, 50)">
        {/* Shield */}
        <path d="M50 0 L90 20 L90 80 C90 120 70 140 50 160 C30 140 10 120 10 80 L10 20 Z" 
              fill="url(#shieldGradient)" stroke="#0066CC" strokeWidth="3"/>
        
        {/* Lock */}
        <g transform="translate(35, 60)">
          <rect x="0" y="15" width="30" height="25" rx="4" fill="white"/>
          <path d="M8 15 L8 10 C8 5 11 2 15 2 C19 2 22 5 22 10 L22 15" 
                stroke="white" strokeWidth="3" fill="none" strokeLinecap="round"/>
          <circle cx="15" cy="27" r="3" fill="#0066CC"/>
        </g>
        
        {/* Checkmarks around shield */}
        <g opacity="0.6">
          <circle cx="0" cy="60" r="12" fill="#10B981"/>
          <path d="M-4 60 L-1 63 L4 58" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
          
          <circle cx="100" cy="60" r="12" fill="#10B981"/>
          <path d="M96 60 L99 63 L104 58" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
          
          <circle cx="50" cy="10" r="12" fill="#10B981"/>
          <path d="M46 10 L49 13 L54 8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        </g>
        
        {/* Data lines */}
        <g opacity="0.3">
          <line x1="-20" y1="100" x2="120" y2="100" stroke="#0066CC" strokeWidth="2" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" values="0;8" dur="1s" repeatCount="indefinite"/>
          </line>
          <line x1="-20" y1="110" x2="120" y2="110" stroke="#0066CC" strokeWidth="2" strokeDasharray="4 4">
            <animate attributeName="stroke-dashoffset" values="8;0" dur="1s" repeatCount="indefinite"/>
          </line>
        </g>
      </g>
      
      <defs>
        <linearGradient id="gradient4" x1="0" y1="0" x2="400" y2="300">
          <stop offset="0%" stopColor="#EFF6FF"/>
          <stop offset="100%" stopColor="#DBEAFE"/>
        </linearGradient>
        <linearGradient id="shieldGradient" x1="10" y1="0" x2="90" y2="160">
          <stop offset="0%" stopColor="#0066CC"/>
          <stop offset="100%" stopColor="#004C99"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
