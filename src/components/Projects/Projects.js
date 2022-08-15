import React from 'react';
import ProjectCard from './Project/ProjectCard';
import "./Projects.css";
import Slack from "../../images/slack.jpg";
import Insta from "../../images/insta.jpg";
import Falcons from "../../images/falcons.jpg";
import Music from "../../images/pop-music.jpg";


export default function Projects() {
  return (
    <div className='projects'>
      <div className='projects_div'>
        <h1>
          Personal Projects
        </h1>
        <div className='projects-cards'>
          <ProjectCard src={Slack} name="Slack App" />
          <ProjectCard src={Falcons} name="Falcons" />
          <ProjectCard src={Insta} name="Instagram" />
          <ProjectCard src={Music} name="PoP Music" />
        </div>
      </div>
    </div>
  )
};
