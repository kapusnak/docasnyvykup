import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Zásady cookies",
  description: "Zásady cookies – Dočasný výkup s.r.o., docasnyvykup.cz",
}

export default function ZasadyCookiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-background)] pt-[4.5rem] md:pt-20">
        <section className="bg-[var(--color-primary)] pb-12 pt-10 md:pb-16 md:pt-14">
          <Container>
            <h1 className="text-center font-[family-name:var(--font-cardo)] text-3xl font-bold leading-tight text-white md:text-4xl">
              Zásady cookies
            </h1>
            <p className="mt-3 text-center text-body-inverse">
              Tyto zásady popisují používání cookies na webu{" "}
              <a href="https://docasnyvykup.cz" className="underline-offset-2 hover:underline">
                docasnyvykup.cz
              </a>{" "}
              v souladu s obecným nařízením o ochraně osobních údajů (GDPR).
            </p>
          </Container>
        </section>

        <section className="py-12 lg:py-16">
          <Container>
            <article className="mx-auto max-w-3xl">
              <h2 className="mt-0 text-xl font-bold leading-tight text-[var(--color-foreground)] md:text-2xl">
                1. Co jsou cookies
              </h2>
              <p className="mt-3 text-body-muted">
                Cookies jsou malé soubory ukládané vaším prohlížečem, které mohou sloužit k zajištění základních funkcí webu,
                zapamatování preferencí nebo měření návštěvnosti (po vašem souhlasu).
              </p>

              <h2 className="mt-8 text-xl font-bold leading-tight text-[var(--color-foreground)] md:text-2xl">2. Jaké cookies používáme</h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-6 text-body-muted">
                <li>
                  <strong className="text-[var(--color-foreground)]">Nezbytné</strong> – zajištění základního fungování webu a formuláře (bez souhlasu).
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">Analytické</strong> – např. Google Analytics pro statistiky návštěvnosti (pouze po
                  souhlasu).
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">Marketingové</strong> – např. remarketing (pouze po souhlasu).
                </li>
              </ul>

              <h2 className="mt-8 text-xl font-bold leading-tight text-[var(--color-foreground)] md:text-2xl">3. Správce a právní základ</h2>
              <p className="mt-3 text-body-muted">
                Správcem je Dočasný výkup s.r.o., Podvesná VII/6192, 760 01 Zlín, IČ 23626836. Právním základem pro nezbytné cookies je
                oprávněný zájem; u volitelných kategorií váš souhlas, který můžete kdykoli odvolat v nastavení prohlížeče nebo přes
                informační lištu webu.
              </p>

              <h2 className="mt-8 text-xl font-bold leading-tight text-[var(--color-foreground)] md:text-2xl">4. Jak cookies odmítnout</h2>
              <p className="mt-3 text-body-muted">
                Prohlížeč můžete nastavit tak, aby cookies blokoval nebo mazal. Omezení cookies může ovlivnit funkce webu. Údaje o
                používání cookies naleznete také v{" "}
                <Link href="/ochrana-osobnich-udaju" className="text-[var(--color-primary)] underline-offset-2 hover:underline">
                  Prohlášení o ochraně osobních údajů
                </Link>
                .
              </p>

              <h2 className="mt-8 text-xl font-bold leading-tight text-[var(--color-foreground)] md:text-2xl">5. Kontakt</h2>
              <p className="mt-3 text-body-muted">
                Dotazy k cookies:{" "}
                <a href="mailto:info@docasnyvykup.cz" className="text-[var(--color-primary)] underline-offset-2 hover:underline">
                  info@docasnyvykup.cz
                </a>
                , tel.{" "}
                <a href="tel:+420777400256" className="text-[var(--color-primary)] underline-offset-2 hover:underline">
                  +420 777 400 256
                </a>
                .
              </p>
            </article>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
