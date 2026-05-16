export function formatGroupedDigits(digits: string): string {
  const clean = digits.replace(/\D/g, '')
  if (!clean) return ''

  const parts: string[] = []
  for (let i = clean.length; i > 0; i -= 3) {
    parts.unshift(clean.slice(Math.max(0, i - 3), i))
  }
  return parts.join(' ')
}

export function parseGroupedDigits(formatted: string, maxDigits = 15): number {
  const digits = formatted.replace(/\D/g, '')
  if (digits === '') return 0
  const limited = digits.slice(0, maxDigits)
  return Number(limited)
}
