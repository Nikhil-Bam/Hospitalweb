import { Carousel } from "@mantine/carousel";
import { Title, Text, Avatar, Stack } from "@mantine/core";

export default function PatientReview() {
  const reviews = [
    {
      id: "John Cornner",
      Specilist: "Dental Department",
      Avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: "Sarah Smith",
      Specilist: "Cardiology Department",
      Avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    },
    {
      id: "Michael Brown",
      Specilist: "Neurology Department",
      Avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "615px",
        backgroundColor: "#2F7497",
        backgroundImage: "url('/doctor.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Inner container now also full width */}
      <div
        style={{
          width: "100%",      // full width
          height: "100%",     // full height of outer div
          textAlign: "center",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title order={2} style={{ marginBottom: 20 }}>
          WHAT PATIENTS SAY ABOUT US<br />
          :: ;;
        </Title>

        <h5 style={{ marginTop: "60px" }}>
          Investigationes demonstraverunt lectores legere me lius quod ii legunt
          saepius <br />
          qui sequitur mutationem consuetudium lectorum. Quis nostrud exerci
          tation ullamcorper suscipit lobortis nisl ut aliquip.
        </h5>

        <Carousel
          p={60}
          withIndicators={false}
          height={250}
          slideSize="100%"
          emblaOptions={{ loop: true, align: "center" }}
          draggable={true}
        >
          {reviews.map((review, index) => (
            <Carousel.Slide key={index}>
              <Stack align="center" gap="sm">
                <Avatar src={review.Avatar} size={80} radius="xl" />
                <h2>{review.id}</h2>
                <Text size="md">{review.Specilist}</Text>
              </Stack>
            </Carousel.Slide>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
