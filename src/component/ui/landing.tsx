// Landing.tsx

import Butt from "../icons/button";
import {motion} from "framer-motion";
const Landing: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    height: "100vh",
    width: "100%",
    fontFamily: "Arial, sans-serif",
    position: "relative", // so the arrow can be positioned inside
  };

  const leftStyle: React.CSSProperties = {
    flex: 1,
    backgroundColor: "rgb(103, 210, 231)",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "2rem",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "3rem",
    fontWeight: "bold",
    margin: "1rem 0",
  };

  const subheadingStyle: React.CSSProperties = {
    fontSize: "1rem",
    margin: "1rem 0",
    maxWidth: "500px",
    lineHeight: "1.5",
    fontFamily: "'Raleway', sans-serif", 
  };

  const rightStyle: React.CSSProperties = {
    flex: 1,
    backgroundImage: `url("doctor.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  const arrowContainer: React.CSSProperties = {
    position: "absolute",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#fff",
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
  };

  const arrowStyle: React.CSSProperties = {
    fontSize: "24px",
    color: "rgb(103, 210, 231)",
  };


  const handleScroll = () => {
    const section = document.getElementById("1"); 
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div style={containerStyle}>
      <div style={leftStyle}>
        <motion.div initial={{opacity:0,y:-100}}
        animate={{opacity:1,y:0}}
        transition={{
          type:"spring",
          stiffness:100,
          damping:10,
          delay:0.4,
        }}  >
        <p >
          HELLO, WE ARE MEDIKALI!!</p>
        <h1 style={headingStyle}>We Care About Your Health</h1>
        </motion.div >
        <motion.div initial={{opacity:0,y:100}}
        animate={{opacity:1,y:0}}
        transition={{
          type:"spring",
          stiffness:100,
          damping:10,
          delay:0.8,
        }}>
        <p 
        style={subheadingStyle}>
          Claritas est etiam processus dynamicus, qui sequitur mutationem
          consuetudium lectorum. Mirum est notare quam littera gothica, quam
          nunc putamus ui sequitur mutationem consuetudium lectorum. parum
          claram
        </p>
        <Butt background="#297686ff"/>
        </motion.div>
      </div>
      <motion.div initial={{opacity:0,scale:0}}
      animate={{opacity:1,scale:1}}
      transition={{
        type:"spring",
        stiffness:100,
        damping:10,
        delay:0.4,
      }}
      style={rightStyle}></motion.div>

    
      <div style={arrowContainer} onClick={handleScroll}>
        <span style={arrowStyle}>↓</span>
      </div>
    </div>
  );
};

export default Landing;
