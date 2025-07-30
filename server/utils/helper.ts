import crypto from 'crypto'
import type { Request } from 'express'

const CSRF_TOKEN_SECRET = process.env.CSRF_TOKEN_SECRET || 'default_secret'

/**
 * Generate a CSRF token for a session or user
 */
export function generateCsrfToken(sessionId: string): string {
  const timestamp = Date.now().toString()
  const hash = crypto
    .createHmac('sha256', CSRF_TOKEN_SECRET)
    .update(sessionId + timestamp)
    .digest('hex')

  return `${timestamp}.${hash}`
}

/**
 * Validate CSRF token sent from client
 */
export function validateCsrfToken(req: Request): boolean {
  const csrfToken = req.headers['x-csrf-token'] as string | undefined
  const sessionId = req.session?.id // sesuaikan dengan session yang kamu pakai

  if (!csrfToken || !sessionId) return false

  const [timestamp, hash] = csrfToken.split('.')
  const now = Date.now()

  // Optional: check token expiry (5 minutes = 300000 ms)
  if (now - parseInt(timestamp) > 300000) return false

  const expectedHash = crypto
    .createHmac('sha256', CSRF_TOKEN_SECRET)
    .update(sessionId + timestamp)
    .digest('hex')

  return hash === expectedHash
}
