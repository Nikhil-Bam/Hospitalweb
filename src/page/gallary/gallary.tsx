import DescriptionBar from "../../component/ui/descriptionBar";
import FounderInfo from "../../component/ui/fonderInfo";
import TeamInfo from "../../component/ui/teamInfo";
import DoctorSlide from "../../component/ui/doctorSlide";
import InfoCard from "../../component/ui/InfoCard";
export default function gallary() {
  return (
    <div>
      <div>
     <DescriptionBar/>
     <span style={{padding:"80px"}}><FounderInfo/></span>
     <span><TeamInfo/></span>
     <span> <DoctorSlide/></span>
     <span style={{padding:"80px"}}><InfoCard/></span>
     </div>

    </div>
  )
}
