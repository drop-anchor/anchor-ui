'use client'

import { useEffect, useMemo, useState } from 'react'

type CallbackStatus =
  | 'posting'
  | 'success'
  | 'missing_params'
  | 'invalid_origin'
  | 'opener_missing'
  | 'post_failed'

type ExtensionCallbackClientProps = {
  code?: string
  state?: string
  extOrigin?: string
}

const AUTH_CALLBACK_MESSAGE_TYPE = 'ANCHOR_AUTH_CALLBACK'

const isValidExtensionOrigin = (value: string | undefined): value is string =>
  typeof value === 'string' &&
  value.startsWith('chrome-extension://') &&
  value.length <= 200

export function ExtensionCallbackClient({
  code,
  state,
  extOrigin,
}: ExtensionCallbackClientProps) {
  const [status, setStatus] = useState<CallbackStatus>('posting')

  useEffect(() => {
    if (!code || !state) {
      setStatus('missing_params')
      return
    }

    if (!isValidExtensionOrigin(extOrigin)) {
      setStatus('invalid_origin')
      return
    }

    if (!window.opener || window.opener.closed) {
      setStatus('opener_missing')
      return
    }

    try {
      window.opener.postMessage(
        { type: AUTH_CALLBACK_MESSAGE_TYPE, code, state },
        extOrigin
      )
      setStatus('success')
      window.setTimeout(() => window.close(), 1200)
    } catch {
      setStatus('post_failed')
    }
  }, [code, state, extOrigin])

  const title = useMemo(() => {
    switch (status) {
      case 'success':
        return 'You’re connected'
      case 'posting':
        return 'Finishing sign-in...'
      default:
        return 'Could not complete connection'
    }
  }, [status])

  const body = useMemo(() => {
    switch (status) {
      case 'posting':
        return 'Sending login result back to Anchor.'
      case 'success':
        return 'Return to Anchor in your browser. You can close this tab.'
      case 'missing_params':
        return 'Missing auth parameters. Return to Anchor and click Log in again.'
      case 'invalid_origin':
        return 'Invalid extension origin. Return to Anchor and retry Log in.'
      case 'opener_missing':
        return 'Anchor window was not found. Return to Anchor and retry Log in.'
      case 'post_failed':
        return 'Connection handoff failed. Return to Anchor and retry Log in.'
      default:
        return 'Return to Anchor and retry Log in.'
    }
  }, [status])

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-sm w-full rounded-2xl border p-6 shadow-sm">
        <div className="text-xl font-semibold">{title}</div>
        <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      </div>
    </main>
  )
}
