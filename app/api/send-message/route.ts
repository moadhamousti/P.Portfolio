// app/api/send-message/route.ts

import { PrismaClient } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const prisma = new PrismaClient();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { fullName, email, role, message } = body;

  if (!fullName || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  try {
    // 1. Save message to database
    const saved = await prisma.message.create({
      data: {
        fullName,
        email,
        role,
        content: message,
      },
    });

    // 2. Send email via Resend
    const emailRes = await resend.emails.send({
      from: "Contact Form <hello@moadhamousti.dpdns.org>",
      to: ["moadhamousti@gmail.com"],
      subject: "📩 New Contact Message from Your Website",
      text: `
New Message Received

Full Name: ${fullName}
Email: ${email}
Role: ${role}
Message:
${message}
  `,
      html: `
    <div style="font-family:Arial,sans-serif;padding:20px;">
      <h2 style="color:#0ea5e9;">New Message Received</h2>
      <p><strong>Full Name:</strong> ${fullName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Role:</strong> ${role}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="margin-left:10px;padding-left:10px;border-left:2px solid #0ea5e9;color:#333;">
        ${message.replace(/\n/g, "<br>")}
      </blockquote>
    </div>
  `,
    });

    return NextResponse.json({ success: true, data: saved });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
