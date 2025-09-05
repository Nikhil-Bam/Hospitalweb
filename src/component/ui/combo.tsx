import  { useState } from "react";
import Butt from "../icons/button";
function Combo() {
  const [active, setActive] = useState<string>("OVERVIEW");

  const menuItems: string[] = [
    "OVERVIEW",
    "DENTAL",
    "CARDIOLOGY",
    "FOR DISABLED",
    "OPHTHALMOLOGY",
    "EMERGENCY",
    "X-RAY",
  ];

  const services: string[] = [
    "Qualified Staff of Doctors",
    "Feel like you are at Home Services",
    "24x7 Emergency Services",
    "Save your Money and Time with us",
    "Medicine Research",
    "Dental Care",
    "Medical Consulting",
    "Blood Bank",
  ];

  return (
    <div
      style={{
        display: "flex",
        height: "751px",
        fontFamily: "Arial, sans-serif",
      }}
    >
 
      <div style={{ flex: 2.4 }}>
        <img
          src="/blog.jpg" 
          alt="Doctor"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          flex: 1.4,
          backgroundColor: "#3dc5df",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {menuItems.map((item) => (
          <div
            key={item}
            onClick={() => setActive(item)}
            style={{
              padding: "20px",
              textAlign: "center",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
              borderBottom: "1px solid rgba(255,255,255,0.3)",
              backgroundColor: active === item ? "#28a8c7" : "transparent",
              transition: "background 0.3s",
            }}
            onMouseEnter={(e) => {
              if (active !== item) {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "#2fb5d6";
              }
            }}
            onMouseLeave={(e) => {
              if (active !== item) {
                (e.currentTarget as HTMLDivElement).style.backgroundColor =
                  "transparent";
              }
            }}
          >
            {item}
          </div>
        ))}
      </div>

  
      <div style={{ flex: 2, padding: "50px" }}>
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Our Departments
        </h2>
        <p style={{ lineHeight: "1.6", marginBottom: "20px" }}>
          We are a team of young professionals passionate in our work. We work
          in a friendly and efficient using the latest technologies and sharing
          our expertise to make a diagnosis and implement cutting-edge
          therapies.
        </p>
        <p style={{ lineHeight: "1.6", marginBottom: "30px" }}>
          Claritas est etiam processus dynamicus, qui sequitur mut ationem
          consuetudium lectorum. Mirum est notare quam littera gothica, quam
          nunc putamus parum claram, anteposuerit litterarum formas humanitatis
          per seacula quarta decima et quinta decima.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "15px",
            marginBottom: "40px",
          }}
        >
          {services.map((service) => (
            <div key={service} style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#3ed0f2",
                  marginRight: "10px",
                }}
              ></span>
              {service}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: "20px" }}>
          <Butt text="View Our Service" background="#3dc5df"hoverBackground="#fff" hoverColor="#3dc5df"/>
          <Butt text="Contact Us" background="#FFFFFF"color="#3dc5df"hoverColor="#fff"/>
        </div>
      </div>
    </div>
  );
}

export default Combo;
