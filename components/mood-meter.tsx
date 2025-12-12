"use client"

import { Card } from "@/components/ui/card"
import { Smile } from "lucide-react"
import { useState } from "react"

export function MoodMeter() {
  const [mood] = useState<"happy" | "neutral" | "stressed">("happy")
  const [percentage] = useState(75)

  const moodConfig = {
    happy: {
      color: "from-chart-5 to-chart-2",
      label: "Happy",
      emoji: "😊",
    },
    neutral: {
      color: "from-chart-3 to-chart-2",
      label: "Neutral",
      emoji: "😐",
    },
    stressed: {
      color: "from-chart-4 to-destructive",
      label: "Stressed",
      emoji: "😰",
    },
  }

  const config = moodConfig[mood]

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-accent/5 border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center gap-2 mb-6">
        <div className={`p-2 rounded-lg bg-gradient-to-br ${config.color}`}>
          <Smile className="h-5 w-5 text-white" />
        </div>
        <h3 className="font-semibold text-lg text-foreground">Mood Meter</h3>
      </div>

      <div className="flex flex-col items-center justify-center py-4">
        <div className="relative w-40 h-40">
          {/* Background circle */}
          <svg className="w-full h-full -rotate-90" viewBox="0 0 160 160">
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
              className="text-muted/30"
            />
            {/* Progress circle */}
            <circle
              cx="80"
              cy="80"
              r="70"
              fill="none"
              stroke="url(#moodGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={`${(percentage / 100) * 440} 440`}
              className="transition-all duration-1000"
            />
            <defs>
              <linearGradient id="moodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" className="text-chart-5" stopColor="currentColor" />
                <stop offset="100%" className="text-chart-2" stopColor="currentColor" />
              </linearGradient>
            </defs>
          </svg>

          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-4xl mb-1">{config.emoji}</span>
            <span className="text-sm font-medium text-muted-foreground">{config.label}</span>
          </div>
        </div>

        <p className="mt-6 text-sm text-center text-muted-foreground">Your spending is under control</p>
      </div>
    </Card>
  )
}
