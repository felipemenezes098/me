import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import meImage from "./me.jpeg"

export default function Page() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-2xl flex-col px-6 py-16">
      <section className="space-y-6">
        <Avatar size="lg" className="size-20">
          <AvatarImage src={meImage.src} alt="Felipe Menezes portrait" />
          <AvatarFallback>FM</AvatarFallback>
        </Avatar>

        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-muted-foreground">
            {siteConfig.role}
          </p>
        </div>

        <p className="max-w-xl text-sm leading-7 text-muted-foreground">
          Building{" "}
          <Link
            href={siteConfig.links.project}
            target="_blank"
            rel="noreferrer"
            className="text-foreground underline underline-offset-4"
          >
            ui.flexnative
          </Link>
          . Reusable UI blocks for consistent interfaces. Made for developers
          and ai.
        </p>

        <div className="space-y-2 text-sm">
          <p>
            Contact me{" "}
            <Link
              href={`mailto:${siteConfig.email}`}
              className="underline underline-offset-4 hover:text-foreground"
            >
              {siteConfig.email}
            </Link>
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              LinkedIn
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Twitter / X
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.links.project}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              ui.flexnative
            </Link>
          </div>
        </div>
      </section>

      <hr className="my-10 border-border" />

      <section className="space-y-4">
        <h2 className="text-base font-medium">About</h2>
        <p className="max-w-xl text-sm leading-7 text-muted-foreground">
          I like to build solutions for developers and think deeply about UI/UX
          details, from visual polish to interaction nuances and product
          behavior.
        </p>
      </section>

      <footer className="mt-auto pt-12 text-xs text-muted-foreground">
        Press <kbd>d</kbd> to toggle theme.
      </footer>
    </main>
  )
}
