// Flat illustration: plane over a monument skyline, high-speed train below.
export default function HeroIllustration() {
  return (
    <svg
      className="hero-art"
      viewBox="0 0 640 330"
      role="img"
      aria-label="Illustration of an aeroplane over a monument and a high-speed train"
    >
      <circle cx="470" cy="112" r="108" fill="#1B1F6B" />
      <circle cx="470" cy="112" r="74" fill="#FF8A2B" />
      <circle cx="52" cy="38" r="3" fill="#8F95F0" />
      <circle cx="130" cy="22" r="2" fill="#8F95F0" />
      <circle cx="290" cy="40" r="3" fill="#8F95F0" />
      <circle cx="600" cy="30" r="3" fill="#8F95F0" />
      <circle cx="610" cy="170" r="2" fill="#8F95F0" />

      <g fill="#2C32A8">
        <rect x="334" y="176" width="170" height="90" />
        <path d="M368 176 Q419 84 470 176Z" />
        <rect x="414" y="104" width="10" height="22" />
        <rect x="320" y="132" width="14" height="134" />
        <path d="M318 132 L327 112 L336 132Z" />
        <rect x="504" y="132" width="14" height="134" />
        <path d="M502 132 L511 112 L520 132Z" />
      </g>
      <path d="M398 266 L398 218 Q419 192 440 218 L440 266Z" fill="#232A9A" />
      <rect x="70" y="196" width="130" height="70" fill="#232A9A" />
      <path d="M92 266 V222 Q135 184 178 222 V266Z" fill="#12154F" />

      <rect x="0" y="262" width="640" height="68" fill="#1B1F6B" />
      <rect x="0" y="304" width="640" height="4" fill="#5A60D6" />

      <path
        d="M20 160 Q90 134 150 100"
        fill="none"
        stroke="#FF8A2B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="2 10"
      />
      <g transform="translate(236 78) rotate(-10)">
        <path
          d="M-70 0 Q-60 -12 -34 -13 L60 -13 Q100 -10 120 0 Q100 10 60 13 L-34 13 Q-60 12 -70 0Z"
          fill="#FFFFFF"
        />
        <path d="M-6 -12 L-52 -58 L-30 -58 L34 -12Z" fill="#D3D6F7" />
        <path d="M-6 12 L-52 58 L-30 58 L34 12Z" fill="#D3D6F7" />
        <path d="M-64 -3 L-80 -36 L-60 -36 L-40 -10Z" fill="#FF8A2B" />
        <rect x="36" y="-7" width="10" height="6" rx="3" fill="#3A3FD6" />
        <rect x="52" y="-7" width="10" height="6" rx="3" fill="#3A3FD6" />
        <rect x="68" y="-7" width="10" height="6" rx="3" fill="#3A3FD6" />
        <rect x="84" y="-7" width="10" height="6" rx="3" fill="#3A3FD6" />
      </g>

      <path d="M60 300 L60 262 Q60 250 74 250 L520 250 Q584 254 618 298 L618 300Z" fill="#FFFFFF" />
      <rect x="86" y="262" width="46" height="18" rx="4" fill="#3A3FD6" />
      <rect x="152" y="262" width="46" height="18" rx="4" fill="#3A3FD6" />
      <rect x="218" y="262" width="46" height="18" rx="4" fill="#3A3FD6" />
      <rect x="284" y="262" width="46" height="18" rx="4" fill="#3A3FD6" />
      <rect x="350" y="262" width="46" height="18" rx="4" fill="#3A3FD6" />
      <rect x="416" y="262" width="46" height="18" rx="4" fill="#3A3FD6" />
      <path d="M486 254 Q568 258 596 284 L486 284Z" fill="#3A3FD6" />
      <rect x="60" y="286" width="558" height="6" fill="#FF8A2B" />
      <circle cx="120" cy="300" r="7" fill="#12154F" />
      <circle cx="300" cy="300" r="7" fill="#12154F" />
      <circle cx="480" cy="300" r="7" fill="#12154F" />
    </svg>
  );
}
