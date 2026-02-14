'use client'

import { useState, useEffect } from 'react'
import { Tweet } from 'react-tweet'
import { tweetIds } from '@/data/tweet-list'
import { useTheme } from 'next-themes'

/**
 * Optimized TweetDisplay using react-tweet for better performance.
 * This version renders tweets as native HTML/CSS instead of heavy iframes.
 */
export function TweetDisplay() {
    const [tweetId, setTweetId] = useState<string | null>(null)
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
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
                <Tweet id={tweetId} />
            </div>
        </div>
    )
}
