
import {
  TextInput,
  Textarea,
  Button,
  Title,
  Group,
  Text,
  Stack,
  Divider,
  ActionIcon,
  Flex,
} from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandSkype,
  IconBrandDribbble,
  IconBrandGoogle,
  IconBrandDiscord,
} from "@tabler/icons-react";

const socialIcons = [
  { icon: IconBrandFacebook, color: "#1877F2" },
  { icon: IconBrandTwitter, color: "#1DA1F2" },
  { icon: IconBrandLinkedin, color: "#0077B5" },
  { icon: IconBrandSkype, color: "#00AFF0" },
  { icon: IconBrandDribbble, color: "#EA4C89" },
  { icon: IconBrandGoogle, color: "#DB4437" },
  { icon: IconBrandDiscord, color: "#5865F2" },
];

export default function ContactUsForm() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        fontFamily:"'Raleway', sans-serif", 
      }}
    >
      <div
        style={{
          width: 1170,
          height: 466,
          display: "flex",
          gap: "20px",
        }}
      >
        {/* LEFT SIDE → MESSAGE FOR US */}
        <div
          style={{
            width: 780,
            height: 466,
            padding: "20px",
            boxSizing: "border-box",
            border: "1px solid #e0e0e0",
            borderRadius: 8,
          }}
        >
          <Flex direction="column" style={{ height: "100%" }}>
            <Title order={3} mb="lg">
              MESSAGE FOR US
            </Title>

            <Flex gap="md" wrap="wrap">
              <TextInput
                label="Full Name *"
                placeholder="Enter your full name"
                required
                style={{ flex: 1, minWidth: 250 }}
              />
              <TextInput
                label="Email *"
                placeholder="Enter your email"
                required
                style={{ flex: 1, minWidth: 250 }}
              />
              <TextInput
                label="Phone *"
                placeholder="Enter your phone number"
                required
                style={{ flex: 1, minWidth: 250 }}
              />
              <TextInput
                label="Department"
                placeholder="Enter department"
                style={{ flex: 1, minWidth: 250 }}
              />
            </Flex>

            <Textarea
              label="Message"
              placeholder="Write your message"
              minRows={6}
              mt="md"
            />

            <Button mt="lg" size="md" color="#32b8d4" style={{ width: 180 }}>
              SUBMIT
            </Button>
          </Flex>
        </div>

      
        <div
          style={{
            width: 390,
            height: 332,
            padding: "20px",
            boxSizing: "border-box",
            border: "1px solid #e0e0e0",
            borderRadius: 8,
            alignSelf: "center",
          }}
        >
          <Stack gap="lg">
            <div>
              <Title order={4} mb="sm">
                OUR TIMING
              </Title>
              <Group justify="space-between">
                <Text>Mon to Fri</Text>
                <Text>8:00 AM to 7:00 PM</Text>
              </Group>
              <Group justify="space-between">
                <Text>Sat</Text>
                <Text>9:00 AM to 5:00 PM</Text>
              </Group>
              <Group justify="space-between">
                <Text>Sun</Text>
                <Text>Closed</Text>
              </Group>
            </div>

            <Divider />

            <div>
              <Title order={4} mb="sm">
                FOLLOW US
              </Title>
              <Group gap="sm">
                {socialIcons.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <ActionIcon
                      key={idx}
                      size="lg"
                      radius="xl"
                      variant="filled" 
                      style={{
                        backgroundColor: "#000", 
                        color: "#fff", 
                        transition: "background-color 0.3s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = item.color)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "#000")
                      }
                    >
                      <Icon size={20} />
                    </ActionIcon>
                  );
                })}
              </Group>
            </div>
          </Stack>
        </div>
      </div>
      
    </div>
  );
}
