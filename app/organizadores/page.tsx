import Link from "next/link"
import { ArrowRight, Calendar, Check, CreditCard, FileText, Ticket, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function OrganizadoresPage() {
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
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/eventos" className="text-sm font-medium hover:underline">
              Eventos
            </Link>
            <Link href="/organizadores" className="text-sm font-medium text-rose-500 hover:underline">
              Organizadores
            </Link>
            <Link href="/organizadores/precios" className="text-sm font-medium hover:underline">
              Precios
            </Link>
            <Link href="/ayuda" className="text-sm font-medium hover:underline">
              Ayuda
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm font-medium hover:underline hidden md:inline-block">
              Iniciar Sesión
            </Link>
            <Button className="bg-rose-500 hover:bg-rose-600" asChild>
              <Link href="/auth/login">Registrarse</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Organiza eventos exitosos con TicketPro
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    La plataforma más simple y efectiva para gestionar tus eventos y vender tickets sin complicaciones.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-rose-500 hover:bg-rose-600 px-8" asChild>
                    <Link href="/auth/login">
                      Comenzar ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/organizadores/precios">Ver planes</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl border bg-white shadow-xl">
                  <img
                    src="/placeholder.svg?height=720&width=1280&text=Dashboard+para+Organizadores"
                    alt="Dashboard para organizadores"
                    width={1280}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Beneficios</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Todo lo que necesitas para tus eventos
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestra plataforma está diseñada para simplificar la gestión de eventos y maximizar tus ventas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col items-start">
                <CardHeader>
                  <div className="rounded-full bg-rose-100 p-3 mb-3">
                    <CreditCard className="h-6 w-6 text-rose-500" />
                  </div>
                  <CardTitle>Comisiones Bajas</CardTitle>
                  <CardDescription>
                    Las comisiones más bajas del mercado, maximizando tus ganancias en cada venta.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Desde 1.9% + $0.20 por venta</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Sin costos ocultos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Liquidaciones rápidas</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-start">
                <CardHeader>
                  <div className="rounded-full bg-rose-100 p-3 mb-3">
                    <Calendar className="h-6 w-6 text-rose-500" />
                  </div>
                  <CardTitle>Gestión Completa</CardTitle>
                  <CardDescription>
                    Herramientas potentes para administrar todos los aspectos de tus eventos.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Creación de eventos en minutos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Gestión de tickets y asistentes</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Reportes y estadísticas en tiempo real</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-start">
                <CardHeader>
                  <div className="rounded-full bg-rose-100 p-3 mb-3">
                    <Users className="h-6 w-6 text-rose-500" />
                  </div>
                  <CardTitle>Experiencia Superior</CardTitle>
                  <CardDescription>Ofrece a tus asistentes una experiencia de compra excepcional.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Proceso de compra en segundos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Tickets digitales instantáneos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Múltiples métodos de pago</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-start">
                <CardHeader>
                  <div className="rounded-full bg-rose-100 p-3 mb-3">
                    <FileText className="h-6 w-6 text-rose-500" />
                  </div>
                  <CardTitle>Personalización Total</CardTitle>
                  <CardDescription>Adapta la plataforma a tu marca y necesidades específicas.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Páginas de eventos personalizadas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Formularios de registro a medida</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Emails con tu marca</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-start">
                <CardHeader>
                  <div className="rounded-full bg-rose-100 p-3 mb-3">
                    <Ticket className="h-6 w-6 text-rose-500" />
                  </div>
                  <CardTitle>Control de Acceso</CardTitle>
                  <CardDescription>Gestiona la entrada a tus eventos de forma eficiente y segura.</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Escaneo de QR desde cualquier dispositivo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Validación en tiempo real</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Estadísticas de asistencia</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-start">
                <CardHeader>
                  <div className="rounded-full bg-rose-100 p-3 mb-3">
                    <CreditCard className="h-6 w-6 text-rose-500" />
                  </div>
                  <CardTitle>Integraciones</CardTitle>
                  <CardDescription>
                    Conecta con tus herramientas favoritas para una experiencia completa.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Múltiples pasarelas de pago</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Herramientas de marketing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-500" />
                      <span className="text-sm">API completa para desarrolladores</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none order-2 lg:order-1">
                <div className="aspect-video overflow-hidden rounded-xl border bg-white shadow-xl">
                  <img
                    src="/placeholder.svg?height=720&width=1280&text=Control+de+Acceso"
                    alt="Control de acceso"
                    width={1280}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                    Control de Acceso
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Gestiona la entrada a tus eventos sin complicaciones
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Nuestra aplicación de escaneo de QR te permite controlar el acceso a tus eventos de forma rápida y
                    segura.
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Escaneo rápido desde cualquier dispositivo</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Validación en tiempo real</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Detección de tickets duplicados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Estadísticas de asistencia en tiempo real</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-rose-500 hover:bg-rose-600" asChild>
                    <Link href="/control-acceso">Ver demostración</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-rose-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  ¿Listo para organizar tu próximo evento?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Regístrate gratis y comienza a vender tickets en minutos. Sin compromisos.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-rose-500 hover:bg-rose-600 px-8" asChild>
                  <Link href="/auth/login">
                    Crear cuenta gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/ayuda">Contactar ventas</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-white">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Ticket className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">TicketPro</span>
          </div>
          <nav className="flex flex-wrap gap-4 md:gap-6">
            <Link href="/ayuda" className="text-sm hover:underline">
              Términos
            </Link>
            <Link href="/ayuda" className="text-sm hover:underline">
              Privacidad
            </Link>
            <Link href="/ayuda" className="text-sm hover:underline">
              Cookies
            </Link>
            <Link href="/ayuda" className="text-sm hover:underline">
              Contacto
            </Link>
          </nav>
          <div className="text-sm text-gray-500">© 2023 TicketPro. Todos los derechos reservados.</div>
        </div>
      </footer>
    </div>
  )
}
