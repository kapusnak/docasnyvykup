import Link from "next/link"
import { Cookie, FileText } from "lucide-react"

import { Container } from "@/components/container"

export function Footer() {
  return (
    <footer id="kontakty" className="scroll-mt-24 bg-[var(--color-footer)] text-white">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-[family-name:var(--font-cardo)] text-2xl font-semibold leading-tight tracking-tight">
              Kontakt
            </h2>
            <p className="mt-3 text-body-inverse">
              <strong className="text-white">Dočasný výkup s.r.o.</strong>
              <br />
              Podvesná VII/6192, 760 01 Zlín
              <br />
              IČ: 23626836
            </p>
            <p className="mt-3">
              <a href="tel:+420777400256" className="text-base font-semibold leading-snug text-white underline-offset-4 hover:underline md:text-lg">
                +420 777 400 256
              </a>
            </p>
            <p className="mt-2">
              <a href="mailto:info@docasnyvykup.cz" className="text-white/90 underline-offset-4 hover:underline">
                info@docasnyvykup.cz
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-cardo)] text-2xl font-semibold leading-tight tracking-tight">
              Odkazy
            </h2>
            <ul className="mt-3 space-y-2 text-sm leading-snug">
              <li>
                <Link href="/ochrana-osobnich-udaju" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                  <FileText className="h-4 w-4 shrink-0" aria-hidden />
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <Link href="/zasady-cookies" className="inline-flex items-center gap-2 text-white/90 hover:text-white">
                  <Cookie className="h-4 w-4 shrink-0" aria-hidden />
                  Zásady cookies
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 lg:col-span-1">
            <h2 className="font-[family-name:var(--font-cardo)] text-2xl font-semibold leading-tight tracking-tight">
              Provozní doba
            </h2>
            <p className="mt-3 text-sm leading-snug text-white/90">Po–Pá 8:00–17:00</p>
            <p className="mt-3 text-xs leading-snug text-white/70 md:text-sm">
              Služby dočasného výkupu nemovitostí a vozidel s možností zpětného odkupu. Nejedná se o spotřebitelský úvěr.
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs leading-snug text-white/70 md:text-sm">
          © {new Date().getFullYear()} Dočasný výkup s.r.o. Všechna práva vyhrazena.
        </div>
      </Container>
    </footer>
  )
}
