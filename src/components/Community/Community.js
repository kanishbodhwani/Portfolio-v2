import React from 'react'
import "./Community.css";
import Communitycard from './CommunityCard/Communitycard';

export default function Community() {
  return (
    <div className='community_div' id='community'>
        <div className='community'>
            <h1> Community </h1>
            <div className='communities'>
                <Communitycard community={"Google Developer Student Club"} path="https://gdsc.community.dev/amity-university-lucknow/"/>
                <Communitycard community={"Alias: Core Member"} path="https://asetalias.in/"/>
                <Communitycard community={"Falcons: Building Future"} path="https://falcons-80338.web.app/"/>
                <Communitycard community={"College Community"} path=""/>
            </div>
        </div>
    </div>
    
  )
};