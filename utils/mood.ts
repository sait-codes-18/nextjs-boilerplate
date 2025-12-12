export function calculateMood(transactions: any[]) {
  let score = 0;

  transactions.forEach((t: any) => {
    score += t.amount; // expenses negative, income positive
  });

  return {
    mood: score >= 0 ? "Happy" : "Neutral",
    score,
  };
}
