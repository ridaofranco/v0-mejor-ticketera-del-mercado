import type React from "react"
import Link from "next/link"
import { BarChart3, Calendar, CreditCard, Home, Settings, Tag, Ticket, Users, QrCode } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface DashboardNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DashboardNav({ className, ...props }: DashboardNavProps) {
  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: <Home className="mr-2 h-4 w-4" />,
    },
    {
      title: "Eventos",
      href: "/dashboard/eventos/crear",
      icon: <Calendar className="mr-2 h-4 w-4" />,
    },
    {
      title: "Tickets",
      href: "/dashboard/tickets",
      icon: <Ticket className="mr-2 h-4 w-4" />,
    },
    {
      title: "Ventas",
      href: "/dashboard/ventas",
      icon: <CreditCard className="mr-2 h-4 w-4" />,
    },
    {
      title: "Promociones",
      href: "/dashboard/promociones",
      icon: <Tag className="mr-2 h-4 w-4" />,
    },
    {
      title: "Clientes",
      href: "/dashboard/clientes",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
    {
      title: "Estadísticas",
      href: "/dashboard/estadisticas",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
    {
      title: "Control de Acceso",
      href: "/control-acceso",
      icon: <QrCode className="mr-2 h-4 w-4" />,
    },
    {
      title: "Configuración",
      href: "/dashboard/configuracion",
      icon: <Settings className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <div className={cn("flex flex-col space-y-1", className)} {...props}>
      {navItems.map((item) => (
        <Button key={item.href} variant="ghost" className="justify-start" asChild>
          <Link href={item.href}>
            {item.icon}
            {item.title}
          </Link>
        </Button>
      ))}
    </div>
  )
}
