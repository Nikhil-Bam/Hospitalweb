import { Carousel } from '@mantine/carousel';
import { Modal } from '@mantine/core';
import  { useState } from 'react';
import '@mantine/carousel/styles.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

// Step 1: Define the Doctor interface
interface Doctor {
  id: number;
  name: string;
  src: string;
  education: string;
  experience: string;
  office: string;
  workDays: string;
  email: string;
  training: string;
  bio: string;
  social: {
    instagram?: string;
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export default function DoctorSlide() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const doctors: Doctor[] = [
  {
    id: 1,
    name: "LYNN LAMBERT",
    src: "/doctor.jpg",
    education: "MD, OB/GYN",
    experience: "2 years",
    office: "Office 12b, Hall A",
    workDays: "Monday, Friday, Sunday",
    email: "janebutler@medikalclinic.com",
    training:
      "Nam liber tempor cum soluta nobis eleifend option congue nihil impedo mingid quod mazim placerat facer",
    bio: "Nulla vitae elit libero, a pharetra augue uris id Integer posuere erat",
    social: {
      instagram: "https://instagram.com/lynn",
      twitter: "https://x.com/lynn",
      facebook: "https://facebook.com/lynn",
      linkedin: "https://linkedin.com/in/lynn",
    },
  },
  {
    id: 2,
    name: "Jane Doe",
    src: "/doctor.jpg",
    education: "MD, OB/GYN",
    experience: "5 years",
    office: "Office 15, Hall C",
    workDays: "Tuesday, Wednesday, Saturday",
    email: "jane.doe@clinic.com",
    training: "Training details here",
    bio: "Short bio about Jane Doe",
    social: {
      instagram: "https://instagram.com/janedoe",
      twitter: "https://x.com/janedoe",
      facebook: "https://facebook.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
    },
  },
   {
    id: 3,
    name: "Jane Doe",
    src: "/doctor.jpg",
    education: "MD, OB/GYN",
    experience: "5 years",
    office: "Office 15, Hall C",
    workDays: "Tuesday, Wednesday, Saturday",
    email: "jane.doe@clinic.com",
    training: "Training details here",
    bio: "Short bio about Jane Doe",
    social: {
      instagram: "https://instagram.com/janedoe",
      twitter: "https://x.com/janedoe",
      facebook: "https://facebook.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
    },
  },
   {
    id: 4,
    name: "Jane Doe",
    src: "/doctor.jpg",
    education: "MD, OB/GYN",
    experience: "5 years",
    office: "Office 15, Hall C",
    workDays: "Tuesday, Wednesday, Saturday",
    email: "jane.doe@clinic.com",
    training: "Training details here",
    bio: "Short bio about Jane Doe",
    social: {
      instagram: "https://instagram.com/janedoe",
      twitter: "https://x.com/janedoe",
      facebook: "https://facebook.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
    },
  },
   {
    id: 5,
    name: "Jane Doe",
    src: "/doctor.jpg",
    education: "MD, OB/GYN",
    experience: "5 years",
    office: "Office 15, Hall C",
    workDays: "Tuesday, Wednesday, Saturday",
    email: "jane.doe@clinic.com",
    training: "Training details here",
    bio: "Short bio about Jane Doe",
    social: {
      instagram: "https://instagram.com/janedoe",
      twitter: "https://x.com/janedoe",
      facebook: "https://facebook.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
    },
  },
   {
    id: 6,
    name: "Jane Doe",
    src: "/doctor.jpg",
    education: "MD, OB/GYN",
    experience: "5 years",
    office: "Office 15, Hall C",
    workDays: "Tuesday, Wednesday, Saturday",
    email: "jane.doe@clinic.com",
    training: "Training details here",
    bio: "Short bio about Jane Doe",
    social: {
      instagram: "https://instagram.com/janedoe",
      twitter: "https://x.com/janedoe",
      facebook: "https://facebook.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
    },
  },
];


  const handleCardClick = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  return (
    <div style={{ overflow: 'hidden', maxWidth: '1140px', margin: '0 auto', padding: 10 }}>
             <Carousel
              withIndicators
              height={194.097}
              slideSize={234}
              slideGap="md"
              emblaOptions={{
              loop: true,
              dragFree: false,
              align: 'center'
              }}
              >

        {doctors.map((item) => (
          <Carousel.Slide key={item.id}>
            <div
              onClick={() => handleCardClick(item)}
              style={{
                cursor: 'pointer',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              <img
                src={item.src}
                alt={`Doctor ${item.id}`}
                style={{
                  width: '234px',
                  height: '194.097px',
                  objectFit: 'cover',
                  borderRadius: '8px'
                }}
              />
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>

      <Modal
        opened={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedDoctor?.name}
        size="lg"
      >
        {selectedDoctor && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', gap: '20px' }}>
              <img
                src={selectedDoctor.src}
                alt={selectedDoctor.name}
                style={{ width: '200px', height: '200px', borderRadius: '8px', objectFit: 'cover' }}
              />
              <div style={{ flex: 1 }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{selectedDoctor.name}</h2>
                <p>Cardiology</p>
                <p><strong>Education: </strong> {selectedDoctor.education}</p>
                <p><strong>Experience: </strong> {selectedDoctor.experience}</p>
                <p><strong>Office: </strong> {selectedDoctor.office}</p>
                <p><strong>Work Days: </strong> {selectedDoctor.workDays}</p>
                <p><strong>Email: </strong> {selectedDoctor.email}</p>
                <p><strong>Training: </strong>{selectedDoctor.training} {selectedDoctor.bio}</p>

                {/* ✅ Social Media Row */}
                <div style={{ marginTop: '15px', display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <p style={{ margin: 0, fontWeight: 'bold' }}>Social media:</p>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    {selectedDoctor.social.instagram && (
                      <a
                        href={selectedDoctor.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#E4405F', fontSize: '22px' }}
                      >
                        <FaInstagram />
                      </a>
                    )}
                    {selectedDoctor.social.twitter && (
                      <a
                        href={selectedDoctor.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#000', fontSize: '22px' }}
                      >
                        <FaTwitter />
                      </a>
                    )}
                    {selectedDoctor.social.facebook && (
                      <a
                        href={selectedDoctor.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#1877F2', fontSize: '22px' }}
                      >
                        <FaFacebookF />
                      </a>
                    )}
                    {selectedDoctor.social.linkedin && (
                      <a
                        href={selectedDoctor.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#0A66C2', fontSize: '22px' }}
                      >
                        <FaLinkedinIn />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginTop: '20px' }}>
              <button
                style={{
                  padding: '10px 20px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
                onClick={() => alert('Appointment schedule opened!')}
              >
                View Timetable
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
