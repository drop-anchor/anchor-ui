export class Redirecter {
  static sanitizeRedirectURL = (raw: string | string[] | undefined): string => {
    const input = Array.isArray(raw) ? raw[0] : raw;
    const fallback = '/app/settings/account'

    if (!input) return fallback
    if (!input.startsWith('/')) return fallback
    if (input.startsWith('//')) return fallback

    return input
  }
}
