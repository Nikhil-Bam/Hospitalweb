import Logo from "../../component/icons/logo";
import { useNavigate, useLocation } from "react-router-dom";

export default function NavBar() {
const navigate = useNavigate();
 const location = useLocation(); 
const isActive = (path: string) => location.pathname === path;


 return (
    <nav 
     className="navbar navbar-expand-lg"
    style={{
     backgroundColor: "#FFFFFF",
     height: "80px",
     borderRadius: 0,
     boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
     width: "100%",
   fontFamily: "'Raleway', sans-serif",
    }}
   >
    <div
     className="container-fluid"
     style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      padding: "0 180px",
     }}
    >
     <div
      className="navbar-brand"
      style={{ display: "flex", alignItems: "center", cursor: "pointer", marginTop:"50px",}}
      onClick={() => navigate("/")}
     >
      <Logo />
     </div>

     <div className="collapse navbar-collapse" id="navbarNav">
      <ul
       className="navbar-nav"
       style={{
        display: "flex",
        gap: "30px",
        marginLeft: "320px",
       marginTop: "10px", 
       }}
      >
       <li className="nav-item">
        <span
         className="nav-link"
         style={{ cursor: "pointer", color: isActive("/") ? "#00BFFF" : "#333333" }}
         onClick={() => navigate("/")}
        >
         HOME
        </span>
       </li>
       <li className="nav-item">
        <span
         className="nav-link"
         style={{ cursor: "pointer", color: isActive("/about") ? "#00BFFF" : "#333333" }}
         onClick={() => navigate("/about")}
        >
         ABOUT US
        </span>
       </li>
       <li className="nav-item">
        <span
         className="nav-link"
         style={{ cursor: "pointer", color: isActive("/services") ? "#00BFFF" : "#333333" }}
         onClick={() => navigate("/services")}
        >
         SERVICES
        </span>
       </li>
       <li className="nav-item">
        <span
         className="nav-link"
         style={{ cursor: "pointer", color: isActive("/department") ? "#00BFFF" : "#333333" }}
         onClick={() => navigate("/department")}
        >
         DEPARTMENT
        </span>
       </li>
       <li className="nav-item">
        <span
         className="nav-link"
         style={{ cursor: "pointer", color: isActive("/gallery") ? "#00BFFF" : "#333333" }}
         onClick={() => navigate("/gallery")}
        >
         GALLERY
        </span>
       </li>
       <li className="nav-item">
        <span
         className="nav-link"
         style={{ cursor: "pointer", color: isActive("/pages") ? "#00BFFF" : "#333333" }}
         onClick={() => navigate("/pages")}
        >
         PAGES
        </span>
       </li>
       <li className="nav-item">
        <span
         className="nav-link"
         style={{ cursor: "pointer", color: isActive("/contact") ? "#00BFFF" : "#333333" }}
         onClick={() => navigate("/contact")}
        >
         CONTACT
        </span>
       </li>
      </ul>
     </div>
    </div>
 </nav>

 );
}