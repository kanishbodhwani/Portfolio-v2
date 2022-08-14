import React from 'react'
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
                    <li> About </li>
                    <li> Projects </li>
                    <li> Skills </li>
                    <li> Community </li>
                    <li> Blog </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header;