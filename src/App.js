import React, { Suspense, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";

// import App3D from "./3Delements/App3D.js";
import App2D from "./2Delements/App2D.js";
import "./3Delements/App3D.css";

import infoData from "./infoData";

const App = () => {
  return (
    <div className="App">
      {/* <Canvas className="main-canvas" shadows>
        <App3D></App3D>
      </Canvas> */}
      <App2D />
    </div>
  );
};

export default App;
