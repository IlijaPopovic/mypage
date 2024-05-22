import "./App2D.css";

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
          <button onClick={props.showPopUpFunction}>X</button>
        </div>
        <p>{props.content.text}</p>
      </section>
    </div>
  );
};

export default PopUp;
