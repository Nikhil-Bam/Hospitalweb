// button.tsx
import { useState } from 'react';

type ButtProps = {
  text?: string;
  background?: string;
  hoverBackground?: string; 
  color?: string;
  hoverColor?: string; 
  borderColor?: string;
  hoverBorderColor?: string;
};

function Butt({
  text = "HOME / DOCTOR",
  background = "#3DC5DF",
  hoverBackground = "#32b8d4",
  color = "#FFFFFF",
  hoverColor = "#000000",
  borderColor = "#3DC5DF",
  hoverBorderColor = "#32b8d4",
}: ButtProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      style={{
        backgroundColor: isHovered ? hoverBackground : background,
        color: isHovered ? hoverColor : color,
        width: 168.363,
        height: 36,
        borderRadius: 4,
        fontSize: 12,
        fontWeight: "bold",
        display: "inline-block",
        textAlign: "center",
        lineHeight: "36px",
        border: `1px solid ${isHovered ? hoverBorderColor : borderColor}`,
        fontFamily: "'Raleway', sans-serif",
        cursor: "pointer",
        transition: "background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </span>
  );
}

export default Butt;
