import "../../assets/CSS/aside.css";
import NavItem from "../shared/NavItem";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Aside() {
  return (
    <div className="aside">
      <div className="logo">
        <a className="name">
          <span>Anh </span>
          Mai
        </a>
      </div>
      <NavItem />
    </div>
  );
}
