import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How SHOPNEXA collects, uses, and protects your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-ink min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-2xl mx-auto">
        <Breadcrumbs
          items={[{ name: "Privacy Policy", path: "/privacy-policy" }]}
        />
        <p className="font-mono text-xs text-muted mb-4">LEGAL</p>
        <h1 className="font-serif text-4xl md:text-5xl text-bone mb-4 text-balance">
          Privacy policy
        </h1>
        <p className="text-bone/40 text-sm mb-10">Last updated: September 2026</p>

        <div className="space-y-8 text-bone/70 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-bone mb-3">
              Information we collect
            </h2>
            <p>
              When you use SHOPNEXA, we may collect information you provide
              directly — such as your email address when subscribing to our
              newsletter or submitting the contact form — and information
              collected automatically, such as pages visited and general
              device/browser information via analytics tools.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-bone mb-3">
              How we use information
            </h2>
            <p>
              We use collected information to operate and improve SHOPNEXA,
              send newsletter content to subscribers who opt in, respond to
              contact requests, and understand aggregate usage patterns
              across the site.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-bone mb-3">
              Affiliate links and third parties
            </h2>
            <p>
              SHOPNEXA contains affiliate links to third-party retailers.
              When you click these links, the destination retailer may
              collect its own information according to its own privacy
              policy — SHOPNEXA does not control or take responsibility for
              third-party data practices. See our{" "}
              <a
                href="/affiliate-disclosure"
                className="underline underline-offset-4 hover:text-accent"
              >
                affiliate disclosure
              </a>{" "}
              for more.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-bone mb-3">Cookies</h2>
            <p>
              SHOPNEXA may use cookies or similar technologies for basic site
              functionality and analytics. You can control cookie preferences
              through your browser settings at any time.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-bone mb-3">Your choices</h2>
            <p>
              You may unsubscribe from our newsletter at any time using the
              link included in each email, or by contacting us directly via
              our{" "}
              <a
                href="/contact"
                className="underline underline-offset-4 hover:text-accent"
              >
                contact page
              </a>
              .
            </p>
          </section>
          <p className="text-bone/40 text-sm pt-4">
            This is placeholder policy text for a template build and should
            be reviewed by qualified legal counsel before this site goes
            live with real user data collection.
          </p>
        </div>
      </div>
    </div>
  );
}
