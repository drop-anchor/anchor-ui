import { NextRequest } from 'next/server'

export class Redirecter {
  // TODO: deprecate
  static allowedRedirectURL = (raw: string): boolean => {
    try {
      const url = new URL(raw)

      if (url.protocol !== 'https:') return false

      const host = url.hostname.toLowerCase()

      // NOTE: Chrome MV3 launchWebAuthFlow redirect host pattern: <extension-id>.chromiumapp.org
      if (host.endsWith('.chromiumapp.org')) return true

      // TODO: Firefox (identity API) commonly uses allizom domain patterns in dev,
      // but production can vary. Update this for your actual browser targets.
      if (host.endsWith('.extensions.allizom.org')) return true

      return false
    } catch {
      return false
    }
  }

  static buildSignInExtensionRedirectURL = (req: NextRequest): string => {
    const url = new URL(req.url)
    const returnTo = `/extension/connect${url.search}`

    const signInURL = new URL('/sign-in', url.origin)

    signInURL.searchParams.set('redirect_url', returnTo)

    return signInURL.toString()
  }

  static sanitizeRedirectURL = (raw: string | string[] | undefined): string => {
    const input = Array.isArray(raw) ? raw[0] : raw;
    const fallback = '/app/settings/account'

    if (!input) return fallback
    if (!input.startsWith('/')) return fallback
    if (input.startsWith('//')) return fallback

    return input
  }
}
