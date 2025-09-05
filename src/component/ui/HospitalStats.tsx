
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Smile from "../icons/smile";
import DoctorIcon from "../icons/doctoricon";
import BedIcon from "../icons/bed";
import ambulance from "../icons/ambulance";
import {motion} from 'framer-motion';
const stats = [
  { icon: Smile, value: 9501, label: "DISCHARGED", motion: { 
      initial: { opacity: 0, x: 100 }, 
      animate: { opacity: 1, x: 0 }, 
      transition: { type: "spring" as const, stiffness: 100, damping: 10, delay: 0.5 } 
    }},
  { icon: BedIcon, value: 38, label: "BEDS", motion: { 
      initial: { opacity: 0, x: -100 }, 
      animate: { opacity: 1, x: 0 }, 
      transition: { type: "spring" as const, stiffness: 100, damping: 10, delay: 0.7 } 
    } },
  { icon: DoctorIcon, value: 572, label: "DOCTORS" ,
    motion: { 
      initial: { opacity: 0, y: -100 }, 
      animate: { opacity: 1, y: 0 }, 
      transition: { type: "spring" as const, stiffness: 100, damping: 10, delay: 0.8 } 
    }
  },
  { icon: ambulance, value: 14, label: "AMBULANCES", motion: { 
      initial: { opacity: 0, x: 100 }, 
      animate: { opacity: 1, x: 0 }, 
      transition: { type: "spring" as const, stiffness: 100, damping: 10, delay: 0.8} 
    } },
   
];

export default function Bed() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  
const containerStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "355px",
  padding: 40,
  color: "white",
  borderRadius: "12px",


  backgroundImage: `
    linear-gradient(rgba(47, 116, 151, 0.6),rgb(61, 197, 223)),
    url("/gallery-img1.jpg")
  `,
  backgroundSize: "cover",
  backgroundPosition: "center",
};



  const statStyle: React.CSSProperties = {
    textAlign: "center",
  };

  const numberStyle: React.CSSProperties = {
    fontSize: "2rem",
    fontWeight: "bold",
  };

  const labelStyle: React.CSSProperties = {
    textTransform: "uppercase",
    fontSize: "0.875rem",
    marginTop: 4,
  };

  return (
    <div ref={ref} style={containerStyle}>
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <motion.div 
          initial={stats[0].motion.initial}
          animate={stats[0].motion.animate}
          transition={stats[0].motion.transition}
          
           
          key={i} style={statStyle}>
            <Icon size={40} color="white" />
            <div style={numberStyle}>
              {inView ? <CountUp end={stat.value} duration={2} /> : 0}
            </div>
            <p style={labelStyle}>{stat.label}</p>
          </motion.div>
        );
      })}
    </div>
  );
}
