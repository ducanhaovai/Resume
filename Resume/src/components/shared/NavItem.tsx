import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function NavItem() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navItems = ["Home", "About", "Service", "Project", "Contact"];
  const navIcons = [
    "fa-house",
    "fa-user",
    "fa-list",
    "fa-briefcase",
    "fa-phone",
  ];

  return (
    <ul className="nav">
      {navItems.map((item, index) => (
        <li key={index}>
          <a
            className={index === activeIndex ? "active" : ""}
            onClick={() => setActiveIndex(index)}
          >
            <i className={`fa-solid ${navIcons[index]}`}></i>
            <p>{item}</p>
          </a>
        </li>
      ))}
    </ul>
  );
}
