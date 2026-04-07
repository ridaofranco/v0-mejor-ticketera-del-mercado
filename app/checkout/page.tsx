import Link from "next/link"
import { ArrowLeft, CreditCard, Ticket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <Ticket className="h-6 w-6 text-rose-500" />
              <span className="text-xl font-bold">TicketPro</span>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-8">
            <Link
              href="/evento/1"
              className="inline-flex items-center text-sm font-medium text-rose-500 hover:underline"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Volver al evento
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2 space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-1">Finalizar compra</h1>
                <p className="text-gray-500">Completa tus datos para recibir tus tickets</p>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Información personal</CardTitle>
                  <CardDescription>Ingresa tus datos de contacto</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">Nombre</Label>
                      <Input id="first-name" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Apellido</Label>
                      <Input id="last-name" placeholder="Tu apellido" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                    <p className="text-xs text-gray-500">Recibirás tus tickets en este email</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input id="phone" type="tel" placeholder="+1234567890" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Método de pago</CardTitle>
                  <CardDescription>Elige cómo quieres pagar</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup defaultValue="card">
                    <div className="flex items-center space-x-2 rounded-md border p-3">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-3">
                          <CreditCard className="h-5 w-5 text-gray-500" />
                          <div>
                            <div className="font-medium">Tarjeta de crédito/débito</div>
                            <div className="text-xs text-gray-500">Pago seguro con tarjeta</div>
                          </div>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="space-y-4 pt-2">
                    <div className="space-y-2">
                      <Label htmlFor="card-number">Número de tarjeta</Label>
                      <Input id="card-number" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry-month">Mes</Label>
                        <Select>
                          <SelectTrigger id="expiry-month">
                            <SelectValue placeholder="Mes" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 12 }, (_, i) => (
                              <SelectItem key={i + 1} value={(i + 1).toString()}>
                                {(i + 1).toString().padStart(2, "0")}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expiry-year">Año</Label>
                        <Select>
                          <SelectTrigger id="expiry-year">
                            <SelectValue placeholder="Año" />
                          </SelectTrigger>
                          <SelectContent>
                            {Array.from({ length: 10 }, (_, i) => (
                              <SelectItem key={i} value={(new Date().getFullYear() + i).toString()}>
                                {new Date().getFullYear() + i}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="name-on-card">Nombre en la tarjeta</Label>
                      <Input id="name-on-card" placeholder="Nombre como aparece en la tarjeta" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Resumen de compra</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-bold">Gran Concierto de Rock</h3>
                      <div className="text-sm text-gray-500">15 Diciembre 2023 • 20:00</div>
                      <div className="text-sm text-gray-500">Estadio Nacional</div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <div>
                          <div>General</div>
                          <div className="text-sm text-gray-500">1 x $25.00</div>
                        </div>
                        <div className="font-medium">$25.00</div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span>Subtotal</span>
                        <span>$25.00</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Comisión de servicio</span>
                        <span>$2.50</span>
                      </div>
                      <div className="flex justify-between font-bold mt-2">
                        <span>Total</span>
                        <span>$27.50</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex-col space-y-4">
                  <Button className="w-full bg-rose-500 hover:bg-rose-600" asChild>
                    <Link href="/perfil">Confirmar y pagar $27.50</Link>
                  </Button>
                  <div className="text-xs text-center text-gray-500">
                    Al completar esta compra, aceptas nuestros{" "}
                    <Link href="#" className="text-rose-500 hover:underline">
                      términos y condiciones
                    </Link>
                    .
                  </div>
                </CardFooter>
              </Card>
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
