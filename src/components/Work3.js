import "./WorkCardStyles.css"

import WorkCard from "./WorkCard";
import WorkCardData2 from "./WorkCardData3";

import React from 'react';


const Work3 = () => {
  return (
    <div className="work-container">
        <h1 className="project-heading">Albums</h1>
        <div className="project-container">
            {WorkCardData2.map((val, ind)=> {
                return(
                    <WorkCard 
                        key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        view={val.view}
                    />
                )
            })}
        </div>
    </div>
  );
}

export default Work3;
