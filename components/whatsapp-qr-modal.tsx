"use client"

import Image from "next/image"
import { useEffect, useId, useRef, useState } from "react"
import { X } from "lucide-react"

/** WhatsApp Business — standardní glyph s odznakem „+“ vpravo nahoře. */
function WhatsAppBusinessIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <g transform="translate(-0.35 1.1) scale(0.86)">
        <path
          fill="currentColor"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        />
      </g>
      {/* Odznak + — kruh s vystřiženým plusem (Business) */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.15 1.2a3.85 3.85 0 1 1 0 7.7 3.85 3.85 0 0 1 0-7.7zm0 1.7c-.42 0-.76.34-.76.76v1.28h-1.28a.76.76 0 1 0 0 1.52h1.28v1.28a.76.76 0 1 0 1.52 0v-1.28h1.28a.76.76 0 1 0 0-1.52h-1.28V3.66c0-.42-.34-.76-.76-.76z"
        clipRule="evenodd"
      />
    </svg>
  )
}

const WA_FALLBACK = "https://wa.me/420776680720"

type Props = {
  buttonClassName?: string
  /** Velikost ikony uvnitř tlačítka (např. u menšího footer řádku). */
  iconClassName?: string
  /** `card` = rámeček s textem (jako na vymahanidluzniku), `icon` = jen kulaté tlačítko. */
  variant?: "icon" | "card"
}

export function WhatsAppQrOpenButton({
  buttonClassName,
  iconClassName,
  variant = "icon",
}: Props) {
  const [open, setOpen] = useState(false)
  const titleId = useId()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    closeRef.current?.focus()
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  const trigger =
    variant === "card" ? (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          buttonClassName ??
          "inline-flex w-fit max-w-full items-center gap-2.5 rounded-xl border border-[#25D366]/50 bg-white/5 px-3 py-2.5 text-left transition-colors hover:border-[#25D366] hover:bg-[#25D366]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#164A41]"
        }
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="WhatsApp Business — zobrazit QR kód"
      >
        <WhatsAppBusinessIcon
          className={iconClassName ?? "h-6 w-6 shrink-0 text-[#25D366]"}
        />
        <span className="min-w-0">
          <span className="block text-sm font-semibold leading-snug text-white">
            Napište nám na WhatsApp
          </span>
          <span className="mt-0.5 block text-xs leading-snug text-white/65">
            Rychlá zpráva — odpovíme co nejdříve
          </span>
        </span>
      </button>
    ) : (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={
          buttonClassName ??
          "flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white shadow-sm transition hover:brightness-110"
        }
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-label="WhatsApp Business — zobrazit QR kód"
      >
        <WhatsAppBusinessIcon className={iconClassName ?? "h-5 w-5"} />
      </button>
    )

  return (
    <>
      {trigger}

      {open ? (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
          <div
            role="presentation"
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-[1] max-h-[90vh] w-full max-w-[min(100%,28rem)] overflow-y-auto rounded-2xl border border-black/10 bg-[#00a884] p-4 shadow-2xl sm:p-5"
          >
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-2 top-2 z-10 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30"
              aria-label="Zavřít"
            >
              <X className="pointer-events-none h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
            </button>
            <h2 id={titleId} className="sr-only">
              WhatsApp Business — docasnyvykup.cz
            </h2>
            <div className="rounded-xl bg-white/5 p-1">
              <Image
                src="/whatsapp-qr-docasnyvykup.webp"
                alt="QR kód pro zahájení chatu s docasnyvykup.cz ve WhatsApp Business. Firemní účet v aplikaci WhatsApp."
                width={236}
                height={420}
                className="h-auto w-full rounded-lg"
                sizes="(max-width: 640px) 100vw, 448px"
              />
            </div>
            <p className="mt-3 text-center text-xs leading-snug text-white/95 sm:text-sm">
              Chcete-li se společností docasnyvykup.cz zahájit chat v aplikaci WhatsApp, naskenujte
              tento kód.
            </p>
            <p className="mt-2 text-center">
              <a
                href={WA_FALLBACK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white underline decoration-white/60 underline-offset-2 hover:decoration-white"
              >
                Otevřít WhatsApp v prohlížeči
              </a>
            </p>
          </div>
        </div>
      ) : null}
    </>
  )
}
