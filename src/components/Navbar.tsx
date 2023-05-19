import { useState, useRef, useEffect } from 'react';
import {  NavItems } from './NavItems';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  
  const [menu, setMenu] = useState(true);
  const [windowSize, setWindowSize] = useState({wh: window.innerHeight, ww: window.innerWidth});

  const handleMenu = () => {
    setMenu(!menu);
  }

  const resizeEvent = () => {
    setWindowSize({
      wh: window.innerHeight,
      ww: window.innerWidth,
    })

    if(windowSize.ww >= 768) {
      setMenu(true);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", resizeEvent)

    return() => {window.removeEventListener("resize", resizeEvent)}
  }, [windowSize]);

  return(
    <>
      <nav className="mt-1 flex justify-between items-center h-20 px-6 mx-auto border-b-4 border-white rounded-3xl text-white">
        <h1 className="text-2xl"> Math And Computing Club </h1>
        <ul className="hidden md:flex"> 
          {NavItems.map((item) => {
            return (
              <li><a className={item.class} href={item.url}>{item.title}</a></li>
            )
          })}
        </ul>
        <div onClick={handleMenu} className="block md:hidden">
          {!menu ? <AiOutlineClose color="black" size={20}/> : <AiOutlineMenu color="black" size={20}/>}
        </div>
        <div className={!menu ? "fixed left-1 md:left-[-100%] top-24 h-full w-[50%] border-r border-r-gray bg-blue-100 rounded-3xl ease-in-out duration-500" : "fixed left-[-100%] top-24 h-full w-[50%] border-r border-r-gray bg-blue-100 rounded-3xl ease-in-out duration-500"}>
          <ul className="pt-5 pb-5 uppercase text-black">
            {NavItems.map((item) => {
              return (
                <li><a className={item.class} href={item.url}>{item.title}</a></li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  ); 
};

export default Navbar;

