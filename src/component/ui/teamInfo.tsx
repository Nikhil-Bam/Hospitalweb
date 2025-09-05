import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// Data arrays
const doctors = [
  {
    name: "JANE BUTLER",
    specialty: "X-ray",
    qualifications: "MD, OB/GYN",
    experience: "2 years",
    office: "Office 12b, Hall A",
    image: "/doctor.jpg",
  },
  {
    name: "LYNN LAMBERT",
    specialty: "Cardiology",
    qualifications: "MD, OB/GYN",
    experience: "2 years",
    office: "Office 12b, Hall A",
    image: "/doctor.jpg",
  },
  
];

const socialLinks = [
  { href: 'https://facebook.com', icon: <FaFacebookF />, color: '#3b5998' },
  { href: 'https://twitter.com', icon: <FaTwitter />, color: '#1da1f2' },
  { href: 'https://linkedin.com', icon: <FaLinkedinIn />, color: '#0077b5' },
];

const TeamInfo: React.FC = () => {
  const containerStyle: React.CSSProperties = {
   
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#f8f8fc',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle: React.CSSProperties = {
    fontSize: '2rem',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '2rem',
    padding: "30px",
  };

  const mainContentStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    width: '100%',
    maxWidth: '1200px',
    gap: '2rem',
  };

  const largeImageContainerStyle: React.CSSProperties = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center', 
  height: '533px',      
};

const largeImageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',        
  objectFit: 'cover',    
  borderRadius: '8px',
};


  const detailsContainerStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    padding: '2rem',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    height: '533px',        // match the image height
    justifyContent: 'center' // center content vertically if needed

  };

  const doctorDetailsStyle: React.CSSProperties = {
    marginBottom: '1rem',
  };

  const nameStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const specialtyStyle: React.CSSProperties = {
    color: '#007bff',
    marginBottom: '0.5rem',
  };

  const infoRowStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '0.25rem',
  };

  const socialIconsStyle: React.CSSProperties = {
    display: 'flex',
    gap: '0.75rem',
    marginTop: '1rem',
  };

  const socialIconWrapper: React.CSSProperties = {
    width: '35px',
    height: '35px',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    transition: 'background-color 0.3s, color 0.3s',
    cursor: 'pointer',
    textDecoration: 'none',
    color: '#000',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headerStyle}>Our Team Of Highly Skilled</h2>

      <div style={mainContentStyle}>
        {/* Left large image */}
        <div style={largeImageContainerStyle}>
          <img src={doctors[0].image} alt={doctors[0].name} style={largeImageStyle} />
        </div>

        {/* Doctors details */}
        <div style={detailsContainerStyle}>
          {doctors.map((doctor, idx) => (
            <div key={idx} style={doctorDetailsStyle}>
              <div style={nameStyle}>{doctor.name}</div>
              <div style={specialtyStyle}>{doctor.specialty}</div>
              <div style={infoRowStyle}>{doctor.qualifications}</div>
              <div style={infoRowStyle}>Experience: {doctor.experience}</div>
              <div style={infoRowStyle}>Office: {doctor.office}</div>
              <div style={socialIconsStyle}>
                {socialLinks.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={socialIconWrapper}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = item.color;
                      (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#eee';
                      (e.currentTarget as HTMLAnchorElement).style.color = '#000';
                    }}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
              {idx < doctors.length - 1 && (
                <hr style={{ border: 'none', borderBottom: '1px solid #e0e0e0', margin: '1rem 0' }} />
              )}
            </div>
          ))}
        </div>

        {/* Right large image */}
        <div style={largeImageContainerStyle}>
          <img src={doctors[1].image} alt={doctors[1].name} style={largeImageStyle} />
        </div>
      </div>
    </div>
  );
};

export default TeamInfo;
