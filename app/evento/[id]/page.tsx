import Link from "next/link"
import { Calendar, Filter, MapPin, Search, Ticket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function EventosPage() {
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
            <Link href="/eventos" className="text-sm font-medium text-primary hover:underline">
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
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Descubre eventos increíbles
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Encuentra los mejores eventos cerca de ti y compra tickets en segundos.
                </p>
              </div>
              <div className="w-full max-w-2xl">
                <div className="flex w-full max-w-sm items-center space-x-2 mx-auto">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Buscar eventos..."
                      className="pl-8 rounded-l-md rounded-r-none border-r-0"
                    />
                  </div>
                  <Button type="submit" className="bg-primary hover:bg-der-orange-dark rounded-l-none">
                    Buscar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="todos" className="w-full">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <TabsList>
                  <TabsTrigger value="todos">Todos</TabsTrigger>
                  <TabsTrigger value="conciertos">Conciertos</TabsTrigger>
                  <TabsTrigger value="deportes">Deportes</TabsTrigger>
                  <TabsTrigger value="teatro">Teatro</TabsTrigger>
                  <TabsTrigger value="festivales">Festivales</TabsTrigger>
                </TabsList>
                <div className="flex items-center mt-4 md:mt-0">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter className="h-4 w-4" />
                    Filtros
                  </Button>
                </div>
              </div>

              <TabsContent value="todos" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <Card key={item} className="overflow-hidden">
                      <div className="aspect-[16/9] relative">
                        <img
                          src={`/placeholder.svg?height=450&width=800&text=Evento+${item}`}
                          alt={`Evento ${item}`}
                          className="object-cover w-full h-full"
                        />
                        <div className="absolute top-2 right-2 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                          Destacado
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold">Nombre del Evento {item}</h3>
                            <p className="text-sm text-muted-foreground flex items-center mt-1">
                              <Calendar className="h-3.5 w-3.5 mr-1" />
                              15 Dic 2023 • 20:00
                            </p>
                            <p className="text-sm text-muted-foreground flex items-center mt-1">
                              <MapPin className="h-3.5 w-3.5 mr-1" />
                              Teatro Nacional
                            </p>
                          </div>
                          <div className="bg-primary/5 text-primary font-medium text-sm px-2 py-1 rounded">
                            Desde $25
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-0">
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                          labore.
                        </p>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full bg-primary hover:bg-der-orange-dark" asChild>
                          <Link href={`/evento/${item}`}>Comprar tickets</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="mt-8 flex justify-center">
                  <Button variant="outline">Cargar más eventos</Button>
                </div>
              </TabsContent>

              <TabsContent value="conciertos" className="mt-0">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">Mostrando eventos de conciertos</h3>
                </div>
              </TabsContent>

              <TabsContent value="deportes" className="mt-0">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">Mostrando eventos deportivos</h3>
                </div>
              </TabsContent>

              <TabsContent value="teatro" className="mt-0">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">Mostrando eventos de teatro</h3>
                </div>
              </TabsContent>

              <TabsContent value="festivales" className="mt-0">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">Mostrando festivales</h3>
                </div>
              </TabsContent>
            </Tabs>
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

