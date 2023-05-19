import Navbar from '../components/Navbar';
import cube from '../assets/cube.png';

const Home = () => {
  return (
    <>
      <div className="fixed h-full w-full bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Navbar />
        <div className="grid grid-cols-2 gap-4 min-h-full">
          <div className="flex h-full justify-center items-center transition ease-in-out">
            <h1 className="text-5xl font-bold underline text-white p-7">Welcome to MCC</h1>
          </div>
          <div className="flex h-full pb-24">
            <img src={cube} alt="Picture" className="object-scale-down object-center"/>  
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;


