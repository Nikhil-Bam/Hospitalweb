
export default function bed() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bed base */}
      <rect x="8" y="36" width="48" height="8" fill="currentColor" />

      {/* Bed legs */}
      <rect x="8" y="44" width="4" height="8" fill="currentColor" />
      <rect x="52" y="44" width="4" height="8" fill="currentColor" />

      {/* Pillow */}
      <rect x="12" y="28" width="10" height="6" rx="2" fill="currentColor" />

      {/* Person head */}
      <circle cx="17" cy="25" r="4" fill="currentColor" />

      {/* Blanket (covers person) */}
      <rect x="22" y="26" width="30" height="10" rx="2" fill="currentColor" />


   
    </svg>
  );
}
