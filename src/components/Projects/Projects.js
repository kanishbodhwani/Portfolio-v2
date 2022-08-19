import React from 'react';
import ProjectCard from './Project/ProjectCard';
import "./Projects.css";
import Slack from "../../images/slack.jpg";
import Insta from "../../images/insta.jpg";
import Falcons from "../../images/falcons.jpg";
import Music from "../../images/pop-music.jpg";

export default function Projects() {
  return (
    <div className='projects' id='projects'>
      <div className='projects_div'>
        <h1>
          Personal Projects
        </h1>
        <div className='projects-cards'>
          <ProjectCard src={Slack} name="Slack App" path="https://slack-clone-49a96.web.app/" github="https://github.com/kanishbodhwani/Slack-app" about="A web applicaiton for having business conversations. Sign up and there you go !" />
          <ProjectCard src={Falcons} name="Falcons" path="https://falcons-80338.web.app/" github="https://github.com/kanishbodhwani/" about="A community of enthusiast started by me and my friend to connect students to teach and to spread awareness about tech programs." />
          <ProjectCard src={Insta} name="Instagram" path="https://instagram-3bdd0.web.app/login" github="https://github.com/kanishbodhwani/Instagram" about="A react applicaiton just like instagram to follow people and see their posts." />
          <ProjectCard src={Music} name="PoP Music" path="https://pop-music.netlify.app/" github="https://github.com/kanishbodhwani/POP-music" about="Play with your keyboard with pop music." />
        </div>
      </div>
    </div>
  )
};
