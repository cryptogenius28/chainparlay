import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getServiceRoleClient } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const supabase = getServiceRoleClient();
    const { error: dbError } = await supabase
      .from("leads")
      .upsert({ email, source: "odds-alerts" }, { onConflict: "email" });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json({ error: "Storage error" }, { status: 500 });
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "alerts@chainparlay.com",
      to: email,
      subject: "You're on the ChainParlay odds alert list",
      text: "Thanks for signing up. We'll email you when a tracked book changes its combo boost, leg limit, or minimum odds per leg.",
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Newsletter route error:", err);
    return NextResponse.json({ error: "Unexpected error" }, { status: 500 });
  }
}
