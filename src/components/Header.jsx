// Utils
import "./Header.css";

// Images
import logo from "../images/logo.svg";
import arrow_down from "../images/icon-arrow-down.svg";
import menu_icon from "../images/icon-hamburger.svg";

function Header() {
  return (
    <div className="header_wrapper">
      <header>
        <img src={logo} alt="Logo" />

        <div className="header_menu">
          <ul className="nav_links">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
          <button className="contact_btn">Contact</button>
        </div>

        <button id="menu_btn">
            <img src={menu_icon} alt="Menu" />
        </button>
      </header>

      <div className="slogan_wrapper">
        <h1>WE ARE CREATIVES</h1>

        <img src={arrow_down} alt="Down" />
      </div>
    </div>
  );
}

export default Header;
