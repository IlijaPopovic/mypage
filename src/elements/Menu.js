import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { span } from "react-router-dom";

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
        <div class="innerMenu" onClick={childClick}>
          <h2>MENU</h2>
          <ul class="spans">
            <li>
              <span onClick={() => props.popUp("aboutMe")}>About me</span>
            </li>
            <li>
              <span onClick={() => props.popUp("education")}>Education</span>
            </li>
            <li>
              <span onClick={() => props.popUp("experience")}>Experiance</span>
            </li>
            <li>
              <span onClick={() => props.popUp("projects")}>Projects</span>
            </li>
          </ul>
          <a href="" class="close" onClick={showMenuFunction}>
            Close
          </a>
        </div>
      </nav>

      <header id="header" className="header">
        <nav>
          <a href="#menu" className="menu" onClick={showMenuFunction}>
            <FontAwesomeIcon icon={faBars} className="icon" />
          </a>
        </nav>
      </header>
    </>
  );
};
export default Menu;
