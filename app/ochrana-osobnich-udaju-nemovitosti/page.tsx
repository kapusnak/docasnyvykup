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
    <p className="mx-auto max-w-[72rem] px-6 py-24 text-center text-body-muted sm:px-10 lg:px-16 xl:px-20 2xl:px-24">
      Přesměrovávám na zásady ochrany osobních údajů…
    </p>
  )
}
