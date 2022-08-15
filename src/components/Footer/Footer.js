import React from 'react';
import "./Footer.css";
import {
    BsLinkedin, 
    BsTwitter, 
    BsGithub, 
    BsInstagram,
    BsMedium
} from "react-icons/bs";


export default function Footer() {
  return (
    <div className='footer'>
        <div className='pre-footer'>
            <h1> Lets Connect </h1>
            <button> </button>
        </div>

        <div className='footer_head'>
            <h3> Kanish Bodhwani </h3>
            <div className='footer_socials'>
                <BsLinkedin size={"1.35em"} />
                <BsTwitter size={"1.35em"} />
                <BsMedium size={"1.35em"} />
                <BsGithub size={"1.35em"} />
                <BsInstagram size={"1.35em"} />
            </div>
        </div>
    </div>
  )
}