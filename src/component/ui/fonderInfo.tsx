import { useState, useEffect } from "react";
import { Box, Title, Text, Image, Stack, Button } from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const founders = [
  { name: "Dr. Bryce Butler", role: "Clinic president", image: "/doctor.jpg" },
  { name: "Dr. John Smith", role: "Clinic president", image: "/doctor.jpg" },
  { name: "Dr. Alice Brown", role: "Head Surgeon", image:"/doctor.jpg" },
  { name: "Dr. Mark Lee", role: "Chief Physician", image: "/doctor.jpg" },
  { name: "Dr. Emily Davis", role: "Head of Research", image:"/doctor.jpg" },
  { name: "Dr. Alex White", role: "Lead Dentist", image: "/doctor.jpg" },
];

export default function FoundersCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = founders.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 2) % slideCount);
    }, 8000);
    return () => clearInterval(interval);
  }, [slideCount]);

  const handlePrev = () => setCurrentSlide((prev) => (prev - 2 + slideCount) % slideCount);
  const handleNext = () => setCurrentSlide((prev) => (prev + 2) % slideCount);

  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "2rem",
        padding: "100px",
        maxWidth: 1200,
        margin: "0 auto",
        fontFamily: "sans-serif",
        backgroundColor: "white",
      }}
    >
     
      <Box style={{ flex: 1 }}>
        <Title order={2} style={{ fontSize: "2.25rem", lineHeight: "2.5rem", fontWeight: 700, marginBottom: "1rem" }}>
          Our <br/>Founders
        </Title>
        <Text color="dimmed" style={{ marginTop: "70px", }}>
          Claritas est etiam processus dynamicus,<br/> lectorum. Mirum est notare quam est notare<br/> quam littera. Eodem modo typi, qui nunc nobis <br/>clari.
        </Text>
        <Text color="dimmed" style={{ marginTop: "40px", }}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing <br/>elit, sed diam ut laoreet.
        </Text>
      </Box>

      <Box style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        <Box
          style={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${currentSlide * 50}%)`,
          }}
        >
          {founders.map((founder, index) => (
            <Box key={index} style={{ flex: "none", width: "50%", padding: "0.5rem" }}>
              <Stack
                align="center"
                gap="xs"
                style={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
                  overflow: "hidden",
                }}
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  style={{ width: "100%", objectFit: "cover", aspectRatio: "1 / 1.25" }}
                />
                <Stack align="center" gap={0} style={{ padding: "1rem" }}>
                  <Text style={{ fontWeight: 600, fontSize: "1.125rem", lineHeight: "1.75rem", color: "#1a202c" }}>
                             {founder.name}
                      </Text>
                  <Text size="sm" color="dimmed">{founder.role}</Text>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Box>

        <Button
          variant="white"
          onClick={handlePrev}
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            borderRadius: "50%",
            minWidth: 36,
            minHeight: 36,
            padding: 0,
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
            zIndex: 2,
          }}
        >
          <IconArrowLeft size={24} color="#1a202c" />
        </Button>

        <Button
          variant="white"
          onClick={handleNext}
          style={{
            position: "absolute",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            borderRadius: "50%",
            minWidth: 36,
            minHeight: 36,
            padding: 0,
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)",
            zIndex: 2,
          }}
        >
          <IconArrowRight size={24} color="#1a202c" />
        </Button>
      </Box>
    </Box>
  );
}
