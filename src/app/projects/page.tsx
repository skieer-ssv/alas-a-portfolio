import { ProjectsList } from "@/components/projects-list"
import { projects } from "@/data/projects"

export const metadata = {
    title: "Apps, utilities and POCs | Siddhant Vispute",
    description: "Showcase of my apps, utilities, and proofs of concept.",
}

export default function ProjectsPage() {
    return (
        <div className="container py-24 md:py-32">
            <div className="flex flex-col items-center text-center gap-4 mb-16">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Apps, utilities and POCs
                </h1>
                <p className="text-xl text-muted-foreground max-w-[800px]">
                    A collection of my applications, utility tools, and proofs of concept.
                </p>
            </div>

            <ProjectsList projects={projects} />
        </div>
    )
}
