import { useState } from "react";

export default function NavItem() {
  const [activeSection, setActiveSection] = useState("Home");
  const navItems = ["Home", "About", "Service", "Project", "Contact"];
  const navIcons = [
    "fa-house",
    "fa-user",
    "fa-list",
    "fa-briefcase",
    "fa-phone",
  ];


  const handleNavClick = (item: string) => {
    const prevActiveSection = document.querySelector(
      `.${activeSection.toLowerCase()}`
    );
    if (prevActiveSection) {
      prevActiveSection.classList.remove("active");
      prevActiveSection.classList.add("back-section");
    }

    setActiveSection(item);
    const newActiveSection = document.querySelector(`.${item.toLowerCase()}`);
    if (newActiveSection) {
      newActiveSection.classList.remove("back-section");
      newActiveSection.classList.add("active");
    }
  };

  return (
    <ul className="nav">
      {navItems.map((item, index) => (
        <li key={index}>
          <a
            className={item === activeSection ? "active" : ""}
            onClick={() => handleNavClick(item)}
          >
            <i className={`fa-solid ${navIcons[index]}`}></i>
            <p>{item}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
