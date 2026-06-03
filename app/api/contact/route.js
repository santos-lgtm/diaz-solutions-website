import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { name, email, company, message } = await request.json();

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Diaz Solutions <onboarding@resend.dev>',
      to: 'santos@diazsolutions.us',
      replyTo: email,
      subject: `New inquiry from ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; border-radius: 12px; overflow: hidden;">
          <div style="background: #020818; padding: 32px 40px; text-align: center;">
            <h1 style="color: #fff; margin: 0; font-size: 22px;">New Contact Form Submission</h1>
            <p style="color: #5badff; margin: 8px 0 0; font-size: 14px;">diazsolutions.us</p>
          </div>
          <div style="padding: 32px 40px; background: #fff;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px; width: 100px;">Name</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #111; font-size: 15px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Email</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee;"><a href="mailto:${email}" style="color: #2e5bff; font-size: 15px;">${email}</a></td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #666; font-size: 13px;">Company</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #eee; color: #111; font-size: 15px;">${company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 16px 0; color: #666; font-size: 13px; vertical-align: top;">Message</td>
                <td style="padding: 16px 0; color: #111; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
          </div>
          <div style="padding: 20px 40px; background: #f0f4ff; text-align: center;">
            <p style="color: #888; font-size: 12px; margin: 0;">Reply directly to this email to respond to ${name} 🦝</p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return Response.json({ error: 'Failed to send message. Please try again.' }, { status: 500 });
  }
}
