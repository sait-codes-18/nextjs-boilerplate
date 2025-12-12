export function parseSMS(body: any) {
  try {
    const { message } = body;

    if (!message || typeof message !== "string") {
      throw new Error("Invalid SMS text");
    }

    // Dummy parser logic for now
    return {
      original: message,
      amount: Math.floor(Math.random() * 5000),
      category: "General",
    };
  } catch (err) {
    console.error("parseSMS error:", err);
    return null;
  }
}
