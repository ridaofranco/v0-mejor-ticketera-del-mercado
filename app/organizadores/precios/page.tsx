import Link from "next/link"
import { ArrowRight, Check, Ticket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function PreciosPage() {
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
            <Link href="/organizadores" className="text-sm font-medium hover:underline">
              Organizadores
            </Link>
            <Link href="/organizadores/precios" className="text-sm font-medium text-rose-500 hover:underline">
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
              <Card className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Básico</h3>
                      <p className="text-gray-500">Para eventos pequeños y ocasionales.</p>
                    </div>
                    <div className="mt-4 flex items-baseline text-gray-900">
                      <span className="text-5xl font-extrabold tracking-tight">3.5%</span>
                      <span className="ml-1 text-xl font-semibold">+ $0.30</span>
                      <span className="ml-1 text-sm font-normal text-gray-500">/venta</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Hasta 100 tickets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Tickets digitales</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Soporte por email</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="mt-8 w-full bg-rose-500 hover:bg-rose-600" asChild>
                    <Link href="/auth/login">Comenzar gratis</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="relative flex flex-col rounded-lg border border-rose-200 bg-white p-6 shadow-md">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-rose-500 px-3 py-1 text-xs font-medium text-white">
                  Popular
                </div>
                <CardHeader className="pb-4">
                  <CardTitle>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Profesional</h3>
                      <p className="text-gray-500">Para organizadores regulares de eventos.</p>
                    </div>
                    <div className="mt-4 flex items-baseline text-gray-900">
                      <span className="text-5xl font-extrabold tracking-tight">2.5%</span>
                      <span className="ml-1 text-xl font-semibold">+ $0.25</span>
                      <span className="ml-1 text-sm font-normal text-gray-500">/venta</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Tickets ilimitados</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Personalización avanzada</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Análisis de ventas</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Soporte prioritario</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="mt-8 w-full bg-rose-500 hover:bg-rose-600" asChild>
                    <Link href="/auth/login">Comenzar ahora</Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="flex flex-col rounded-lg border bg-white p-6 shadow-sm">
                <CardHeader className="pb-4">
                  <CardTitle>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold">Empresarial</h3>
                      <p className="text-gray-500">Para grandes productoras y festivales.</p>
                    </div>
                    <div className="mt-4 flex items-baseline text-gray-900">
                      <span className="text-5xl font-extrabold tracking-tight">1.9%</span>
                      <span className="ml-1 text-xl font-semibold">+ $0.20</span>
                      <span className="ml-1 text-sm font-normal text-gray-500">/venta</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="mt-6 space-y-4">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Todo lo de Profesional</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>API completa</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Gestión de accesos</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      <span>Gerente de cuenta dedicado</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="mt-8 w-full" variant="outline" asChild>
                    <Link href="/ayuda">Contactar ventas</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Comparación de planes</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Encuentra el plan perfecto para tus necesidades
                </p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-medium">Características</th>
                    <th className="p-4 text-center font-medium">Básico</th>
                    <th className="p-4 text-center font-medium">Profesional</th>
                    <th className="p-4 text-center font-medium">Empresarial</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Comisión por venta</td>
                    <td className="p-4 text-center">3.5% + $0.30</td>
                    <td className="p-4 text-center">2.5% + $0.25</td>
                    <td className="p-4 text-center">1.9% + $0.20</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Límite de tickets</td>
                    <td className="p-4 text-center">100</td>
                    <td className="p-4 text-center">Ilimitado</td>
                    <td className="p-4 text-center">Ilimitado</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Personalización</td>
                    <td className="p-4 text-center">Básica</td>
                    <td className="p-4 text-center">Avanzada</td>
                    <td className="p-4 text-center">Total</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Análisis y reportes</td>
                    <td className="p-4 text-center">
                      <Check className="h-4 w-4 text-green-600 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="h-4 w-4 text-green-600 mx-auto" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="h-4 w-4 text-green-600 mx-auto" />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Control de acceso</td>
                    <td className="p-4 text-center">Básico</td>
                    <td className="p-4 text-center">Avanzado</td>
                    <td className="p-4 text-center">Premium</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Soporte</td>
                    <td className="p-4 text-center">Email</td>
                    <td className="p-4 text-center">Prioritario</td>
                    <td className="p-4 text-center">Dedicado</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">API</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">Limitada</td>
                    <td className="p-4 text-center">Completa</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-medium">Liquidación</td>
                    <td className="p-4 text-center">7 días</td>
                    <td className="p-4 text-center">3 días</td>
                    <td className="p-4 text-center">1 día</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-rose-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  ¿Listo para comenzar a vender tickets?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Regístrate gratis y comienza a vender en minutos. Sin compromisos.
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
