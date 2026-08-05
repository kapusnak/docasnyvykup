import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram } from "lucide-react"

import { Container } from "@/components/container"
import { SectionRule } from "@/components/section-rule"
import { WhatsAppQrOpenButton } from "@/components/whatsapp-qr-modal"

const SOCIAL = {
  facebook: "https://www.facebook.com/share/159JsQe6Qg/",
  instagram: "https://www.instagram.com/docasnyvykup.cz/",
} as const

export function Footer() {
  const year = new Date().getFullYear()

  const muted = "text-white/65"
  const linkSubtle =
    `${muted} no-underline transition-colors hover:text-white hover:underline hover:decoration-white/35 hover:underline-offset-2`
  const telLink =
    "font-medium text-white no-underline transition-colors hover:text-white hover:underline hover:decoration-white/40 hover:underline-offset-2"
  const bodySm = "text-sm leading-normal text-white"

  const socialBtn =
    "flex h-9 w-9 items-center justify-center rounded-full text-white shadow-sm transition hover:brightness-105"

  return (
    <footer id="kontakty" className="bg-[#164A41] text-white">
      <Container className="py-10 lg:py-12">
        <h2 className="mb-6 font-[family-name:var(--font-cardo)] text-xl font-semibold leading-tight tracking-tight text-white md:text-2xl lg:mb-8">
          Kontakty
        </h2>
        <div className="grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 min-[480px]:gap-8 lg:gap-10 lg:items-start">
          {/* Nemovitosti */}
          <div className="min-w-0">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-white">Dočasný výkup nemovitostí</p>
              <p className={bodySm}>
                <span className={muted}>Telefon: </span>
                <a href="tel:+420776075150" className={telLink}>
                  +420 776 075 150
                </a>
              </p>
              <p className={bodySm}>
                <span className={muted}>E-mail: </span>
                <a href="mailto:info@docasnyvykup.cz" className={linkSubtle}>
                  info@docasnyvykup.cz
                </a>
              </p>
              <ul className={`${bodySm} space-y-0.5`}>
                <li>
                  <Link href="/ochrana-osobnich-udaju-nemovitosti" className={linkSubtle}>
                    Ochrana osobních údajů
                  </Link>
                </li>
                <li>
                  <Link href="/zasady-cookies" className={linkSubtle}>
                    Zásady cookies
                  </Link>
                </li>
              </ul>
              <div className={`mt-6 space-y-0.5 text-xs leading-snug ${muted}`}>
                <p className="font-medium text-white/95">Dočasný výkup s.r.o.</p>
                <p>IČ: 23626836</p>
                <p>Adresa: Podvesná VII/6192, 760 01 Zlín</p>
              </div>
            </div>
          </div>

          {/* Vozidla */}
          <div className="min-w-0 space-y-2">
            <p className="text-sm font-semibold text-white">Dočasný výkup vozidel</p>
            <div className={`${bodySm} space-y-0.5`}>
              <p>
                <span className={muted}>Telefon: </span>
                <a href="tel:+420776680720" className={telLink}>
                  +420 776 680 720
                </a>
              </p>
              <p>
                <a href="tel:+420776075150" className={telLink}>
                  +420 776 075 150
                </a>
              </p>
            </div>
            <div className="pt-1">
              <WhatsAppQrOpenButton variant="card" />
            </div>
            <p className={bodySm}>
              <span className={muted}>E-mail: </span>
              <a href="mailto:info@docasnyvykup.cz" className={linkSubtle}>
                info@docasnyvykup.cz
              </a>
            </p>
            <div className="flex flex-wrap gap-2 pt-0.5">
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBtn} bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]`}
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" strokeWidth={2} aria-hidden />
              </a>
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`${socialBtn} bg-[#1877F2]`}
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" strokeWidth={2} aria-hidden />
              </a>
            </div>
            <ul className={`${bodySm} space-y-0.5`}>
              <li>
                <Link href="/prohlaseni-o-ochrane-osobnich-udaju-vozidla" className={linkSubtle}>
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <Link href="/zasady-cookies" className={linkSubtle}>
                  Zásady cookies
                </Link>
              </li>
            </ul>
            <div className={`mt-6 space-y-0.5 text-xs leading-snug ${muted}`}>
              <p className="font-medium text-white/95">Tým Dočasný výkup</p>
              <p>IČ: 67020283</p>
              <p>Adresa: Podvesná VII/2046, 760 01 Zlín</p>
            </div>
            <div className="mt-8">
              <a
                href="https://www.zivefirmy.cz/docasny-vykup_f1907400?loc=1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="ZIVEFIRMY.CZ — Spolehlivá firma 2026"
                className="inline-flex w-fit max-w-full flex-row items-center gap-3 rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-left shadow-sm backdrop-blur-sm transition hover:bg-white/[0.14]"
              >
                <Image
                  src="/zivefirmy-spolehliva-firma-badge.webp"
                  alt=""
                  width={125}
                  height={125}
                  className="h-14 w-14 shrink-0 object-contain"
                  aria-hidden
                />
                <span className="flex min-w-0 flex-col gap-0.5 leading-tight">
                  <span className={`text-[10px] font-medium uppercase tracking-wide ${muted}`}>ZIVEFIRMY.CZ</span>
                  <span className="text-[11px] font-semibold uppercase text-white/95">Spolehlivá firma</span>
                  <span className={`text-[10px] ${muted}`}>2026</span>
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-8 space-y-1.5 pt-5 text-center text-xs leading-normal ${muted}`}>
          <SectionRule className="mb-5 bg-white/20" />
          <p>Po–Pá 8:00–17:00</p>
          <p className="mx-auto max-w-3xl">
            Služby dočasného výkupu nemovitostí a vozidel s možností zpětného odkupu. Nejedná se o spotřebitelský úvěr.
          </p>
          <p className="pt-0.5 text-white/95">© {year} Dočasný výkup s.r.o. Všechna práva vyhrazena.</p>
        </div>
      </Container>
    </footer>
  )
}
