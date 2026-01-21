import { auth } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'

import { Redirecter } from '@/server/service/Redirecter'

export async function GET(request: NextRequest) {
  const url = new URL(request.url)

  const deviceId = url.searchParams.get('device_id') ?? '';
  const state = url.searchParams.get('state')

  const { userId, getToken } = await auth()

  if (!userId) {
    return NextResponse.redirect(Redirecter.buildSignInExtensionRedirectURL(request), 302)
  }

  const jwt = await getToken();

  if (!jwt) {
    return NextResponse.json({ error: 'Failed to obtain Clerk session token' }, { status: 500 })
  }

  const headers = new Headers()

  headers.set('Content-Type', 'application/json')
  headers.set('Authorization', `Bearer ${jwt}`)

  const response = await fetch(`${process.env.ANCHOR_API_BASE_URL}/auth/code`, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      deviceId: deviceId ?? null,
    }),
  })

  if (!response.ok) {
    const message = await response.text().catch(() => '')
    return NextResponse.json({ error: `auth code failed: ${message || response.status}` }, { status: 500 })
  }

  const data: { code: string; expiresIn?: number } = await response.json()

  if (!data.code) {
    return NextResponse.json({ error: 'anchor-api did not return code' }, { status: 500 })
  }

  const redirect = new URL('/extension/callback', url.origin)

  redirect.searchParams.set('code', data.code)

  if (data.expiresIn) {
    redirect.searchParams.set('expiresIn', data.expiresIn.toString())
  }

  // Preserve state parameter for CSRF validation
  if (state) redirect.searchParams.set('state', state)

  return NextResponse.redirect(redirect.toString(), 302)
}
