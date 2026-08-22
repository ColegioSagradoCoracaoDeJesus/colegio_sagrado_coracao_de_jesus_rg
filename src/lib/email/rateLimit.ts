// Simple in-memory rate limiter for public form endpoints (RF18).
// NOTE: this store lives in the Node process memory. On serverless hosting
// (Vercel) each cold instance starts with an empty store, so this limits
// abuse *within* a warm instance but is not a hard global cap. Good enough
// as a first line of defense alongside the honeypot field; a durable limiter
// (e.g. Upstash Redis) would be needed for a strict guarantee.
const rateLimitStore = new Map<string, { count: number; resetTime: number }>()

const WINDOW_MS = 60_000 // 1 minute
const MAX_REQUESTS = 5

export function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitStore.get(ip)

  if (!limit || now > limit.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + WINDOW_MS })
    return true
  }

  if (limit.count >= MAX_REQUESTS) {
    return false
  }

  limit.count++
  return true
}

export function getClientIp(request: Request): string {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || request.headers.get('x-real-ip')
    || 'unknown'
}
