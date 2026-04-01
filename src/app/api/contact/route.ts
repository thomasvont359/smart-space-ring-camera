import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    // Log the contact message (ready for email service integration)
    console.log("📧 New contact message:", {
      name,
      email,
      phone,
      subject,
      message,
      receivedAt: new Date().toISOString(),
    });

    // TODO: Send email to info@smart-space.ie using SendGrid/Resend/Nodemailer
    // Example with Resend:
    // await resend.emails.send({
    //   from: 'Smart Space <noreply@smart-space.ie>',
    //   to: 'info@smart-space.ie',
    //   subject: `New enquiry from ${name}: ${subject}`,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\n${message}`,
    // });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to process message" },
      { status: 500 }
    );
  }
}
