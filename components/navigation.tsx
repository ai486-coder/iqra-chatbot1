import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Info } from 'lucide-react'

export function Navigation() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
          <BookOpen className="h-6 w-6" />
          IU Policy Assistant
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm">
              Chat
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="ghost" size="sm">
              <Info className="h-4 w-4 mr-1" />
              About
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  )
}