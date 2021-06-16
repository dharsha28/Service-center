import React,{useEffect} from 'react';
import './Services.css';
import AC from './Images/AC.png';
import washing_machine from './Images/washing_machine.png';
import TV from './Images/TV.png';
import fridge from './Images/fridge.png';
import man from './Images/man.png';
import Aos from 'aos';
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import PhoneIcon from './Images/PhoneIcon.png';

const Services=() =>{
    useEffect(() =>{
        Aos.init({duration:1000})
    },[]);
    return(
        <div classname="services"> 
            <div class="row-lg-12 row-sm-6 " className="our_services">
                <h1 data-aos="fade-left">OUR SERVICES</h1>
            </div>
            <div class="row">
                <div class=" col-md-3 col-lg-6 col-xs-3" data-aos="zoom-in">
                    <p className="ac">
                    <ol>
                        <li>Best AC Services in TamilNadu & Door Step Services.</li><br />
                        <li>Best Air Conditioning Service Center In TamilNadu With the Same Day Delivery.</li><br />
                        <li>Serviced by Professional and Experienced Technicians for All Brands with genuine & Cost Effective Spares.</li>
                    </ol>
                    </p>
                </div>
                <div class=" col-md-3 col-lg-6" data-aos="zoom-in">
                    <img src={AC} alt="ac" className="ac_img" width="500px" height="500px" data-aos="zoom-out" />
                </div>
            </div>
            <div class="row">
                <div class=" col-md-3 col-lg-4" data-aos="zoom-in">
                <img src={washing_machine} alt="wash" className="washing_machine" width="500px" height="500px" data-aos="zoom-out" />
                </div>
                <div class=" col-md-3 col-lg-4" data-aos="zoom-in">
                    <p className="washing_machine">
                    <ol>
                        <li>Best washing machine service &amp; Same day delivery by Experts.</li><br />
                        <li>Get doorstep service &amp; same-day delivery in all over TamilNadu for your washing machine.</li><br />
                        <li>Genuine spare parts and affordable price serviced by an experienced technicians.</li>
                    </ol>
                    </p>
                </div>
            </div>
            <div class="row" id="best">
                <div class="col-sm-5 col-md-6"><h2 data-aos="fade-left">Best Tamilnadu Service Center</h2></div>
                <div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0" >
                    <img src={PhoneIcon} alt="phone" width="45px" height="45px"  data-aos="fade-left" /><span className="cod">+91&nbsp;</span>9566560469
                </div>
            </div>        
            <div class="row">
                <div class=" col-md-3 col-lg-6" data-aos="zoom-in">
                <p className="tv">
                <ol>
                    <li>Best Tv Service Center &amp; Same day delivery by Experts.</li><br />
                    <li>Tv Repairing Services Providers with experience in repairing all makes</li><br />
                    <li>Experienced technicians will come to deliver Same Day &amp; Quick service.</li>
                </ol>
                </p>
                </div>
                <div class=" col-md-3 col-lg-6" data-aos="zoom-in">
                <img src={TV} alt="tv" width="500px" height="500px" data-aos="zoom-in" />
                </div>
            </div>
            <div class="row">
                <div class=" col-md-3 col-lg-4" data-aos="zoom-in">
                    <img src={fridge} alt="fridge" width="500px" height="500px" data-aos="zoom-in"/>
                </div>
                <div class=" col-md-3 col-lg-4" data-aos="zoom-in">
                    <p className="fridge">
                    <ol>
                        <li>Best Fridge Service Center &amp; Door Step Services.</li><br />
                        <li>Refrigerator service center in TamilNadu. We have over 10 years of expertise.</li><br />
                        <li>Quick Same Day Service Delivery By Expert Technicians. Genuine &amp; Cost Effective Spares.</li>
                    </ol>
                    </p>
                </div>
            </div>
            <div class="row" id="best">
                <div class="col-sm-5 col-md-6"><h2 data-aos="fade-left">Best Tamilnadu Service Center</h2></div>
                <div class="col-sm-5 col-sm-offset-2 col-md-6 col-md-offset-0" >
                    <img src={PhoneIcon} alt="phone" width="45px" height="45px"  data-aos="fade-left" /><span className="cod">+91&nbsp;</span>9566560469
                </div>
            </div>
            <div class="row">
                <div class=" col-md-3 col-lg-4" data-aos="zoom-in">
                    <img src={man} alt="man" width="400px" height="400px" data-aos="zoom-in"/>
                </div>
                <div class=" col-md-3 col-lg-8" data-aos="zoom-in">
                <p className="all"><h2>Best TamilNadu Services</h2>
                       We are one of the prominent home appliance service center having more than 10years of expertise in repairing various home appliances like LEDTV, Smart TV, Washing Machines, Air-Conditioners, Refrigerators, etc. Our technical engineers are well-trained and professionally certified by various brands.</p>
                </div>
            </div>
        </div>
    );
}
export default Services