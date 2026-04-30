"use client"

import { useTheme } from "next-themes"

export function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
      aria-label="Toggle theme"
    >
      <span
        className={`size-2 rounded-full ${isDark ? "bg-foreground" : "bg-muted-foreground"}`}
        aria-hidden="true"
      />
      <span>Theme</span>
    </button>
  )
}
