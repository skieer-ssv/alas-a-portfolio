"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
    CardDescription
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
    project: Project
    index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="h-full"
        >
            <Card className="flex flex-col h-full overflow-hidden border-muted-foreground/20 hover:border-primary/50 transition-colors group">
                <div className="relative aspect-video overflow-hidden bg-muted/20">
                    {/* Fallback pattern if image fails or for placeholder */}
                    <div className="absolute inset-0 bg-muted/50 flex items-center justify-center text-muted-foreground">
                        <span className="text-xl font-bold opacity-20">{project.title}</span>
                    </div>
                    {/* Note: In a real app, valid images would be served. Using fallback for now if images don't exist */}
                    {project.imagePath && (
                        <Image
                            src={project.imagePath}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                            }}
                        />
                    )}
                </div>
                <CardHeader>
                    <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-lg font-bold line-clamp-1">{project.title}</CardTitle>
                        {project.ongoing && (
                            <Badge variant="secondary" className="text-xs shrink-0">
                                Ongoing
                            </Badge>
                        )}
                    </div>
                </CardHeader>
                <CardContent className="flex-1 space-y-4">
                    <CardDescription className="line-clamp-3 text-sm">
                        {project.description}
                    </CardDescription>
                    <div className="flex flex-wrap gap-1.5">
                        {project.stack.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-[10px] px-2 py-0.5 capitalize">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="flex gap-2 p-4 pt-0">
                    {project.githubLink && (
                        <Link href={project.githubLink} target="_blank" className="flex-1">
                            <Button variant="secondary" size="sm" className="w-full gap-2">
                                <Github className="h-3.5 w-3.5" />
                                Code
                            </Button>
                        </Link>
                    )}
                    {project.demoLink && (
                        <Link href={project.demoLink} target="_blank" className="flex-1">
                            <Button variant="outline" size="sm" className="w-full gap-2">
                                <ExternalLink className="h-3.5 w-3.5" />
                                Demo
                            </Button>
                        </Link>
                    )}
                </CardFooter>
            </Card>
        </motion.div>
    )
}
