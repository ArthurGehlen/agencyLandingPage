import "./HeaderMenu.css";

function HeaderMenu({isActive}) {
  return (
    <>
      {isActive && (
        <div id="menu">
          <ul className="menu_links">
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
          </ul>
          <button className="contact_btn">Contact</button>
        </div>
      )}
    </>
  );
}

export default HeaderMenu;
