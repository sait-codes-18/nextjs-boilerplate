export function calculateBudget(transactions: any[]) {
  let spent = 0;

  transactions.forEach((t: any) => {
    spent += Math.abs(t.amount);
  });

  const budget = 50000; // Dummy fixed budget
  const remaining = budget - spent;

  return {
    budget,
    remaining,
  };
}
