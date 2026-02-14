import Link from "next/link"

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by{" "}
                    <Link
                        href="/"
                        className="font-medium underline underline-offset-4"
                    >
                        Siddhant Vispute
                    </Link>
                    . The source code is available on{" "}
                    <Link
                        href="https://github.com/skieer-ssv/alas-a-portfolio"
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </Link>
                    .
                </p>
            </div>
        </footer>
    )
}
