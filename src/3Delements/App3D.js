import { Lightning } from "./Lightning";
import React, { Suspense, useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  PerspectiveCamera,
  Environment,
  EnvironmentCube,
} from "@react-three/drei";
import Box from "./Box";
import Sphere from "./Sphere";
import Plane from "./Plane";
import MySky from "./MySky";

function MainView() {
  const orbitControlsRef = useRef(null);
  const perspectiveCameraRef = useRef(null);
  useFrame((state, delta) => {
    //console.log(state.mouse);
  });

  useEffect(() => {
    console.log(orbitControlsRef.current);
    console.log(perspectiveCameraRef.current);
  }, [orbitControlsRef, perspectiveCameraRef]);

  return (
    <Suspense fallback={null}>
      <Lightning position={[-6, 3, 0]} />
      <PerspectiveCamera
        makeDefault
        position={[0, 3, 10]}
        ref={perspectiveCameraRef}
      />
      <OrbitControls ref={orbitControlsRef} />
      <Box position={[0, 0.5, 0]} castShadow />
      {/* <Plane position={[0, 0, 0]} receiveShadow /> */}
      {/* <MySky /> */}
    </Suspense>
  );
}

export default MainView;
