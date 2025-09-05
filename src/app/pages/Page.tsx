
import { HashRouter as Routes, Route } from "react-router-dom";
import NavBar from "../../app/components/navBar";
import Home from "../../page/home/home";
import About from "../../page/aboutus/aboutus";
import Services from "../../page/services/services";
import Department from "../../page/Department/department";
import Gallery from "../../page/gallary/gallary";
import Pages from "../../page/webpages/webpages";
import Contact from "../../page/contact/contact";
import Footer from "../components/footer";


function Page() {
  return (
    <div>
      <header style={{  top: 0, left: 0, width: "100%", zIndex: 1000 }}>
        <NavBar />
      </header>

      <main > 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/department" element={<Department />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>   
     
    <Footer/>
    </div>
  );
}

export default Page;