import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText } from "lucide-react"
import { TweetDisplay } from "@/components/tweet-display"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-12 md:py-24 px-4 overflow-hidden relative">
      <section className="container flex flex-col items-center justify-center gap-6 text-center">
        <div className="max-w-[800px] flex flex-col items-center gap-4">
          <h1 className="text-4xl font-extrabold leading-tight tracking-tighter md:text-6xl pb-2">
            Hi, I&apos;m Siddhant Vispute.
          </h1>
          <p className="text-xl text-muted-foreground md:text-2xl max-w-[600px]">
            Software Engineer
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Link href="https://github.com/skieer-ssv" target="_blank">
            <Button variant="outline" size="lg" className="rounded-full">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/siddhant-vispute" target="_blank">
            <Button variant="outline" size="lg" className="rounded-full">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </Link>
          <Link href="/Siddhant_resume.pdf" target="_blank">
            <Button variant="default" size="lg" className="rounded-full">
              <FileText className="mr-2 h-5 w-5" />
              Resume
            </Button>
          </Link>
        </div>
      </section>

      <section className="container flex flex-col items-center justify-center gap-8">
        <div className="w-full max-w-2xl px-4">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] grow bg-border" />
            <h2 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">A Random Thought</h2>
            <div className="h-[1px] grow bg-border" />
          </div>
          <TweetDisplay />
        </div>
      </section>

    </div>
  )
}
