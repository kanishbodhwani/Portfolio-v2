import React from 'react';
import "./ProjectCard.css";
import {BsArrowRightShort} from "react-icons/bs";


const ProjectCard = ({src, key, name, about, path, github}) => {
  return (
    <a href={path} target="_blank" rel="noreferrer">
      <div key={key} className='project_card' style={{backgroundImage: `url(${src})`}}>
        <div className='project_cardDiv'>
          <div className='cards_div'>
            <h3> {name} </h3>
            <div className='card_about'>
              <p> {about} </p>
              <div> 
                <a href={github} target="_blank" rel="noreferrer"> 
                  <p> View Github </p> 
                  <p> <BsArrowRightShort size={"1.7em"} className="right_icon" /> </p>  
                </a>  
              </div>
            </div>
          </div>
        </div> 
      </div>
    </a>
  )
};

export default ProjectCard;