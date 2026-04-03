import type { Metadata } from "next"
import Link from "next/link"

import { Container } from "@/components/container"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export const metadata: Metadata = {
  title: "Ochrana osobních údajů – nemovitosti",
  description:
    "Prohlášení o ochraně osobních údajů pro službu dočasného výkupu nemovitostí – Dočasný výkup s.r.o.",
}

export default function OchranaOsobnichUdajuNemovitostiPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[var(--color-background)] pt-[4.5rem] md:pt-20">
        <section className="bg-[var(--color-primary)] pb-12 pt-10 md:pb-16 md:pt-14">
          <Container>
            <h1 className="text-center font-[family-name:var(--font-cardo)] text-3xl font-bold leading-tight text-white md:text-4xl">
              Prohlášení o ochraně osobních údajů – nemovitosti
            </h1>
          </Container>
        </section>

        <section className="py-12 lg:py-16">
          <Container>
            <article className="mx-auto max-w-3xl text-[var(--color-foreground)]">
              <h2 className="mt-0 text-xl font-bold leading-tight md:text-2xl">1. Úvod</h2>
              <p className="mt-3 text-body-muted">
                Tento dokument obsahuje informace o tom, jak subjekt{" "}
                <strong className="text-[var(--color-foreground)]">Dočasný výkup s.r.o.</strong>, IČ: 23626836, se sídlem Podvesná
                VII/6192, 760 01 Zlín (dále jen „Provozovatel“ nebo „my“), jako správce osobních údajů, zpracovává vaše osobní údaje v
                souladu s nařízením (EU) 2016/679 (<em>GDPR</em>) a dalšími platnými právními předpisy.
              </p>
              <p className="mt-3 text-body-muted">
                Cílem těchto zásad je poskytnout vám jasné informace o tom, jaké osobní údaje shromažďujeme, za jakým účelem, jak s nimi
                nakládáme a jaká máte práva.
              </p>

              <h2 className="mt-8 text-xl font-bold leading-tight md:text-2xl">2. Jaké osobní údaje zpracováváme</h2>
              <p className="mt-3 text-body-muted">
                Pro účely zpracování poptávky prostřednictvím našeho webového formuláře zpracováváme následující údaje:
              </p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6 text-body-muted">
                <li>Jméno a příjmení</li>
                <li>E-mailová adresa</li>
                <li>Telefonní číslo</li>
                <li>Typ nemovitosti</li>
              </ul>

              <h2 className="mt-8 text-xl font-bold leading-tight md:text-2xl">3. Jak vaše údaje získáváme</h2>
              <p className="mt-3 text-body-muted">Vaše osobní údaje získáváme:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6 text-body-muted">
                <li>
                  prostřednictvím webového formuláře na adrese{" "}
                  <a
                    href="https://docasnyvykup.cz"
                    className="text-[var(--color-primary)] underline-offset-2 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    www.docasnyvykup.cz
                  </a>
                </li>
              </ul>
              <p className="mt-3 text-body-muted">
                Poskytnutí údajů je zcela dobrovolné, ale nezbytné pro poskytnutí našich služeb.
              </p>

              <h2 className="mt-8 text-xl font-bold leading-tight md:text-2xl">4. Účely a právní základ zpracování</h2>
              <p className="mt-3 text-body-muted">
                Vaše údaje slouží k posouzení a vyřízení poptávky na službu dočasného výkupu nemovitosti a ke komunikaci s vámi.
              </p>
              <p className="mt-3 text-body-muted">Vaše osobní údaje zpracováváme na základě:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6 text-body-muted">
                <li>
                  <strong className="text-[var(--color-foreground)]">čl. 6 odst. 1 písm. b) GDPR</strong> – zpracování je nezbytné pro
                  provedení opatření před uzavřením smlouvy na vaši žádost (např. vytvoření nabídky),
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">čl. 6 odst. 1 písm. f) GDPR</strong> – oprávněný zájem Provozovatele na
                  komunikaci se zákazníkem a zajištění provozu služeb.
                </li>
              </ul>

              <h2 className="mt-8 text-xl font-bold leading-tight md:text-2xl">5. Předání osobních údajů třetím stranám</h2>
              <p className="mt-3 text-body-muted">
                Údaje nejsou dále poskytovány třetím osobám, s výjimkou případů, kdy to ukládá zákon.
              </p>

              <h2 className="mt-8 text-xl font-bold leading-tight md:text-2xl">6. Doba uchování údajů</h2>
              <p className="mt-3 text-body-muted">
                Osobní údaje jsou uchovávány po dobu nezbytně nutnou ke zprostředkování nabídky a komunikaci s klientem, nejdéle však po
                dobu 6 měsíců, pokud nebude zahájena smluvní spolupráce.
              </p>

              <h2 className="mt-8 text-xl font-bold leading-tight md:text-2xl">7. Cookies a online sledování</h2>
              <p className="mt-3 text-body-muted">Na našem webu používáme následující typy cookies:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6 text-body-muted">
                <li>
                  <strong className="text-[var(--color-foreground)]">Analytické cookies</strong> – Google Analytics (sledování
                  návštěvnosti),
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">Reklamní cookies</strong> – Seznam Sklik (retargeting) a Google Ads
                  (cílení reklamy a remarketing),
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">Funkční cookies</strong> – zajišťující správné fungování formuláře.
                </li>
              </ul>
              <p className="mt-3 text-body-muted">
                Podrobnosti a možnosti nastavení najdete v{" "}
                <Link href="/zasady-cookies" className="text-[var(--color-primary)] underline-offset-2 hover:underline">
                  Zásadách cookies
                </Link>
                . V nastavení vašeho prohlížeče můžete ukládání cookies omezit nebo zcela zakázat.
              </p>

              <h2 className="mt-8 text-xl font-bold leading-tight md:text-2xl">8. Zabezpečení údajů</h2>
              <p className="mt-3 text-body-muted">
                Přijali jsme odpovídající technická a organizační opatření, aby vaše údaje byly v bezpečí a nebyly zneužity, ztraceny nebo
                neoprávněně zpřístupněny.
              </p>

              <h2 className="mt-8 text-xl font-bold leading-tight md:text-2xl">9. Vaše práva</h2>
              <p className="mt-3 text-body-muted">V souvislosti se zpracováním osobních údajů máte tato práva:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-6 text-body-muted">
                <li>
                  <strong className="text-[var(--color-foreground)]">právo na přístup</strong> k osobním údajům,
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">právo na opravu</strong> nepřesných údajů,
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">právo na výmaz</strong> (tzv. právo být zapomenut),
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">právo na omezení zpracování</strong>,
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">právo vznést námitku</strong> proti zpracování,
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">právo na přenositelnost</strong> údajů,
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">právo podat stížnost</strong> u dozorového orgánu – Úřadu pro ochranu
                  osobních údajů (
                  <a href="https://www.uoou.cz" className="text-[var(--color-primary)] underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
                    www.uoou.cz
                  </a>
                  ).
                </li>
              </ul>

              <h2 className="mt-8 text-xl font-bold leading-tight md:text-2xl">10. Kontakt na Provozovatele</h2>
              <p className="mt-3 text-body-muted">
                Pro uplatnění vašich práv nebo dotazy ohledně zpracování údajů nás můžete kontaktovat:
              </p>
              <p className="mt-3 text-body-muted">
                📞{" "}
                <a href="tel:+420776075150" className="text-[var(--color-primary)] underline-offset-2 hover:underline">
                  +420 776 075 150
                </a>
                <br />
                📧{" "}
                <a href="mailto:info@docasnyvykup.cz" className="text-[var(--color-primary)] underline-offset-2 hover:underline">
                  info@docasnyvykup.cz
                </a>
              </p>
            </article>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
