import { useState, useRef, useEffect } from 'react';
import {  NavItems } from './NavItems';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import "../styles/Navbar.css"

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
      <nav className="navbar">
        <h1 className="placeholder"> Math And Computing Club </h1>
        <ul className="listItems"> 
          {NavItems.map((item) => {
            return (
              <li><a className={item.class} href={item.url}>{item.title}</a></li>
            )
          })}
        </ul>
        <div onClick={handleMenu} className="menuIcon">
          {!menu ? <AiOutlineClose color="black" size={20}/> : <AiOutlineMenu color="black" size={20}/>}
        </div>
        <div className={!menu ? "mobileListOpen" : "mobileListClose"}>
          <h1 className="placeholder">Math And Computing Club</h1>
          <ul className="verticalList">
            {NavItems.map((item) => {
              return (
                <li className="itemsVertical"><a className="vItems" href={item.url}>{item.title}</a></li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  ); 
};

export default Navbar;

