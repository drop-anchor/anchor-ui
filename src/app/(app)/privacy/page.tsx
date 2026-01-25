import Link from 'next/link'

import { Separator } from '@/components/ui/separator'

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-320px] h-[720px] w-[900px] max-w-[100vw] -translate-x-1/2 rounded-full bg-background/50 blur-3xl" />
        <div className="absolute right-[-220px] top-[120px] h-[520px] w-[520px] max-w-[100vw] rounded-full bg-background/40 blur-3xl" />
        <div className="absolute bottom-[-300px] left-[-260px] h-[640px] w-[640px] max-w-[100vw] rounded-full bg-background/30 blur-3xl" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link href="/" className="inline-flex items-baseline gap-2">
          <span className="text-sm font-medium tracking-tight">Anchor</span>
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>
        </nav>
      </header>

      <div className="mx-auto max-w-4xl px-6 pb-20 pt-12">
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2026</p>
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
            <p>
              Anchor (&quot;Anchor&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) provides a browser extension that helps
              users save highlighted context from web pages so they can revisit important
              information later. This Privacy Policy explains what data we collect, how we use
              it, and the choices you have.
            </p>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Information We Collect</h2>
              <p>
                Anchor is designed to be simple and privacy-respectful. We collect only the
                information necessary to provide the extension&apos;s core functionality.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">1. Website Content You Choose to Save</h3>
                  <p className="text-muted-foreground">
                    When you highlight text on a web page and drop an anchor, we collect and store:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>The selected text</li>
                    <li>Associated metadata (such as the page title or URL)</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    This content is collected only when you explicitly choose to save it. By
                    default, saved content is stored locally in your browser.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">2. Chat Messages</h3>
                  <p className="text-muted-foreground">
                    If you use Anchor&apos;s chat features, we collect the messages you submit in order
                    to generate responses. Chat messages may be processed by our backend services
                    to provide replies that are relevant to the current topic and saved highlights.
                  </p>
                  <p className="text-muted-foreground mt-2">
                    We do not monitor browsing activity or capture content without your interaction.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">3. Authentication Information (If Enabled)</h3>
                  <p className="text-muted-foreground">
                    If you choose to sign in (now or in the future), we may collect
                    authentication-related information such as:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Email address</li>
                    <li>Authentication tokens or credentials</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    Authentication data is used only to verify your identity and provide
                    account-related features such as syncing or access to paid plans.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">4. Technical Information</h3>
                  <p className="text-muted-foreground">
                    We may collect limited technical information necessary to operate the service,
                    such as:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    <li>Error logs</li>
                    <li>Rate-limiting signals</li>
                    <li>Basic request metadata</li>
                  </ul>
                  <p className="text-muted-foreground mt-2">
                    This information is not used to track users across websites or for advertising
                    purposes.
                  </p>
                </div>
              </div>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">How We Use Information</h2>
              <p className="text-muted-foreground">
                We use the collected information solely to:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Save and display user-selected highlights</li>
                <li>Organize saved content by topic</li>
                <li>Provide chat responses related to saved context</li>
                <li>Authenticate users and manage accounts (if enabled)</li>
                <li>Maintain service reliability and prevent abuse</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                We do not use data for advertising, profiling, or unrelated purposes.
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Data Storage and Processing</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>
                  Saved highlights are stored locally in the browser by default.
                </li>
                <li>
                  Some features (such as chat or account-related functionality) may require data to
                  be processed by our backend services.
                </li>
                <li>
                  We use trusted service providers (such as hosting and database providers) strictly
                  as data processors to operate Anchor.
                </li>
              </ul>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Data Sharing</h2>
              <p className="text-muted-foreground">We do not sell user data.</p>
              <p className="text-muted-foreground">
                We do not share user data with third parties except:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>When necessary to provide the service (e.g., infrastructure providers)</li>
                <li>When required by law</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                We do not transfer user data for purposes unrelated to Anchor&apos;s single purpose.
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Data Retention</h2>
              <p className="text-muted-foreground">
                We retain user data only for as long as necessary to provide the requested
                functionality:
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Locally stored data remains on your device unless you delete it</li>
                <li>Account-related data may be retained while your account is active</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                You may delete your saved content at any time through the extension.
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Your Choices</h2>
              <p className="text-muted-foreground">You can:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>Choose what content to save</li>
                <li>Delete saved highlights and topics</li>
                <li>Stop using the extension at any time by uninstalling it</li>
              </ul>
              <p className="text-muted-foreground mt-2">
                If authentication features are enabled, additional account controls may be
                provided.
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Security</h2>
              <p className="text-muted-foreground">
                We take reasonable measures to protect user data from unauthorized access, loss, or
                misuse. No system is perfectly secure, but we aim to follow industry best practices.
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Children&apos;s Privacy</h2>
              <p className="text-muted-foreground">
                Anchor is not intended for use by children under 13. We do not knowingly collect
                personal data from children.
              </p>
            </section>

            <Separator />

            <section className="space-y-4">
              <h2 className="text-2xl font-semibold tracking-tight">Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. When we do, we will update
                the &quot;Last updated&quot; date at the top of this page.
              </p>
            </section>
          </div>
        </div>
      </div>

      <footer className="mx-auto max-w-6xl px-6 pb-10 pt-6">
        <div className="flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-2">
            <p>© 2026 Anchor</p>
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
          </div>
          <p className="text-right">Save the thought. Close the tab.</p>
        </div>
      </footer>
    </main>
  )
}
