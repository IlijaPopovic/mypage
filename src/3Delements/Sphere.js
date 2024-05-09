import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box(props) {
  const meshRef = useRef();
  const [active, setActive] = useState(false);

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 2 : 1}
      onClick={(event) => setActive(!active)}
    >
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

export default Box;
