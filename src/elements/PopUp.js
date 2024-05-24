import "./App2D.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";

const PopUp = (props) => {
  const childClick = (event) => {
    event.stopPropagation();
  };
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
        <p>{props.content.text}</p>
      </section>
    </div>
  );
};

export default PopUp;
