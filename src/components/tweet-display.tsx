'use client'

import { useState, useEffect, useRef } from 'react'
import { tweetIds } from '@/data/tweet-list'
import Script from 'next/script'
import { useTheme } from 'next-themes'

export function TweetDisplay() {
    const [tweetId, setTweetId] = useState<string | null>(null)
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        setMounted(true)
        const randomTweetId = tweetIds[Math.floor(Math.random() * tweetIds.length)]
        setTweetId(randomTweetId)
    }, [])

    useEffect(() => {
        if (!mounted || !tweetId || !containerRef.current) return

        const currentTheme = resolvedTheme === 'dark' ? 'dark' : 'light'

        // Manually manage the DOM to avoid React "removeChild" errors.
        // This happens because Twitter's widgets.js replaces the blockquote with an iframe,
        // which confuses React's virtual DOM reconciliation during theme changes.
        containerRef.current.innerHTML = ''
        const blockquote = document.createElement('blockquote')
        blockquote.className = 'twitter-tweet w-full invisible' // Start invisible to avoid flicker
        blockquote.setAttribute('data-theme', currentTheme)
        blockquote.setAttribute('data-dnt', 'true')
        blockquote.setAttribute('data-align', 'center')

        const anchor = document.createElement('a')
        anchor.href = `https://twitter.com/siddhant2102/status/${tweetId}`
        blockquote.appendChild(anchor)

        containerRef.current.appendChild(blockquote)

        // @ts-ignore
        if (window.twttr && window.twttr.widgets) {
            // @ts-ignore
            window.twttr.widgets.load(containerRef.current)
        }
    }, [tweetId, resolvedTheme, mounted])

    if (!mounted) {
        return (
            <div className="w-full max-w-[550px] min-h-[400px] flex items-center justify-center border rounded-xl bg-card animate-pulse">
                <p className="text-muted-foreground text-sm italic">
                    Fetching a thought...
                </p>
            </div>
        )
    }

    return (
        <div className="flex flex-col items-center w-full max-w-[550px] mx-auto group">
            <div
                ref={containerRef}
                className="w-full flex justify-center min-h-[400px] transition-all duration-500 ease-in-out"
            >
                {/* Twitter widget will be injected here manually via the useEffect ref */}
            </div>
            <Script
                src="https://platform.twitter.com/widgets.js"
                strategy="lazyOnload"
                onLoad={() => {
                    // @ts-ignore
                    if (window.twttr && window.twttr.widgets && containerRef.current) {
                        // @ts-ignore
                        window.twttr.widgets.load(containerRef.current)
                    }
                }}
            />
        </div>
    )
}
