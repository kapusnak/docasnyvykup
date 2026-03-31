"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"

type Choice = "nemovitosti" | "vozidla"

export function HeroServiceSwitch() {
  const [selected, setSelected] = useState<Choice>("nemovitosti")

  useEffect(() => {
    const syncFromHash = () => {
      const h = window.location.hash
      if (h === "#vozidla") setSelected("vozidla")
      else if (h === "#nemovitosti") setSelected("nemovitosti")
    }
    syncFromHash()
    window.addEventListener("hashchange", syncFromHash)
    return () => window.removeEventListener("hashchange", syncFromHash)
  }, [])

  return (
    <div
      className="mx-auto mt-8 max-w-md sm:max-w-lg"
      role="group"
      aria-label="Vyberte, zda řešíte nemovitost nebo vozidlo"
    >
      <div className="flex rounded-full border border-white/30 bg-black/30 p-1 shadow-[inset_0_1px_2px_rgba(0,0,0,0.2)] backdrop-blur-sm">
        <Link
          href="/?mode=nemovitosti#nemovitosti"
          scroll
          aria-current={selected === "nemovitosti" ? "true" : undefined}
          onClick={() => setSelected("nemovitosti")}
          className={cn(
            "flex min-h-[52px] flex-1 items-center justify-center rounded-full px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide transition sm:text-base",
            selected === "nemovitosti"
              ? "bg-white text-[var(--color-primary)] shadow-md"
              : "text-white/90 hover:bg-white/10",
          )}
        >
          <span className="flex flex-col items-center justify-center gap-0.5 leading-tight">
            <span>Mám</span>
            <span>nemovitost</span>
          </span>
        </Link>
        <Link
          href="/?mode=vozidlo#vozidla"
          scroll
          aria-current={selected === "vozidla" ? "true" : undefined}
          onClick={() => setSelected("vozidla")}
          className={cn(
            "flex min-h-[52px] flex-1 items-center justify-center rounded-full px-4 py-3 text-center text-sm font-semibold uppercase tracking-wide transition sm:text-base",
            selected === "vozidla"
              ? "bg-white text-[var(--color-primary)] shadow-md"
              : "text-white/90 hover:bg-white/10",
          )}
        >
          <span className="flex flex-col items-center justify-center gap-0.5 leading-tight">
            <span>Mám</span>
            <span>vozidlo</span>
          </span>
        </Link>
      </div>
    </div>
  )
}
