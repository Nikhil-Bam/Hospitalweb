import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";
import type { CSSProperties } from "react";

export default function InfoCard() {
  const infoData = [
    {
      id: 1,
      title: "Address",
      content: ["1800 Abbot Kinney Blvd. Unit D & E", "Venice, CA 90291"],
      icon: <FaMapMarkerAlt size={28} />,
    },
    {
      id: 2,
      title: "Hotline",
      content: ["+00-0122-123-0089"],
      icon: <FaPhoneAlt size={28} />,
    },
    {
      id: 3,
      title: "Email contact",
      content: ["medikal@gmail.com", "contact@medikalclinic.com"],
      icon: <FaEnvelope size={28} />,
    },
    {
      id: 4,
      title: "Website",
      content: ["www.medikalclinic.com"],
      icon: <FaGlobe size={28} />,
    },
  ];

  const wrapperStyle: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    padding: "80px 40px",
    backgroundColor: "#f9f9f9",
    flexWrap: "wrap",
    gap: "20px",
  };

  const cardStyle: CSSProperties = {
    flex: "1",
    minWidth: "220px",
    textAlign: "center",
    color: "#333",
  };

  const titleStyle: CSSProperties = {
    fontSize: "18px",
    fontWeight: 600,
    margin: "12px 0 8px",
  };

  const textStyle: CSSProperties = {
    fontSize: "14px",
    margin: "2px 0",
    color: "#555",
  };

  return (
    <div style={wrapperStyle}>
      {infoData.map((info) => (
        <div key={info.id} style={cardStyle}>
          <div style={{ fontSize: "28px", marginBottom: "10px" }}>{info.icon}</div>
          <h3 style={titleStyle}>{info.title}</h3>
          {info.content.map((line, idx) => (
            <p key={idx} style={textStyle}>
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
