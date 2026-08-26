import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { Check } from "lucide-react"

import { Container } from "@/components/container"
import { SectionRule } from "@/components/section-rule"
import { BottomChrome } from "@/components/bottom-chrome"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { HeroServiceSwitch } from "@/components/hero-service-switch"
import { LeadForm } from "@/components/lead-form"
import { FormularInlineLink } from "@/components/formular-inline-link"
import { ZavolejteTelLink } from "@/components/zavolejte-tel-link"

const img = {
  hero: "/media/2025/03/refargotohp-UHHFYUTz_n0-unsplash-scaled.webp",
  nemExt: "/media/2025/03/jakub-zerdzicki-Snk488INnQs-unsplash-house-model.webp",
  nemSteps: "/media/2025/03/taichi-nakamura-HKpn1x4juSs-unsplash-modern-houses.webp",
  vozHero: "/media/2025/03/koons-automotive-Rpt1lvCiXvA-unsplash-scaled.webp",
  interior: "/media/2025/03/ildar-garifullin-Q_xYVJlMDkA-unsplash-console.webp",
} as const

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero — texty z f5f5_posts ID 10 */}
        <section
          className="relative flex min-h-[min(72svh,560px)] items-center justify-center bg-[var(--color-surface-muted)] pt-[4.5rem] md:min-h-[min(88svh,880px)] md:pt-20"
          aria-label="Úvod"
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src={img.hero}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center max-lg:origin-[50%_24%] max-lg:scale-[1.38] lg:origin-center lg:scale-100"
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/60"
              aria-hidden
            />
          </div>
          <Container className="relative z-10 py-8 md:py-12 lg:py-20">
            <div className="mx-auto max-w-2xl text-center text-white">
              <h1 className="font-[family-name:var(--font-cardo)] text-3xl font-semibold leading-tight tracking-[-0.8px] sm:text-4xl md:text-[2.75rem] md:leading-snug">
                Získejte finanční prostředky
                <br />
                a nadále užívejte svou nemovitost nebo vůz
              </h1>
              <p className="mt-6 font-normal text-body-inverse">
                Potřebujete rychle získat peníze na řešení finanční situace, na podnikání či jiné účely?
              </p>
              <HeroServiceSwitch />
            </div>
          </Container>
        </section>

        {/* Nemovitosti: úvod, o službě, jak funguje — jedna krémová sekce #nemovitosti; #jak-nemovitosti uvnitř */}
        <section id="nemovitosti" className="bg-[var(--color-surface-cream)] py-10 md:py-14 lg:py-20">
          <Container>
            <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="order-2 overflow-hidden rounded-2xl shadow-lg lg:order-1">
                <Image
                  src={img.nemExt}
                  alt="Nemovitost"
                  width={960}
                  height={639}
                  className="h-48 w-full object-cover sm:h-auto sm:min-h-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="order-1 space-y-5 lg:order-2">
                <h2 className="font-[family-name:var(--font-cardo)] text-2xl font-semibold leading-tight text-[var(--color-foreground)] md:text-3xl lg:text-4xl">
                  Dočasný výkup nemovitostí
                </h2>
                <p className="text-lg font-medium leading-snug text-[var(--color-foreground)] md:text-xl">
                  Získejte finance a zůstaňte
                  <br />
                  bydlet ve svém domě.
                </p>
                <p className="text-body-muted">
                  Rychlé a diskrétní řešení finančních potíží formou zpětného leasingu, zástavy nemovitosti, přímého výkupu
                  nebo bez zajištění — vždy podle vaší situace.
                </p>
                <Link
                  href="/?mode=nemovitosti#formular"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[var(--color-cta)] px-8 text-sm font-bold uppercase tracking-wide text-[var(--color-foreground)] transition hover:bg-[var(--color-cta-hover)]"
                >
                  Nezávazná konzultace zdarma
                </Link>
              </div>
            </div>

            <div className="mt-8 flex min-w-0 flex-col items-center gap-8 lg:mt-10 lg:gap-10">
              <SectionRule />
              <div className="w-full space-y-5 lg:space-y-4">
                <div className="space-y-3 lg:space-y-2.5">
                  <h3 className="font-[family-name:var(--font-cardo)] text-lg font-semibold leading-snug text-[var(--color-foreground)] md:text-xl">
                    Co je to dočasný výkup (zpětný leasing)?
                  </h3>
                  <p className="text-body-muted">
                    Nemovitost prodáte, získáte okamžité finance, ale nadále v ní bydlíte. Po uplynutí dohodnuté doby máte
                    možnost si ji odkoupit zpět. Jako alternativu nabízíme i zástavu nebo přímý výkup – řešení vždy
                    přizpůsobíme vaší situaci.
                  </p>
                </div>
                <div className="space-y-2.5 pt-1 lg:space-y-2 lg:pt-0">
                  <h4 className="font-[family-name:var(--font-cardo)] text-base font-semibold leading-snug text-[var(--color-foreground)] md:text-lg">
                    Pro koho je služba vhodná?
                  </h4>
                  <ul className="space-y-2 text-body-muted">
                  {[
                    "Při hrozící exekuci, dražbě či vysokém zadlužení.",
                    "Pro rychlé získání finančních prostředků.",
                    "Když potřebujete získat čas a nepřijít o bydlení.",
                    "Při zájmu o rychlou zástavu nebo přímý výkup.",
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
                    "Rychlost: Peníze obvykle vyplácíme do několika dní.",
                    "Jistota bydlení: Zůstáváte ve svém, stěhování není nutné.",
                    "Diskrétnost: Ke každému případu přistupujeme individuálně a citlivě.",
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
            </div>

            {/* Jak funguje — součást #nemovitosti, kotva #jak-nemovitosti */}
            <div id="jak-nemovitosti" className="mt-8 flex flex-col items-center gap-8 lg:mt-10 lg:gap-10">
              <SectionRule />
              <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-14">
                <div className="order-2 w-full min-w-0 shrink-0 lg:order-1 lg:mx-0 lg:w-[min(100%,280px)] xl:w-[min(100%,320px)]">
                  <div className="w-full overflow-hidden rounded-2xl shadow-lg">
                    <div className="relative w-full max-lg:aspect-video lg:h-[min(26rem,50vh)] lg:min-h-[12rem]">
                      <Image
                        src={img.nemSteps}
                        alt="Konzultace a postup"
                        fill
                        className="object-cover max-lg:object-[50%_46%] lg:object-[52%_44%]"
                        sizes="(max-width: 1023px) 100vw, 300px"
                      />
                    </div>
                  </div>
                </div>
                <div className="order-1 min-w-0 flex-1 space-y-5 lg:order-2 lg:space-y-4 lg:pt-0">
                  <h2 className="text-center font-[family-name:var(--font-cardo)] text-2xl font-semibold leading-tight text-[var(--color-foreground)] md:text-3xl lg:text-left">
                    Jak funguje dočasný výkup nemovitostí?
                  </h2>
                  <ol className="mx-auto mt-6 max-w-2xl list-none space-y-5 lg:mx-0 lg:mt-8 lg:space-y-5">
                    {[
                      {
                        n: "1.",
                        title: "Nezávazná konzultace",
                        body: (
                          <>
                            Vyplňte online <FormularInlineLink leadMode="nemovitosti">formulář</FormularInlineLink> nebo nám{" "}
                            <ZavolejteTelLink>zavolejte</ZavolejteTelLink>.
                          </>
                        ),
                      },
                      {
                        n: "2.",
                        title: "Návrh řešení a podmínek",
                        body: "Společně vybereme, zda je pro vás nejvýhodnější zpětný leasing, zástava nemovitosti nebo přímý výkup.",
                      },
                      {
                        n: "3.",
                        title: "Okamžité vyplacení peněz",
                        body: "Vše vyřídíme rychle, obvykle do několika dní.",
                      },
                    ].map((step) => (
                      <li key={step.title} className="flex gap-3">
                        <span className="font-[family-name:var(--font-cardo)] text-2xl font-bold leading-none text-[var(--color-cta)]">
                          {step.n}
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-[family-name:var(--font-cardo)] text-lg font-semibold leading-snug text-[var(--color-foreground)]">
                            {step.title}
                          </h3>
                          <p className="mt-1.5 text-sm leading-snug text-body-muted md:text-base">{step.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Vozidla: tmavá značková zeleň + světlý text; bílé karty pro hustý text; #informace, #jak-vozidla uvnitř */}
        <section
          id="vozidla"
          className="bg-[rgba(15,56,50,1)] py-10 text-[#f5f2eb] md:py-14 lg:py-20 [--color-foreground:#faf8f5] [--color-muted:#ddd8cf]"
          style={{ colorScheme: "dark" }}
        >
          <Container>
            <div className="grid items-center gap-8 md:gap-10 lg:grid-cols-2 lg:gap-14">
              <div className="space-y-5">
                <h2 className="font-[family-name:var(--font-cardo)] text-2xl font-semibold leading-tight text-white md:text-3xl lg:text-4xl">
                  Dočasný výkup vozidel
                </h2>
                <p className="text-lg font-medium leading-snug text-white/95 md:text-xl">
                  Získejte finance a nadále
                  <br />
                  užívejte svůj vůz.
                </p>
                <p className="max-w-prose text-sm leading-snug text-[#ebe6dc] md:text-base">
                  Financování je poskytováno pro osobní, užitková a nákladní vozidla, obytné vozy, motocykly a veterány.
                </p>
                <Link
                  href="/?mode=vozidlo#formular"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-[var(--color-cta)] px-8 text-sm font-bold uppercase tracking-wide text-[#111111] transition hover:bg-[var(--color-cta-hover)]"
                >
                  Vyplnit žádost
                </Link>
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={img.vozHero}
                  alt="Vozidlo"
                  width={1680}
                  height={1265}
                  className="h-48 w-full object-cover sm:h-auto sm:min-h-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            <div id="informace" className="mt-8 flex flex-col items-center gap-8 lg:mt-10 lg:gap-10">
              <SectionRule className="bg-white/25" />
              <div className="w-full">
            <h2 className="font-[family-name:var(--font-cardo)] text-2xl font-semibold leading-tight text-[var(--color-foreground)] md:text-3xl md:leading-tight lg:text-4xl">
              Co je to dočasný výkup vozidel?
            </h2>
            <p className="mt-5 max-w-4xl text-body-foreground">
              Služba je určena všem majitelům vozidel – financování je poskytováno pro{" "}
              <strong>
                osobní, užitková a nákladní vozidla, obytné vozy, motocykly a veterány.
              </strong>
            </p>

            <ul className="mt-8 grid list-none gap-4 sm:mt-10 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                  className="rounded-2xl border border-black/5 bg-white p-6 shadow-md shadow-black/15"
                >
                  <div className="flex gap-3">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)]/12 text-[var(--color-primary)]">
                      <Check className="h-4 w-4" strokeWidth={3} aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-[family-name:var(--font-cardo)] text-lg font-semibold leading-snug text-slate-900">
                        {f.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-snug text-slate-600 md:text-base">{f.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

              </div>
            </div>

            <div id="jak-vozidla" className="mt-8 flex flex-col items-center gap-8 lg:mt-10 lg:gap-10">
              <SectionRule className="bg-white/25" />
              <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-14">
              <div className="min-w-0 flex-1">
                <h2 className="text-center font-[family-name:var(--font-cardo)] text-2xl font-semibold leading-tight text-[var(--color-foreground)] md:text-3xl lg:text-left">
                  Jak funguje
                  <br />
                  dočasný výkup vozidla?
                </h2>
                <ol className="mx-auto mt-8 max-w-2xl space-y-5 lg:mx-0">
                  {[
                    {
                      n: "1.",
                      title: "Kontaktujte nás",
                      body: (
                        <>
                          Vyplňte online <FormularInlineLink variant="dark" leadMode="vozidlo">formulář</FormularInlineLink>{" "}
                          nebo nám{" "}
                          <ZavolejteTelLink variant="dark" telHref="tel:+420777400256" telDisplay="+420 777 400 256">
                            zavolejte
                          </ZavolejteTelLink>
                          .
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
                    <li key={step.title} className="flex gap-3">
                      <span className="font-[family-name:var(--font-cardo)] text-2xl font-bold leading-none text-[var(--color-cta)]">
                        {step.n}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-[family-name:var(--font-cardo)] text-lg font-semibold leading-snug text-white">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-snug text-[#ebe6dc] md:text-base">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="w-full min-w-0 shrink-0 lg:mx-0 lg:w-[min(100%,280px)] xl:w-[min(100%,320px)]">
                <div className="w-full overflow-hidden rounded-2xl shadow-lg">
                  <div className="relative w-full max-lg:aspect-video lg:h-[min(26rem,50vh)] lg:min-h-[12rem]">
                    <Image
                      src={img.interior}
                      alt="Interiér vozidla"
                      fill
                      className="object-cover max-lg:object-[76%_72%] lg:object-[62%_68%]"
                      sizes="(max-width: 1023px) 100vw, 300px"
                    />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Poptávka */}
        <section id="formular" className="bg-[var(--color-surface-muted)] py-10 md:py-14 lg:py-20">
          <Container>
            <div className="mx-auto max-w-4xl rounded-2xl border border-black/5 bg-white px-6 py-8 md:px-12 md:py-14">
              <Suspense fallback={null}>
                <LeadForm />
              </Suspense>
            </div>
          </Container>
        </section>

        <Footer />
      </main>
      <BottomChrome />
    </>
  )
}
