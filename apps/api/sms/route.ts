import { NextResponse } from "next/server";
import { parseSMS } from "@/utils/sms";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = parseSMS(body);

    return NextResponse.json(
      {
        success: true,
        data: parsed,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("SMS API ERROR:", err);
    return NextResponse.json(
      {
        success: false,
        error: "Invalid SMS format",
      },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json({ message: "Only POST allowed" });
}
