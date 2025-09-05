
import InfoCard from '../../component/ui/InfoCard'
import Landing from "../../component/ui/landing";
import WhyUs from '../../component/ui/whyUs';
import AnotherScrolling from "../../component/ui/anotherScrolling";
import Founderinfo from "../../component/ui/fonderInfo";
import Combo from '../../component/ui/combo';
import Blog from '../../component/ui/blog';
import Youtube from "../../component/ui/youtube";
import MakeAppointment from "../../component/ui/MakeAppointment";
import '@mantine/core/styles.css';
export default function Home() {
  return (
    <div >
   <Landing/>
   <WhyUs/>
   <AnotherScrolling/>
    <Founderinfo/>
    <Combo/>
    <Blog/>
    <Youtube/>
   <MakeAppointment/>
    <InfoCard/>

    </div>
  );
}
