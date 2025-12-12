"use client"

import { Card } from "@/components/ui/card"
import { TrendingDown, Wallet } from "lucide-react"

export function ShadowBudget() {
  const budget = 50000
  const spent = 32500
  const remaining = budget - spent
  const percentage = (spent / budget) * 100

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-secondary/5 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-br from-secondary to-chart-2">
          <Wallet className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-semibold text-lg text-foreground">Shadow Budget</h3>
      </div>

      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-baseline mb-2">
            <span className="text-sm text-muted-foreground">Monthly Budget</span>
            <span className="text-2xl font-bold text-foreground">₹{budget.toLocaleString()}</span>
          </div>

          <div className="relative h-3 bg-muted rounded-full overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-secondary via-chart-2 to-chart-5 rounded-full transition-all duration-700"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="flex justify-between items-center mt-2 text-xs">
            <span className="text-muted-foreground">Spent: ₹{spent.toLocaleString()}</span>
            <span className="text-muted-foreground">{percentage.toFixed(0)}%</span>
          </div>
        </div>

        <div className="pt-4 border-t border-border/50">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-chart-5/20">
              <TrendingDown className="h-4 w-4 text-chart-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">Estimated Remaining</p>
              <p className="text-xl font-bold text-chart-5">₹{remaining.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
