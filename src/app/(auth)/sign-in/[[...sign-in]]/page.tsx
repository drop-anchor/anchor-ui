import { SignIn } from '@clerk/nextjs'

import { Redirecter } from '@/server/service/Redirecter'

export default async function SignInPage({ searchParams }: {
  searchParams: Promise<{ redirect_url?: string | string[] }>
}) {
  const resolvedSearchParams = await searchParams

  // TODO: confirm that user can go back to extension or settings page
  // 1. extension/connect
  // 2. app/settings
  const redirectURL = Redirecter.sanitizeRedirectURL(resolvedSearchParams?.redirect_url)

  return (
    <main className="flex min-h-screen items-center justify-center">
      <SignIn
        forceRedirectUrl={redirectURL}
      />
    </main>
  )
}
