
function ambulance({ size = 64 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Van body */}
      <rect x="4" y="20" width="48" height="24" fill="white" stroke="#FFF" strokeWidth="2" rx="2" />
      {/* Cabin */}
      <rect x="40" y="12" width="12" height="12" fill="white" stroke="#FFF" strokeWidth="2" rx="2" />
      {/* Wheels */}
      <circle cx="12" cy="48" r="4" fill="#FFF" />
      <circle cx="44" cy="48" r="4" fill="#FFF" />
      {/* Red cross */}
      <line x1="14" y1="28" x2="22" y2="28" stroke="red" strokeWidth="2" />
      <line x1="18" y1="24" x2="18" y2="32" stroke="red" strokeWidth="2" />
      {/* Windows */}
      <rect x="42" y="14" width="8" height="8" fill="#87CEFA" stroke="#0000" strokeWidth="1" />
      {/* Siren lights */}
      <rect x="40" y="10" width="4" height="2" fill="red" />
      <rect x="48" y="10" width="4" height="2" fill="blue" />
    </svg>
  );
}

export default ambulance;
