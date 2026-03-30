import Link from "next/link"
import { Cookie, FileText } from "lucide-react"

import { Container } from "@/components/container"

export function Footer() {
  return (
    <footer id="kontakty" className="scroll-mt-24 bg-[var(--color-footer)] text-white">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="font-[family-name:var(--font-cardo)] text-2xl font-semibold tracking-tight">Kontakt</h2>
            <p className="mt-4 text-sm leading-relaxed text-white/90">
              <strong className="text-white">Dočasný výkup s.r.o.</strong>
              <br />
              Podvesná VII/6192, 760 01 Zlín
              <br />
              IČ: 23626836
            </p>
            <p className="mt-4">
              <a href="tel:+420777400256" className="text-lg font-semibold text-white underline-offset-4 hover:underline">
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
            <h2 className="font-[family-name:var(--font-cardo)] text-2xl font-semibold tracking-tight">Odkazy</h2>
            <ul className="mt-4 space-y-3 text-sm">
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
            <h2 className="font-[family-name:var(--font-cardo)] text-2xl font-semibold tracking-tight">Provozní doba</h2>
            <p className="mt-4 text-sm text-white/90">Po–Pá 8:00–17:00</p>
            <p className="mt-4 text-xs text-white/70">
              Služby dočasného výkupu nemovitostí a vozidel s možností zpětného odkupu. Nejedná se o spotřebitelský úvěr.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-white/20 pt-8 text-center text-xs text-white/70">
          © {new Date().getFullYear()} Dočasný výkup s.r.o. Všechna práva vyhrazena.
        </div>
      </Container>
    </footer>
  )
}
