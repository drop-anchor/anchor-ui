import { AlertCircle, CheckCircle2 } from 'lucide-react'

import { StepCard } from '@/components/shared/StepCard'

type AppPageProps = {
  searchParams: Promise<{
    checkout?: string | string[]
  }>
}

type CheckoutStatus = 'success' | 'cancelled' | 'default'

const first = (value: string | string[] | undefined): string | undefined =>
  Array.isArray(value) ? value[0] : value

const getCheckoutStatus = (value: string | undefined): CheckoutStatus => {
  if (value === 'success') {
    return 'success'
  }

  if (value === 'cancelled' || value === 'canceled') {
    return 'cancelled'
  }

  return 'default'
}

export default async function AppPage({ searchParams }: AppPageProps) {
  const resolvedSearchParams = await searchParams
  const checkoutStatus = getCheckoutStatus(first(resolvedSearchParams.checkout))

  const content = {
    success: {
      title: 'Thanks for upgrading',
      body: 'Your upgrade is active. Thanks for supporting Anchor.',
      icon: <CheckCircle2 size={16} />,
    },
    cancelled: {
      title: 'Checkout cancelled',
      body: 'No changes were made to your plan. You can upgrade anytime when you are ready.',
      icon: <AlertCircle size={16} />,
    },
    default: {
      title: 'Error',
      body: 'An error occurred while processing your request. Please try again.',
      icon: <AlertCircle size={16} />,
    },
  }[checkoutStatus]

  return (
    <main className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,hsl(48_45%_95%),hsl(0_0%_100%))] p-6">
      <div className="w-full max-w-md">
        <StepCard
          number="Billing"
          title={content.title}
          body={content.body}
          icon={content.icon}
        />
        <p className="mt-3 text-center text-xs text-muted-foreground">
          You can close this tab and return to Anchor.
        </p>
      </div>
    </main>
  )
}
