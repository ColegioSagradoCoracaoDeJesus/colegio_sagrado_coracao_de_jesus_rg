// Escapes HTML-significant characters so form input can't break out of the
// notification e-mail markup (RNF07 — formulários protegidos).
export function sanitizeHTML(text: string | undefined | null, maxLength = 500): string {
  if (!text) return ''
  return text
    .replace(/[<>"']/g, (match) => {
      const htmlEscapeMap: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
      }
      return htmlEscapeMap[match]
    })
    .substring(0, maxLength)
}
