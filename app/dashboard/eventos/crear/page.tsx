import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Plus, Trash, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { DashboardHeader } from "@/components/dashboard-header"

export default function CrearEventoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link
              href="/dashboard/eventos"
              className="inline-flex items-center text-sm font-medium text-rose-500 hover:underline"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Volver a eventos
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-3xl font-bold mb-1">Crear nuevo evento</h1>
                <p className="text-gray-500">Completa la información para publicar tu evento</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Información básica</CardTitle>
                  <CardDescription>Detalles principales de tu evento</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-name">Nombre del evento</Label>
                    <Input id="event-name" placeholder="Ej: Festival de Música Electrónica" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-category">Categoría</Label>
                    <Select>
                      <SelectTrigger id="event-category">
                        <SelectValue placeholder="Selecciona una categoría" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="conciertos">Conciertos</SelectItem>
                        <SelectItem value="festivales">Festivales</SelectItem>
                        <SelectItem value="teatro">Teatro</SelectItem>
                        <SelectItem value="deportes">Deportes</SelectItem>
                        <SelectItem value="conferencias">Conferencias</SelectItem>
                        <SelectItem value="gastronomia">Gastronomía</SelectItem>
                        <SelectItem value="arte">Arte y Cultura</SelectItem>
                        <SelectItem value="otros">Otros</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-description">Descripción</Label>
                    <Textarea
                      id="event-description"
                      placeholder="Describe tu evento de forma atractiva..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Imagen principal</Label>
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <div className="flex flex-col items-center">
                        <Upload className="h-8 w-8 text-gray-400 mb-2" />
                        <p className="text-sm text-gray-500 mb-1">Arrastra una imagen o haz clic para seleccionar</p>
                        <p className="text-xs text-gray-400">PNG, JPG o WEBP (máx. 5MB)</p>
                      </div>
                      <Input type="file" className="hidden" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Fecha y ubicación</CardTitle>
                  <CardDescription>Cuándo y dónde se realizará tu evento</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="event-date">Fecha</Label>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-gray-500 mr-2" />
                        <Input id="event-date" type="date" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-time">Hora</Label>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-gray-500 mr-2" />
                        <Input id="event-time" type="time" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-location">Lugar</Label>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                      <Input id="event-location" placeholder="Ej: Teatro Nacional" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-address">Dirección</Label>
                    <Input id="event-address" placeholder="Ej: Av. Principal 123, Ciudad" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-capacity">Capacidad</Label>
                    <Input id="event-capacity" type="number" placeholder="Ej: 500" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tickets</CardTitle>
                  <CardDescription>Define los tipos de tickets y precios</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Ticket #1</h3>
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ticket-name-1">Nombre</Label>
                          <Input id="ticket-name-1" placeholder="Ej: General" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ticket-price-1">Precio</Label>
                          <Input id="ticket-price-1" type="number" placeholder="Ej: 25.00" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ticket-quantity-1">Cantidad disponible</Label>
                          <Input id="ticket-quantity-1" type="number" placeholder="Ej: 100" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ticket-type-1">Tipo</Label>
                          <Select>
                            <SelectTrigger id="ticket-type-1">
                              <SelectValue placeholder="Selecciona un tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General</SelectItem>
                              <SelectItem value="vip">VIP</SelectItem>
                              <SelectItem value="early">Early Bird</SelectItem>
                              <SelectItem value="student">Estudiante</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ticket-description-1">Descripción</Label>
                        <Textarea id="ticket-description-1" placeholder="Ej: Acceso general sin asiento asignado" />
                      </div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4 space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="font-medium">Ticket #2</h3>
                      <Button variant="ghost" size="icon">
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ticket-name-2">Nombre</Label>
                          <Input id="ticket-name-2" placeholder="Ej: VIP" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ticket-price-2">Precio</Label>
                          <Input id="ticket-price-2" type="number" placeholder="Ej: 50.00" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="ticket-quantity-2">Cantidad disponible</Label>
                          <Input id="ticket-quantity-2" type="number" placeholder="Ej: 50" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ticket-type-2">Tipo</Label>
                          <Select>
                            <SelectTrigger id="ticket-type-2">
                              <SelectValue placeholder="Selecciona un tipo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="general">General</SelectItem>
                              <SelectItem value="vip">VIP</SelectItem>
                              <SelectItem value="early">Early Bird</SelectItem>
                              <SelectItem value="student">Estudiante</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ticket-description-2">Descripción</Label>
                        <Textarea id="ticket-description-2" placeholder="Ej: Acceso preferencial y zona exclusiva" />
                      </div>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    <Plus className="mr-2 h-4 w-4" />
                    Añadir otro tipo de ticket
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Opciones avanzadas</CardTitle>
                  <CardDescription>Configuración adicional para tu evento</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="event-promocode">Código promocional</Label>
                    <Input id="event-promocode" placeholder="Ej: EARLYBIRD20" />
                    <p className="text-xs text-gray-500">Deja en blanco si no deseas usar un código promocional</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="event-discount">Descuento (%)</Label>
                    <Input id="event-discount" type="number" placeholder="Ej: 20" />
                  </div>
                  <Separator />
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="event-private" className="rounded border-gray-300" />
                    <Label htmlFor="event-private">Evento privado (solo con invitación)</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="event-waitlist" className="rounded border-gray-300" />
                    <Label htmlFor="event-waitlist">Habilitar lista de espera</Label>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="sticky top-24 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Publicación</CardTitle>
                    <CardDescription>Configura cuándo publicar tu evento</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="event-status">Estado</Label>
                      <Select>
                        <SelectTrigger id="event-status">
                          <SelectValue placeholder="Selecciona un estado" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="draft">Borrador</SelectItem>
                          <SelectItem value="published">Publicado</SelectItem>
                          <SelectItem value="scheduled">Programado</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-publish-date">Fecha de publicación</Label>
                      <Input id="event-publish-date" type="date" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="event-publish-time">Hora de publicación</Label>
                      <Input id="event-publish-time" type="time" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Resumen</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-1">
                      <div className="text-sm text-gray-500">Comisión de servicio</div>
                      <div className="font-medium">2.5% + $0.30 por venta</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-500">Método de pago</div>
                      <div className="font-medium">Transferencia bancaria</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-gray-500">Liquidación</div>
                      <div className="font-medium">7 días después del evento</div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col gap-2">
                  <Button className="w-full bg-rose-500 hover:bg-rose-600">Publicar evento</Button>
                  <Button className="w-full" variant="outline">
                    Guardar como borrador
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
