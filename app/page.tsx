import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

import { Container } from "@/components/container"
import { CookieBanner } from "@/components/cookie-banner"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { LeadForm } from "@/components/lead-form"
import { PhonePopup } from "@/components/phone-popup"

const img = {
  hero: "/media/2025/03/refargotohp-UHHFYUTz_n0-unsplash-scaled.jpg",
  nemExt: "/media/2025/03/geovanny-moreno-Npk17KDiYVo-unsplash-scaled.jpg",
  nemSteps: "/media/2025/03/julian-gentilezza-ctUWE7BUEzE-unsplash-683x1024.jpg",
  vozHero: "/media/2025/03/koons-automotive-Rpt1lvCiXvA-unsplash-scaled.jpg",
  interior: "/media/2025/03/interior-mintosko-fXqlOR8826I-unsplash-683x1024.jpg",
} as const

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — texty z f5f5_posts ID 10 */}
        <section
          className="relative flex min-h-[min(100svh,880px)] items-center justify-center bg-[var(--color-surface-muted)] pt-[4.5rem] md:pt-20"
          aria-label="Úvod"
        >
          <div className="absolute inset-0">
            <Image
              src={img.hero}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/35 to-black/50" aria-hidden />
          </div>
          <Container className="relative z-10 py-12 md:py-20">
            <div className="mx-auto max-w-2xl text-center text-white">
              <h1 className="font-[family-name:var(--font-cardo)] text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-[2.75rem]">
                Získejte finanční prostředky
                <br />
                <span className="font-normal">a nadále užívejte svou nemovitost nebo vůz</span>
              </h1>
              <p className="mt-6 text-body-inverse">
                Potřebujete rychle získat peníze na řešení finanční situace, na podnikání či jiné účely?
              </p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:justify-center">
                <Link
                  href="/#nemovitosti"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-8 text-base font-bold uppercase tracking-wide text-[var(--color-primary)] shadow-lg transition hover:bg-[var(--color-surface-cream)]"
                >
                  MÁM NEMOVITOST
                </Link>
                <Link
                  href="/#vozidla"
                  className="inline-flex min-h-[52px] items-center justify-center rounded-full border-2 border-white bg-transparent px-8 text-base font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
                >
                  MÁM VOZIDLO
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Dočasný výkup nemovitostí */}
        <section
          id="nemovitosti"
          className="scroll-mt-24 bg-[var(--color-surface-cream)] py-14 lg:py-20"
        >
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="order-2 overflow-hidden rounded-2xl shadow-lg lg:order-1">
                <Image
                  src={img.nemExt}
                  alt="Nemovitost"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 space-y-5 lg:order-2">
                <h2 className="font-[family-name:var(--font-cardo)] text-3xl font-semibold leading-tight text-[var(--color-foreground)] md:text-4xl">
                  Dočasný výkup nemovitostí
                </h2>
                <p className="text-lg font-medium leading-snug text-[var(--color-foreground)] md:text-xl">
                  Získejte finance a zůstaňte
                  <br />
                  bydlet ve svém domě.
                </p>
                <p className="text-body-muted">
                  Rychlé a diskrétní řešení finančních potíží formou zpětného leasingu.
                </p>
                <Link
                  href="/#formular"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[var(--color-primary)] px-8 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[var(--color-primary-hover)]"
                >
                  Nezávazná konzultace zdarma
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* O službě — nemovitosti */}
        <section className="scroll-mt-24 bg-[var(--color-surface-muted)] py-14 lg:py-20">
          <Container>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-14">
              <div className="min-w-0 flex-1 space-y-5 lg:space-y-4">
                <h2 className="text-center font-[family-name:var(--font-cardo)] text-2xl font-semibold leading-tight text-[var(--color-foreground)] md:text-3xl lg:text-left">
                  O službě dočasného výkupu nemovitostí
                </h2>
                <div className="space-y-3 lg:space-y-2.5">
                  <h3 className="font-[family-name:var(--font-cardo)] text-lg font-semibold leading-snug text-[var(--color-foreground)] md:text-xl">
                    Co je to dočasný výkup?
                  </h3>
                  <p className="text-body-muted">
                    Dočasný výkup nemovitosti (tzv. zpětný leasing) je služba, kdy svou nemovitost prodáte a zároveň ji
                    získáte zpět do užívání. Získáte okamžité finance, ale nemusíte se stěhovat – v nemovitosti zůstáváte
                    bydlet. Po dohodnuté době máte možnost nemovitost odkoupit zpět.
                  </p>
                  <p className="text-body-muted">
                    Vedle zpětného leasingu nabízíme také řešení formou zástavy nemovitosti nebo přímého výkupu – podle
                    toho, co je pro klienta nejvhodnější.
                  </p>
                </div>
                <div className="space-y-2.5 pt-1 lg:space-y-2 lg:pt-0">
                  <h4 className="font-[family-name:var(--font-cardo)] text-base font-semibold leading-snug text-[var(--color-foreground)] md:text-lg">
                    Pro koho je služba vhodná?
                  </h4>
                  <ul className="space-y-2 text-body-muted">
                    {[
                      "Při hrozící exekuci nebo dražbě.",
                      "Při vysokém zadlužení a tlaku věřitelů.",
                      "Pokud potřebujete rychle získat finanční prostředky.",
                      "Když chcete získat čas a neztratit střechu nad hlavou.",
                      "Pokud hledáte rychlé řešení formou zástavy nebo přímého výkupu.",
                    ].map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="shrink-0 text-[var(--color-primary)]" aria-hidden>
                          ➤
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-2.5 pt-1 lg:space-y-2 lg:pt-0">
                  <h4 className="font-[family-name:var(--font-cardo)] text-base font-semibold leading-snug text-[var(--color-foreground)] md:text-lg">
                    Výhody pro klienty
                  </h4>
                  <ul className="space-y-2 text-body-muted">
                    {[
                      "Rychlé vyplacení peněz – peníze obvykle vyplácíme do několika dní.",
                      "Možnost zůstat ve své nemovitosti – nemusíte se stěhovat ani měnit zázemí.",
                      "Diskrétní a individuální přístup – každý případ řešíme osobně a citlivě.",
                    ].map((t) => (
                      <li key={t} className="flex gap-2">
                        <span className="shrink-0 text-[var(--color-primary)]" aria-hidden>
                          ➤
                        </span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="shrink-0 lg:w-[min(100%,280px)] xl:w-[min(100%,320px)]">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={img.interior}
                    alt="Interiér domu"
                    width={683}
                    height={1024}
                    className="aspect-[4/5] w-full max-h-[min(22rem,48vh)] object-cover object-center lg:aspect-auto lg:max-h-[min(26rem,50vh)]"
                    sizes="(max-width: 1023px) 100vw, 300px"
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Jak funguje — nemovitosti */}
        <section id="jak-nemovitosti" className="scroll-mt-24 bg-[var(--color-primary)] py-14 text-white lg:py-20">
          <Container>
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-14">
              <div className="order-2 shrink-0 lg:order-1 lg:w-[min(100%,280px)] xl:w-[min(100%,320px)]">
                <div className="overflow-hidden rounded-2xl shadow-lg">
                  <Image
                    src={img.nemSteps}
                    alt="Konzultace a postup"
                    width={683}
                    height={1024}
                    className="aspect-[4/5] w-full max-h-[min(22rem,48vh)] object-cover object-center lg:aspect-auto lg:max-h-[min(26rem,50vh)]"
                    sizes="(max-width: 1023px) 100vw, 300px"
                  />
                </div>
              </div>
              <div className="order-1 min-w-0 flex-1 space-y-5 lg:order-2 lg:space-y-4 lg:pt-0">
                <h2 className="text-center font-[family-name:var(--font-cardo)] text-2xl font-semibold leading-tight md:text-3xl lg:text-left">
                  Jak funguje dočasný výkup nemovitostí?
                </h2>
                <div className="space-y-5 lg:space-y-4">
                  <div>
                    <h3 className="font-[family-name:var(--font-cardo)] text-lg font-semibold leading-snug">
                      1. Nezávazná konzultace
                    </h3>
                    <p className="mt-1.5 text-body-inverse">Zavolejte nám nebo využijte náš formulář</p>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-cardo)] text-lg font-semibold leading-snug">
                      2. Návrh řešení a podmínek
                    </h3>
                    <p className="mt-1.5 text-body-inverse">
                      Společně vybereme, zda je pro vás nejvýhodnější zpětný leasing, zástava nemovitosti nebo přímý výkup.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-cardo)] text-lg font-semibold leading-snug">
                      3. Okamžité vyplacení peněz
                    </h3>
                    <p className="mt-1.5 text-body-inverse">Vše vyřídíme rychle, obvykle do několika dní.</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Dočasný výkup vozidel */}
        <section id="vozidla" className="scroll-mt-24 bg-[var(--color-surface-cream)] py-14 lg:py-20">
          <Container>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="space-y-5">
                <h2 className="font-[family-name:var(--font-cardo)] text-3xl font-semibold leading-tight text-[var(--color-foreground)] md:text-4xl">
                  Dočasný výkup vozidel
                </h2>
                <p className="text-lg font-medium leading-snug text-[var(--color-foreground)] md:text-xl">
                  Získejte finance a nadále
                  <br />
                  užívejte svůj vůz.
                </p>
                <p className="text-body-muted">
                  Financování je poskytováno pro osobní, užitková a nákladní vozidla, obytné vozy, motocykly a veterány.
                </p>
                <Link
                  href="/#formular"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[var(--color-primary)] px-8 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[var(--color-primary-hover)]"
                >
                  Vyplnit žádost
                </Link>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={img.vozHero}
                  alt="Vozidlo"
                  width={1200}
                  height={800}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </Container>
        </section>

        {/* O službě vozidel + feature grid — id informace */}
        <section id="informace" className="scroll-mt-24 bg-[var(--color-accent-warm)] py-14 lg:py-20">
          <Container>
            <h2 className="font-[family-name:var(--font-cardo)] text-3xl font-semibold leading-tight text-[var(--color-foreground)] md:text-4xl md:leading-tight">
              O službě dočasného výkupu vozidel
            </h2>
            <p className="mt-5 max-w-4xl text-body-foreground">
              Služba je určena všem majitelům vozidel – financování je poskytováno pro{" "}
              <strong>
                osobní, užitková a nákladní vozidla, obytné vozy, motocykly a veterány.
              </strong>
            </p>

            <ul className="mt-10 grid list-none gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Až 90 % z hodnoty vozu",
                  body: "Vy sami si zvolíte, kolik z této částky využijete.",
                },
                {
                  title: "Vůz můžete nadále využívat",
                  body: "Své vozidlo můžete i po výkupu nadále využívat, přičemž v technickém průkazu zůstanete uvedeni jako provozovatel vozidla.",
                },
                {
                  title: "Peníze na účet do 24 hodin",
                  body: (
                    <>
                      Po fyzické kontrole vozu převedeme <strong>IHNED</strong> finanční prostředky na bankovní účet
                      okamžitým převodem.
                    </>
                  ),
                },
                {
                  title: "Bez prověřování registrů",
                  body: (
                    <>
                      Nezkoumáme Vaši finanční historii, neprověřujeme bankovní ani nebankovní registry, což je velkou
                      výhodou této služby.
                      <br />
                      <br />
                      Jediným omezením je aktivní exekuce nebo probíhající insolvence. Ukončená insolvence však není
                      překážkou.
                    </>
                  ),
                },
                {
                  title: "Zpětný odkup kdykoliv",
                  body: "Svůj vůz si můžete kdykoliv odkoupit zpět za stejnou cenu, za jakou byl vykoupen.",
                },
                {
                  title: "Jednoduché vyřízení",
                  body: (
                    <>
                      Po odeslání žádosti Vás do 30 minut kontaktuje náš operátor s instrukcemi.
                    </>
                  ),
                },
              ].map((f) => (
                <li
                  key={f.title}
                  className="rounded-2xl border border-black/5 bg-white/80 p-6 shadow-sm"
                >
                  <div className="flex gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/15 text-[var(--color-primary)]">
                      <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-cardo)] text-lg font-semibold leading-snug text-[var(--color-foreground)]">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-body-muted">{f.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-[var(--color-surface-muted)] px-6 py-10 text-center md:px-10">
              <p className="font-[family-name:var(--font-cardo)] text-xl font-semibold leading-snug text-[var(--color-foreground)]">
                Využijte služby dočasného výkupu vozidla ještě dnes!
              </p>
              <p className="mt-3 text-body-muted">
                Vyplnění žádosti je nezávazné a z důvodu bezpečnosti nevyžaduje uvedení žádných bankovních údajů.
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="/#formular"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[var(--color-primary)] px-10 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-[var(--color-primary-hover)]"
                >
                  Vyplnit žádost
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* Jak funguje — vozidlo */}
        <section className="scroll-mt-24 bg-white py-14 lg:py-20">
          <Container>
            <h2 className="text-center font-[family-name:var(--font-cardo)] text-2xl font-semibold leading-tight text-[var(--color-foreground)] md:text-3xl">
              Jak funguje
              <br />
              dočasný výkup vozidla?
            </h2>
            <ol className="mx-auto mt-8 max-w-2xl space-y-5">
              {[
                {
                  n: "1.",
                  title: "Kontaktujte nás",
                  body: (
                    <>
                      Vyplňte online formulář nebo nám zavolejte.
                    </>
                  ),
                },
                {
                  n: "2.",
                  title: "Ocenění a dohoda",
                  body: "Naši specialisté ocení reálnou tržní hodnotu vozidla a dohodnou s Vámi podmínky výkupu.",
                },
                {
                  n: "3.",
                  title: "Podpis smlouvy",
                  body: "Vyberete si, zda vozidlo ponecháte u nás, nebo jej budete dál využívat.",
                },
                {
                  n: "4.",
                  title: "Převod finančních prostředků",
                  body: "Peníze budou obratem zaslány po fyzické kontrole vozu na bankovní účet okamžitým převodem.",
                },
                {
                  n: "5.",
                  title: "Možnost zpětného odkupu",
                  body: "Vůz si můžete kdykoliv odkoupit zpět za stejnou cenu, za jakou byl vykoupen.",
                },
              ].map((step) => (
                <li key={step.title} className="flex gap-3 border-b border-black/5 pb-5 last:border-0 last:pb-0">
                  <span className="font-[family-name:var(--font-cardo)] text-2xl font-bold leading-none text-[var(--color-primary)]">
                    {step.n}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-[family-name:var(--font-cardo)] text-lg font-semibold leading-snug text-[var(--color-foreground)]">
                      {step.title}
                    </h3>
                    <p className="mt-1.5 text-body-muted">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* Poptávka */}
        <section id="formular" className="scroll-mt-24 bg-[var(--color-surface-muted)] py-14 lg:py-20">
          <Container>
            <div className="mx-auto max-w-3xl rounded-2xl border border-black/5 bg-white px-6 py-10 md:px-12 md:py-14">
              <h2 className="text-center font-[family-name:var(--font-cardo)] text-2xl font-semibold leading-tight text-[var(--color-foreground)] md:text-3xl">
                Nezávazná poptávka
              </h2>
              <p className="mt-3 text-center text-body-muted">
                Vyplňte údaje a ozveme se vám co nejdříve. Nebo volejte{" "}
                <a href="tel:+420777400256" className="font-semibold text-[var(--color-primary)]">
                  +420 777 400 256
                </a>
                .
              </p>
              <div className="mt-8">
                <LeadForm />
              </div>
            </div>
          </Container>
        </section>

        <Footer />
      </main>
      <PhonePopup />
      <CookieBanner />
    </>
  )
}
