import { Container, Title, Text, Flex, Group } from "@mantine/core";
import Butt from "../icons/button";


export default function MakeAppointment() {
  return (
    <Container
      size="lg"
      style={{ textAlign: "center", padding: "60px 20px",fontFamily: "'Raleway', sans-serif",
}}
    >
      
      <Title order={2} style={{ fontWeight: 700, marginBottom: 20 }}>
       <h1> We are a team of young professionals <br /> passionate in our work.</h1>
      </Title>

      <Flex
        justify="center"
        align="flex-start"
        style={{ gap: 40, marginBottom: 40, flexWrap: "wrap", padding:"60px" }}
      >
        <Text style={{ color: "#666", fontSize: 14, maxWidth: 400 }}>
          Duis autem vel eum iriure dolor in hendrerit n vuw Iputate velit esse
          molestie consequat, vel illum dolore eufe ugait nulla facilisis at
          vero.
        </Text>
        <Text style={{ color: "#666", fontSize: 14, maxWidth: 400 }}>
          Mirum est notare quam littera gothica, quam nunc putamus parum
          claram, anteposuerit litterarum seacula quarta decima quinta decima.
        </Text>
      </Flex>

      {/* Buttons */}
      <Group justify="center" gap="md">
        <Butt text="Make An Appointment" hoverBackground="#FFFFFF" hoverColor="#3DC5DF"/>
        <Butt text="View TimeTable "  background="#ffffff" color="#3DC5DF" hoverColor="#FFFFFF"/>
      </Group>
    </Container>
  );
}
