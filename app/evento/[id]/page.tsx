import Link from "next/link"
import { Calendar, Clock, MapPin, Share2, Ticket, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-8 w-8 bg-primary rounded">
              <span className="text-lg font-bold text-white">E</span>
            </div>
            <span className="text-xl font-bold">
              ENT<span className="text-primary">RÁ</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/eventos" className="text-sm font-medium hover:underline">
              Eventos
            </Link>
            <Link href="/organizadores" className="text-sm font-medium hover:underline">
              Organizadores
            </Link>
            <Link href="/ayuda" className="text-sm font-medium hover:underline">
              Ayuda
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm font-medium hover:underline hidden md:inline-block">
              Iniciar Sesión
            </Link>
            <Button className="bg-primary hover:bg-der-orange-dark" asChild>
              <Link href="/auth/login">Registrarse</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div className="relative h-[300px] md:h-[400px] w-full bg-gray-900">
          <img
            src="/placeholder.svg?height=800&width=1600&text=Banner+del+Evento"
            alt="Banner del evento"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-white">
            <div className="container">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="inline-block bg-primary text-white text-xs font-medium px-2 py-1 rounded mb-2">
                    Concierto
                  </div>
                  <h1 className="text-2xl md:text-4xl font-bold">Gran Concierto de Rock</h1>
                  <div className="flex flex-wrap gap-4 mt-2">
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      15 Diciembre 2023
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-1" />
                      20:00 - 23:00
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-1" />
                      Estadio Nacional
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="text-white border-white hover:bg-white/20">
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartir
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <Tabs defaultValue="detalles" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="detalles">Detalles</TabsTrigger>
                    <TabsTrigger value="ubicacion">Ubicación</TabsTrigger>
                    <TabsTrigger value="organizador">Organizador</TabsTrigger>
                  </TabsList>

                  <TabsContent value="detalles" className="mt-0">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">Acerca del evento</h2>
                        <p className="text-muted-foreground mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="text-muted-foreground mb-4">
                          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                          mollit anim id est laborum.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">Lineup</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Banda Principal - 20:00</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Artista Invitado - 19:00</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-primary"></div>
                            <span>Telonero - 18:00</span>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">Información adicional</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-muted-foreground" />
                            <span>Edad mínima: 18 años</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-muted-foreground" />
                            <span>Duración: 3 horas</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="ubicacion" className="mt-0">
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-bold mb-4">Ubicación del evento</h2>
                        <p className="text-muted-foreground mb-4">
                          <strong>Estadio Nacional</strong>
                          <br />
                          Av. Principal 123
                          <br />
                          Ciudad Capital
                          <br />
                          CP 12345
                        </p>
                      </div>

                      <div className="aspect-video bg-card rounded-lg overflow-hidden">
                        <img
                          src="/placeholder.svg?height=450&width=800&text=Mapa+del+Evento"
                          alt="Mapa del evento"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">Cómo llegar</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium">En transporte público:</h4>
                            <p className="text-muted-foreground">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                          <div>
                            <h4 className="font-medium">En coche:</h4>
                            <p className="text-muted-foreground">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt
                              ut labore.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="organizador" className="mt-0">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-full bg-card overflow-hidden">
                          <img
                            src="/placeholder.svg?height=200&width=200&text=Logo"
                            alt="Logo del organizador"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold">Productora Nacional</h2>
                          <p className="text-muted-foreground">Organizador de eventos desde 2010</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-muted-foreground mb-4">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold mb-3">Otros eventos del organizador</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {[1, 2].map((item) => (
                            <Card key={item} className="overflow-hidden">
                              <div className="aspect-[16/9] relative">
                                <img
                                  src={`/placeholder.svg?height=200&width=400&text=Evento+${item}`}
                                  alt={`Evento ${item}`}
                                  className="object-cover w-full h-full"
                                />
                              </div>
                              <CardHeader className="p-3">
                                <h4 className="font-bold">Otro Evento {item}</h4>
                                <p className="text-xs text-muted-foreground">10 Enero 2024</p>
                              </CardHeader>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold">Tickets</h2>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-card/50 cursor-pointer">
                        <div>
                          <h3 className="font-medium">General</h3>
                          <p className="text-sm text-muted-foreground">Acceso general sin asiento asignado</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">$25</div>
                          <div className="text-xs text-muted-foreground">+ $2.50 comisión</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-card/50 cursor-pointer">
                        <div>
                          <h3 className="font-medium">VIP</h3>
                          <p className="text-sm text-muted-foreground">Acceso preferencial y zona exclusiva</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">$50</div>
                          <div className="text-xs text-muted-foreground">+ $5.00 comisión</div>
                        </div>
                      </div>

                      <div className="flex justify-between items-center p-3 border rounded-lg hover:bg-card/50 cursor-pointer">
                        <div>
                          <h3 className="font-medium">Premium</h3>
                          <p className="text-sm text-muted-foreground">Incluye meet & greet con artistas</p>
                        </div>
                        <div className="text-right">
                          <div className="font-bold">$100</div>
                          <div className="text-xs text-muted-foreground">+ $10.00 comisión</div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Subtotal</span>
                        <span>$25.00</span>
                      </div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Comisión</span>
                        <span>$2.50</span>
                      </div>
                      <div className="flex justify-between font-bold mt-2">
                        <span>Total</span>
                        <span>$27.50</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-primary hover:bg-der-orange-dark" asChild>
                      <Link href="/checkout">Comprar ahora</Link>
                    </Button>
                  </CardFooter>
                </Card>

                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Tickets digitales instantáneos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Pago 100% seguro</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg
                      className="h-4 w-4 text-green-600"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>Soporte 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </section>
      </main>
      <footer className="border-t bg-card">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center h-8 w-8 bg-primary rounded">
              <span className="text-lg font-bold text-white">E</span>
            </div>
            <span className="text-xl font-bold">
              ENT<span className="text-primary">RÁ</span>
            </span>
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
          <div className="text-sm text-muted-foreground">© 2026 ENTRÁ by Somos DER</div>
        </div>
      </footer>
    </div>
  )
}

