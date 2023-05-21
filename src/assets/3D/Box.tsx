const Box = () => {
  return(
    <mesh>
      <boxBufferGeometry attach="geometry" args={[3,3,3]}/>
      <meshLambertMaterial attach="material" color="purple" />
    </mesh>
  );
};

export default Box;
