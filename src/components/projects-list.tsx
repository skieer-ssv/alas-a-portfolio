"use client"

import React, { useState, useMemo } from "react"
import { ProjectCard } from "@/components/project-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"
import type { Project } from "@/data/projects"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectsListProps {
    projects: Project[]
}

export function ProjectsList({ projects }: ProjectsListProps) {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedTech, setSelectedTech] = useState<string | null>(null)

    // Extract unique tech stacks
    const allTechs = useMemo(() => {
        const techs = new Set<string>()
        projects.forEach((p) => p.stack.forEach((s) => techs.add(s)))
        return Array.from(techs).sort()
    }, [projects])

    // Filter projects
    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description?.toLowerCase().includes(searchQuery.toLowerCase())

            const matchesTech = selectedTech ? project.stack.includes(selectedTech) : true

            return matchesSearch && matchesTech
        })
    }, [projects, searchQuery, selectedTech])

    return (
        <div className="space-y-8">
            {/* Search and Filter Controls */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between max-w-4xl mx-auto">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search projects..."
                        className="pl-9"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            onClick={() => setSearchQuery("")}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    )}
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                    <Button
                        variant={selectedTech === null ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTech(null)}
                        className="rounded-full"
                    >
                        All
                    </Button>
                    {allTechs.map(tech => (
                        <Button
                            key={tech}
                            variant={selectedTech === tech ? "default" : "outline"}
                            size="sm"
                            onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                            className="rounded-full capitalize"
                        >
                            {tech}
                        </Button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence mode="popLayout">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ProjectCard project={project} index={index} />
                            </motion.div>
                        ))
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="col-span-full text-center py-20 text-muted-foreground"
                        >
                            <p>No projects found matching your criteria.</p>
                            <Button
                                variant="link"
                                onClick={() => { setSearchQuery(""); setSelectedTech(null); }}
                            >
                                Clear filters
                            </Button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
