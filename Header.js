import React,{useEffect} from 'react';
import './Header.css';
import PhoneIcon from './Images/PhoneIcon.png';
import Devices from './Images/Devices.png';
import Aos from 'aos';
import "aos/dist/aos.css";
const Header=() =>{
  useEffect(() =>{
      Aos.init({duration:1000})
  },[]); 
    return (
      <div className="Header" data-aos="fade-up">
        <div className="Top">
          <img src={Devices} alt="device" className="devices" />
        </div>
        <div className="phonenumber">
          <img src={PhoneIcon} alt="phone" /><span className="code">+91&nbsp;</span>9566560469
        </div>
        <div className="Content">
          <h1 data-aos="zoom-in-left">BEST TAMILNADU <span id="center" data-aos="zoom-in-left">SERVICE CENTER</span></h1>
          <p data-aos="zoom-in-left">Services All Over Tamilnadu</p>
        </div>
          
      </div>
    );
  }

export default Header