import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

import { AnchorAuthCodeResponse } from '@/types/auth'

const isValidExtensionOrigin = (value: string | null): value is string =>
  typeof value === 'string' &&
  value.startsWith('chrome-extension://') &&
  value.length <= 200

export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const requestId = crypto.randomUUID().slice(0, 8)

  const deviceId = url.searchParams.get('device_id') ?? ''
  const state = url.searchParams.get('state') ?? ''
  const extOriginParam = url.searchParams.get('ext_origin')
  const extOrigin = isValidExtensionOrigin(extOriginParam) ? extOriginParam : null

  console.info('[extension/connect] incoming', {
    requestId,
    hasDeviceId: Boolean(deviceId),
    hasState: Boolean(state),
    hasExtOrigin: Boolean(extOrigin),
  })

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
  const tokenTemplate = process.env.CLERK_AUTH_TOKEN_TEMPLATE?.trim()
  let jwt: string | null = null

  if (tokenTemplate) {
    try {
      jwt = await getToken({ template: tokenTemplate })
    } catch (error) {
      console.warn('[extension/connect] template token request failed, falling back to default token', {
        requestId,
        tokenTemplate,
        error: error instanceof Error ? error.message : String(error),
      })
    }
  }

  if (!jwt) {
    console.warn('[extension/connect] template token unavailable, falling back to default session token', {
      requestId,
      tokenTemplate: tokenTemplate ?? null,
    })
    jwt = await getToken()
  }

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
    console.error('[extension/connect] /auth/code failed', {
      requestId,
      status: response.status,
      responseText: message,
    })
    return NextResponse.json({ error: `auth code failed: ${message || response.status}` }, { status: 500 })
  }

  const data: AnchorAuthCodeResponse = await response.json()

  if (!data.code) {
    return NextResponse.json({ error: 'anchor-api did not return code' }, { status: 500 })
  }

  const redirect = new URL('/extension/callback', url.origin)

  redirect.searchParams.set('code', data.code)
  redirect.searchParams.set('state', state)
  if (extOrigin) {
    redirect.searchParams.set('ext_origin', extOrigin)
  }

  return NextResponse.redirect(redirect.toString(), 302)
}
