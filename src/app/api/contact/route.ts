import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

type RequestBody = {
  lastName: string;
  firstName: string;
  email: string;
  company: string;
  message: string;
  phone?: string;
  countryCode?: string;
};

export async function POST(req: Request) {
  try {
    const body: RequestBody = await req.json();
    
    if (!body?.email || !body?.message || !body?.lastName) {
      return NextResponse.json({ error: 'Données incomplètes' }, { status: 400 });
    }

    const SMTP_HOST = process.env.SMTP_HOST;
    const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
    const SMTP_USER = process.env.SMTP_USER;
    const SMTP_PASS = process.env.SMTP_PASS;
    const RECIPIENT = process.env.CONTACT_RECIPIENT || 'anaskadar01@gmail.com';

    let transporter;
    let usingEthereal = false;

    if (SMTP_HOST && SMTP_USER && SMTP_PASS) {
      transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port: SMTP_PORT,
        secure: SMTP_PORT === 465, 
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      });
    } else {
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

    const phoneInfo = body.phone ? `${body.countryCode || ''} ${body.phone}` : 'Non renseigné';
    const mailBody = `Nouvelle demande depuis le formulaire de contact\n\nNom: ${body.lastName} ${body.firstName || ''}\nEmail: ${body.email}\nSociété: ${body.company || 'Non spécifiée'}\nTéléphone: ${phoneInfo}\n\nMessage:\n${body.message}`;

    // Template HTML minimaliste
    const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="fr">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Nouveau message de contact</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; background-color: #f8f9fa;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff;">
            
            <!-- Header -->
            <div style="background-color: #48937E; color: white; padding: 40px 30px; text-align: center;">
                <h1 style="margin: 0; font-size: 28px; font-weight: 300; letter-spacing: 0.5px;">UNLEASH LAB</h1>
                <div style="width: 60px; height: 2px; background-color: rgba(255,255,255,0.3); margin: 15px auto 0;"></div>
            </div>

            <!-- Content -->
            <div style="padding: 40px 30px;">
                
                <!-- Title Section -->
                <div style="text-align: center; margin-bottom: 40px;">
                    <h2 style="margin: 0; font-size: 20px; font-weight: 400; color: #2c3e50;">Nouvelle demande de contact</h2>
                    <p style="margin: 8px 0 0 0; color: #7f8c8d; font-size: 14px;">${new Date().toLocaleDateString('fr-FR', { 
                        day: '2-digit',
                        month: '2-digit', 
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })}</p>
                </div>

                <!-- Contact Information -->
                <div style="margin-bottom: 35px;">
                    <h3 style="color: #2c3e50; font-size: 14px; font-weight: 600; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #ecf0f1; padding-bottom: 10px;">Informations</h3>
                    
                    <div style="background-color: #fafbfc; padding: 25px; border-radius: 4px; border-left: 3px solid #48937E;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 8px 0; font-weight: 500; color: #7f8c8d; width: 100px; font-size: 14px;">Nom</td>
                                <td style="padding: 8px 0; color: #2c3e50; font-size: 14px;">${body.firstName || ''} ${body.lastName}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: 500; color: #7f8c8d; font-size: 14px;">Email</td>
                                <td style="padding: 8px 0; font-size: 14px;">
                                    <a href="mailto:${body.email}" style="color: #48937E; text-decoration: none;">${body.email}</a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: 500; color: #7f8c8d; font-size: 14px;">Société</td>
                                <td style="padding: 8px 0; color: #2c3e50; font-size: 14px;">${body.company || 'Non spécifiée'}</td>
                            </tr>
                            <tr>
                                <td style="padding: 8px 0; font-weight: 500; color: #7f8c8d; font-size: 14px;">Téléphone</td>
                                <td style="padding: 8px 0; font-size: 14px;">
                                    ${body.phone ? `<a href="tel:${phoneInfo}" style="color: #48937E; text-decoration: none;">${phoneInfo}</a>` : 'Non renseigné'}
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <!-- Message -->
                <div style="margin-bottom: 35px;">
                    <h3 style="color: #2c3e50; font-size: 14px; font-weight: 600; margin: 0 0 20px 0; text-transform: uppercase; letter-spacing: 1px; border-bottom: 1px solid #ecf0f1; padding-bottom: 10px;">Message</h3>
                    <div style="background-color: #fafbfc; padding: 25px; border-radius: 4px; border-left: 3px solid #48937E;">
                        <p style="margin: 0; line-height: 1.7; color: #2c3e50; white-space: pre-wrap; font-size: 14px;">${body.message}</p>
                    </div>
                </div>

                <!-- Actions -->
                <div style="text-align: center; margin-top: 40px; padding-top: 30px; border-top: 1px solid #ecf0f1;">
                    <a href="mailto:${body.email}" style="display: inline-block; background-color: #48937E; color: white; padding: 12px 30px; text-decoration: none; border-radius: 3px; font-weight: 400; margin-right: 15px; font-size: 14px; transition: background-color 0.2s;">Répondre</a>
                    ${body.phone ? `<a href="tel:${phoneInfo}" style="display: inline-block; background-color: #7f8c8d; color: white; padding: 12px 30px; text-decoration: none; border-radius: 3px; font-weight: 400; font-size: 14px;">Appeler</a>` : ''}
                </div>
            </div>

            <!-- Footer -->
            <div style="background-color: #fafbfc; padding: 25px 30px; text-align: center; border-top: 1px solid #ecf0f1;">
                <p style="margin: 0; color: #95a5a6; font-size: 12px; line-height: 1.4;">
                    Généré automatiquement par <span style="color: #48937E; font-weight: 500;">Unleash Lab</span><br>
                    <a href="https://unleash-lab.tech" style="color: #95a5a6; text-decoration: none;">unleash-lab.tech</a>
                </p>
            </div>
        </div>
    </body>
    </html>`;

    console.log('📤 Tentative d\'envoi email...');
    
    const info = await transporter.sendMail({
      from: `"${body.firstName || ''} ${body.lastName}" <${SMTP_USER}>`, // From utilisateur SMTP pour éviter les erreurs
      replyTo: body.email, // Reply-to vers le visiteur
      to: RECIPIENT,
      subject: `Nouveau message de contact — ${body.company || 'Sans société'}`,
      text: mailBody,
      html: htmlTemplate,
    });

    if (usingEthereal) {
      const previewUrl = nodemailer.getTestMessageUrl(info) || null;
      return NextResponse.json({ ok: true, previewUrl });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ 
      error: 'Erreur serveur lors de l\'envoi du mail',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    }, { status: 500 });
  }
}
