import Link from "next/link"
import { ArrowRight, Calendar, CreditCard, Globe, Percent, Shield, Ticket, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Ticket className="h-6 w-6 text-rose-500" />
            <span className="text-xl font-bold">TicketPro</span>
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
                    La plataforma de tickets más simple y efectiva
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Comisiones bajas, proceso sencillo y una experiencia profesional para ti y tus clientes.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-rose-500 hover:bg-rose-600 px-8" asChild>
                    <Link href="/dashboard">
                      Comenzar ahora
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/eventos">Ver demo</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl border bg-white shadow-xl">
                  <img
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Dashboard de la plataforma de tickets"
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
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                  Características
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Todo lo que necesitas, nada más</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestra plataforma está diseñada para ser simple y efectiva, sin complicaciones innecesarias.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <Percent className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Comisiones Bajas</h3>
                <p className="text-gray-500">Las comisiones más bajas del mercado, maximizando tus ganancias.</p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <Zap className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Proceso Simple</h3>
                <p className="text-gray-500">Configura tu evento y comienza a vender tickets en minutos.</p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <Globe className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Altamente Adaptable</h3>
                <p className="text-gray-500">Personaliza la experiencia según tus necesidades específicas.</p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <Shield className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Seguridad Total</h3>
                <p className="text-gray-500">Protección contra fraudes y sistema anti-reventa.</p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <Calendar className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Gestión de Eventos</h3>
                <p className="text-gray-500">Herramientas completas para administrar todos tus eventos.</p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border p-6 shadow-sm">
                <div className="rounded-full bg-rose-100 p-3">
                  <CreditCard className="h-6 w-6 text-rose-500" />
                </div>
                <h3 className="text-xl font-bold">Múltiples Pagos</h3>
                <p className="text-gray-500">Acepta todos los métodos de pago populares en tu región.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none order-2 lg:order-1">
                <div className="aspect-video overflow-hidden rounded-xl border bg-white shadow-xl">
                  <img
                    src="/placeholder.svg?height=720&width=1280"
                    alt="Proceso de compra de tickets"
                    width={1280}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">
                    Experiencia de Usuario
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                    Compra de tickets sin complicaciones
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Diseñado para que tus clientes compren tickets en segundos, sin frustraciones ni pasos innecesarios.
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
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
                    </div>
                    <span>Proceso de compra en menos de 30 segundos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
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
                    </div>
                    <span>Sin registros obligatorios</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
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
                    </div>
                    <span>Tickets digitales instantáneos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
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
                    </div>
                    <span>Interfaz clara y sin distracciones</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-rose-500 hover:bg-rose-600" asChild>
                    <Link href="/eventos">Ver demostración</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-rose-100 px-3 py-1 text-sm text-rose-500">Precios</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Comisiones transparentes</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Sin costos ocultos. Solo pagas cuando vendes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Básico</h3>
                  <p className="text-gray-500">Para eventos pequeños y ocasionales.</p>
                </div>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">3.5%</span>
                  <span className="ml-1 text-xl font-semibold">+ $0.30</span>
                  <span className="ml-1 text-sm font-normal text-gray-500">/venta</span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-2">
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
                    <span>Hasta 100 tickets</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>Tickets digitales</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>Soporte por email</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-rose-500 hover:bg-rose-600">Comenzar gratis</Button>
              </div>
              <div className="relative flex flex-col rounded-lg border border-rose-200 bg-white p-6 shadow-md">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-rose-500 px-3 py-1 text-xs font-medium text-white">
                  Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Profesional</h3>
                  <p className="text-gray-500">Para organizadores regulares de eventos.</p>
                </div>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">2.5%</span>
                  <span className="ml-1 text-xl font-semibold">+ $0.25</span>
                  <span className="ml-1 text-sm font-normal text-gray-500">/venta</span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-2">
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
                    <span>Tickets ilimitados</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>Personalización avanzada</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>Análisis de ventas</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>Soporte prioritario</span>
                  </li>
                </ul>
                <Button className="mt-8 bg-rose-500 hover:bg-rose-600">Comenzar ahora</Button>
              </div>
              <div className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Empresarial</h3>
                  <p className="text-gray-500">Para grandes productoras y festivales.</p>
                </div>
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-5xl font-extrabold tracking-tight">1.9%</span>
                  <span className="ml-1 text-xl font-semibold">+ $0.20</span>
                  <span className="ml-1 text-sm font-normal text-gray-500">/venta</span>
                </div>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-2">
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
                    <span>Todo lo de Profesional</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>API completa</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>Gestión de accesos</span>
                  </li>
                  <li className="flex items-center gap-2">
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
                    <span>Gerente de cuenta dedicado</span>
                  </li>
                </ul>
                <Button className="mt-8" variant="outline">
                  Contactar ventas
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-rose-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Listo para comenzar a vender tickets?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Regístrate gratis y comienza a vender en minutos. Sin compromisos.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-rose-500 hover:bg-rose-600 px-8">
                  Crear cuenta gratis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Contactar ventas</Button>
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
