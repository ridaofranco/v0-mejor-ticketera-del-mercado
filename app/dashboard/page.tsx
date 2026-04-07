import { BarChart3, Calendar, DollarSign, Download, Plus, Settings, Ticket, Trash, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardNav } from "@/components/dashboard-nav"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10">
        <DashboardNav className="hidden md:block" />
        <main className="flex w-full flex-col overflow-hidden py-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <Button className="bg-rose-500 hover:bg-rose-600" asChild>
              <Link href="/dashboard/eventos/crear">
                <Plus className="mr-2 h-4 w-4" />
                Crear evento
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Ingresos Totales</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45,231.89</div>
                <p className="text-xs text-muted-foreground">+20.1% respecto al mes pasado</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Tickets Vendidos</CardTitle>
                <Ticket className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1,245</div>
                <p className="text-xs text-muted-foreground">+180 en las últimas 24 horas</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Eventos Activos</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">3 finalizan esta semana</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Visitantes</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12,234</div>
                <p className="text-xs text-muted-foreground">+573 respecto a la semana pasada</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="eventos" className="mt-6">
            <TabsList>
              <TabsTrigger value="eventos">Eventos</TabsTrigger>
              <TabsTrigger value="ventas">Ventas</TabsTrigger>
              <TabsTrigger value="estadisticas">Estadísticas</TabsTrigger>
            </TabsList>
            <TabsContent value="eventos" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Festival de Música Electrónica",
                    date: "15 Dic 2023",
                    location: "Club Nocturno Central",
                    sold: 450,
                    total: 500,
                    percent: 90,
                  },
                  {
                    title: "Concierto de Rock Alternativo",
                    date: "22 Dic 2023",
                    location: "Estadio Municipal",
                    sold: 1200,
                    total: 2000,
                    percent: 60,
                  },
                  {
                    title: "Obra de Teatro: Romeo y Julieta",
                    date: "10 Ene 2024",
                    location: "Teatro Nacional",
                    sold: 320,
                    total: 400,
                    percent: 80,
                  },
                  {
                    title: "Conferencia de Tecnología",
                    date: "05 Feb 2024",
                    location: "Centro de Convenciones",
                    sold: 180,
                    total: 300,
                    percent: 60,
                  },
                  {
                    title: "Partido de Fútbol: Final de Copa",
                    date: "20 Dic 2023",
                    location: "Estadio Principal",
                    sold: 25000,
                    total: 30000,
                    percent: 83,
                  },
                  {
                    title: "Festival Gastronómico",
                    date: "12 Ene 2024",
                    location: "Parque Central",
                    sold: 750,
                    total: 1000,
                    percent: 75,
                  },
                ].map((event, i) => (
                  <Card key={i}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>
                        {event.date} • {event.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-2">
                      <div className="flex justify-between items-center mb-1 text-sm">
                        <span>
                          Ventas: {event.sold}/{event.total}
                        </span>
                        <span className="font-medium">{event.percent}%</span>
                      </div>
                      <Progress value={event.percent} className="h-2" />
                    </CardContent>
                    <CardFooter className="flex justify-between pt-2">
                      <Button variant="outline" size="sm">
                        <Settings className="mr-2 h-4 w-4" />
                        Editar
                      </Button>
                      <Button variant="outline" size="sm">
                        <BarChart3 className="mr-2 h-4 w-4" />
                        Estadísticas
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full">
                Cargar más eventos
              </Button>
            </TabsContent>
            <TabsContent value="ventas" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Últimas ventas</CardTitle>
                  <CardDescription>Historial de las ventas más recientes en todos tus eventos.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-8">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b text-left">
                            <th className="p-2 font-medium">ID</th>
                            <th className="p-2 font-medium">Cliente</th>
                            <th className="p-2 font-medium">Evento</th>
                            <th className="p-2 font-medium">Fecha</th>
                            <th className="p-2 font-medium">Cantidad</th>
                            <th className="p-2 font-medium">Total</th>
                            <th className="p-2 font-medium">Estado</th>
                            <th className="p-2 font-medium">Acciones</th>
                          </tr>
                        </thead>
                        <tbody>
                          {[
                            {
                              id: "INV-001",
                              customer: "Carlos Rodríguez",
                              event: "Festival de Música Electrónica",
                              date: "12/12/2023",
                              quantity: 2,
                              amount: "$120.00",
                              status: "Completado",
                            },
                            {
                              id: "INV-002",
                              customer: "María López",
                              event: "Concierto de Rock Alternativo",
                              date: "11/12/2023",
                              quantity: 4,
                              amount: "$200.00",
                              status: "Completado",
                            },
                            {
                              id: "INV-003",
                              customer: "Juan Pérez",
                              event: "Obra de Teatro: Romeo y Julieta",
                              date: "10/12/2023",
                              quantity: 2,
                              amount: "$80.00",
                              status: "Completado",
                            },
                            {
                              id: "INV-004",
                              customer: "Ana Martínez",
                              event: "Partido de Fútbol: Final de Copa",
                              date: "09/12/2023",
                              quantity: 3,
                              amount: "$150.00",
                              status: "Completado",
                            },
                            {
                              id: "INV-005",
                              customer: "Roberto Sánchez",
                              event: "Festival Gastronómico",
                              date: "08/12/2023",
                              quantity: 2,
                              amount: "$60.00",
                              status: "Reembolsado",
                            },
                          ].map((invoice, i) => (
                            <tr key={i} className="border-b">
                              <td className="p-2 text-sm">{invoice.id}</td>
                              <td className="p-2 text-sm">{invoice.customer}</td>
                              <td className="p-2 text-sm">{invoice.event}</td>
                              <td className="p-2 text-sm">{invoice.date}</td>
                              <td className="p-2 text-sm">{invoice.quantity}</td>
                              <td className="p-2 text-sm">{invoice.amount}</td>
                              <td className="p-2 text-sm">
                                <span
                                  className={`inline-block px-2 py-1 rounded-full text-xs ${
                                    invoice.status === "Completado"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {invoice.status}
                                </span>
                              </td>
                              <td className="p-2 text-sm">
                                <div className="flex space-x-2">
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Download className="h-4 w-4" />
                                    <span className="sr-only">Descargar</span>
                                  </Button>
                                  <Button variant="ghost" size="icon" className="h-8 w-8">
                                    <Trash className="h-4 w-4" />
                                    <span className="sr-only">Eliminar</span>
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Ver todas las ventas
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
            <TabsContent value="estadisticas" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Ventas por Categoría</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <div className="aspect-square relative">
                      <img
                        src="/placeholder.svg?height=400&width=400&text=Gráfico+de+Categorías"
                        alt="Gráfico de ventas por categoría"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Ventas Mensuales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square relative">
                      <img
                        src="/placeholder.svg?height=400&width=400&text=Gráfico+de+Ventas"
                        alt="Gráfico de ventas mensuales"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
