import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description:
    "Prohlášení o ochraně osobních údajů – vyberte službu nemovitosti (Dočasný výkup s.r.o.) nebo vozidla (Zdeněk Kapušňák).",
}

export default function OchranaOsobnichUdajuHubPage() {
  const cardClass =
    "rounded-2xl border border-[var(--color-primary)]/15 bg-white p-6 shadow-sm transition hover:border-[var(--color-primary)]/25"
  const linkClass = "text-[var(--color-primary)] font-semibold underline-offset-2 hover:underline"

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-background)] pt-[4.5rem] md:pt-20">
        <section className="bg-[var(--color-primary)] pb-12 pt-10 md:pb-16 md:pt-14">
          <Container>
            <h1 className="text-center font-[family-name:var(--font-cardo)] text-3xl font-bold leading-tight text-white md:text-4xl">
              Ochrana osobních údajů
            </h1>
            <p className="mx-auto mt-3 max-w-2xl text-center text-body-inverse">
              Služby dočasného výkupu nemovitostí a vozidel zajišťují dva samostatné subjekty. Vyberte dokument podle toho, jakou poptávku
              řešíte.
            </p>
          </Container>
        </section>

        <section className="py-12 lg:py-16">
          <Container>
            <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
              <div className={cardClass}>
                <h2 className="text-lg font-bold text-[var(--color-foreground)]">Dočasný výkup nemovitostí</h2>
                <p className="mt-2 text-sm text-body-muted">Správce: Dočasný výkup s.r.o., IČ 23626836</p>
                <p className="mt-4">
                  <Link href="/ochrana-osobnich-udaju-nemovitosti" className={linkClass}>
                    Prohlášení o ochraně osobních údajů – nemovitosti
                  </Link>
                </p>
              </div>
              <div className={cardClass}>
                <h2 className="text-lg font-bold text-[var(--color-foreground)]">Dočasný výkup vozidel</h2>
                <p className="mt-2 text-sm text-body-muted">Správce: Zdeněk Kapušňák, IČ 67020283</p>
                <p className="mt-4">
                  <Link href="/prohlaseni-o-ochrane-osobnich-udaju-vozidla" className={linkClass}>
                    Prohlášení o ochraně osobních údajů – vozidla
                  </Link>
                </p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
