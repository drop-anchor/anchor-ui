import { Brain } from 'lucide-react'

import { Section } from '@/components/shared/Section'
import { Button } from '@/components/ui/button'

export function AIAsMemorySection({ chromeWebStoreUrl }: { chromeWebStoreUrl: string }) {
  return (
    <Section className="mx-auto max-w-6xl px-6 py-14 sm:py-18">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-xl">
          <p className="text-sm text-muted-foreground flex items-center gap-2"><Brain size={16} /> AI as memory</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Your past thinking, made accessible
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            When you come back later, Anchor helps you remember what you were thinking. Ask simple questions about what you saved and get just enough context to continue, without rereading everything or starting over.
          </p>
        </div>

        <div className="max-w-xl flex flex-col items-start self-center justify-self-center">
          <Button asChild size="lg" variant="secondary" className="cursor-pointer text-primary-foreground bg-emerald-400 hover:bg-emerald-500">
            <a href={chromeWebStoreUrl} target="_blank" rel="noreferrer">
              Try Anchor for free
            </a>
          </Button>
          <p className="text-xs text-muted-foreground pt-6 text-left">
            You can always come back later — without keeping the tab open.
          </p>
        </div>
      </div>
    </Section>
  );
}
