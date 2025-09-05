
import Logo from "../../component/icons/logo";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#212121",
        color: "#FFFFFF",
        fontFamily: "Raleway, sans-serif",
        fontSize: "14px",
        lineHeight: "20px",
        font:"'Raleway', sans-serif", 
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "2000px",
          margin: "0 auto",
          padding: "60px 20px 40px",
          flexWrap: "wrap",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
       
        <div id="nik" style={{ flex: "1 1 300px", minWidth: "250px",marginLeft:"80px" }}>
          <h4 style={{ fontWeight: "700", marginBottom: "20px" }}>LATEST TWEETS</h4>
          <p>
            <a href="#" style={{ color: "#00bcd4" }}>
              @medikal
            </a>{" "}
            Sweets and Bakers WordPress
            <br />
            <a href="#" style={{ color: "#00bcd4" }}>
              Theme on @EnvatoMarket
            </a>
            <br />
            http://t.co/we8Kf0
            <br />
            <span style={{ color: "#999999" }}>- Thursday April 9, 2015</span>
          </p>
          <p>
            <a href="#" style={{ color: "#00bcd4" }}>
              @medikal
            </a>{" "}
            In hendrerit in molestie consequat
            <br />
            in http://t.co/we8Kf0
            <br />
            <span style={{ color: "#999999" }}>- Thursday April 9, 2015</span>
          </p>
        </div>

       
        <div style={{ flex: "1 1 400px", minWidth: "300px", textAlign: "center",marginLeft:"100px" }}>
          <Link to={"/"}>
            <Logo />
          </Link>
          <p style={{ color: "#CCCCCC", margin: "20px 0" }}>
            We work in a friendly and efficient way using the latest technologies
            <br />
            and sharing our expertise to make a diagnosis and implement cutting-edge therapies.
          </p>

          <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center", gap: "15px" }}>
            <FaFacebookF
              style={{ cursor: "pointer", color: "#CCCCCC", transition: "all 0.3s", fontSize: "18px" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#3b5998")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#CCCCCC")}
            />
            <FaTwitter
              style={{ cursor: "pointer", color: "#CCCCCC", transition: "all 0.3s", fontSize: "18px" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00acee")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#CCCCCC")}
            />
            <FaLinkedinIn
              style={{ cursor: "pointer", color: "#CCCCCC", transition: "all 0.3s", fontSize: "18px" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#0e76a8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#CCCCCC")}
            />
          </div>

          <h4 style={{ fontWeight: "700", marginBottom: "10px" }}>REGISTER NEWSLETTER</h4>
          <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
            <input
              type="email"
              placeholder="Enter your email here"
              style={{ padding: "10px", width: "70%", border: "none" }}
            />
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#333333",
                color: "#FFFFFF",
                border: "none",
                cursor: "pointer",
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        <div style={{ flex: "1 1 300px",marginLeft:"180px"}}>
          <h4 style={{ fontWeight: "700", marginBottom: "20px" }}>PATIENT GUIDE</h4>
          <ul style={{ listStyle: "none", padding: 0, color: "#CCCCCC", marginBottom: "40px" }}>
            <li>Choosing a doctor</li>
            <li>Health journals</li>
            <li>Insurance coverage</li>
            <li>Talking to your doctor</li>
            <li>Medikal error</li>
          </ul>
          <h4 style={{ fontWeight: "700", marginBottom: "10px" }}>OPENING HOURS</h4>
          <p style={{ color: "#CCCCCC" }}>Mon to Fri: 8:00 am to 7:00 pm</p>
          <p style={{ color: "#CCCCCC" }}>Sun & Sat: 9:00 am to 5:00 pm</p>
        </div>
      </div>

      <div
        style={{
          textAlign: "center",
          backgroundColor: "#1b1b1b",
          padding: "15px 0",
          marginTop: "20px",
        }}
      >
        <span>&copy; 2023 Medikal. All rights reserved.</span>
      </div>
    </footer>
  );
}
