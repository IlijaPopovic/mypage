import cofaImage from "../images/cofa32.png";
import vtsImage from "../images/VTS_logo2.png";
import meImage from "../images/me2.png";

import infoData from "..//infoData";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-regular-svg-icons";

const Sections = (props) => {
  return (
    <>
      <section id="banner" className="banner">
        <div className="inner">
          <p>Hello there, I'm</p>
          <h2>ILIJA POPOVIĆ</h2>
          <p>Engineer of Information Technology and Systems</p>
        </div>
      </section>

      <section id="one" className="section one">
        <div className="inner rightSide">
          <a href="#" className="image me">
            <img src={meImage} alt="" />
          </a>
          <div className="content">
            <h2 className="title">About me</h2>
            <p>{infoData.aboutMe.shortText}</p>
            <div className="learnMore" onClick={() => props.popUp("aboutMe")}>
              Learn more{" "}
              <FontAwesomeIcon icon={faCircleRight} className="icon" />
            </div>
          </div>
        </div>
      </section>

      <section id="two" className="section two">
        <div className="inner leftSide">
          <a href="#" className="image">
            <img src={vtsImage} alt="" />
          </a>
          <div className="content">
            <h2 className="title">Education</h2>
            <p>{infoData.education.shortText}</p>
            <div className="learnMore" onClick={() => props.popUp("education")}>
              Learn more{" "}
              <FontAwesomeIcon icon={faCircleRight} className="icon" />
            </div>
          </div>
        </div>
      </section>

      <section id="three" className="section three">
        <div className="inner rightSide">
          <a href="#" className="image">
            <img src={cofaImage} alt="" />
          </a>
          <div className="content">
            <h2 className="title">Experience</h2>
            <p>{infoData.experience.shortText}</p>
            <div
              className="learnMore"
              onClick={() => props.popUp("experience")}
            >
              Learn more{" "}
              <FontAwesomeIcon icon={faCircleRight} className="icon" />
            </div>
          </div>
        </div>
      </section>

      <section id="four" className="section four">
        <div className="inner leftSide">
          <a href="#" className="image">
            <img src={cofaImage} alt="" />
          </a>
          <div className="content">
            <h2 className="title">Projects</h2>
            <p>{infoData.projects.shortText}</p>
            <div className="learnMore" onClick={() => props.popUp("projects")}>
              Learn more{" "}
              <FontAwesomeIcon icon={faCircleRight} className="icon" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sections;
