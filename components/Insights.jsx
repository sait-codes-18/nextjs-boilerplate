"use client"

import { Card } from "@/components/ui/card"
import { AlertCircle, AlertTriangle, Info, Lightbulb } from "lucide-react"

const insights = [
  {
    id: 1,
    type: "warning",
    icon: AlertTriangle,
    title: "High Impulse Spending",
    message: "Your impulse purchases are 23% higher than last month.",
    color: "from-chart-3 to-chart-3/70",
    bgColor: "bg-chart-3/10",
    textColor: "text-chart-3",
  },
  {
    id: 2,
    type: "info",
    icon: Info,
    title: "Budget on Track",
    message: "You're 65% through the month with 35% budget remaining.",
    color: "from-chart-2 to-chart-2/70",
    bgColor: "bg-chart-2/10",
    textColor: "text-chart-2",
  },
  {
    id: 3,
    type: "tip",
    icon: Lightbulb,
    title: "Savings Opportunity",
    message: "Consider moving ₹5,000 to your emergency fund this week.",
    color: "from-chart-5 to-chart-5/70",
    bgColor: "bg-chart-5/10",
    textColor: "text-chart-5",
  },
  {
    id: 4,
    type: "alert",
    icon: AlertCircle,
    title: "Upcoming Bills",
    message: "Internet and phone bills due in 3 days (₹2,450 total).",
    color: "from-destructive to-destructive/70",
    bgColor: "bg-destructive/10",
    textColor: "text-destructive",
  },
]

export function Insights() {
  return (
    <Card className="p-6 bg-card border-border/50 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-chart-1">
          <Lightbulb className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-semibold text-lg text-foreground">Insights</h3>
      </div>

      <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
        {insights.map((insight) => {
          const Icon = insight.icon
          return (
            <div
              key={insight.id}
              className={`p-4 rounded-xl ${insight.bgColor} border border-current/20 hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer group`}
            >
              <div className="flex gap-3">
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br ${insight.color} flex items-center justify-center shadow-sm`}
                >
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <div className="flex-1 min-w-0">
                  <h4
                    className={`font-semibold text-sm mb-1 ${insight.textColor} group-hover:opacity-80 transition-opacity`}
                  >
                    {insight.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{insight.message}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
