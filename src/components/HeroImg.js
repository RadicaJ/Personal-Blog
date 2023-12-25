import "./HeroImgStyles.css";
import React from 'react';

import IntroImg from '../assets/pozadina.jpg'
import {Link} from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" 
        src={IntroImg} alt="pozadina"/>
      </div>
      <div className="content">
        <p>Welcome to</p>
        <h1>My Project</h1>
        <div>
            <Link to="/project" className="btn">Favorites</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>

        </div>
      </div>
    </div>
  );
}

export default Heroimg;
