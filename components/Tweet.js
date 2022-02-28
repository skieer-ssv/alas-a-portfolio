import Head from 'next/head';
import tweetIds from '../data/tweetList';
import {useState,useEffect} from 'react';
export default function Tweets(){
    const [tweetId,setTweetId]=useState([]);    
    const tweetIdsLength= tweetIds.length;
    const randomTweet=Math.floor(Math.random()*tweetIdsLength);
    useEffect(()=>{
        setTweetId(tweetIds[randomTweet]);
    }, [randomTweet]);
    return(
        <div className="">
            <blockquote className="twitter-tweet" data-dnt="true" >
                <p lang="en" dir="ltr">
                   
                    If  you can finish reading this sentence before a tweet loads either your net is super slow or my code is shitty.
                    </p>
                    <a href={`https://twitter.com/siddhant2102/status/${tweetId}?ref_src=twsrc%5Etfw`}></a></blockquote>
               <Head>
               <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></Head> 
            {/* <TwitterTweetEmbed tweetId={tweetIds[ randomTweet] } placeholder={TweetPlaceholder()} /> */}


        </div>
    )
}







