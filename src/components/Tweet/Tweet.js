import React, { useState } from 'react'
import "./Tweet.css";
import { FaTwitter } from "react-icons/fa";
import AccountIcon from "../../images/twitter-icon.jpeg";
import { tweetsArray } from '../../seed';


export default function Tweet() {

    // const [tweets, setTweets] = useState([...tweetsArray]);
    const [tweet, setTweet] = useState(tweetsArray[0].tweet);

    // useEffect(() => {   
    //     tweets.map((el) => {
    //         const timer = setTimeout(() => setTweet(el.tweet), 5000);   
            
    //     })
        
    // }, []);

    return (
    <div className='tweet_div'>
        <div className='twitter_logo'>
            <FaTwitter size={"5em"} color="#1DA1F2"/>
        </div>
        <div className='twitter_account'>
            <div className='account'>
                <img src={AccountIcon} alt="" className='account_icon'/>
                <div className='account_id'>
                    <h4> Kanish Bodhwani </h4>
                    <p> @BodhwaniKanish </p>
                </div>
            </div>
            <button> <a href='https://twitter.com/BodhwaniKanish' target="_blank" rel='noreferrer'> <FaTwitter size={"1em"} className="tweet-icon" color="#fff"/> Follow  </a></button>
        </div>
        <div className='tweet'>
            {/* {tweetsArray.map((el) => {
                return <p key={el.id}> {el.tweet} </p>
            })} */}
            {tweet}
        </div>
    </div>
  )
};

