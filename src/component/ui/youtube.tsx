import { Carousel } from "@mantine/carousel";
import { Paper, Avatar, Text, Title, Flex } from "@mantine/core";
export default function Youtube() {
  const testimonials = [
    {
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "CLARE MITCHELL",
      role: "CEO Doctor",
      text: "Lorem ipsum dolor sit amet, soluta nobiscon sectetuer adipiscing soluta nobiscon sectetuer adipiscing elit, sed diam ut soluta laoreet.",
    },
    {
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "SARAH JONES",
      role: "Marketing Head",
      text: "Great service and experience! Totally recommend it to anyone looking for quality and professionalism.",
    },
    {
      img: "https://randomuser.me/api/portraits/men/76.jpg",
      name: "DAVID SMITH",
      role: "Product Manager",
      text: "The team was highly responsive and delivered everything on time. Amazing job!",
    },
  ];

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      gap="lg"
      p="xl"
      style={{ backgroundColor: "#cceff6", minHeight: "450px",fontFamily: "'Raleway', sans-serif",
 }}
    >
      {/* Left side - YouTube video */}
      <Flex w={{ base: "100%", md: "50%" }} justify="center" align="center">
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/ScMzIvxBSi4"
          title="YouTube video"
          allowFullScreen
          style={{ borderRadius: "12px", minHeight: "450px" }}
        ></iframe>
      </Flex>

      {/* Right side - Carousel */}
      <Flex
        w={{ base: "100%", md: "50%" }}
        align="center"
        justify="center"
        p="md"
      >
        <Carousel
          slideSize="100%"
          height={450}
          emblaOptions={{
            loop: true,
            dragFree: false,
            align: "center",
          }}
          withIndicators
          styles={{
            indicator: {
              width: 16,
              height: 16,
              borderRadius: 4,
              background: "#fff",
              border: "2px solid #00aacc",
              "&[data-active]": {
                background: "#00aacc",
              },
            },
          }}
        >
          {testimonials.map((t, i) => (
            <Carousel.Slide key={i}>
              <Paper
                p="xl"
                radius="md"
                shadow="sm"
                style={{ background: "#cceff6", minHeight: "450px" }}
              >
                <Avatar src={t.img} size={100} radius="50%" mx="auto" />
                <Title order={3} ta="center" mt="md">
                  {t.name}
                </Title>
                <Text ta="center" size="md" c="dimmed">
                  {t.role}
                </Text>
                <Text ta="center" mt="md" fs="italic">
                  “{t.text}”
                </Text>
              </Paper>
            </Carousel.Slide>
          ))}
        </Carousel>
      </Flex>
    </Flex>
  );
}
