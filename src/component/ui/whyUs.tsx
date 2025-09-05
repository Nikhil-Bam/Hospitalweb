// whyUs.tsx
import { Text, Title } from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

type Feature = {
  title: string;
  desc: string;
};

type Props = {
  heading?: string;
};

const WhyUs = ({ heading = "Why Choose Us" }: Props) => {
  const features: Feature[] = [
    { title: "Medical Counseling", desc: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida." },
    { title: "Professional services", desc: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida." },
    { title: "24 Hours service", desc: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida." },
    { title: "Qualified medical facilities", desc: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida." },
    { title: "Top level doctors", desc: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida." },
    { title: "Dedicated patient care", desc: "Cum sociis natoque penatibus et magnis dis parturient montesmus. Nunc finibus sit amet gravida." },
  ];

  return (
    <div
      id="1"
      style={{
        width: "100%",
        padding: "60px 100px",
        backgroundColor: "#fff",
        textAlign: "left",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Title
          order={2}
          style={{ fontSize: "36px", fontWeight: 700, lineHeight: "1.2", marginBottom: "40px" }}
        >
          {heading.split(" ").map((word, i) => (
            <div key={i}>{word}</div>
          ))}
        </Title>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                flex: "1 1 calc(33.333% - 20px)",
                display: "flex",
                alignItems: "flex-start",
                marginBottom: "20px",
              }}
            >
              <div
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  backgroundColor: "#00BFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "10px",
                  flexShrink: 0,
                }}
              >
                <IconCheck size={16} strokeWidth={3} color="#fff" />
              </div>

              <div>
                <Text style={{ fontWeight: 600, marginBottom: 5 }}>{f.title}</Text>
                <Text size="sm" c="dimmed">{f.desc}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: "40px", textAlign: "center" }}>
        <img
          src="/whyus.jpg"
          alt="Doctors"
          style={{ width: "90%", maxWidth: "1200px" }}
        />
      </div>
    </div>
  );
};

export default WhyUs;
