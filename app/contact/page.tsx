import { buildMetadata } from "@/lib/seo";
import Breadcrumbs from "@/components/shared/Breadcrumbs";
import ContactForm from "@/components/shared/ContactForm";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch with the SHOPNEXA team.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="bg-ink min-h-screen pt-32 pb-24 px-6 md:px-16">
      <div className="max-w-lg mx-auto">
        <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
        <p className="font-mono text-xs text-muted mb-4">GET IN TOUCH</p>
        <h1 className="font-serif text-4xl md:text-5xl text-bone mb-4 text-balance">
          Contact us
        </h1>
        <p className="text-bone/60 mb-10">
          Product suggestions, partnership questions, or something we got
          wrong — we read everything.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
