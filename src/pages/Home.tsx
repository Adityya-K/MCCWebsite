import { Canvas } from '@react-three/fiber';
import TorusParticle from '../assets/3D/TorusParticle';
import Box from '../assets/3D/Box';
import Navbar from '../components/Navbar';
import { OrbitControls } from '@react-three/drei';
import "../styles/Home.css"
import { TypeAnimation } from 'react-type-animation';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <div className="mainHero">
        <Navbar />
        <TypeAnimation className="animatedText" sequence={["Math?", 1000, "Programming?", 1000, "Math and Computing Club", 2000]} wrapper="span" cursor={true} repeat={Infinity} />
        <p className="description"> Turner's Exclusive Math and Programming Club </p>
        <button className="btn-grad">Learn more</button>
      </div>
      <div className="canvas">
        <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[-2,5,2]} intensity={1} />
          <TorusParticle />
        </Canvas>
      </div>
      <a className="heroText" href="https://www.instagram.com/tfssmcc/">Anything is Possible</a>
      <Footer />
    </>
  );
};

export default Home;

