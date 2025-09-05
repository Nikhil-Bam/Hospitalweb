import React from "react";

const Smile: React.FC<{ size?: number; color?: string }> = ({
  size = 64,
  color = "white",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle cx="14" cy="14" r="40" stroke={color} strokeWidth="2" fill="none" />

      {/* Face circle */}
      <circle cx="14" cy="14" r="10" stroke={color} strokeWidth="2" fill="none" />

      {/* Eyes */}
      <circle cx="11" cy="12" r="1" fill={color} />
      <circle cx="17" cy="12" r="1" fill={color} />

      {/* Smile */}
      <path d="M10 17c2 2.5 8 2.5 10 0" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};

export default Smile;
