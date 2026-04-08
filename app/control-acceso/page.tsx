import { ArrowRight, QrCode, Search, Ticket, Upload, UserCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DashboardHeader } from "@/components/dashboard-header"

export default function ControlAccesoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold">Control de Acceso</h1>
              <p className="text-muted-foreground">Gestiona la entrada de asistentes a tus eventos</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Upload className="mr-2 h-4 w-4" />
                Exportar lista
              </Button>
              <Button className="bg-primary hover:bg-der-orange-dark">
                <QrCode className="mr-2 h-4 w-4" />
                Escanear QR
              </Button>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Seleccionar evento</CardTitle>
              <CardDescription>Elige el evento para el control de acceso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: "Festival de Música Electrónica",
                    date: "15 Dic 2023",
                    location: "Club Nocturno Central",
                    active: true,
                  },
                  {
                    title: "Concierto de Rock Alternativo",
                    date: "22 Dic 2023",
                    location: "Estadio Municipal",
                    active: false,
                  },
                  {
                    title: "Obra de Teatro: Romeo y Julieta",
                    date: "10 Ene 2024",
                    location: "Teatro Nacional",
                    active: false,
                  },
                ].map((event, i) => (
                  <Card key={i} className={`cursor-pointer ${event.active ? "border-primary bg-primary/5" : ""}`}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                      <CardDescription>
                        {event.date} • {event.location}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter className="pt-2">
                      {event.active ? (
                        <div className="text-primary font-medium text-sm">Evento activo</div>
                      ) : (
                        <Button variant="ghost" size="sm" className="text-primary">
                          Seleccionar
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="escaneo" className="w-full">
            <TabsList className="mb-6">
              <TabsTrigger value="escaneo">Escaneo QR</TabsTrigger>
              <TabsTrigger value="lista">Lista de Asistentes</TabsTrigger>
              <TabsTrigger value="estadisticas">Estadísticas</TabsTrigger>
            </TabsList>

            <TabsContent value="escaneo" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Escaneo de tickets</CardTitle>
                  <CardDescription>Escanea el código QR del ticket para validar la entrada</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  <div className="w-full max-w-md aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                    <QrCode className="h-24 w-24 text-gray-400" />
                    <div className="absolute">
                      <Button className="bg-primary hover:bg-der-orange-dark">Activar cámara</Button>
                    </div>
                  </div>
                  <div className="w-full max-w-md">
                    <div className="flex w-full items-center space-x-2">
                      <Input placeholder="Ingresa el código del ticket manualmente" />
                      <Button type="submit" className="bg-primary hover:bg-der-orange-dark">
                        Validar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Últimos accesos</CardTitle>
                  <CardDescription>Registro de los últimos tickets escaneados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        name: "Carlos Rodríguez",
                        ticketId: "TKT-12345-ABC",
                        ticketType: "VIP",
                        time: "12:45",
                        status: "Válido",
                      },
                      {
                        name: "María López",
                        ticketId: "TKT-67890-DEF",
                        ticketType: "General",
                        time: "12:42",
                        status: "Válido",
                      },
                      {
                        name: "Juan Pérez",
                        ticketId: "TKT-54321-GHI",
                        ticketType: "General",
                        time: "12:38",
                        status: "Duplicado",
                      },
                      {
                        name: "Ana Martínez",
                        ticketId: "TKT-13579-JKL",
                        ticketType: "VIP",
                        time: "12:35",
                        status: "Válido",
                      },
                      {
                        name: "Roberto Sánchez",
                        ticketId: "TKT-24680-MNO",
                        ticketType: "General",
                        time: "12:30",
                        status: "Inválido",
                      },
                    ].map((entry, i) => (
                      <div key={i} className="flex justify-between items-center p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div
                            className={`rounded-full p-2 ${
                              entry.status === "Válido"
                                ? "bg-green-100"
                                : entry.status === "Duplicado"
                                  ? "bg-amber-100"
                                  : "bg-red-100"
                            }`}
                          >
                            <UserCheck
                              className={`h-5 w-5 ${
                                entry.status === "Válido"
                                  ? "text-green-600"
                                  : entry.status === "Duplicado"
                                    ? "text-amber-600"
                                    : "text-red-600"
                              }`}
                            />
                          </div>
                          <div>
                            <p className="font-medium">{entry.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {entry.ticketId} • {entry.ticketType}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{entry.time}</p>
                          <p
                            className={`text-xs font-medium ${
                              entry.status === "Válido"
                                ? "text-green-600"
                                : entry.status === "Duplicado"
                                  ? "text-amber-600"
                                  : "text-red-600"
                            }`}
                          >
                            {entry.status}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="lista" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Lista de asistentes</CardTitle>
                  <CardDescription>Todos los tickets vendidos para este evento</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex w-full items-center space-x-2 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input type="search" placeholder="Buscar por nombre o ID de ticket..." className="pl-8" />
                    </div>
                    <Button type="submit" className="bg-primary hover:bg-der-orange-dark">
                      Buscar
                    </Button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b text-left">
                          <th className="p-2 font-medium">Nombre</th>
                          <th className="p-2 font-medium">ID Ticket</th>
                          <th className="p-2 font-medium">Tipo</th>
                          <th className="p-2 font-medium">Email</th>
                          <th className="p-2 font-medium">Estado</th>
                          <th className="p-2 font-medium">Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            name: "Carlos Rodríguez",
                            ticketId: "TKT-12345-ABC",
                            ticketType: "VIP",
                            email: "carlos@ejemplo.com",
                            status: "Ingresado",
                          },
                          {
                            name: "María López",
                            ticketId: "TKT-67890-DEF",
                            ticketType: "General",
                            email: "maria@ejemplo.com",
                            status: "Ingresado",
                          },
                          {
                            name: "Juan Pérez",
                            ticketId: "TKT-54321-GHI",
                            ticketType: "General",
                            email: "juan@ejemplo.com",
                            status: "Ingresado",
                          },
                          {
                            name: "Ana Martínez",
                            ticketId: "TKT-13579-JKL",
                            ticketType: "VIP",
                            email: "ana@ejemplo.com",
                            status: "Ingresado",
                          },
                          {
                            name: "Roberto Sánchez",
                            ticketId: "TKT-24680-MNO",
                            ticketType: "General",
                            email: "roberto@ejemplo.com",
                            status: "Pendiente",
                          },
                          {
                            name: "Laura Gómez",
                            ticketId: "TKT-97531-PQR",
                            ticketType: "VIP",
                            email: "laura@ejemplo.com",
                            status: "Pendiente",
                          },
                          {
                            name: "Pedro Ramírez",
                            ticketId: "TKT-86420-STU",
                            ticketType: "General",
                            email: "pedro@ejemplo.com",
                            status: "Pendiente",
                          },
                          {
                            name: "Sofía Torres",
                            ticketId: "TKT-75319-VWX",
                            ticketType: "General",
                            email: "sofia@ejemplo.com",
                            status: "Pendiente",
                          },
                        ].map((attendee, i) => (
                          <tr key={i} className="border-b">
                            <td className="p-2 text-sm">{attendee.name}</td>
                            <td className="p-2 text-sm">{attendee.ticketId}</td>
                            <td className="p-2 text-sm">{attendee.ticketType}</td>
                            <td className="p-2 text-sm">{attendee.email}</td>
                            <td className="p-2 text-sm">
                              <span
                                className={`inline-block px-2 py-1 rounded-full text-xs ${
                                  attendee.status === "Ingresado"
                                    ? "bg-green-100 text-green-800"
                                    : "bg-gray-100 text-gray-800"
                                }`}
                              >
                                {attendee.status}
                              </span>
                            </td>
                            <td className="p-2 text-sm">
                              <Button variant="ghost" size="sm" className="text-primary">
                                Validar
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="estadisticas" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Total de asistentes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">450 / 500</div>
                    <p className="text-sm text-muted-foreground">90% de asistencia</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Tickets escaneados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">450</div>
                    <p className="text-sm text-muted-foreground">Último hace 5 minutos</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Tickets pendientes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold">50</div>
                    <p className="text-sm text-muted-foreground">10% restante</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Flujo de entrada</CardTitle>
                  <CardDescription>Registro de entradas por hora</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-[2/1] relative">
                    <img
                      src="/placeholder.svg?height=400&width=800&text=Gráfico+de+Flujo"
                      alt="Gráfico de flujo de entrada"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Distribución por tipo de ticket</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-square relative">
                      <img
                        src="/placeholder.svg?height=400&width=400&text=Gráfico+de+Tickets"
                        alt="Gráfico de distribución de tickets"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Problemas detectados</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-red-100 p-2">
                            <Ticket className="h-5 w-5 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium">Tickets duplicados</p>
                            <p className="text-sm text-muted-foreground">3 incidencias</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="rounded-full bg-amber-100 p-2">
                            <Ticket className="h-5 w-5 text-amber-600" />
                          </div>
                          <div>
                            <p className="font-medium">Tickets inválidos</p>
                            <p className="text-sm text-muted-foreground">2 incidencias</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Ver detalles
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

