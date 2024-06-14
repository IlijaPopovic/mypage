import "./App2D.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const PopUp = (props) => {
  const childClick = (event) => {
    event.stopPropagation();
  };

  const gitLink = <a href={props.content.gitLink}>GitHub</a>;

  const body = props.content.body.map((item, index) => (
    <div key={index}>
      <h3>
        {item.subTitle}{" "}
        {item.gitLink && (
          <a href={item.gitLink} target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
        )}
      </h3>
      <p>{item.text}</p>
    </div>
  ));

  return (
    <div
      className={"PopUp " + (props.showPop && "display")}
      onClick={props.showPopUpFunction}
    >
      <section className="pop-section inner" onClick={childClick}>
        <div className="pop-header">
          <h2>{props.content.title}</h2>
          <button onClick={props.showPopUpFunction}>
            <FontAwesomeIcon icon={faCircleLeft} className="icon" />
          </button>
        </div>
        <div className="pop-body">{body}</div>
      </section>
    </div>
  );
};

export default PopUp;
