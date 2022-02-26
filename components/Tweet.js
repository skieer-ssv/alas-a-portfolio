import Head from 'next/head';
import tweetIds from '../data/tweetList';

export default function Tweets(){
    
    const tweetIdsLength= tweetIds.length;
    const randomTweet=Math.floor(Math.random()*tweetIdsLength);
    const placeholderText=`If you finish reading this before a tweet loads either your net is slow or my code is shitty`;
    const tweetId=tweetIds[randomTweet];
    const tweetUrl=`https://twitter.com/siddhant2102/status/${tweetId}`;
   
    return(
        <div className="">
            <blockquote className="twitter-tweet" data-dnt="true" >
                <p lang="en" dir="ltr">{placeholderText}</p><a href={tweetUrl}></a></blockquote>
               <Head>
               <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></Head> 
            {/* <TwitterTweetEmbed tweetId={tweetIds[ randomTweet] } placeholder={TweetPlaceholder()} /> */}


        </div>
    )
}







