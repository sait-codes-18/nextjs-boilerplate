import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { MoodMeter } from "@/components/mood-meter"
import { ShadowBudget } from "@/components/shadow-budget"
import { SpendCompass } from "@/components/spend-compass"
import { TransactionList } from "@/components/transaction-list"
import { Insights } from "@/components/insights"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/10">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-4 md:p-8 ml-0 md:ml-64">
          <div className="max-w-7xl mx-auto space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">Welcome back, Alex</h1>
              <p className="text-muted-foreground">Here's your financial snapshot for today</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <MoodMeter />
              <ShadowBudget />
              <div className="md:col-span-2 lg:col-span-1">
                <SpendCompass />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <TransactionList />
              </div>
              <div>
                <Insights />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
