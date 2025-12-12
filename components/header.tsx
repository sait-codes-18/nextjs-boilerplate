import { Bell, Search } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-16 items-center px-4 md:px-8">
        <div className="flex items-center gap-2 font-bold text-xl md:text-2xl text-primary">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground text-sm">
            S
          </div>
          <span className="hidden sm:inline">Spendonomics</span>
        </div>

        <div className="flex-1 flex items-center justify-end gap-4">
          <div className="hidden md:flex relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search transactions..." className="pl-9 bg-muted/50 border-border/50" />
          </div>

          <button className="relative p-2 rounded-full hover:bg-accent transition-colors">
            <Bell className="h-5 w-5 text-foreground" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
          </button>

          <Avatar className="h-9 w-9 ring-2 ring-primary/20">
            <AvatarImage src="/professional-user.png" />
            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              AK
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}
