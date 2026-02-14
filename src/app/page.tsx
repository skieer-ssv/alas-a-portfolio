import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, Mail } from "lucide-react"

export default function Home() {
  return (
    <section className="container flex flex-col items-center justify-center gap-6 py-24 md:py-32 text-center px-4">
      <div className="max-w-[800px] flex flex-col items-center gap-4">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl pb-2">
          Hi, I&apos;m Siddhant Vispute.
        </h1>
        <p className="text-xl text-muted-foreground md:text-2xl max-w-[600px]">
          Software Engineer
        </p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <Link href="https://github.com/skieer-ssv" target="_blank">
          <Button variant="outline" size="lg">
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/siddhant-vispute" target="_blank">
          <Button variant="outline" size="lg">
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </Link>
        <Link href="/Siddhant_resume.pdf" target="_blank">
          <Button variant="default" size="lg">
            <FileText className="mr-2 h-5 w-5" />
            Resume
          </Button>
        </Link>
      </div>

      <div className="mt-12 text-sm text-muted-foreground">
        <p>Explore my work and thoughts.</p>
      </div>
    </section>
  )
}
