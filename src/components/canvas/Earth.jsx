import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF, Sparkles } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./robot_a04/scene.gltf");

  return (
    <mesh>
      <ambientLight intensity={0.1} />
      <spotLight intensity={0.8} position={[100, 200, 4000]} />
      <pointLight intensity={1.3} />
      {/* <Sparkles count={60} scale={10} size={6} speed={0.4} /> */}
      <directionalLight intensity={0.1} position={[0, 0, -100]} />
      <primitive
        object={earth.scene}
        scale={2.5}
        position-y={[3]}
        rotation-y={0}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 30,
        near: 0.5,
        far: 200,
        position: [20, 5, 5],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
