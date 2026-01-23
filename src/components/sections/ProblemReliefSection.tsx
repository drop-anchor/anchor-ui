import { Section } from '@/components/shared/Section'

export function ProblemReliefSection() {
  return (
    <Section className="mx-auto max-w-6xl px-6 py-14 sm:py-18">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div className="max-w-xl">
          <p className="text-sm text-muted-foreground">The problem</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Tabs stay open &quot;just in case.&quot;
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            We keep pages around because we&apos;re afraid we&apos;ll lose something. A thought. A quote. A detail we&apos;ll need later.
          </p>
        </div>

        <div className="max-w-xl">
          <p className="text-sm text-muted-foreground">The relief</p>
          <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Anchor lets you let go.
          </h3>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Highlight what matters. Drop Anchor. Close the tab knowing the context is saved.
          </p>
        </div>
      </div>
    </Section>
  );
}
