import Link from "next/link"
import { Bell, Menu, Ticket, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DashboardNav } from "@/components/dashboard-nav"

export function DashboardHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72">
              <div className="flex items-center gap-2 mb-6">
                <Ticket className="h-6 w-6 text-rose-500" />
                <span className="text-xl font-bold">TicketPro</span>
              </div>
              <DashboardNav />
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2">
            <Ticket className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold hidden md:inline-block">TicketPro</span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="icon">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notificaciones</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Perfil</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/perfil">Perfil</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard">Configuración</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/dashboard">Facturación</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/auth/login">Cerrar sesión</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
