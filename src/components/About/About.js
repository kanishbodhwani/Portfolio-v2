import React from 'react'
import "./About.css";
import {BsLinkedin , BsTwitter, BsGithub} from "react-icons/bs";
import Aboutpic from "../../images/about2.jpg";


export default function About() {
  return (
    <div className='about' id='about'>
      <div className='about_me'>
        <h1> About me </h1>
        <div className='about_socials'>
          <a href='https://www.linkedin.com/in/kanish-bodhwani/' target="_blank" rel='noreferrer'> <BsLinkedin className={"icon"} size={"1.35em"} color="#0077b5" /> </a>
          <a href='https://twitter.com/BodhwaniKanish' target="_blank" rel='noreferrer'> <BsTwitter className={"icon"} size={"1.35em"} color="#1DA1F2" /></a>
          <a href='https://github.com/kanishbodhwani' target="_blank" rel='noreferrer'><BsGithub className={"icon"} size={"1.35em"} color="#171515" /></a>
        </div>
        <div className='about_pic'>
            <img src={Aboutpic} alt="" />
        </div>
        <p className='about_para'> 
          <span> I am a dedicated and enthusiastic developer. I've been working as a developer for over a year. I am presently working in a company named KONCIV, where I work on the company's core product, a data visualisation software.  </span>
          <br />
          <br />
          <span> If I'm developing anything, I'll be completely focused on it, even if it takes months. I love designing things, so combining coding with design makes me a full stack developer, allowing me to create aesthetic value-added products that consumers desire. I'm eager to learn about new technologies in the market. </span>
          <br />
          <br />
          <span> I also love writing about leaders, entrepreneurs, millennials, and the nature of the people we live with. Writing is another hobby of mine; I enjoy it because I enjoy reading. I'm a voracious reader. It could be anything from self-help books to blogs or Twitter threads. </span>
        </p> 
      </div>
    </div>
  )
};
