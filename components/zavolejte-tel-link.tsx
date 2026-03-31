import type { ReactNode } from "react"
import { Phone } from "lucide-react"

import { cn } from "@/lib/utils"

const TEL_HREF = "tel:+420776075150"
const TEL_DISPLAY = "+420 776 075 150"

type Props = {
  children: ReactNode
  /** Dark hero-style sections: light tooltip + pale underline */
  variant?: "cream" | "dark"
  className?: string
}

export function ZavolejteTelLink({ children, variant = "cream", className }: Props) {
  const linkStyles =
    variant === "dark"
      ? "decoration-white/55 underline decoration-dashed underline-offset-[3px] transition-colors hover:decoration-white hover:text-white"
      : "decoration-[var(--color-primary)]/50 underline decoration-dashed underline-offset-[3px] transition-colors hover:decoration-[var(--color-primary)] hover:text-[var(--color-primary)]"

  const tipStyles =
    variant === "dark"
      ? "border border-white/15 bg-[#faf8f5] text-slate-900 shadow-lg"
      : "bg-slate-900 text-white shadow-lg"

  return (
    <span className="relative inline group/zav">
      <a
        href={TEL_HREF}
        className={cn("font-medium", linkStyles, className)}
        aria-label={`Zavolat ${TEL_DISPLAY}`}
      >
        {children}
      </a>
      <span
        className={cn(
          "pointer-events-none absolute left-1/2 top-full z-20 mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-lg px-2.5 py-1.5 text-sm font-medium opacity-0 shadow-md transition-opacity duration-150 md:flex md:items-center md:gap-1.5 md:group-hover/zav:opacity-100 md:group-focus-within/zav:opacity-100",
          tipStyles,
        )}
        role="tooltip"
      >
        <Phone className="h-3.5 w-3.5 shrink-0 opacity-90" aria-hidden />
        {TEL_DISPLAY}
      </span>
    </span>
  )
}
