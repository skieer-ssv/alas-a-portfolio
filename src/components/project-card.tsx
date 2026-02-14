"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { Project } from "@/lib/data/projects"

export function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md"
        >
            <div className="relative aspect-video overflow-hidden bg-muted">
                <Image
                    src={project.imagePath}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {project.ongoing && (
                    <div className="absolute top-2 right-2">
                        <Badge variant="destructive">Ongoing</Badge>
                    </div>
                )}
            </div>
            <div className="flex flex-1 flex-col p-4">
                <h3 className="text-xl font-semibold leading-none tracking-tight mb-2 group-hover:underline underline-offset-4 decoration-primary/50">{project.title}</h3>
                {project.description && <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{project.description}</p>}

                <div className="mt-auto pt-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.stack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="capitalize text-[10px] px-2">
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <div className="flex items-center gap-2">
                        <Link href={project.githubLink} target="_blank" rel="noreferrer" className="w-full">
                            <Button variant="outline" size="sm" className="w-full">
                                <Github className="mr-2 h-4 w-4" />
                                Code
                            </Button>
                        </Link>
                        {project.demoLink && (
                            <Link href={project.demoLink} target="_blank" rel="noreferrer" className="w-full">
                                <Button variant="default" size="sm" className="w-full">
                                    <ExternalLink className="mr-2 h-4 w-4" />
                                    Live
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
