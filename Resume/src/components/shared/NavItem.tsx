import React, { useState } from "react";

interface NavItemProps {
  onNavItemClick: (index: number) => void;
}

export default function NavItem({ onNavItemClick }: NavItemProps) {
  const [activeSection, setActiveSection] = useState("Home");
  const navItems = ["Home", "About", "Service", "Contact", "Portfolio"];
  const navIcons = [
    "fa-house",
    "fa-user",
    "fa-briefcase",
    "fa-phone",
    "fa-suitcase",
  ];

  const handleNavClick = (item: string, index: number) => {
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

    // Call the provided callback with the index
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
