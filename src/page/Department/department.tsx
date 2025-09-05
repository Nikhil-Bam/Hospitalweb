
import DescriptionBar from "../../component/ui/descriptionBar";
import DepartmentCard from "../../component/ui/departmentCard";
import InfoCard from "../../component/ui/InfoCard";
export default function Department() {
  return (
    <div>
    <div>
      <DescriptionBar
        title="Our Departments"
        description="Explore the various departments of our hospital"
        buttonText="HOME / DEPARTMENT"
      />
      </div>
      <div>
      <h3 style={{textAlign:"center" , padding:"80px"}}>We are a team of young professionals<br/> passionate in our work.</h3>
      <div style={{display:"flex",   justifyContent: "center",alignItems: "center",  gap: "30px",textAlign: "center",}}>
        <p>Duis autem vel eum iriure <br/>dolor in hendrerit n vuew lputate velit esse molestie consequat,<br/> vel illum dolore eufe ugiat nulla facilisis at vero.</p>
         <p>Duis autem vel eum iriure <br/>dolor in hendrerit n vuew lputate velit esse molestie consequat,<br/> vel illum dolore eufe ugiat nulla facilisis at vero.</p>
      </div>
       <div style={{padding:"80px"}}>
        <DepartmentCard/>
        <span style={{padding:"80px"}}> <InfoCard/> </span>
       </div>
      </div>
    </div>
  );
}
