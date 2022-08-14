import React from 'react';
import "./ProjectCard.css";

const ProjectCard = ({src, key, name}) => {
  return (
    <div key={key} className='project_card' style={{backgroundImage: `url(${src})`}}>
      <div className='project_cardDiv'>
        <div className='cards_div'>
          <h3> {name} </h3>
          <div>
            <p> A web applicaiton for having business conversation and added with features </p>
            <p> View Github </p>
          </div>
        </div>
      </div> 
    </div>
  )
};

export default ProjectCard;