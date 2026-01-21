import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ExtensionCallbackPage() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-sm w-full rounded-2xl border p-6 shadow-sm">
        <div className="text-xl font-semibold">You’re connected</div>
        <p className="mt-2 text-sm text-muted-foreground">
          Return to Anchor in your browser. You can close this tab.
        </p>
      </div>
    </main>
  );
}
