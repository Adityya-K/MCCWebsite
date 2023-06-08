import React, { useRef } from 'react';
import { Points } from 'three';
import { useFrame } from '@react-three/fiber';

const TorusParticle = () => {
  
  const torusMesh = useRef<Points>(null!);

  useFrame(({clock}) => {
    const a = clock.getElapsedTime();
    torusMesh.current.rotation.y = a
    torusMesh.current.rotation.x = a
  })

  return(
    <points ref={torusMesh}>
      <torusBufferGeometry attach="geometry" args={[1.5, 0.5, 20, 100]} />
      <pointsMaterial size={0.01} color="black"/>
    </points>
  );
};

export default TorusParticle;
