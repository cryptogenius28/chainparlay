"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function OddsAlertForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-link border border-hairline bg-surface p-6 md:p-8">
      <p className="eyebrow">Odds alerts</p>
      <h2 className="mt-2 font-display text-xl font-semibold text-chalk md:text-2xl">
        Get notified when combo boosts change
      </h2>
      <p className="mt-2 max-w-xl text-sm text-muted">
        One email when a tracked book changes its parlay boost, leg limit, or
        minimum odds per leg. No spam, unsubscribe anytime.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-5 flex flex-col gap-3 sm:flex-row"
      >
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="w-full rounded-link border border-hairline bg-ink px-4 py-3 font-mono text-sm text-chalk placeholder:text-muted focus:border-steel sm:max-w-xs"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-link bg-brass px-5 py-3 font-mono text-xs uppercase tracking-widest2 text-ink transition hover:bg-brass-dim disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Notify me"}
        </button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-sm text-win">
          You&apos;re on the list — check your inbox for a confirmation.
        </p>
      )}
      {status === "error" && (
        <p className="mt-3 text-sm text-alert">
          Something went wrong. Try again in a moment.
        </p>
      )}
    </div>
  );
}
