import "./CardStyles.css"
import { Link } from "react-router-dom";
import React from 'react';

const Card = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
            <h3>- BASIC -</h3>
            <span className="bar">International news, features and analysis</span>
            <p className="btc">World News</p>
            <Link to="https://www.bbc.com/news/world" className="btn">for more info</Link>
        </div>


        <div className="card">
            <h3>- BASIC -</h3>
            <span className="bar">Designers, Models, Style Guides</span>
            <p className="btc">Fashion</p>
            <Link to="https://www.vogue.com/fashion" className="btn">for more info</Link>
        </div>



        <div className="card">
            <h3>- BASIC -</h3>
            <span className="bar">News, Reviews and Opinions</span>
            <p className="btc">Culture </p>
            <Link to="https://www.vogue.com/culture" className="btn">for more info</Link>
        </div>
      </div>


    </div>
  );
}

export default Card;
