import { Canvas } from '@react-three/fiber';
import TorusParticle from '../assets/3D/TorusParticle';
import Navbar from '../components/Navbar';
import { OrbitControls } from '@react-three/drei';
import "../styles/Home.css"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="main">
        <Canvas className="canvas">
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,5,2]} intensity={1} />
          <TorusParticle />
        </Canvas>
      </div>
    </>
  );
};

export default Home;

