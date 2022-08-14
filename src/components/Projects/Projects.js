import React from 'react';
import ProjectCard from './Project/ProjectCard';
import "./Projects.css";
import SlackBack from "../../images/slack.jpg";

export default function Projects() {
  return (
    <div className='projects'>
      <div className='projects_div'>
        <h1>
          Personal Projects
        </h1>
        <div className='projects-cards'>
          <ProjectCard src={SlackBack} name="Slack App" />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  )
};
