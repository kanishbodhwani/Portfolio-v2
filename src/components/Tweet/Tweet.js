import React, {useEffect, useState} from 'react'
import "./Tweet.css";
import { FaTwitter } from "react-icons/fa";
import AccountIcon from "../../images/twitter-icon.jpeg";

const tweetsArray = [
    {
        id: "0",
        tweet: "With valuable connections, comes the absolute certainty that you'll turn into a great developer."
    },
    {
        id: "1",
        tweet: "We are unpredictable beings want to conquer the world/make an impact that we know nothing about. "
    },
    {
        id: "2",
        tweet: "Perspective is all that matters"
    },
    {
        id: "3",
        tweet: "Imagine having infinite lives in a game, Anyone can win it by failing. The number of failures will be different for different people. That's your dream. Doesn't matter how many times you fail, what matters is you learn from each failure and never stop playing."
    }
];

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
            <button> <FaTwitter size={"1em"} className="tweet-icon" color="#fff"/> Follow </button>
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