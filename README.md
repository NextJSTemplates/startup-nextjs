# Yacob Tech | Startup

**Building Tomorrow, Today.**

A corporate technology website based on the open-source Startup Next.js template.

## Official services

- Web and software development
- IT support and networking
- Digital solutions and innovation
- AI solutions and automation
- Technology training and education
- Business and school management systems

## Current implementation status

- Branded homepage, service cards, business-sector section, company introduction, navigation, and contact form UI are committed on `feature/corporate-platform`.
- The contact form calls a server-side Next.js API route.
- The API validates and stores enquiries in Supabase using a server-only service-role key and can send notifications through Resend.
- A Supabase migration is provided in `supabase/migrations/202610250001_create_contact_messages.sql`.
- Blog cards currently show planned editorial topics; they are not yet a CMS-backed blog.
- Full English/Afaan Oromo/Amharic translation, authenticated admin dashboard, broader content management, automated tests, and production deployment remain to be implemented and verified.

## Local development

Requirements: Node.js 20 or later and npm.

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact form setup

1. Create a Supabase project.
2. Run the SQL migration from `supabase/migrations/202610250001_create_contact_messages.sql` in the Supabase SQL Editor.
3. Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` in local `.env.local` and in Vercel project environment variables. The service-role key must remain server-side and must never use a `NEXT_PUBLIC_` prefix.
4. Configure Resend and a verified sending domain, then set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, and `CONTACT_FROM_EMAIL`.
5. Send a test enquiry and verify both the saved database row and email delivery before launch.

If email settings are absent or the email provider fails, the API may save the enquiry but will return a message indicating that email notification is unavailable. Do not treat email delivery as verified until a real test succeeds.

## Security notes

- The contact table has Row Level Security enabled and does not grant direct access to anonymous or authenticated browser clients.
- The service-role key is used only in the server-side route.
- The contact form includes input validation and a honeypot, but production deployment should add a durable rate limiter and abuse monitoring.
- Admin authentication and role-based content management are not implemented yet.

## Original template and license

This project is based on [NextJSTemplates/startup-nextjs](https://github.com/NextJSTemplates/startup-nextjs). The upstream project is licensed under the MIT License. Keep the original copyright and license notice in `LICENSE` and preserve applicable attribution.

Original template copyright: Next.js Templates (2023).
