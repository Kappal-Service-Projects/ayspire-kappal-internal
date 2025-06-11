import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  GeneralEmailTemplate,
  GeneralEmailTemplateProps,
} from "@/components/email-components/email-content/general-email";
import { DomainLinks } from "@/config/data";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body: GeneralEmailTemplateProps = await request.json();
    const { name, email, phone, subject, message } = body;

    const { data, error } = await resend.emails.send({
      from: "Ayspire.com Bridge <onboarding@resend.dev>",
      to: [DomainLinks.Email.EnquiryEmail.href],
      subject: "Message from Ayspire Corporate site",
      react: await GeneralEmailTemplate({
        name,
        email,
        phone,
        subject,
        message,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data, message: "Email Sent Successfully!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
