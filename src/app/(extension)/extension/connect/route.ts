import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'
import { AnchorAuthCodeResponse } from '@/types/auth'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)

  const deviceId = url.searchParams.get('device_id') ?? '';
  const state = url.searchParams.get('state') ?? '';

  const { userId, getToken } = await auth()

  /**
   * NOTE: if user is not authenticated, redirect to sign-in page with redirect_url
   * ensure that they are authenticated via clerk before continuing
   */
  if (!userId) {
    const redirectURL = new URL(request.url)

    const clerkRedirectURL = `/extension/connect${redirectURL.search}`
    const signInURL = new URL('/sign-in', redirectURL.origin)

    signInURL.searchParams.set('redirect_url', clerkRedirectURL)

    return NextResponse.redirect(signInURL.toString(), 302)
  }

  /**
   * NOTE: user is now authenticated, proceed with anchor authentication
   */
  const jwt = await getToken();

  if (!jwt) {
    return NextResponse.json({ error: 'Failed to obtain Clerk session token' }, { status: 500 })
  }

  /**
   * NOTE: mint a one time anchor auth code for the user to use to authenticate with the extension
   */
  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('Authorization', `Bearer ${jwt}`)

  const response = await fetch(`${process.env.ANCHOR_API_BASE_URL}/auth/code`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ deviceId: deviceId ?? null }),
  })

  if (!response.ok) {
    const message = await response.text().catch(() => '')
    return NextResponse.json({ error: `auth code failed: ${message || response.status}` }, { status: 500 })
  }

  const data: AnchorAuthCodeResponse = await response.json()

  if (!data.code) {
    return NextResponse.json({ error: 'anchor-api did not return code' }, { status: 500 })
  }

  const redirect = new URL('/extension/callback', url.origin)

  redirect.searchParams.set('code', data.code)
  redirect.searchParams.set('state', state)

  return NextResponse.redirect(redirect.toString(), 302)
}
