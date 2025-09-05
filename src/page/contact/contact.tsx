
import DescriptionBar from "../../component/ui/descriptionBar";
import ContactUsForm from '../../component/forms/contactUsForm';
import Ambulance from '../../component/icons/smile';
export default function contact() {
  return (
    <div>
     <DescriptionBar title="Contact Us"
        description="Feel Free To Contact Us"
        buttonText="HOME / Contact"/>
          <ContactUsForm/>
          <Ambulance/>
    </div>
  
  )
}
