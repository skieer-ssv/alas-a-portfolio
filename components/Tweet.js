import {TwitterTweetEmbed} from 'react-twitter-embed';



export default function Tweets(){
    const tweetIds=["1473687621796827148","1483288131868987392","1471479403985076229","1468663715830460418","1439339823609774081","1454079230719848455","1447655554113961985","1441269454642450435","1435688622464724994","1434435571229679616","1410971263577645057","1412831072069439488"];
    const tweetIdsLength= tweetIds.length;
    const randomTweet=Math.floor(Math.random()*tweetIdsLength);
    return(
        <div className="">
            <TwitterTweetEmbed tweetId={tweetIds[ randomTweet]}  />

        </div>
    )
}