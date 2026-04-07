import Link from "next/link"
import { Bell, CreditCard, Edit, LogOut, Settings, Ticket, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function PerfilPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Ticket className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">TicketPro</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-medium hover:underline">
              Eventos
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Organizadores
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Precios
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Ayuda
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon">
              <Bell className="h-5 w-5" />
              <span className="sr-only">Notificaciones</span>
            </Button>
            <Button variant="outline" size="icon" className="border-rose-500 text-rose-500">
              <User className="h-5 w-5" />
              <span className="sr-only">Perfil</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4">
              <div className="sticky top-24 space-y-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full bg-gray-200 overflow-hidden mb-4">
                    <img
                      src="/placeholder.svg?height=200&width=200&text=Avatar"
                      alt="Foto de perfil"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold">María López</h2>
                  <p className="text-gray-500">maria@ejemplo.com</p>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Edit className="h-4 w-4 mr-2" />
                    Editar perfil
                  </Button>
                </div>
                <Separator />
                <nav className="flex flex-col space-y-1">
                  <Button variant="ghost" className="justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Mi perfil
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Ticket className="mr-2 h-4 w-4" />
                    Mis tickets
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Métodos de pago
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Bell className="mr-2 h-4 w-4" />
                    Notificaciones
                  </Button>
                  <Button variant="ghost" className="justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Configuración
                  </Button>
                  <Separator className="my-2" />
                  <Button variant="ghost" className="justify-start text-red-500 hover:text-red-600 hover:bg-red-50">
                    <LogOut className="mr-2 h-4 w-4" />
                    Cerrar sesión
                  </Button>
                </nav>
              </div>
            </div>
            <div className="md:w-3/4">
              <Tabs defaultValue="tickets" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="tickets">Mis Tickets</TabsTrigger>
                  <TabsTrigger value="perfil">Perfil</TabsTrigger>
                  <TabsTrigger value="pagos">Métodos de Pago</TabsTrigger>
                </TabsList>

                <TabsContent value="tickets" className="space-y-6">
                  <h1 className="text-2xl font-bold mb-6">Mis Tickets</h1>

                  <div className="grid gap-6">
                    {[
                      {
                        title: "Festival de Música Electrónica",
                        date: "15 Dic 2023 • 20:00",
                        location: "Club Nocturno Central",
                        ticketType: "VIP",
                        ticketId: "TKT-12345-ABC",
                        status: "Próximo",
                      },
                      {
                        title: "Concierto de Rock Alternativo",
                        date: "22 Dic 2023 • 19:30",
                        location: "Estadio Municipal",
                        ticketType: "General",
                        ticketId: "TKT-67890-DEF",
                        status: "Próximo",
                      },
                      {
                        title: "Obra de Teatro: Romeo y Julieta",
                        date: "10 Nov 2023 • 18:00",
                        location: "Teatro Nacional",
                        ticketType: "Palco",
                        ticketId: "TKT-54321-GHI",
                        status: "Pasado",
                      },
                    ].map((ticket, i) => (
                      <Card key={i} className={ticket.status === "Pasado" ? "opacity-70" : ""}>
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle>{ticket.title}</CardTitle>
                              <CardDescription>
                                {ticket.date} • {ticket.location}
                              </CardDescription>
                            </div>
                            <div
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                ticket.status === "Próximo"
                                  ? "bg-green-100 text-green-800"
                                  : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {ticket.status}
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-gray-500">Tipo de ticket</p>
                              <p className="font-medium">{ticket.ticketType}</p>
                            </div>
                            <div>
                              <p className="text-sm text-gray-500">ID del ticket</p>
                              <p className="font-medium">{ticket.ticketId}</p>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="flex justify-between pt-2">
                          <Button variant="outline" size="sm">
                            Ver detalles
                          </Button>
                          {ticket.status === "Próximo" ? (
                            <Button className="bg-rose-500 hover:bg-rose-600" size="sm">
                              Ver QR
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm">
                              Descargar PDF
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="perfil" className="space-y-6">
                  <h1 className="text-2xl font-bold mb-6">Información Personal</h1>

                  <Card>
                    <CardHeader>
                      <CardTitle>Datos de perfil</CardTitle>
                      <CardDescription>Actualiza tu información personal</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">Nombre</Label>
                          <Input id="first-name" defaultValue="María" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Apellido</Label>
                          <Input id="last-name" defaultValue="López" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue="maria@ejemplo.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input id="phone" type="tel" defaultValue="+1234567890" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birth-date">Fecha de nacimiento</Label>
                        <Input id="birth-date" type="date" defaultValue="1990-01-15" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-rose-500 hover:bg-rose-600">Guardar cambios</Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Cambiar contraseña</CardTitle>
                      <CardDescription>Actualiza tu contraseña para mayor seguridad</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="current-password">Contraseña actual</Label>
                        <Input id="current-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="new-password">Nueva contraseña</Label>
                        <Input id="new-password" type="password" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="confirm-password">Confirmar nueva contraseña</Label>
                        <Input id="confirm-password" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="bg-rose-500 hover:bg-rose-600">Actualizar contraseña</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>

                <TabsContent value="pagos" className="space-y-6">
                  <h1 className="text-2xl font-bold mb-6">Métodos de Pago</h1>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tarjetas guardadas</CardTitle>
                      <CardDescription>Gestiona tus métodos de pago</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="bg-blue-100 p-2 rounded">
                            <CreditCard className="h-6 w-6 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">Visa terminada en 4242</p>
                            <p className="text-sm text-gray-500">Expira: 12/25</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            Editar
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                            Eliminar
                          </Button>
                        </div>
                      </div>

                      <div className="border rounded-lg p-4 flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="bg-red-100 p-2 rounded">
                            <CreditCard className="h-6 w-6 text-red-600" />
                          </div>
                          <div>
                            <p className="font-medium">Mastercard terminada en 5678</p>
                            <p className="text-sm text-gray-500">Expira: 08/24</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            Editar
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-50">
                            Eliminar
                          </Button>
                        </div>
                      </div>

                      <Button variant="outline" className="w-full">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Añadir nueva tarjeta
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Historial de pagos</CardTitle>
                      <CardDescription>Tus transacciones recientes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            event: "Festival de Música Electrónica",
                            date: "10/12/2023",
                            amount: "$120.00",
                            status: "Completado",
                          },
                          {
                            event: "Concierto de Rock Alternativo",
                            date: "05/12/2023",
                            amount: "$80.00",
                            status: "Completado",
                          },
                          {
                            event: "Obra de Teatro: Romeo y Julieta",
                            date: "20/10/2023",
                            amount: "$60.00",
                            status: "Completado",
                          },
                        ].map((payment, i) => (
                          <div key={i} className="flex justify-between items-center py-2 border-b last:border-0">
                            <div>
                              <p className="font-medium">{payment.event}</p>
                              <p className="text-sm text-gray-500">{payment.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-medium">{payment.amount}</p>
                              <p className="text-xs text-green-600">{payment.status}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        Ver historial completo
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Ticket className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">TicketPro</span>
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-6">
            <Link href="#" className="text-sm hover:underline">
              Términos
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Privacidad
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Cookies
            </Link>
            <Link href="#" className="text-sm hover:underline">
              Contacto
            </Link>
          </nav>
          <div className="text-sm text-gray-500">© 2023 TicketPro. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  )
}
