"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { Loader2 } from "lucide-react"

import { sendInquiry } from "@/lib/emailjs"
import { formatPhoneDisplay, parsePhoneDigits, toFullPhone } from "@/lib/phone-420"

const schema = z.object({
  name: z.string().min(2, "Zadejte jméno."),
  email: z.string().email("Zadejte platný e-mail."),
  phoneDigits: z.string().refine((d) => toFullPhone(d) !== "", "Zadejte platné telefonní číslo (9 číslic)."),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export function LeadForm() {
  const pathname = usePathname()
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phoneDigits: "", message: "" },
  })

  async function onSubmit(values: FormValues) {
    const phone = toFullPhone(values.phoneDigits)
    if (!phone) return
    setStatus("sending")
    try {
      await sendInquiry({
        source: "form",
        name: values.name,
        email: values.email,
        phone,
        message: values.message,
        pagePath: pathname ?? "",
      })
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-xl space-y-3">
      <div>
        <label htmlFor="lead-name" className="mb-1.5 block text-body font-medium text-[var(--color-foreground)]">
          Jméno a příjmení
        </label>
        <input
          id="lead-name"
          autoComplete="name"
          className="h-12 w-full rounded-xl border border-[#cfcabe] bg-white px-4 text-base text-[var(--color-foreground)] shadow-sm outline-none transition-[box-shadow] focus:ring-2 focus:ring-[var(--color-primary)]"
          {...form.register("name")}
        />
        {form.formState.errors.name && (
          <p className="mt-1 text-sm text-red-600">{form.formState.errors.name.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="lead-email" className="mb-1.5 block text-body font-medium text-[var(--color-foreground)]">
          E-mail
        </label>
        <input
          id="lead-email"
          type="email"
          autoComplete="email"
          className="h-12 w-full rounded-xl border border-[#cfcabe] bg-white px-4 text-base text-[var(--color-foreground)] shadow-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          {...form.register("email")}
        />
        {form.formState.errors.email && (
          <p className="mt-1 text-sm text-red-600">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="lead-phone" className="mb-1.5 block text-body font-medium text-[var(--color-foreground)]">
          Telefon
        </label>
        <Controller
          name="phoneDigits"
          control={form.control}
          render={({ field }) => (
            <input
              id="lead-phone"
              type="tel"
              inputMode="numeric"
              autoComplete="tel"
              placeholder="+420 777 400 256"
              className="h-12 w-full rounded-xl border border-[#cfcabe] bg-white px-4 text-base text-[var(--color-foreground)] shadow-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              value={formatPhoneDisplay(field.value)}
              onChange={(e) => field.onChange(parsePhoneDigits(e.target.value))}
              onBlur={field.onBlur}
            />
          )}
        />
        {form.formState.errors.phoneDigits && (
          <p className="mt-1 text-sm text-red-600">{form.formState.errors.phoneDigits.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="lead-msg" className="mb-1.5 block text-body font-medium text-[var(--color-foreground)]">
          Zpráva (volitelné)
        </label>
        <textarea
          id="lead-msg"
          rows={4}
          className="w-full resize-y rounded-xl border border-[#cfcabe] bg-white px-4 py-3 text-base text-[var(--color-foreground)] shadow-sm outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
          {...form.register("message")}
        />
      </div>

      {status === "error" && (
        <p className="text-body text-red-600" role="alert">
          Odeslání se nepovedlo. Zkuste to prosím znovu nebo nás kontaktujte telefonicky.
        </p>
      )}
      {status === "success" && (
        <p className="text-body text-[var(--color-primary)]" role="status">
          Děkujeme! Brzy vás budeme kontaktovat.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="flex h-12 min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-cta)] text-base font-semibold text-[var(--color-foreground)] transition-colors hover:bg-[var(--color-cta-hover)] disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
            Odesílám…
          </>
        ) : (
          "Odeslat poptávku"
        )}
      </button>
      <p className="text-center text-body-muted">
        Odesláním souhlasíte se zpracováním osobních údajů dle{" "}
        <a href="/ochrana-osobnich-udaju" className="text-[var(--color-primary)] underline-offset-2 hover:underline">
          zásad ochrany osobních údajů
        </a>
        .
      </p>
    </form>
  )
}
