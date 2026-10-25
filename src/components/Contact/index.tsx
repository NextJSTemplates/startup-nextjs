"use client";

import { useState } from "react";
import type { FormEvent } from "react";

type ContactResult = { ok?: boolean; message?: string };

const inputClass = "w-full rounded-xl border border-stroke bg-white px-5 py-3.5 text-base text-dark outline-none transition placeholder:text-body-color/70 focus:border-primary dark:border-stroke-dark dark:bg-gray-dark dark:text-white";

export default function Contact() {
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState<{ ok: boolean; message: string } | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setFeedback(null);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as ContactResult;
      setFeedback({ ok: Boolean(response.ok && result.ok), message: result.message || "We could not submit your message. Please try again." });
      if (response.ok && result.ok) form.reset();
    } catch {
      setFeedback({ ok: false, message: "Connection problem. Please check your internet and try again." });
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact" className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <span className="mb-3 block text-sm font-semibold uppercase tracking-[0.2em] text-primary">Let's talk</span>
            <h2 className="mb-5 text-3xl font-bold text-black dark:text-white sm:text-4xl">Have a project in mind?</h2>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
              Tell us what you need help with, whether it is a website, custom software, IT support, automation, training, or a management system.
            </p>
            <div className="rounded-2xl border border-stroke bg-gray-light p-6 dark:border-stroke-dark dark:bg-bg-color-dark">
              <h3 className="mb-2 text-lg font-bold text-black dark:text-white">Yacob Tech | Startup</h3>
              <p className="text-base text-body-color dark:text-body-color-dark">Building Tomorrow, Today.</p>
              <p className="mt-4 text-sm leading-relaxed text-body-color dark:text-body-color-dark">Use this form to describe your project. Please do not include passwords or sensitive personal information.</p>
            </div>
          </div>
          <div className="rounded-2xl border border-stroke bg-white p-6 shadow-sm dark:border-stroke-dark dark:bg-gray-dark sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-dark dark:text-white">Your name</label>
                <input id="contact-name" name="name" type="text" required minLength={2} maxLength={100} autoComplete="name" placeholder="Enter your name" className={inputClass} />
              </div>
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-dark dark:text-white">Email address</label>
                <input id="contact-email" name="email" type="email" required maxLength={254} autoComplete="email" placeholder="you@example.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="contact-subject" className="mb-2 block text-sm font-medium text-dark dark:text-white">What can we help with?</label>
                <select id="contact-subject" name="subject" className={inputClass} defaultValue="">
                  <option value="">Choose a service (optional)</option>
                  <option>Web and software development</option>
                  <option>IT support and networking</option>
                  <option>Digital solutions and innovation</option>
                  <option>AI solutions and automation</option>
                  <option>Technology training and education</option>
                  <option>Business and school management systems</option>
                  <option>Other enquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-dark dark:text-white">Project details</label>
                <textarea id="contact-message" name="message" required minLength={10} maxLength={5000} rows={5} placeholder="Tell us a little about your goals..." className={inputClass + " resize-y"} />
              </div>
              <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
                <label htmlFor="contact-website">Leave this field empty</label>
                <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
              {feedback && (
                <p role="status" aria-live="polite" className={`rounded-lg px-4 py-3 text-sm ${feedback.ok ? "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200" : "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200"}`}>
                  {feedback.message}
                </p>
              )}
              <button type="submit" disabled={pending} className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-semibold text-white transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60">
                {pending ? "Sending..." : "Send project enquiry"}
              </button>
              <p className="text-xs leading-relaxed text-body-color dark:text-body-color-dark">Submitting this form sends your enquiry to our server for secure processing.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
