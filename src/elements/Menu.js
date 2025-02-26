import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";

const Menu = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuFunction = () => setShowMenu(!showMenu);
  const childClick = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [showMenu]);

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
          <span className="close" onClick={showMenuFunction}>
            Close
          </span>
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
