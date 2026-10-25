import { NextResponse } from "next/server";

export const runtime = "nodejs";

const clean = (value: unknown, max: number) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Please submit a valid form." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ ok: false, message: "Please submit a valid form." }, { status: 400 });
  }

  // Honeypot: bots often fill hidden fields; quietly accept without processing.
  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true, message: "Thank you. Your message has been received." });
  }

  const name = clean(body.name, 100);
  const email = clean(body.email, 254).toLowerCase();
  const subject = clean(body.subject, 160);
  const message = clean(body.message, 5000);

  if (name.length < 2 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 10) {
    return NextResponse.json({ ok: false, message: "Enter your name, a valid email, and a message of at least 10 characters." }, { status: 400 });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    return NextResponse.json({ ok: false, message: "The contact service is not configured yet. Please try again later." }, { status: 503 });
  }

  const baseUrl = supabaseUrl.replace(/\/$/, "");
  let saved = false;
  try {
    const saveResponse = await fetch(`${baseUrl}/rest/v1/contact_messages`, {
      method: "POST",
      headers: {
        apikey: serviceRoleKey,
        Authorization: `Bearer ${serviceRoleKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ name, email, subject: subject || null, message }),
      cache: "no-store",
    });
    if (!saveResponse.ok) {
      return NextResponse.json({ ok: false, message: "We couldn't save your message. Please try again later." }, { status: 502 });
    }
    saved = true;
  } catch {
    return NextResponse.json({ ok: false, message: "The contact service is temporarily unavailable." }, { status: 502 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (resendKey && toEmail && fromEmail) {
    try {
      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [toEmail],
          reply_to: email,
          subject: `Website enquiry: ${subject || "New message"}`,
          text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject || "Not provided"}\n\n${message}`,
          html: `<h2>New website enquiry</h2><p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p><strong>Subject:</strong> ${escapeHtml(subject || "Not provided")}</p><p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>`,
        }),
        cache: "no-store",
      });
      if (!emailResponse.ok) {
        return NextResponse.json({ ok: true, saved, emailSent: false, message: "Your message was saved, but email notification is temporarily unavailable." });
      }
      return NextResponse.json({ ok: true, saved, emailSent: true, message: "Thank you. Your message was sent successfully." });
    } catch {
      return NextResponse.json({ ok: true, saved, emailSent: false, message: "Your message was saved, but email notification is temporarily unavailable." });
    }
  }

  return NextResponse.json({ ok: true, saved, emailSent: false, message: "Your message was saved. Email notifications will work after the email settings are configured." });
}
