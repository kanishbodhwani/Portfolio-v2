import React from 'react'
import "./Community.css";
import Communitycard from './CommunityCard/Communitycard';

export default function Community() {
  return (
    <div className='community_div'>
        <div className='community'>
            <h1> Community </h1>
            <div className='communities'>
                <Communitycard community={"Google Developer Student Club"}/>
                <Communitycard community={"Alias: Core Member"}/>
                <Communitycard community={"Falcons: Building Future"}/>
                <Communitycard community={"College Community"}/>
            </div>
        </div>
    </div>
    
  )
};