"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Phone, X } from "lucide-react"

const nav = [
  { href: "/#informace", label: "Informace" },
  { href: "/#nemovitosti", label: "Nemovitosti" },
  { href: "/#vozidla", label: "Vozidla" },
  { href: "/#formular", label: "Poptávka" },
  { href: "/#kontakty", label: "Kontakty" },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 bg-[var(--color-background)]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[80rem] items-center justify-between gap-4 px-5 py-3 sm:px-8 lg:px-12 xl:px-14">
        <Link href="/" className="flex min-h-[44px] items-center gap-3">
          <Image
            src="/cropped-docasnyvykup-logo-circled.png"
            alt="Dočasný výkup"
            width={44}
            height={44}
            className="h-11 w-11 shrink-0 rounded-full object-cover"
            priority
          />
          <span className="font-[family-name:var(--font-cardo)] text-lg font-semibold tracking-tight text-[#111] sm:text-xl">
            Dočasný výkup
          </span>
        </Link>

        <button
          type="button"
          className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-[#111] md:hidden"
          aria-expanded={open}
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Hlavní navigace">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-[44px] content-center text-sm font-medium text-[#636363] transition-colors hover:text-[#111]"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="tel:+420777400256"
            className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-[var(--color-primary)] px-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)]"
          >
            <Phone className="h-4 w-4" aria-hidden />
            +420 777 400 256
          </a>
        </nav>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-[var(--color-background)] md:hidden">
          <nav className="mx-auto flex max-w-[80rem] flex-col gap-1 px-5 py-3 sm:px-8 lg:px-12 xl:px-14" aria-label="Mobilní navigace">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="min-h-[48px] content-center rounded-lg px-2 text-base font-medium text-[#111] hover:bg-black/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="tel:+420777400256"
              className="mt-2 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[var(--color-primary)] px-4 font-semibold text-white hover:bg-[var(--color-primary-hover)]"
              onClick={() => setOpen(false)}
            >
              <Phone className="h-5 w-5" aria-hidden />
              Zavolat +420 777 400 256
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
