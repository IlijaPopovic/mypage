import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Plane(props) {
  const meshRef = useRef();
  const curentDegree = useRef(0);

  const degreeInRadians = Math.PI / 180;
  const from = 50;
  const to = 90;
  let direction = 1;

  // useFrame((state, deleta) => {
  //   if (curentDegree.current < to) {
  //     const increment = degreeInRadians * deleta * 10;
  //     meshRef.current.rotation.z += increment * direction;
  //     curentDegree.current += increment / degreeInRadians;
  //   } else {
  //     direction = -direction;
  //     curentDegree.current = from;
  //   }
  // });

  return (
    <mesh {...props} ref={meshRef} rotation={[degreeInRadians * -90, 0, from]}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
}

export default Plane;
