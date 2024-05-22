import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const Menu = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuFunction = () => setShowMenu(!showMenu);
  const childClick = (event) => {
    event.stopPropagation();
  };
  return (
    <>
      <nav
        className={"menuPopUp " + (showMenu && "display")}
        onClick={showMenuFunction}
      >
        <div className="innerMenu" onClick={childClick}>
          <h2>MENU</h2>
          <ul className="spans">
            <li>
              <span onClick={() => props.popUp("aboutMe")}>About me</span>
            </li>
            <li>
              <span onClick={() => props.popUp("education")}>Education</span>
            </li>
            <li>
              <span onClick={() => props.popUp("experience")}>Experience</span>
            </li>
            <li>
              <span onClick={() => props.popUp("projects")}>Projects</span>
            </li>
          </ul>
          <a href="/" className="close" onClick={showMenuFunction}>
            Close
          </a>
        </div>
      </nav>

      <header id="header" className="header">
        <nav>
          <a
            href="https://drive.google.com/file/d/12plz892X6Lauziwtk4fv82YQfjwcXBh-/view?usp=sharing"
            className="menu cv"
            target="_blank"
            rel="noopener noreferrer"
          >
            CV
          </a>
          <a href="#menu" className="menu" onClick={showMenuFunction}>
            <FontAwesomeIcon icon={faBars} className="icon" />
          </a>
        </nav>
      </header>
    </>
  );
};
export default Menu;
