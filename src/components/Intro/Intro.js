import React from 'react';
import "./Intro.css";
import Coder from "../../images/coder.jpg";


const Intro = () => {
  return (
    <div className='intro_outerDiv'>
      <div className='intro'>
        <div className='intro_name'>
          <p className='name2'> KANISH BODHWANI </p>
          <h2> Full stack web <br /> developer and designer </h2> 
          <p className='para'> 
            I am an enthusiastic <span> full stack web developer </span>  
            who is always curious about projects
            that can solve real world problems. 
            With my ideas, I like creating beautiful products 
            with the greatest UI/UX design.           
          </p>
          <button> Know More </button>
        </div>
        <div className='illustration'>  
          <img src={Coder} alt="" />
        </div>

        {/* <div className='blob'>
          <svg xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
          <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
          </svg>
        </div> */}
      </div>
    </div>
    
  )
}

export default Intro;