'use client'

import { AlertCircle, LoaderCircle } from 'lucide-react'
import { useEffect, useMemo } from 'react'

import { StepCard } from '@/components/shared/StepCard'

type CallbackStatus =
  | 'forwarding'
  | 'missing_params'
  | 'invalid_origin'

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
  const status = useMemo<CallbackStatus>(() => {
    if (!code || !state) {
      return 'missing_params'
    }

    if (!isValidExtensionOrigin(extOrigin)) {
      return 'invalid_origin'
    }

    return 'forwarding'
  }, [code, state, extOrigin])

  useEffect(() => {
    if (status !== 'forwarding') {
      return
    }

    if (!code || !state || !extOrigin) {
      return
    }

    if (!window.opener || window.opener.closed) {
      return
    }

    let closeTimer: number | undefined

    try {
      window.opener.postMessage(
        { type: AUTH_CALLBACK_MESSAGE_TYPE, code, state },
        extOrigin
      )
      closeTimer = window.setTimeout(() => window.close(), 1200)
    } catch {
      // Keep fallback instructions visible if handoff fails.
    }

    return () => {
      if (closeTimer) {
        window.clearTimeout(closeTimer)
      }
    }
  }, [status, code, state, extOrigin])

  const title = useMemo(() => {
    switch (status) {
      case 'forwarding':
        return 'Finishing sign-in'
      default:
        return 'Could not complete connection'
    }
  }, [status])

  const body = useMemo(() => {
    switch (status) {
      case 'forwarding':
        return 'Returning your login result to Anchor now. This tab closes automatically.'
      case 'missing_params':
        return 'Missing auth parameters. Return to Anchor and click Log in again.'
      case 'invalid_origin':
        return 'Invalid extension origin. Return to Anchor and retry Log in.'
      default:
        return 'Return to Anchor and retry Log in.'
    }
  }, [status])

  const icon = status === 'forwarding'
    ? <LoaderCircle className="animate-spin" size={16} />
    : <AlertCircle size={16} />

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,hsl(48_45%_95%),hsl(0_0%_100%))] p-6">
      <div className="w-full max-w-md">
        <StepCard number="Callback" title={title} body={body} icon={icon} />
        <p className="mt-3 text-center text-xs text-muted-foreground">
          If this page stays open, return to Anchor and retry Log in.
        </p>
      </div>
    </main>
  )
}
