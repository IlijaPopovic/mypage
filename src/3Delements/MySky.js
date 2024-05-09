import React, { useRef, useState } from "react";
import { BackSide, TextureLoader } from "three";

function MySky(props) {
  const meshRef = useRef();
  const texture = new TextureLoader().load(
    process.env.PUBLIC_URL + "images/panorama.jpg"
  );

  return (
    <mesh {...props} ref={meshRef}>
      <sphereGeometry args={[500, 32, 32]} />
      <meshBasicMaterial map={texture} color={"magenta"} side={BackSide} />
    </mesh>
  );
}

export default MySky;
