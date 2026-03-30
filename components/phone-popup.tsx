"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Phone, X } from "lucide-react"

import { sendPopupPhone } from "@/lib/emailjs"
import { formatPhoneDisplay, parsePhoneDigits, toFullPhone } from "@/lib/phone-420"

export function PhonePopup() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [closed, setClosed] = useState(false)
  const [shake, setShake] = useState(false)
  const [digits, setDigits] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 12_000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!visible || closed) return
    const id = setInterval(() => {
      setShake(true)
      setTimeout(() => setShake(false), 500)
    }, 8000)
    return () => clearInterval(id)
  }, [visible, closed])

  function close() {
    setClosed(true)
    setVisible(false)
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    const phone = toFullPhone(digits)
    if (!phone) {
      setStatus("error")
      return
    }
    setStatus("sending")
    try {
      await sendPopupPhone(phone, pathname ?? "")
      setStatus("success")
      setTimeout(() => close(), 1500)
    } catch {
      setStatus("error")
    }
  }

  if (!visible || closed) return null

  return (
    <>
      <button
        type="button"
        aria-label="Zavřít nabídku"
        className="fixed inset-0 z-40 bg-black/20 lg:hidden"
        onClick={close}
      />

      <div
        className={`fixed z-50 max-h-[40vh] w-full rounded-t-2xl bg-[var(--color-primary)] p-4 pb-6 shadow-2xl transition-transform duration-300 ease-out lg:bottom-6 lg:left-auto lg:right-6 lg:max-h-none lg:w-[380px] lg:rounded-2xl lg:p-6 ${
          shake ? "animate-shake" : ""
        } bottom-0 left-0 right-0 animate-slide-in-bottom lg:animate-none`}
      >
        <button
          type="button"
          onClick={close}
          className="absolute right-3 top-3 rounded-full p-2 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Zavřít"
        >
          <X className="h-5 w-5" />
        </button>

        <h3 className="pr-10 text-lg font-bold text-white lg:text-2xl">Potřebujete poradit?</h3>
        <p className="mt-1 text-sm text-white/85">
          Nechte nám telefon, ozveme se vám a nezávazně vše prokonzultujeme.
        </p>

        <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3">
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted)]" />
            <input
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="+420 777 400 256"
              value={formatPhoneDisplay(digits)}
              onChange={(e) => setDigits(parsePhoneDigits(e.target.value))}
              className="h-12 w-full rounded-lg border-0 bg-white pl-10 pr-4 text-[var(--color-foreground)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-white/40"
              required
            />
          </div>
          {status === "error" && <p className="text-xs text-red-100">Zadejte platné číslo (9 číslic).</p>}
          <button
            type="submit"
            disabled={status === "sending"}
            className="flex h-12 min-h-[48px] items-center justify-center rounded-lg bg-white text-base font-semibold text-[var(--color-primary)] transition-colors hover:bg-[var(--color-surface-cream)] disabled:opacity-70"
          >
            {status === "sending" ? "Odesílám…" : status === "success" ? "Odesláno" : "Zavolejte mi"}
          </button>
        </form>
      </div>
    </>
  )
}
