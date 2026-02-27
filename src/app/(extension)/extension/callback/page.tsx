import type { Metadata } from 'next'

import { ExtensionCallbackClient } from './ExtensionCallbackClient'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

type ExtensionCallbackPageProps = {
  searchParams: Promise<{
    code?: string | string[]
    state?: string | string[]
    ext_origin?: string | string[]
  }>
}

const first = (value: string | string[] | undefined): string | undefined =>
  Array.isArray(value) ? value[0] : value

export default async function ExtensionCallbackPage({ searchParams }: ExtensionCallbackPageProps) {
  const resolvedSearchParams = await searchParams

  return (
    <ExtensionCallbackClient
      code={first(resolvedSearchParams.code)}
      state={first(resolvedSearchParams.state)}
      extOrigin={first(resolvedSearchParams.ext_origin)}
    />
  )
}
