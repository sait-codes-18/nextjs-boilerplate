export function parseSMS(body: any) {
  try {
    const text = body.body || "";

    // Extract amount
    const amountMatch = text.match(/Rs\.?\s?(\d+)/i);
    const amount = amountMatch ? parseInt(amountMatch[1]) : 0;

    // Extract merchant
    const merchantMatch = text.match(/spent at (.+?) using/i);
    const merchant = merchantMatch ? merchantMatch[1] : "Unknown";

    // Categorize
    let category = "Other";
    if (merchant.toLowerCase().includes("zomato")) category = "Food";

    return {
      from: body.from || "",
      timestamp: body.timestamp || Date.now(),
      amount,
      merchant,
      category,
      raw: text,
    };
  } catch (err) {
    console.error("Parse Error:", err);
    throw new Error("Invalid SMS Format");
  }
}
