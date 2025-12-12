import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { budget, spent } = await request.json();

  const remaining = budget - spent;

  return NextResponse.json({
    budget,
    spent,
    remaining,
  });
}

export function GET() {
  return NextResponse.json({ message: "Only POST allowed" });
}
