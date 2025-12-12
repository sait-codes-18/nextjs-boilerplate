import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { transactions } = await request.json();

    let score = 0;
    transactions.forEach((t: any) => (score += t.amount));

    return NextResponse.json({
      mood: score >= 0 ? "Happy" : "Neutral",
      score,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid mood request" },
      { status: 500 }
    );
  }
}

export function GET() {
  return NextResponse.json(
    { message: "Only POST allowed" },
    { status: 405 }
  );
}
