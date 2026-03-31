"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Phone, X } from "lucide-react"

import { sendPopupPhone } from "@/lib/emailjs"
import { formatPhoneDisplay, parsePhoneDigits, toFullPhone } from "@/lib/phone-420"
import { cn } from "@/lib/utils"

const POPUP_DISMISSED_KEY = "docasnyvykup-phone-popup-dismissed"
const SHOW_DELAY_MS = 15_000
/** After slide-in finishes, run shake once (ms). */
const SHAKE_AFTER_MS = 500
const SHAKE_DURATION_MS = 500

export function PhonePopup() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)
  const [closed, setClosed] = useState(false)
  const [shake, setShake] = useState(false)
  const [digits, setDigits] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  useEffect(() => {
    let cancelled = false
    try {
      if (localStorage.getItem(POPUP_DISMISSED_KEY) === "1") {
        setClosed(true)
        return
      }
    } catch {
      /* storage unavailable — still allow popup */
    }
    const t = setTimeout(() => {
      if (!cancelled) setVisible(true)
    }, SHOW_DELAY_MS)
    return () => {
      cancelled = true
      clearTimeout(t)
    }
  }, [])

  useEffect(() => {
    if (!visible || closed) return
    const start = setTimeout(() => setShake(true), SHAKE_AFTER_MS)
    const stop = setTimeout(() => setShake(false), SHAKE_AFTER_MS + SHAKE_DURATION_MS)
    return () => {
      clearTimeout(start)
      clearTimeout(stop)
    }
  }, [visible, closed])

  function dismiss() {
    try {
      localStorage.setItem(POPUP_DISMISSED_KEY, "1")
    } catch {
      /* ignore */
    }
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
      setTimeout(() => dismiss(), 1500)
    } catch {
      setStatus("error")
    }
  }

  if (!visible || closed) return null

  return (
    <>
      {/* Below cookie bar (z-50), above page — same role as hnedpenize lead-popup backdrop */}
      <button
        type="button"
        aria-label="Zavřít nabídku"
        className="fixed inset-0 z-[48] bg-black/20 lg:hidden"
        onClick={dismiss}
      />

      <div
        className={cn(
          "fixed left-0 right-0 z-[52] w-full max-h-[33vh] rounded-t-2xl bg-[#f1b24a] shadow-2xl",
          "bottom-[var(--docasnyvykup-popup-bottom-mob)]",
          "animate-slide-in-bottom transition-all duration-300 ease-out",
          "lg:bottom-[var(--docasnyvykup-popup-bottom-lg)] lg:left-auto lg:right-6 lg:max-h-none lg:w-[380px] lg:animate-none lg:rounded-2xl",
          shake && "animate-shake",
        )}
      >
        <button
          type="button"
          onClick={dismiss}
          className="absolute right-3 top-3 z-10 inline-flex min-h-10 min-w-10 items-center justify-center rounded-full p-2 text-[var(--color-foreground)]/55 transition-colors hover:bg-black/10 hover:text-[var(--color-foreground)]"
          aria-label="Zavřít"
        >
          <X className="pointer-events-none h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
        </button>

        <div className="p-4 pb-6 lg:p-6">
          <h3 className="pr-10 text-lg font-bold leading-snug text-[var(--color-foreground)] lg:text-2xl">
            Potřebujete poradit?
          </h3>
          <p className="mt-1.5 text-body-foreground">
            Nechte nám telefon, ozveme se vám a nezávazně vše prokonzultujeme.
          </p>

          <form onSubmit={onSubmit} className="mt-3 flex flex-col gap-2.5 lg:gap-3">
            <div className="relative">
              <Phone
                className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted)]"
                aria-hidden
              />
              <input
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                placeholder="+420 777 400 256"
                value={formatPhoneDisplay(digits)}
                onChange={(e) => setDigits(parsePhoneDigits(e.target.value))}
                className="h-10 w-full rounded-lg border-0 bg-white pl-10 pr-4 text-[var(--color-foreground)] placeholder:text-[var(--color-muted-light)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] lg:h-12"
                required
              />
            </div>
            {status === "error" && (
              <p className="text-xs font-medium leading-snug text-red-900 md:text-sm">
                Zadejte platné číslo (9 číslic).
              </p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex h-10 min-h-[48px] w-full items-center justify-center rounded-lg bg-[var(--color-primary)] text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-hover)] disabled:opacity-70 lg:h-12 lg:text-base"
            >
              {status === "sending" ? "Odesílám…" : status === "success" ? "Odesláno" : "Zavolejte mi"}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
