import React from 'react';
import "./ProjectCard.css";
import {BsArrowRightShort} from "react-icons/bs";


const ProjectCard = ({src, key, name}) => {
  return (
    <div key={key} className='project_card' style={{backgroundImage: `url(${src})`}}>
      <div className='project_cardDiv'>
        <div className='cards_div'>
          <h3> {name} </h3>
          <div className='card_about'>
            <p> A web applicaiton for having business conversations. Sign up and there you go !</p>
            <p> View Github <BsArrowRightShort size={"1.7em"} /> </p>
          </div>
        </div>
      </div> 
    </div>
  )
};

export default ProjectCard;