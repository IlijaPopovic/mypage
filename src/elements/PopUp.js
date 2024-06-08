import "./App2D.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft } from "@fortawesome/free-regular-svg-icons";

const PopUp = (props) => {
  const childClick = (event) => {
    event.stopPropagation();
  };

  const body = props.content.body.map((item, index) => (
    <div key={index}>
      <h3>{item.subTitle}</h3>
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
