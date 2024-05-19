import { useState } from "react";
import "../../assets/CSS/aside.css";
import NavItem from "../shared/NavItem";
import "@fortawesome/fontawesome-free/css/all.min.css";
import anhdaidien from "../../assets/anhdaidien.jpg";

export default function Aside() {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => {
    setIsAsideOpen(!isAsideOpen);
    toggleSections();
  };

  const toggleSections = () => {
    const allSections = document.querySelectorAll(".section");
    allSections.forEach((section) => {
      section.classList.toggle("open");
    });
  };
  const handleNavItemClick = () => {

    setIsAsideOpen(false);
    toggleSections();
  };

  return (
    <div className={`aside ${isAsideOpen ? "open" : ""}`}>
      <div className="logo">
        <img src={anhdaidien} className="avatar-img" alt="Avatar" />
        <h1 className="name">
          <span>Anh </span>
          Mai
        </h1>
        <div className="social-links">
          <a className="facebook">
            <i className="fa-brands fa-facebook bx"></i>
          </a>
          <a className="twitter">
            <i className="fa-brands fa-twitter bx"></i>
          </a>
          <a className="instagram">
            <i className="fa-brands fa-instagram bx"></i>
          </a>
          <a className="skype">
            <i className="fa-brands fa-skype bx"></i>
          </a>
        </div>
      </div>
      <div className="nav-toggler" onClick={toggleAside}>
        <span></span>
      </div>
      <nav className="nav-menu navbar" id="navbar">
        <NavItem onNavItemClick={handleNavItemClick} />
      </nav>
    </div>
  );
}
