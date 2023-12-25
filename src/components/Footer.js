 import "./FooterStyles.css"
import React from 'react';

import { FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from "react-icons/fa"

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight: "2rem"} } /> 
                <div>
                    <p> Orce Martinov bb</p>   
                    <p>Veles</p> 
                </div>               
            </div>
            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:"#fff", marginRight: "2rem"} } /> 
                +389 76 216 916
                </h4>
            </div>
            <div className="email">
                <h4>
                <FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem"} } /> 
                jovanova1radica@gmail.com
                </h4>
            </div>

        </div>  

      <div className="right">
        <h4>About the creator</h4>
        <p>Radica Jovanova born in Veles, Macedonia </p>
        <div className="social">
            <FaFacebook size={30} style={{color:"#fff", marginRight: "1rem"} } /> 
            <FaInstagram size={30} style={{color:"#fff", marginRight: "1rem"} } /> 
            <FaLinkedin size={30} style={{color:"#fff", marginRight: "1rem"} } /> 

        </div>
        </div>        
    </div>
  );
}

export default Footer;
