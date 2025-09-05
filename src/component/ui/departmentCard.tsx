import  { useState, type CSSProperties } from "react";

const services = [ 
  { name: "Dental", icon: "🦷", bg: "#FEF3C7", description:  "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum notare quam littera." , link: "View more",},
  { name: "Cardiology", icon: "❤️‍🩹", bg: "#FFFBEB", description:  "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum notare quam littera.", link: "View more",},
  { name: "For Disabled", icon: "♿", bg: "#DCFCE7", description:  "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum notare quam littera.", link: "View more", },
  { name: "Ophthalmology", icon: "👁️", bg: "#FCE7F3", description:  "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum notare quam littera.", link: "View more", },
  { name: "Emergency", icon: "🚑", bg: "#BFDBFE", description:  "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum notare quam littera.", link: "View more", },
  { name: "X-Ray", icon: "🩻", bg: "#E9D5FF", description:  "Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum notare quam littera." , link: "View more",},
];

export default function ServiceCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerStyle: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
    padding: "40px",
  };

  const cardStyle: CSSProperties = {
    width: "100%",
    height: "480px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    borderRadius: "12px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    transition: "transform 0.3s, box-shadow 0.3s",
    cursor: "pointer",
    position: "relative",
    textAlign: "center",
    overflow: "hidden",
  };

  const iconStyle: CSSProperties = {
    fontSize: "3rem",
    marginBottom: "16px",
  };

  const nameStyle: CSSProperties = {
    fontSize: "1rem",
    fontWeight: 600,
    marginBottom: "16px",
  };

  const descriptionStyle: CSSProperties = {
    fontSize: "0.875rem",
    lineHeight: "1.4",
    opacity: 0,
    transition: "opacity 0.3s, transform 0.3s",
    transform: "translateY(20px)",
    color: "#4B5563",
  };

  const linkStyle: CSSProperties = {
    color: "#0EA5E9",
    fontWeight: 500,
    marginTop: "12px",
    textDecoration: "none",
    display: "block",
  };

  return (
    <div style={containerStyle}>
      {services.map((service, index) => (
        <div
          key={index}
          style={{
            ...cardStyle,
            backgroundColor: service.bg,
            transform: hoveredIndex === index ? "scale(1.05)" : "scale(1)",
            boxShadow:
              hoveredIndex === index
                ? "0 8px 15px rgba(0,0,0,0.2)"
                : "0 4px 6px rgba(0,0,0,0.1)",
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div style={iconStyle}>{service.icon}</div>
          <div style={nameStyle}>{service.name}</div>
          <div
            style={{
              ...descriptionStyle,
              opacity: hoveredIndex === index ? 1 : 0,
              transform:
                hoveredIndex === index
                  ? "translateY(0)"
                  : "translateY(20px)",
            }}
          >
            {service.description}
            <span style={linkStyle}>{service.link} ➔</span>
          </div>
        </div>
      ))}
    </div>
  );
}
