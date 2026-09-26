"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // BACKEND REQUIRED: wire this to an API route (e.g. /api/contact) that
    // sends an email or writes to a database/CRM. No submission is sent yet.
    setStatus("sent");
  };

  if (status === "sent") {
    return (
      <p className="font-mono text-sm text-bone/70 py-8">
        Message received — we'll get back to you within a couple of days.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-xs font-mono text-bone/40 mb-2">
          NAME
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-white/15 bg-transparent text-bone outline-none focus-visible:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-xs font-mono text-bone/40 mb-2">
          EMAIL
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-white/15 bg-transparent text-bone outline-none focus-visible:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-xs font-mono text-bone/40 mb-2">
          MESSAGE
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-white/15 bg-transparent text-bone outline-none focus-visible:border-accent resize-none"
        />
      </div>
      <Button type="submit" fullWidth magnetic={false} className="justify-center">
        Send message
      </Button>
    </form>
  );
}
