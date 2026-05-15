'use client'

import { useState, useEffect, startTransition } from 'react'
import { Tweet } from 'react-tweet'
import { tweetIds } from '@/data/tweet-list'
import { useTheme } from 'next-themes'

/**
 * Optimized TweetDisplay using react-tweet for better performance.
 * This version renders tweets as native HTML/CSS instead of heavy iframes.
 */
export function TweetDisplay() {
    const [state, setState] = useState<{ mounted: boolean; tweetId: string | null }>({
        mounted: false,
        tweetId: null,
    })

    useEffect(() => {
        // Pick a random tweet once on mount
        const randomTweetId = tweetIds[Math.floor(Math.random() * tweetIds.length)]
        startTransition(() => {
            setState({
                mounted: true,
                tweetId: randomTweetId,
            })
        })
    }, [])

    const { resolvedTheme } = useTheme()
    const { mounted, tweetId } = state

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
