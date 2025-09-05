
import Butt from '../icons/button';

export default function DescriptionBar({
  title = "Doctors",
  description = "Meet our team of highly skilled professionals",
  buttonText = "HOME / DOCTOR" // default text
}) {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        width: "100%",
        height: "357px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "0px 0px 10px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        fontFamily: "'Raleway', sans-serif",
      }}
    >
      <img
        src="/doctor.jpg"
        alt="Background"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.2,
          zIndex: 0,
        }}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <h1
          style={{
            margin: 0,
            letterSpacing: "3px",
            marginBottom: "10px",
            fontSize: "34px",
            fontWeight: "bold",
            color: "#3dc5df",
            textTransform: "uppercase",
          }}
        >
          {title}
        </h1>
        <p
          style={{
            margin: "0px 0px 10px",
            fontSize: "16px",
            color: "#000",
          }}
        >
          {description}
        </p>
        <span style={{ padding: "30px" }}>
          <Butt text={buttonText} />
        </span>
      </div>
    </div>
  );
}
