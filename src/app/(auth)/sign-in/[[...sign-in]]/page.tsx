import { SignIn } from '@clerk/nextjs'

import { Redirecter } from '@/server/service/Redirecter'

export default function SignInPage({ searchParams }: {
  searchParams: { redirect_url?: string | string[] }
}) {
  // TODO: confirm that user can go back to extension or settings page
  // 1. extension/connect
  // 2. app/settings
  const redirectURL = Redirecter.sanitizeRedirectURL(searchParams?.redirect_url)

  return (
    <main className="flex min-h-screen items-center justify-center">
      <SignIn
        forceRedirectUrl={redirectURL}
      />
    </main>
  )
}
