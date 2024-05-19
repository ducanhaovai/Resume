import { useState } from "react";

interface NavItemProps {
  onNavItemClick: (index: number) => void;
}

export default function NavItem({ onNavItemClick }: NavItemProps) {
  const [activeSection, setActiveSection] = useState("Home");
  const navItems = [
    "Home",
    "About",
    "Service",
    "Contact",
    "Portfolio",
    "Weather",
  ];
  const navIcons = [
    "fa-house",
    "fa-user",
    "fa-briefcase",
    "fa-phone",
    "fa-suitcase",
    "fa-sun",
  ];

  const handleNavClick = (item: string, index: number) => {
    // Remove "active" class from all sections except the selected one
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      if (section.classList.contains(item.toLowerCase())) {
        section.classList.remove("back-section");
        section.classList.add("active");
      } else {
        section.classList.remove("active");
        section.classList.add("back-section");
      }
    });

    setActiveSection(item);
    onNavItemClick(index);
  };

  return (
    <ul className="nav">
      {navItems.map((item, index) => (
        <li key={index}>
          <a
            className={item === activeSection ? "active" : ""}
            onClick={() => handleNavClick(item, index)}
          >
            <i className={`fa-solid ${navIcons[index]}`}></i>
            <p>{item}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
