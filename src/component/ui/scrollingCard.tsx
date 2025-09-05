import { Carousel } from '@mantine/carousel';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import { Card, Text, Title, Box } from '@mantine/core';
import Blood from '../icons/blood';  
import Satiscope from '../icons/satiscope';
import Disable from '../icons/patient';
import Doctor from '../icons/doctoricon';
import Heart from '../icons/heart';

export default function scrollingCard() {
  const cards = [
    { id: 1, title: "BLOOD BANK", content: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.", icon: <Blood /> },
    { id: 2, title: "FULL STETHOSCOPE", content: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.", icon: <Satiscope /> },
    { id: 3, title: "FOR DISABLE", content: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida.", icon: <Disable /> },
    { id: 4, title: "Experienced doctor", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet" ,icon:<Doctor/>},
    { id: 5, title: "Heart Specialist", content: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam ut laoreet",icon:<Heart/> }

  ];

  return (
    <div
        style={{
          width:"750px",
          height:"262.4px",
        }}
        >
        <Carousel
      withIndicators={false}
      withControls={false}
      height={262.4}
      slideSize={{ base: '100%', sm: '33.3333%', md: '34.3333%' }}
      slideGap={-10}
      emblaOptions={{ loop: true, align: 'start' }}
        >
          {cards.map((card) => (
            <Carousel.Slide key={card.id}>
              <Card
                shadow="xs"
                padding="md"
                style={{
                  width: 230,
                  height: 252.4,
                  borderRadius: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  margin: 'auto',
                  backgroundColor: 'transparent',
                  border: 'none',
                
                }}
              >
                <Box style={{ marginBottom: 20 }}>
                  {card.icon}
                </Box>
                <Title order={4} style={{ textTransform: 'uppercase', fontSize: 16, fontWeight: 700, color: '#333333', marginBottom: 10 }}>
                  {card.title}
                </Title>
                <Text size="sm" style={{ color: '#666666', lineHeight: 1.5 }}>
                  {card.content}
                </Text>
              </Card>
            </Carousel.Slide>
          ))}
        </Carousel>
        </div>
  );
}
