import React from 'react';
import "./CommunityCard.css";
import {BsFillArrowRightCircleFill} from "react-icons/bs";

export default function Communitycard({community}) {
  return (
    <div className='comm_card'>
        <h4> {community} </h4>
        <BsFillArrowRightCircleFill size={"1.7em"}/>
    </div>
  )
}

