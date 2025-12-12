import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { transactions } = await request.json();

    let spent = 0;
    transactions.forEach((t: any) => (spent += Math.abs(t.amount)));

    const budget = 50000;
    const remaining = budget - spent;

    return NextResponse.json({
      budget,
      remaining,
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Invalid budget request" }, { status: 500 });
  }
}

export function GET() {
  return NextResponse.json({ message: "Only POST allowed" });
}
