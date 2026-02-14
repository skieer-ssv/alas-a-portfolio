import { talks } from "@/lib/data/talks"
import Image from "next/image"
import Link from "next/link"
import { MonitorPlay, Presentation } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
    title: "Talks | Siddhant Vispute",
    description: "Presentations, workshops, and educational content.",
}

export default function TalksPage() {
    return (
        <div className="container py-8 md:py-12 px-4 md:px-8">
            <div className="mb-10">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Talks & Workshops</h1>
                <p className="text-muted-foreground text-lg">
                    Sharing knowledge through presentations and videos.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {talks.map((talk) => (
                    <div key={talk.title} className="group overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
                        <div className="relative aspect-video overflow-hidden bg-muted">
                            <Image
                                src={talk.imagePath}
                                alt={talk.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        </div>
                        <div className="p-4 flex flex-col gap-4">
                            <h3 className="text-lg font-semibold leading-tight min-h-[3rem]">{talk.title}</h3>
                            <div className="flex gap-2 mt-auto">
                                {talk.slideLink && (
                                    <Link href={talk.slideLink} target="_blank" rel="noreferrer" className="flex-1">
                                        <Button variant="outline" size="sm" className="w-full">
                                            <Presentation className="mr-2 h-4 w-4" />
                                            Slides
                                        </Button>
                                    </Link>
                                )}
                                {talk.youtubeLink && (
                                    <Link href={talk.youtubeLink} target="_blank" rel="noreferrer" className="flex-1">
                                        <Button variant="secondary" size="sm" className="w-full">
                                            <MonitorPlay className="mr-2 h-4 w-4" />
                                            Watch
                                        </Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
