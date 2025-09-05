

export default function DoctorIcon() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Head */}
      <circle cx="32" cy="16" r="12" fill="currentColor" />

      {/* Body */}
      <path
        d="M32 28c-12 0-20 6-20 20h40c0-14-8-20-20-20z"
        fill="currentColor"
      />

      {/* Stethoscope tubes */}
      <path
        d="M24 22 
           C20 30, 20 40, 28 44 
           M40 22 
           C44 30, 44 40, 36 44"
        stroke="blue"
        strokeWidth="2"
        fill="none"
      />

      {/* Chest connector */}
      <circle cx="32" cy="44" r="3" fill="blue" />

      {/* Earpieces */}
      <circle cx="22" cy="18" r="2" fill="blue" />
      <circle cx="42" cy="18" r="2" fill="blue" />
    </svg>
  );
}
