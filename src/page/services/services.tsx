import DescriptionBar from "../../component/ui/descriptionBar";
import CardsIcons from "../../component/ui/cardsIcons";
import DoctorSlide from "../../component/ui/doctorSlide";
import PatientReview from "../../component/ui/patientReview";
import InfoCard from "../../component/ui/InfoCard";
export default function services() {
  return (
    <div style={{textAlign:"center"}}>
    <DescriptionBar/>
    <div style={{padding:"80px",}}>
     <h3> Our Services</h3>
     <p style={{padding:"62px"}}>Claritas est etiam processus dynamicus, qui sequ itur mutationem<br/> consuetudium lectorum.</p>
     <CardsIcons/>
    </div>
    <div>
     <h3>OUR SPECIALIST DOCTORS</h3>
     <p style={{padding:"62px"}}>Claritas est etiam processus dynamicus, qui sequ itur mutationem<br/> consuetudium lectorum.</p>
     <DoctorSlide/>
     </div>
   <div style={{marginTop:"80px"}}>
    <PatientReview/>
   </div>
     
    <div style={{padding:"80px"}}>
      <InfoCard/>
    </div>
  
    </div>
  )
}
