import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů",
  description: "Prohlášení o ochraně osobních údajů – Dočasný výkup s.r.o.",
}

export default function OchranaOsobnichUdajuPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-background)] pt-[4.5rem] md:pt-20">
        <section className="bg-[var(--color-primary)] pb-12 pt-10 md:pb-16 md:pt-14">
          <Container>
            <h1 className="text-center font-[family-name:var(--font-cardo)] text-3xl font-bold text-white md:text-4xl">
              Prohlášení o ochraně osobních údajů
            </h1>
            <p className="mt-2 text-center text-sm text-white/85">Datum účinnosti: březen 2025</p>
          </Container>
        </section>

        <section className="py-12 lg:py-16">
          <Container>
            <article className="mx-auto max-w-3xl text-[var(--color-foreground)]">
              <h2 className="mt-0 text-xl font-bold md:text-2xl">1. Úvod</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                Tento dokument obsahuje informace o tom, jak subjekt{" "}
                <strong className="text-[var(--color-foreground)]">Dočasný výkup s.r.o.</strong>, IČ:
                23626836, se sídlem Podvesná VII/6192, 760 01 Zlín (dále jen „Provozovatel“ nebo „my“), jako správce osobních údajů,
                zpracovává vaše osobní údaje v souladu s nařízením (EU) 2016/679 (GDPR) a dalšími platnými právními předpisy.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                Cílem těchto zásad je poskytnout vám jasné informace o tom, jaké osobní údaje shromažďujeme, za jakým účelem, jak s nimi
                nakládáme a jaká máte práva.
              </p>

              <h2 className="mt-12 text-xl font-bold md:text-2xl">2. Jaké osobní údaje zpracováváme</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                Pro účely zpracování poptávky prostřednictvím našeho webového formuláře zpracováváme následující údaje:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--color-muted)]">
                <li>Jméno a příjmení</li>
                <li>E-mailová adresa</li>
                <li>Telefonní číslo</li>
                <li>Typ služby / předmět zájmu – nemovitost nebo vozidlo (dle vyplnění formuláře)</li>
                <li>Doplňující zpráva (volitelné)</li>
              </ul>

              <h2 className="mt-12 text-xl font-bold md:text-2xl">3. Jak vaše údaje získáváme</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                Vaše osobní údaje získáváme výhradně prostřednictvím webového formuláře na našich stránkách nebo telefonicky při zpětném
                kontaktu.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                Poskytnutí údajů je dobrovolné, ale pro vyřízení poptávky je nezbytné.
              </p>

              <h2 className="mt-12 text-xl font-bold md:text-2xl">4. Účely a právní základ zpracování</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                Vaše údaje slouží k posouzení a vyřízení poptávky na službu dočasného výkupu nemovitosti nebo vozidla a komunikaci s vámi.
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6 text-[var(--color-muted)]">
                <li>
                  čl. 6 odst. 1 písm. b) GDPR – zpracování nezbytné pro opatření před uzavřením smlouvy na vaši žádost (poptávka,
                  nabídka).
                </li>
                <li>čl. 6 odst. 1 písm. f) GDPR – oprávněný zájem na komunikaci a vyřízení žádosti.</li>
              </ul>

              <h2 className="mt-12 text-xl font-bold md:text-2xl">5. Předání osobních údajů třetím stranám</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                Zadané údaje mohou být předány smluvnímu partnerovi Provozovatele za účelem vyřízení nabídky dočasného výkupu vozidla,
                zejména:
              </p>
              <p className="mt-2 font-semibold text-[var(--color-foreground)]">Car Service Partner s.r.o.</p>
              <ul className="mt-2 list-none space-y-1 text-[var(--color-muted)]">
                <li>Sídlo: Na Poříčí 1071/17, Nové Město, 110 00 Praha 1</li>
                <li>IČ: 06143911</li>
                <li>E-mail: info@cash4car.cz</li>
              </ul>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                Údaje nejsou jinak prodávány ani předávány třetím stranám, s výjimkou případů uložených zákonem.
              </p>

              <h2 className="mt-12 text-xl font-bold md:text-2xl">6. Doba uchování údajů</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                Osobní údaje uchováváme po dobu nezbytnou ke zprostředkování nabídky a komunikaci s klientem, nejdéle však 6 měsíců, pokud
                nebude zahájena smluvní spolupráce, není-li zákonem stanoveno jinak.
              </p>

              <h2 className="mt-12 text-xl font-bold md:text-2xl">7. Cookies a online sledování</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                Na webu mohou být použity analytické nebo marketingové nástroje (např. Google Analytics) po vašem souhlasu. Podrobnosti
                najdete v{" "}
                <Link href="/zasady-cookies" className="text-[var(--color-primary)] underline-offset-2 hover:underline">
                  Zásadách cookies
                </Link>
                .
              </p>

              <h2 className="mt-12 text-xl font-bold md:text-2xl">8. Zabezpečení údajů</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                Přijímáme přiměřená technická a organizační opatření proti zneužití, ztrátě nebo neoprávněnému přístupu.
              </p>

              <h2 className="mt-12 text-xl font-bold md:text-2xl">9. Vaše práva</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                Máte právo na přístup, opravu, výmaz, omezení zpracování, námitku, přenositelnost údajů a podání stížnosti u{" "}
                <a
                  href="https://www.uoou.cz"
                  className="text-[var(--color-primary)] underline-offset-2 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Úřadu pro ochranu osobních údajů
                </a>
                .
              </p>

              <h2 className="mt-12 text-xl font-bold md:text-2xl">10. Kontakt</h2>
              <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                📞{" "}
                <a href="tel:+420777400256" className="text-[var(--color-primary)] underline-offset-2 hover:underline">
                  +420 777 400 256
                </a>
                <br />
                📧{" "}
                <a href="mailto:info@docasnyvykup.cz" className="text-[var(--color-primary)] underline-offset-2 hover:underline">
                  info@docasnyvykup.cz
                </a>
                <br />
                📍 Podvesná VII/6192, 760 01 Zlín
              </p>
            </article>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
