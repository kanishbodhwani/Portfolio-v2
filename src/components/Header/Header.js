import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from "react-scroll";
import "./Header.css";
import Klogo from  "../../images/k-logo.jpeg";

function Header() {
    return (
    <div className='header'>
        <header>
            <div className='name'>
                <img src={Klogo} alt='' /> 
                <p> Kanish Bodhwani </p>
            </div>
            <nav className='navbar'>
                <ul>
                    <li> <Link to="#about"> About </Link> </li>
                    <li> <Link to="#projects"> Projects </Link> </li>
                    <li> <Link to="#community"> Community </Link> </li>
                    <li> <a href='https://medium.com/@kanishbodhwani' target="_blank" rel='noreferrer'>  Blog </a> </li>
                    <li> <Link to="#contact"> Contact </Link> </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header;