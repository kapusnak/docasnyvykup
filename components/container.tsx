import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div className={cn("mx-auto w-full max-w-[80rem] px-5 sm:px-8 lg:px-12 xl:px-14", className)}>{children}</div>
  )
}
