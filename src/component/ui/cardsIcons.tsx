import { Card, Text, Title, Box } from '@mantine/core';
import Blood from '../icons/blood';  
import Satiscope from '../icons/satiscope';
import Disable from '../icons/patient';
import Doctor from '../icons/doctoricon';
import Heart from '../icons/heart';

export default function CardsIcons() {
  const cards = [
    { id: 1, title: "BLOOD BANK", content: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.", icon: <Blood /> },
    { id: 2, title: "FULL STETHOSCOPE", content: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.", icon: <Satiscope /> },
    { id: 3, title: "FOR DISABLE", content: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.", icon: <Disable /> },
    { id: 4, title: "Experienced doctor", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet" ,icon:<Doctor/>},
    { id: 5, title: "Heart Specialist", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet",icon:<Heart/> },
    { id: 6, title: "FOR DISABLE", content: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.", icon: <Disable /> },
    { id: 7, title: "Heart Specialist", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet",icon:<Heart/> },
    { id: 8, title: "FOR DISABLE", content: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.", icon: <Disable /> },
    { id: 9, title: "Heart Specialist", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet",icon:<Heart/> },
  ];

  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',            
        justifyContent: 'flex-start',
        gap: '20px',                 
        width: '100%',
        maxWidth: '1200px',         
        margin: '0 auto',
      }}
    >
      {cards.map((card) => (
        <Card
          key={card.id}
          shadow="xs"
          padding="sm"
          style={{
            width: 'calc((100% - 40px) / 3)', 
            height: '213px',
            borderRadius: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            backgroundColor: 'transparent',
            border: 'none',
          }}
        >
          
          <Box style={{ marginBottom: 20, color: '#3dc5df' }}>
            {card.icon}
          </Box>

          <Title order={4} style={{ textTransform: 'uppercase', fontSize: 16, fontWeight: 700, color: '#333333', marginBottom: 10 }}>
            {card.title}
          </Title>

          <Text size="sm" style={{ color: '#666666', lineHeight: 1.5 }}>
            {card.content}
          </Text>
        </Card>
      ))}
    </div>
  );
}
