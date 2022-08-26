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
          <span> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using </span>
          <br />
          <br />
          <span> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum </span>
          <br />
          <br />
          <span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.</span>
        </p> 
      </div>
    </div>
  )
};