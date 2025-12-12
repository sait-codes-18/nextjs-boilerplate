"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Receipt } from "lucide-react"

const transactions = [
  {
    id: 1,
    description: "Grocery Shopping",
    amount: -4250,
    category: "Essentials",
    timestamp: "2 hours ago",
    categoryColor: "bg-chart-1/10 text-chart-1 border-chart-1/20",
  },
  {
    id: 2,
    description: "Salary Deposit",
    amount: 75000,
    category: "Income",
    timestamp: "1 day ago",
    categoryColor: "bg-chart-5/10 text-chart-5 border-chart-5/20",
  },
  {
    id: 3,
    description: "Coffee Shop",
    amount: -450,
    category: "Lifestyle",
    timestamp: "1 day ago",
    categoryColor: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  },
  {
    id: 4,
    description: "Online Shopping",
    amount: -8999,
    category: "Impulse",
    timestamp: "2 days ago",
    categoryColor: "bg-chart-3/10 text-chart-3 border-chart-3/20",
  },
  {
    id: 5,
    description: "Electricity Bill",
    amount: -2100,
    category: "Obligations",
    timestamp: "3 days ago",
    categoryColor: "bg-chart-4/10 text-chart-4 border-chart-4/20",
  },
  {
    id: 6,
    description: "Restaurant Dinner",
    amount: -3200,
    category: "Lifestyle",
    timestamp: "3 days ago",
    categoryColor: "bg-chart-2/10 text-chart-2 border-chart-2/20",
  },
]

export function TransactionList() {
  return (
    <Card className="p-6 bg-card border-border/50 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-secondary">
          <Receipt className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-semibold text-lg text-foreground">Recent Transactions</h3>
      </div>

      <div className="space-y-1">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-all duration-200 hover:translate-x-1 cursor-pointer group"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                  {transaction.description}
                </p>
                <Badge variant="outline" className={`text-xs ${transaction.categoryColor}`}>
                  {transaction.category}
                </Badge>
              </div>
              <p className="text-xs text-muted-foreground">{transaction.timestamp}</p>
            </div>

            <div className="text-right">
              <p className={`font-bold text-lg ${transaction.amount > 0 ? "text-chart-5" : "text-foreground"}`}>
                {transaction.amount > 0 ? "+" : ""}₹{Math.abs(transaction.amount).toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
