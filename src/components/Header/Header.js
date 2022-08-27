import React, { useState , useRef, useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
// import { Link } from "react-scroll";
import "./Header.css";
import Klogo from  "../../images/k-logo.jpeg";


function Header() {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => setMenu(!menu);
    return (
    <div className='header'>
        <header>
            <div className='name'>
                <img src={Klogo} alt='' /> 
                <p> Kanish Bodhwani </p>
            </div>
            <nav className='navbar'>
                <div className='hamburger_icon'>
                    <div onClick={toggleMenu} className='hamburger'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                {menu ? <div className={`menu ${menu ? 'is-active' : null}`}>
                    <ul className='mobile_navbar'>
                        <li onClick={() => setMenu(false)}> <Link to="#about"> About </Link> </li>
                        <li onClick={() => setMenu(false)}> <Link to="#projects"> Projects </Link> </li>
                        <li onClick={() => setMenu(false)}> <Link to="#community"> Community </Link> </li>
                        <li onClick={() => setMenu(false)}> <a href='https://medium.com/@kanishbodhwani' target="_blank" rel='noreferrer'>  Blog </a> </li>
                        <li onClick={() => setMenu(false)}> <Link to="#contact"> Contact </Link> </li>
                    </ul>
                </div> : null }
                <ul className='wide_navbar'>
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