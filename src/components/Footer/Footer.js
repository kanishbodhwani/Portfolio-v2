import React from 'react';
import "./Footer.css";
import Tweet from '../Tweet/Tweet';
import {
    BsLinkedin, 
    BsTwitter, 
    BsGithub, 
    BsInstagram,
    BsMedium
} from "react-icons/bs";
import { FaCopyright } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='footer' id='contact'>
        <div className='pre-footer'>
            <div>
                <h1> Lets Connect </h1>
                <button> Buy me a coffee </button>
            </div>
        </div>

        <div className='footer_head'>
            <h3> Kanish Bodhwani </h3>
            <div className='footer_socials'>
                <a href='https://github.com/kanishbodhwani' target="_blank" rel='noreferrer'><BsGithub size={"1.35em"} /></a>
                <a href='https://www.linkedin.com/in/kanish-bodhwani/' target="_blank" rel='noreferrer'> <BsLinkedin size={"1.35em"} /> </a>
                <a href='https://kanishbodhwani.medium.com/' target="_blank" rel='noreferrer'> <BsMedium size={"1.35em"} /></a> 
                <a href='https://twitter.com/BodhwaniKanish' target="_blank" rel='noreferrer'> <BsTwitter size={"1.35em"} /></a>
                <a href='https://www.instagram.com/kanish_bodhwani/' target="_blank" rel='noreferrer'> <BsInstagram size={"1.35em"} /></a>
            </div>
        </div>
        <div className='footer_main'>
            <Tweet />
        </div>
        <hr style={{ marginTop: "30px", color: "white" , height: "2px", width: "50%"}}/>
        <div className='copyright'>
            <FaCopyright /> <p> 2022, All Rights Reserved </p>
        </div>
    </div>
  )
}