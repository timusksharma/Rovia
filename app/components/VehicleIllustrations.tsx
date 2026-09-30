"use client";

export function TruckSideProfile({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto drop-shadow-sm ${className}`}
      aria-label="Commercial freight hauler truck"
    >
      <defs>
        <linearGradient id="cabGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>
        <linearGradient id="trailerGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="accentBlue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2563eb" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        <linearGradient id="windowGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <radialGradient id="wheelRim" cx="50%" cy="50%" r="50%">
          <stop offset="40%" stopColor="#cbd5e1" />
          <stop offset="70%" stopColor="#64748b" />
          <stop offset="100%" stopColor="#1e293b" />
        </radialGradient>
      </defs>

      {/* Ground Shadow */}
      <ellipse cx="140" cy="85" rx="130" ry="4" fill="#0f172a" fillOpacity="0.12" />

      {/* Trailer Box */}
      <rect x="12" y="14" width="168" height="52" rx="4" fill="url(#trailerGrad)" stroke="#94a3b8" strokeWidth="1.2" />
      {/* Trailer ribbed side lines */}
      <line x1="20" y1="20" x2="172" y2="20" stroke="#cbd5e1" strokeWidth="1" />
      <line x1="20" y1="36" x2="172" y2="36" stroke="#cbd5e1" strokeWidth="1" />
      <line x1="20" y1="52" x2="172" y2="52" stroke="#cbd5e1" strokeWidth="1" />
      
      {/* Brand livery stripe */}
      <rect x="12" y="42" width="168" height="6" fill="url(#accentBlue)" />
      {/* Rear doors & hinge detail */}
      <line x1="16" y1="16" x2="16" y2="64" stroke="#64748b" strokeWidth="1.5" />
      <rect x="13" y="24" width="5" height="3" rx="1" fill="#475569" />
      <rect x="13" y="50" width="5" height="3" rx="1" fill="#475569" />

      {/* Undercarriage & chassis */}
      <rect x="24" y="66" width="150" height="7" rx="1" fill="#334155" />
      <rect x="70" y="67" width="30" height="5" fill="#475569" />
      <rect x="180" y="58" width="16" height="12" rx="1" fill="#1e293b" />

      {/* Truck Cab */}
      <path
        d="M184 66 L184 28 C184 25 186 22 190 20 L216 16 C224 15 230 17 236 24 L254 44 C256 46 257 50 257 54 L257 66 Z"
        fill="url(#cabGrad)"
        stroke="#94a3b8"
        strokeWidth="1.2"
      />
      {/* Aerodynamic roof spoiler */}
      <path d="M186 20 C198 14 212 13 226 14 L224 18 L188 22 Z" fill="#2563eb" />
      
      {/* Windshield and Side Window */}
      <path d="M214 22 L234 22 C238 22 242 25 245 30 L250 40 L214 40 Z" fill="url(#windowGrad)" />
      <path d="M192 25 L210 25 L210 40 L192 40 Z" fill="url(#windowGrad)" />
      {/* Door line & handle */}
      <line x1="190" y1="24" x2="190" y2="64" stroke="#94a3b8" strokeWidth="1" />
      <rect x="194" y="44" width="6" height="2" rx="1" fill="#475569" />

      {/* Headlight & Bumper */}
      <path d="M255 52 L258 53 C260 54 260 58 258 60 L255 61 Z" fill="#38bdf8" />
      <rect x="248" y="62" width="14" height="6" rx="2" fill="#475569" />
      <rect x="238" y="66" width="22" height="4" rx="1" fill="#1e293b" />

      {/* Side Steps */}
      <line x1="202" y1="62" x2="216" y2="62" stroke="#64748b" strokeWidth="2" />
      <line x1="204" y1="65" x2="214" y2="65" stroke="#64748b" strokeWidth="1.5" />

      {/* Wheels - Trailer Rear Axle 1 */}
      <circle cx="44" cy="74" r="12" fill="#1e293b" />
      <circle cx="44" cy="74" r="8" fill="url(#wheelRim)" />
      <circle cx="44" cy="74" r="3" fill="#0f172a" />

      {/* Wheels - Trailer Rear Axle 2 */}
      <circle cx="70" cy="74" r="12" fill="#1e293b" />
      <circle cx="70" cy="74" r="8" fill="url(#wheelRim)" />
      <circle cx="70" cy="74" r="3" fill="#0f172a" />

      {/* Wheels - Cab Drive Axle */}
      <circle cx="204" cy="74" r="12" fill="#1e293b" />
      <circle cx="204" cy="74" r="8" fill="url(#wheelRim)" />
      <circle cx="204" cy="74" r="3" fill="#0f172a" />

      {/* Wheels - Cab Steer Axle */}
      <circle cx="242" cy="74" r="12" fill="#1e293b" />
      <circle cx="242" cy="74" r="8" fill="url(#wheelRim)" />
      <circle cx="242" cy="74" r="3" fill="#0f172a" />
    </svg>
  );
}

export function CoachSideProfile({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 280 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-auto drop-shadow-sm ${className}`}
      aria-label="Modern luxury passenger transport coach"
    >
      <defs>
        <linearGradient id="coachBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1f5f9" />
        </linearGradient>
        <linearGradient id="coachGlass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
      </defs>

      {/* Shadow */}
      <ellipse cx="140" cy="85" rx="125" ry="4" fill="#0f172a" fillOpacity="0.1" />

      {/* Coach Main Body */}
      <path
        d="M20 70 L20 28 C20 22 24 16 32 16 L238 16 C252 16 264 24 266 38 L268 70 Z"
        fill="url(#coachBody)"
        stroke="#cbd5e1"
        strokeWidth="1.2"
      />

      {/* Panoramic Tinted Window Band */}
      <path
        d="M30 22 L240 22 C252 22 260 28 262 38 L262 46 L30 46 Z"
        fill="url(#coachGlass)"
      />
      {/* Window mullions */}
      <line x1="70" y1="22" x2="70" y2="46" stroke="#475569" strokeWidth="1" />
      <line x1="110" y1="22" x2="110" y2="46" stroke="#475569" strokeWidth="1" />
      <line x1="150" y1="22" x2="150" y2="46" stroke="#475569" strokeWidth="1" />
      <line x1="190" y1="22" x2="190" y2="46" stroke="#475569" strokeWidth="1" />
      <line x1="230" y1="22" x2="230" y2="46" stroke="#475569" strokeWidth="1" />

      {/* Passenger Door Entry */}
      <rect x="238" y="24" width="22" height="44" rx="2" fill="none" stroke="#94a3b8" strokeWidth="1" />

      {/* Aerodynamic Stripe */}
      <path d="M20 54 L266 54 L266 57 L20 57 Z" fill="#2563eb" />

      {/* Luggage compartment panels */}
      <rect x="80" y="58" width="45" height="11" rx="1" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
      <rect x="130" y="58" width="45" height="11" rx="1" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />
      <rect x="180" y="58" width="45" height="11" rx="1" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="0.8" />

      {/* Wheels */}
      <circle cx="56" cy="74" r="12" fill="#1e293b" />
      <circle cx="56" cy="74" r="8" fill="#94a3b8" />
      <circle cx="56" cy="74" r="3" fill="#0f172a" />

      <circle cx="218" cy="74" r="12" fill="#1e293b" />
      <circle cx="218" cy="74" r="8" fill="#94a3b8" />
      <circle cx="218" cy="74" r="3" fill="#0f172a" />
    </svg>
  );
}
