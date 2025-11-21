import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string;
  subject: string;
  html: string;
}) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
    });

    console.log('Email sent:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
}

export function getContactEmailTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: #2563eb; color: white; padding: 20px; text-align: center; }
          .content { background: #f9fafb; padding: 20px; margin: 20px 0; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #1f2937; }
          .value { color: #4b5563; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${data.name}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${data.email}</div>
            </div>
            ${data.phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${data.phone}</div>
            </div>
            ` : ''}
            ${data.company ? `
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${data.company}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${data.message}</div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
