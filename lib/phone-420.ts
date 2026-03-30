const PREFIX = "+420 "
const MAX_DIGITS = 9

export function formatPhoneDisplay(digits: string): string {
  const d = digits.replace(/\D/g, "").slice(0, MAX_DIGITS)
  const groups = d.match(/.{1,3}/g) ?? []
  return PREFIX + groups.join(" ")
}

export function parsePhoneDigits(raw: string): string {
  const afterPrefix = raw.replace(/^\s*\+420\s*/, "")
  return afterPrefix.replace(/\D/g, "").slice(0, MAX_DIGITS)
}

export function toFullPhone(digits: string): string {
  const d = digits.replace(/\D/g, "").slice(0, MAX_DIGITS)
  return d.length === MAX_DIGITS ? `+420${d}` : ""
}
