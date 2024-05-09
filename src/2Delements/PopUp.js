import React, { useState } from "react";
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
        <h2>{props.content.title}</h2>
        <p>{props.content.text}</p>
      </section>
    </div>
  );
};

export default PopUp;
