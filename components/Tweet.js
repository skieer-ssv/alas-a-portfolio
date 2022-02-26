import Head from 'next/head';
import tweetIds from '../data/tweetList';
// function TweetPlaceholder(){
//     return(
//         <div className="tweet-placeholder m-4">
//             <div className="tweet-placeholder-text">
//                 <p className='text-center'>If you finish reading this before a tweet loads<br/> either your net is slow or my code is shitty</p>
//             </div>
//         </div>
//     )
// }
export default function Tweets(){
    
    const tweetIdsLength= tweetIds.length;
    const randomTweet=Math.floor(Math.random()*tweetIdsLength);
    return(
        <div className="">
            <blockquote className="twitter-tweet" data-dnt="true" >
                <p lang="en" dir="ltr">If you finish reading this before a tweet loads either your net is slow or my code is shitty<a href="https://twitter.com/hashtag/NLP?src=hash&amp;ref_src=twsrc%5Etfw"></a></p><a href={`https://twitter.com/siddhant2102/status/${tweetIds[ randomTweet]}?ref_src=twsrc%5Etfw`}></a></blockquote>
               <Head>
               <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script></Head> 
            {/* <TwitterTweetEmbed tweetId={tweetIds[ randomTweet] } placeholder={TweetPlaceholder()} /> */}


        </div>
    )
}







