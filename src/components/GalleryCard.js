import "./GalleryStyles.css"
import React from 'react';
import { NavLink } from "react-router-dom";


const GalleryCard = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="slika"/>
    <h2 className="project-title">{props.title}</h2>
    <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
            <NavLink to={props.view}
            className="btn">Like</NavLink>
            <input placeholder="comment"></input>
        </div>
    </div>
</div>
  );
}

export default GalleryCard;
