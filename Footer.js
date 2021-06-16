import {React,useEffect} from 'react';
import './Footer.css';
import Aos from 'aos';
import "aos/dist/aos.css";

const Footer=() =>{
  useEffect(() =>{
      Aos.init({duration:1000})
  },[]); 
    return(
        <div id="footer" data-aos="zoom-in">
            <h4>Location</h4>
            <h1>Coimbatore | Tirupur | Erode | Chennai | Kancheepuram | Palakkad</h1>
            <h4>Call Us</h4>
            <h1>+91 9566560469</h1>
        </div>
    );
}
export default Footer