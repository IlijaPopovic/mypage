import "./App2D.css";
import { useEffect, useState } from "react";

import Footer from "./Footer.js";
import Menu from "./Menu.js";
import PopUp from "./PopUp.js";
import infoData from "..//infoData.json";
import Sections from "./Sections.js";

function App2D() {
  const [popUpContent, setPopUpContent] = useState(infoData.education);
  const [showPop, setShowPop] = useState(false);

  const Loader = () => <div className="loader">Loading...</div>;

  const showPopUpFunction = () => setShowPop(!showPop);

  const popUp = (name) => {
    setPopUpContent(infoData[name]);
    showPopUpFunction();
  };

  useEffect(() => {
    if (showPop) {
      document.body.classList.add("no-scroll");
      document.querySelector(".pop-section").classList.add("inner", "open");
    } else {
      document.body.classList.remove("no-scroll");
      document.querySelector(".pop-section").classList.remove("inner", "open");
    }
  }, [showPop]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.onload = () => {
      setLoading(false);
    };
  }, []);

  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <div className="App2D">
      <div className={"page-wrapper"}>
        <Menu popUp={popUp} />

        <PopUp
          content={popUpContent}
          showPopUpFunction={showPopUpFunction}
          showPop={showPop}
        />
        <Sections popUp={popUp} />
        <Footer />
        <div />
      </div>
    </div>
  );
}

export default App2D;
