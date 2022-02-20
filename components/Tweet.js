import {TwitterTweetEmbed} from 'react-twitter-embed';


function TweetPlaceholder(){
    return(
        <div className="tweet-placeholder m-4">
            <div className="tweet-placeholder-text">
                <p className='text-center'>If you finish reading this before a tweet loads either your net is slow or my code is shitty</p>
            </div>
        </div>
    )
}
export default function Tweets(){
    const tweetIds=["1485276501725814785","1473687621796827148","1483288131868987392","1471479403985076229","1468663715830460418","1439339823609774081","1454079230719848455","1447655554113961985","1441269454642450435","1435688622464724994","1434435571229679616","1410971263577645057","1412831072069439488"];
    const tweetIdsLength= tweetIds.length;
    const randomTweet=Math.floor(Math.random()*tweetIdsLength);
    return(
        <div className="">
            <TwitterTweetEmbed tweetId={tweetIds[ randomTweet] } placeholder={TweetPlaceholder()} />

        </div>
    )
}







