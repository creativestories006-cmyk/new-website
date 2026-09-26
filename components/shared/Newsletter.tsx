"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    // NOTE: no backend is wired up yet — this is where a real API
    // route (e.g. /api/newsletter) or ESP integration would be called.
    setStatus("submitted");
  };

  return (
    <section className="section-paper py-20 md:py-28 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="font-mono text-xs text-char/50 mb-4">07 / STAY CURRENT</p>
        <h2 className="font-serif text-3xl md:text-5xl text-char text-balance">
          One email, once a week. The best of what we found.
        </h2>
        <p className="mt-4 text-char/60 max-w-md mx-auto">
          No spam, no daily noise — just the standout products and guides
          from the past seven days.
        </p>

        {status === "submitted" ? (
          <p className="mt-8 font-mono text-sm text-char">
            You&rsquo;re on the list. First issue lands next week.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 px-5 py-3.5 rounded-full border border-char/20 bg-transparent text-char placeholder:text-char/40 outline-none focus-visible:border-accent"
            />
            <Button type="submit">Subscribe</Button>
          </form>
        )}
      </div>
    </section>
  );
}
