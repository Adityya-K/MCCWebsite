import { Canvas } from '@react-three/fiber';
import Box from '../assets/3D/Box';
import Navbar from '../components/Navbar';
import { OrbitControls } from '@react-three/drei';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-[500px]">
        <Canvas className="bg-blue-200">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,5,2]} intensity={1} />
          <Box />
        </Canvas>
      </div>
    </>
  );
};

export default Home;

