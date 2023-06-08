import mcc from '../assets/mcc.png';
import "../styles/Footer.css";

const Footer = () => {
  return (
  <>
    <div className="Footer">
      <img className="image" src={mcc}/>
      <h1>Math and Computing Club</h1>
    </div>
  </>
  );
};

export default Footer;
