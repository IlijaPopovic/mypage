import { Environment, Sphere } from "@react-three/drei";
import React from "react";
export const Lightning = (props) => {
  return (
    <>
      <Environment
        files={process.env.PUBLIC_URL + "/images/room.hdr"}
        background
      />
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={props.position}
        intensity={Math.PI * 150}
        castShadow
      />
      <Sphere position={props.position} />
    </>
  );
};
