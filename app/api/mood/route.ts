// utils/mood.ts

export function calculateMood(transactions: any[]) {
  let score = 0;

  transactions.forEach((t) => {
    score += t.amount > 0 ? -1 : 1; // spending reduces mood, income improves mood
  });

  let mood: "Happy" | "Neutral" | "Stressed" = "Neutral";

  if (score > 2) mood = "Happy";
  else if (score < -2) mood = "Stressed";

  return {
    mood,
    score,
  };
}
