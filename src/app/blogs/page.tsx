import { blogs } from "@/lib/data/blogs"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata = {
    title: "Blogs | Siddhant Vispute",
    description: "Writing about technology, learning, and building.",
}

export default function BlogsPage() {
    return (
        <div className="container py-8 md:py-12 px-4 md:px-8 max-w-3xl">
            <div className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Blogs</h1>
                <p className="text-muted-foreground text-lg">
                    Thoughts, tutorials, and stories from my journey.
                </p>
            </div>
            <div className="grid gap-8">
                {blogs.map((blog) => (
                    <article key={blog.id} className="group relative flex flex-col gap-2 border-l-2 border-muted pl-6 transition-colors hover:border-primary">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <time dateTime={blog.date}>{blog.date}</time>
                        </div>
                        <h2 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
                            <Link href={blog.link} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                                {blog.title}
                                <ExternalLink className="h-4 w-4 opacity-50 transition-opacity group-hover:opacity-100" />
                            </Link>
                        </h2>
                        <p className="text-muted-foreground leading-relaxed">
                            {blog.description}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    )
}
