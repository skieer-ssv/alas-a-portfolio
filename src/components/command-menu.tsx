"use client"

import * as React from "react"
import {
    Calculator,
    Calendar,
    CreditCard,
    Settings,
    Smile,
    User,
    LayoutGrid,
    FileText,
    MonitorPlay,
    Laptop
} from "lucide-react"
import { Command } from "cmdk"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { DialogTitle } from "@radix-ui/react-dialog"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"

export function CommandMenu() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()
    const { setTheme } = useTheme()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    return (
        <>
            <p className="fixed bottom-0 left-0 right-0 hidden border-t bg-background p-2 text-center text-sm text-muted-foreground md:block z-50 pointer-events-none">
                Press{" "}
                <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    <span className="text-xs">⌘</span>K
                </kbd>
                {" "}to open commands
            </p>
            <Command.Dialog
                open={open}
                onOpenChange={setOpen}
                label="Global Command Menu"
                className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background border shadow-xl rounded-xl w-full max-w-lg overflow-hidden z-[100]"
            >
                <VisuallyHidden.Root>
                    <DialogTitle>Global Command Menu</DialogTitle>
                </VisuallyHidden.Root>
                <div className="flex items-center border-b px-3">
                    <Command.Input
                        className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Type a command or search..."
                    />
                </div>
                <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                    <Command.Empty className="py-6 text-center text-sm">No results found.</Command.Empty>

                    <Command.Group heading="Suggestions" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("/projects"))}
                            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                        >
                            <LayoutGrid className="mr-2 h-4 w-4" />
                            <span>Projects</span>
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("/blogs"))}
                            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                        >
                            <FileText className="mr-2 h-4 w-4" />
                            <span>Blogs</span>
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("/talks"))}
                            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                        >
                            <MonitorPlay className="mr-2 h-4 w-4" />
                            <span>Talks</span>
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => router.push("/uses"))}
                            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                        >
                            <Laptop className="mr-2 h-4 w-4" />
                            <span>Uses</span>
                        </Command.Item>
                    </Command.Group>

                    <Command.Separator className="-mx-1 h-px bg-border" />

                    <Command.Group heading="Settings" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                        <Command.Item
                            onSelect={() => runCommand(() => setTheme("light"))}
                            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                        >
                            <Smile className="mr-2 h-4 w-4" />
                            <span>Light Theme</span>
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => setTheme("dark"))}
                            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                        >
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Dark Theme</span>
                        </Command.Item>
                        <Command.Item
                            onSelect={() => runCommand(() => setTheme("system"))}
                            className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                        >
                            <Laptop className="mr-2 h-4 w-4" />
                            <span>System Theme</span>
                        </Command.Item>
                    </Command.Group>
                </Command.List>
            </Command.Dialog>
        </>
    )
}
