import { projects } from "@/lib/data/projects"
import { ProjectCard } from "@/components/project-card"

export const metadata = {
    title: "Projects | Siddhant Vispute",
    description: "A collection of projects I've worked on.",
}

export default function ProjectsPage() {
    return (
        <div className="container py-8 md:py-12 px-4 md:px-8">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight mb-2">Projects</h1>
                <p className="text-muted-foreground text-lg">
                    A showcase of my technical projects and experiments.
                </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <ProjectCard key={project.title} project={project} index={index} />
                ))}
            </div>
        </div>
    )
}
