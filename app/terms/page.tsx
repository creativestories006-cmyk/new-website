import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";

export const metadata = buildMetadata({
  title: "Terms & Conditions",
  description: "The terms governing your use of SHOPNEXA.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="bg-ink min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-2xl mx-auto">
        <Breadcrumbs items={[{ name: "Terms & Conditions", path: "/terms" }]} />
        <p className="font-mono text-xs text-muted mb-4">LEGAL</p>
        <h1 className="font-serif text-4xl md:text-5xl text-bone mb-4 text-balance">
          Terms & conditions
        </h1>
        <p className="text-bone/40 text-sm mb-10">Last updated: September 2026</p>

        <div className="space-y-8 text-bone/70 leading-relaxed">
          <section>
            <h2 className="font-serif text-2xl text-bone mb-3">
              Acceptance of terms
            </h2>
            <p>
              By accessing or using SHOPNEXA, you agree to be bound by these
              terms. If you do not agree, please discontinue use of the
              site.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-bone mb-3">
              Use of the site
            </h2>
            <p>
              SHOPNEXA is a product discovery and affiliate platform. Product
              information, pricing, and availability are provided for
              informational purposes and are sourced from third-party
              retailers; SHOPNEXA does not sell products directly or process
              payments for the items featured.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-bone mb-3">
              Third-party purchases
            </h2>
            <p>
              Any purchase made after clicking an outbound link from
              SHOPNEXA is a transaction between you and the third-party
              retailer, governed by that retailer&rsquo;s own terms, pricing,
              return policy, and customer service. SHOPNEXA is not a party to
              that transaction.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-bone mb-3">
              Accuracy of information
            </h2>
            <p>
              We make reasonable efforts to keep product details accurate and
              current, but we do not guarantee that all information — pricing
              included — is free of error at all times. Always verify details
              on the retailer&rsquo;s site before purchasing.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-bone mb-3">
              Intellectual property
            </h2>
            <p>
              All original content on SHOPNEXA — including editorial copy,
              buying guides, and site design — is the property of SHOPNEXA
              and may not be reproduced without permission. Product images
              and names remain the property of their respective owners.
            </p>
          </section>
          <section>
            <h2 className="font-serif text-2xl text-bone mb-3">
              Changes to these terms
            </h2>
            <p>
              We may update these terms from time to time. Continued use of
              SHOPNEXA after changes are posted constitutes acceptance of the
              revised terms.
            </p>
          </section>
          <p className="text-bone/40 text-sm pt-4">
            This is placeholder terms text for a template build and should
            be reviewed by qualified legal counsel before this site
            operates commercially.
          </p>
        </div>
      </div>
    </div>
  );
}
