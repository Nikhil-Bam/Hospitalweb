import type { CSSProperties } from "react";
import Heart from '../icons/heart';
import Stethoscope from '../icons/satiscope';
import Doctor from '../icons/doctoricon';
import Ambulance from '../icons/patient';

export default function ServiceCards() {
  const serviceData = [
    {
      id: 1,
      title: "Heart Rate",
      content: "Duis autem vel eum iriure dolor in hendrerit in vulputat nulla facilisis utate velit esse molestie consequat",
      icon: <Heart />
    },
    {
      id: 2,
      title: "Medical Counseling",
      content: "Duis autem vel eum iriure dolor in hendrerit in vulputat nulla facilisis utate velit esse molestie consequat",
      icon: <Stethoscope />
    },
    {
      id: 3,
      title: "Qualified Doctors",
      content: "Duis autem vel eum iriure dolor in hendrerit in vulputat nulla facilisis utate velit esse molestie consequat",
      icon: <Doctor />
    },
    {
      id: 4,
      title: "Emergency Services",
      content: "Duis autem vel eum iriure dolor in hendrerit in vulputat nulla facilisis utate velit esse molestie consequat",
      icon: <Ambulance />
    }
  ];

  const cardsWrapperStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: '100%',
  };
const cardStyle: CSSProperties = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  padding: '40px 20px',
  color: 'white',
  backgroundColor: '#06B6D4',
  transition: 'all 0.3s ease-in-out',
  cursor: 'pointer',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
};

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.backgroundColor = 'white';
    card.style.color = 'black'; 
    card.style.transform = 'scale(1.02)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.backgroundColor = '#06B6D4';
    card.style.color = 'white';
    card.style.transform = 'scale(1)';
  };

  return (
    <div style={{ width: '100%' }}>
      <div style={cardsWrapperStyle}>
        {serviceData.map((card) => (
          <div
            key={card.id}
            style={cardStyle}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={{ marginBottom: '16px', fontSize: '32px' }}>
              {card.icon}
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '8px' }}>
              {card.title}
            </h3>
            <p style={{ fontSize: '14px', opacity: 0.9 }}>
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
