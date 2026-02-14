export const metadata = {
    title: "Uses | Siddhant Vispute",
    description: "Software and hardware I use daily.",
}

export default function UsesPage() {
    return (
        <div className="container py-8 md:py-12 px-4 md:px-8 max-w-3xl">
            <div className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Uses</h1>
                <p className="text-muted-foreground text-lg">
                    A list of hardware, software, and tools I use on a daily basis.
                </p>
            </div>

            <div className="space-y-10">
                <section>
                    <h2 className="text-xl font-semibold mb-4">Hardware</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>MacBook Pro M1 (14-inch, 2021)</li>
                        <li>External Monitor: LG 27UL500-W 4K</li>
                        <li>Keyboard: Keychron K2 v2</li>
                        <li>Mouse: Logitech MX Master 3</li>
                        <li>Headphones: Sony WH-1000XM4</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Development</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>VS Code (Theme: Tokyo Night / GitHub Dark)</li>
                        <li>Terminal: iTerm2 + Oh My Zsh</li>
                        <li>Browser: Arc / Chrome</li>
                        <li>Font: JetBrains Mono / Geist Mono</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-xl font-semibold mb-4">Stack</h2>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>React & Next.js</li>
                        <li>TypeScript</li>
                        <li>Tailwind CSS</li>
                        <li>PostgreSQL / Supabase</li>
                        <li>Node.js</li>
                    </ul>
                </section>
            </div>
        </div>
    )
}
