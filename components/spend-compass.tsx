"use client"

import { Card } from "@/components/ui/card"
import { PieChart } from "lucide-react"

const categories = [
  { name: "Essentials", value: 45, color: "bg-chart-1" },
  { name: "Lifestyle", value: 25, color: "bg-chart-2" },
  { name: "Impulse", value: 15, color: "bg-chart-3" },
  { name: "Obligations", value: 15, color: "bg-chart-4" },
]

export function SpendCompass() {
  const total = categories.reduce((sum, cat) => sum + cat.value, 0)

  // Calculate pie chart segments
  let cumulativePercent = 0
  const segments = categories.map((cat) => {
    const percent = (cat.value / total) * 100
    const startAngle = (cumulativePercent * 360) / 100
    const endAngle = ((cumulativePercent + percent) * 360) / 100
    cumulativePercent += percent

    return {
      ...cat,
      percent,
      startAngle,
      endAngle,
    }
  })

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-primary/5 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 rounded-lg bg-gradient-to-br from-primary to-chart-1">
          <PieChart className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-semibold text-lg text-foreground">Spend Compass</h3>
      </div>

      <div className="flex flex-col items-center">
        <div className="relative w-48 h-48">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
            {segments.map((segment, index) => {
              const largeArcFlag = segment.percent > 50 ? 1 : 0
              const startRad = (segment.startAngle * Math.PI) / 180
              const endRad = (segment.endAngle * Math.PI) / 180
              const x1 = 100 + 80 * Math.cos(startRad)
              const y1 = 100 + 80 * Math.sin(startRad)
              const x2 = 100 + 80 * Math.cos(endRad)
              const y2 = 100 + 80 * Math.sin(endRad)

              return (
                <path
                  key={index}
                  d={`M 100 100 L ${x1} ${y1} A 80 80 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                  className={`${segment.color.replace("bg-", "fill-")} transition-all duration-300 hover:opacity-80`}
                />
              )
            })}
            {/* Center white circle */}
            <circle cx="100" cy="100" r="50" fill="white" />
          </svg>
        </div>

        <div className="mt-6 w-full space-y-2">
          {categories.map((cat, index) => {
            const percent = (cat.value / total) * 100
            return (
              <div
                key={index}
                className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${cat.color}`} />
                  <span className="text-sm font-medium text-foreground">{cat.name}</span>
                </div>
                <span className="text-sm font-semibold text-muted-foreground">{percent.toFixed(0)}%</span>
              </div>
            )
          })}
        </div>
      </div>
    </Card>
  )
}
