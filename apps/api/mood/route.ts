import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { transactions } = await request.json();
  let score = 0;

  transactions.forEach((t: any) => (score += t.amount));

  return NextResponse.json({
    mood: score > 0 ? "Happy" : "Neutral",
    score,
  });
}

export function GET() {
  return NextResponse.json({ message: "Only POST allowed" });
}
