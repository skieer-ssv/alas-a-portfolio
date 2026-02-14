import { ProjectsList } from "@/components/projects-list"
import { projects } from "@/data/projects"

export const metadata = {
    title: "Projects | Siddhant Vispute",
    description: "Showcase of my projects and technical implementations.",
}

export default function ProjectsPage() {
    return (
        <div className="container py-24 md:py-32">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Projects
                </h1>
                <p className="text-xl text-muted-foreground max-w-[800px]">
                    A collection of my work, ranging from web applications to system-level programming.
                </p>
            </div>

            <ProjectsList projects={projects} />
        </div>
    )
}
