import "./WorkCardStyles.css"

import WorkCard from "./GalleryCard";
import WorkCardData2 from "./WorkCardGalleryData";

import React from 'react';


const WorkGallery = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Albums</h1>
        <div className="project-container">
            {WorkCardData2.map((val, ind)=> {
                return(
                    <WorkCard 
                        key={ind}
                        imgsrc={val.imgsrc}

                        text={val.text}
                        view={val.view}
                    />
                )
            })}
        </div>
    </div>
  );
}

export default WorkGallery;
