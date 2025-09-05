import { Card, Image, Text } from "@mantine/core";
import { motion } from "framer-motion";

const data = [
  { 
    img: "gallery-img1.jpg", 
    text: "Modern Hospital Building", 
    width: 483, 
    height: 483,
    motion: { 
      initial: { opacity: 0, x: 100 }, 
      animate: { opacity: 1, x: 0 }, 
      transition: { type: "spring" as const, stiffness: 100, damping: 10, delay: 0.5 } 
    }
  },
  { 
    img: "gallery-img2.jpg", 
    text: "Spacious Waiting Area", 
    width: 241, 
    height: 480,
    motion: { 
      initial: { opacity: 0, y: 100 }, 
      animate: { opacity: 1, y: 0 }, 
      transition: { type: "spring" as const, stiffness: 100, damping: 10, delay: 0.7 } 
    }
  },
  { 
    img: "gallery-img3.jpg", 
    text: "Eye Examination", 
    width: 241, 
    height: 330,
    motion: { 
      initial: { opacity: 0, y: -100 }, 
      animate: { opacity: 1, y: 0 }, 
      transition: { type: "spring" as const, stiffness: 100, damping: 10, delay: 0.7 } 
    }
  },
  { 
    img: "gallery-img1.jpg", 
    text: "Advanced MRI Scanner", 
    width: 241, 
    height: 480,
    motion: { 
      initial: { opacity: 0, x: -100 }, 
      animate: { opacity: 1, x: 0 }, 
      transition: { type: "spring" as const, stiffness: 100, damping: 10, delay: 0.8} 
    }
  },
  { 
    img: "gallery-img2.jpg", 
    text: "State-of-the-art Surgery Room", 
    width: 241, 
    height: 330,
    motion: { 
      initial: { opacity: 0, x: 100 }, 
      animate: { opacity: 1, x: 0 }, 
      transition: { type: "spring" as const, stiffness: 100, damping: 10, delay: 0.8 } 
    }
  },
];

export default function HospitalGallery() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gap: "16px",
        padding: "20px",
        justifyContent: "center",
        width: "100%", 
        boxSizing: "border-box",
      }}
    >
      {/* First Large Card */}
      <motion.div
        initial={data[0].motion.initial}
        animate={data[0].motion.animate}
        transition={data[0].motion.transition}
      >
        <Card
          shadow="md"
          radius="lg"
          style={{
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
            gridRow: "span 2",
            width: "100%", 
          }}
        >
          <Image
            src={data[0].img}
            alt={data[0].text}
            style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease-in-out" }}
            className="hover-image"
          />
          <Text
            style={{
              position: "absolute",
              bottom: "-50px",
              left: 0,
              right: 0,
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "white",
              textAlign: "center",
              padding: "10px",
              transition: "all 0.3s ease-in-out",
            }}
            className="hover-text"
          >
            {data[0].text}
          </Text>
        </Card>
      </motion.div>

      {/* Middle Column */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {data.slice(1, 3).map((item, index) => (
          <motion.div
            key={index}
            initial={item.motion.initial}
            animate={item.motion.animate}
            transition={item.motion.transition}
          >
            <Card
              shadow="md"
              radius="lg"
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                width: "100%",
                height: item.height,
              }}
            >
              <Image
                src={item.img}
                alt={item.text}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease-in-out" }}
                className="hover-image"
              />
              <Text
                style={{
                  position: "absolute",
                  bottom: "-50px",
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(0,0,0,0.7)",
                  color: "white",
                  textAlign: "center",
                  padding: "10px",
                  transition: "all 0.3s ease-in-out",
                }}
                className="hover-text"
              >
                {item.text}
              </Text>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Right Column */}
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {data.slice(3, 5).map((item, index) => (
          <motion.div
            key={index}
            initial={item.motion.initial}
            animate={item.motion.animate}
            transition={item.motion.transition}
          >
            <Card
              shadow="md"
              radius="lg"
              style={{
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                width: "100%",
                height: item.height,
              }}
            >
              <Image
                src={item.img}
                alt={item.text}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.3s ease-in-out" }}
                className="hover-image"
              />
              <Text
                style={{
                  position: "absolute",
                  bottom: "-50px",
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(0,0,0,0.7)",
                  color: "white",
                  textAlign: "center",
                  padding: "10px",
                  transition: "all 0.3s ease-in-out",
                }}
                className="hover-text"
              >
                {item.text}
              </Text>
            </Card>
          </motion.div>
        ))}
      </div>

      <style>
        {`
          .mantine-Card-root:hover .hover-text {
            bottom: 0 !important;
          }

          .mantine-Card-root:hover .hover-image {
            transform: scale(1.05);
          }
        `}
      </style>
    </div>
  );
}
