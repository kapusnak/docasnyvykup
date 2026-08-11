"use client"

import Script from "next/script"

const SEZNAM_RTG_ID = Number(process.env.NEXT_PUBLIC_SEZNAM_RTG_ID ?? "1679262")

function fireRetargetingHit() {
  window.sznIVA?.IS?.updateIdentities({
    eid: null /* email či zahashovaný email */,
  })

  window.rc?.retargetingHit({
    rtgId: SEZNAM_RTG_ID,
    consent: null /* souhlas: 0 = není, 1 = je */,
  })
}

export function SeznamSklikRetargeting() {
  if (!Number.isFinite(SEZNAM_RTG_ID) || SEZNAM_RTG_ID <= 0) return null

  return (
    <Script
      src="https://c.seznam.cz/js/rc.js"
      strategy="afterInteractive"
      onLoad={fireRetargetingHit}
    />
  )
}
