import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

type RequestBody = {
  lastName: string;
  firstName: string;
  email: string;
  company: string;
  message: string;
};

export async function POST(req: Request) {
  try {
    const body: RequestBody = await req.json();

    // Basic validation
    if (!body?.email || !body?.message || !body?.lastName) {
      return NextResponse.json({ error: 'Données incomplètes' }, { status: 400 });
    }

    // SMTP config via env vars
    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;

    // Recipient fallback
    const RECIPIENT = process.env.CONTACT_RECIPIENT || 'anaskadar01@gmail.com';

    // Create transporter: prefer real SMTP from env, otherwise fall back to Ethereal (free test account)
    let transporter;
    let usingEthereal = false;

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465, // true for 465, false for other ports
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });
    } else {
      // No SMTP provided — create a free Ethereal account for testing
      usingEthereal = true;
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: testAccount.smtp.host,
        port: testAccount.smtp.port,
        secure: testAccount.smtp.secure,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
    }

    const mailBody = `Nouvelle demande depuis le formulaire de contact\n\nNom: ${body.lastName} ${body.firstName || ''}\nEmail: ${body.email}\nSociété: ${body.company || ''}\n\nMessage:\n${body.message}`;

    const info = await transporter.sendMail({
      from: `${body.firstName || ''} ${body.lastName} <${body.email}>`,
      to: RECIPIENT,
      subject: `Nouveau message de contact — ${body.company || 'Sans société'}`,
      text: mailBody,
      html: `<pre style="font-family:inherit;white-space:pre-wrap">${mailBody}</pre>`,
    });

    // If using Ethereal (test account), return the preview URL so the developer can view the message
    if (usingEthereal) {
      const previewUrl = nodemailer.getTestMessageUrl(info) || null;
      return NextResponse.json({ ok: true, previewUrl });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact API error:', err);
    return NextResponse.json({ error: 'Erreur serveur lors de l\'envoi du mail' }, { status: 500 });
  }
}
