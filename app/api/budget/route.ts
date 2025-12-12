// utils/budget.ts

export function calculateBudget(transactions: any[]) {
  const monthlyBudget = 50000;

  let spent = 0;
  transactions.forEach((t) => (spent += Math.abs(Number(t.amount))));

  const remaining = monthlyBudget - spent;

  return {
    budget: monthlyBudget,
    spent,
    remaining,
  };
}
