export function formatGroupedDigits(digits: string): string {
  const clean = digits.replace(/\D/g, '')
  if (!clean) return ''

  const parts: string[] = []
  for (let i = clean.length; i > 0; i -= 3) {
    parts.unshift(clean.slice(Math.max(0, i - 3), i))
  }
  return parts.join(' ')
}

export function parseGroupedDigits(formatted: string): number {
  const digits = formatted.replace(/\D/g, '')
  return digits === '' ? 0 : Number(digits)
}
