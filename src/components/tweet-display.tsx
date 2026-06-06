'use client'

import { useState, useEffect } from 'react'
import { EmbeddedTweet, TweetNotFound, TweetSkeleton, useTweet } from 'react-tweet'
import { tweetIds } from '@/data/tweet-list'
import { useTheme } from 'next-themes'

// Recursively ensure all tweet objects (including quoted tweets) have the necessary entities arrays
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const makeSafeTweet = (tweet: any): any => {
    if (!tweet) return tweet
    return {
        ...tweet,
        entities: {
            hashtags: [],
            user_mentions: [],
            urls: [],
            symbols: [],
            ...(tweet.entities || {}),
        },
        quoted_tweet: tweet.quoted_tweet ? makeSafeTweet(tweet.quoted_tweet) : undefined,
    }
}

// Custom Tweet component that intercepts and fixes the API response
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function SafeTweet({ id, apiUrl, fallback = <TweetSkeleton />, components, fetchOptions, onError }: any) {
    const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions)
    
    if (isLoading) return fallback
    if (error || !data) {
        const NotFound = components?.TweetNotFound || TweetNotFound
        return <NotFound error={onError ? onError(error) : error} />
    }
    
    const safeData = makeSafeTweet(data)
    return <EmbeddedTweet tweet={safeData} components={components} />
}

/**
 * Optimized TweetDisplay using react-tweet for better performance.
 * This version renders tweets as native HTML/CSS instead of heavy iframes.
 */
export function TweetDisplay() {
    const [tweetId, setTweetId] = useState<string | null>(null)
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true)
        // Pick a random tweet once on mount
        const randomTweetId = tweetIds[Math.floor(Math.random() * tweetIds.length)]
        setTweetId(randomTweetId)
    }, [])

    if (!mounted || !tweetId) {
        return (
            <div className="w-full max-w-[550px] min-h-[300px] flex items-center justify-center border rounded-xl bg-card animate-pulse">
                <p className="text-muted-foreground text-sm italic">
                    Fetching a thought...
                </p>
            </div>
        )
    }

    return (
        <div className="w-full flex justify-center min-h-[300px] transition-all duration-500 ease-in-out px-4 select-none">
            <div
                className="w-full max-w-[550px] [&&_.react-tweet]:m-0"
                data-theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
            >
                <SafeTweet id={tweetId} />
            </div>
        </div>
    )
}
