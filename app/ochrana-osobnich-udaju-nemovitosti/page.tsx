"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

/** Slug z WordPress (HFCM odkazy); statický export — klientský přesměrování na kanonickou stránku. */
export default function OchranaNemovitostiRedirectPage() {
  const router = useRouter()
  useEffect(() => {
    router.replace("/ochrana-osobnich-udaju")
  }, [router])
  return (
    <p className="mx-auto max-w-[80rem] px-4 py-24 text-center text-[var(--color-muted)]">
      Přesměrovávám na zásady ochrany osobních údajů…
    </p>
  )
}
