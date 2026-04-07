import Link from "next/link"
import { ArrowRight, Check, CreditCard, Globe, Ticket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function IntegracionesPage() {
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Integraciones potentes para tu evento
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conecta TicketPro con tus herramientas favoritas para una experiencia completa.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="pagos" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="pagos">Pasarelas de Pago</TabsTrigger>
                  <TabsTrigger value="marketing">Marketing</TabsTrigger>
                  <TabsTrigger value="crm">CRM</TabsTrigger>
                  <TabsTrigger value="otros">Otros</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="pagos" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Stripe",
                      description: "Procesa pagos con tarjetas de crédito y débito de forma segura.",
                      features: [
                        "Pagos internacionales",
                        "Múltiples divisas",
                        "Pagos recurrentes",
                        "Seguridad PCI DSS",
                      ],
                      popular: true,
                    },
                    {
                      title: "PayPal",
                      description: "Permite a tus clientes pagar con su cuenta de PayPal o tarjeta.",
                      features: [
                        "Sin necesidad de tarjeta",
                        "Protección al comprador",
                        "Pagos express",
                        "Reembolsos fáciles",
                      ],
                      popular: false,
                    },
                    {
                      title: "Mercado Pago",
                      description: "La solución de pagos líder en Latinoamérica.",
                      features: ["Pagos locales", "Cuotas sin interés", "QR y links de pago", "Integración simple"],
                      popular: false,
                    },
                    {
                      title: "Transferencia Bancaria",
                      description: "Permite pagos directos a tu cuenta bancaria.",
                      features: [
                        "Sin comisiones adicionales",
                        "Conciliación automática",
                        "Múltiples bancos",
                        "Pagos B2B",
                      ],
                      popular: false,
                    },
                    {
                      title: "Apple Pay / Google Pay",
                      description: "Pagos rápidos con un solo clic desde dispositivos móviles.",
                      features: [
                        "Experiencia móvil optimizada",
                        "Autenticación biométrica",
                        "Checkout rápido",
                        "Alta conversión",
                      ],
                      popular: false,
                    },
                    {
                      title: "Crypto",
                      description: "Acepta pagos en Bitcoin, Ethereum y otras criptomonedas.",
                      features: ["Pagos globales", "Bajas comisiones", "Liquidación en FIAT", "Múltiples tokens"],
                      popular: false,
                    },
                  ].map((integration, i) => (
                    <Card key={i} className="relative overflow-hidden">
                      {integration.popular && (
                        <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-medium px-3 py-1">
                          Popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{integration.title}</CardTitle>
                        <CardDescription>{integration.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {integration.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-rose-500 hover:bg-rose-600">
                          Conectar
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="marketing" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      title: "Mailchimp",
                      description: "Automatiza emails de marketing y comunicaciones con asistentes.",
                      features: [
                        "Sincronización de contactos",
                        "Emails automáticos",
                        "Segmentación",
                        "Análisis de campañas",
                      ],
                      popular: true,
                    },
                    {
                      title: "HubSpot",
                      description: "Plataforma completa de marketing, ventas y servicio al cliente.",
                      features: ["CRM integrado", "Automatización", "Landing pages", "Análisis avanzado"],
                      popular: false,
                    },
                    {
                      title: "Google Analytics",
                      description: "Analiza el comportamiento de los usuarios en tu página de eventos.",
                      features: [
                        "Seguimiento de conversiones",
                        "Análisis de tráfico",
                        "Embudos de venta",
                        "Informes personalizados",
                      ],
                      popular: false,
                    },
                    {
                      title: "Facebook Ads",
                      description: "Promociona tus eventos en Facebook e Instagram.",
                      features: [
                        "Píxel de conversión",
                        "Audiencias personalizadas",
                        "Catálogo de eventos",
                        "Retargeting",
                      ],
                      popular: false,
                    },
                    {
                      title: "Google Ads",
                      description: "Llega a potenciales asistentes cuando buscan eventos como el tuyo.",
                      features: [
                        "Seguimiento de conversiones",
                        "Campañas de búsqueda",
                        "Remarketing",
                        "Anuncios dinámicos",
                      ],
                      popular: false,
                    },
                    {
                      title: "Zapier",
                      description: "Conecta TicketPro con más de 3,000 aplicaciones.",
                      features: [
                        "Automatizaciones personalizadas",
                        "Sin código",
                        "Múltiples integraciones",
                        "Flujos de trabajo",
                      ],
                      popular: false,
                    },
                  ].map((integration, i) => (
                    <Card key={i} className="relative overflow-hidden">
                      {integration.popular && (
                        <div className="absolute top-0 right-0 bg-rose-500 text-white text-xs font-medium px-3 py-1">
                          Popular
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{integration.title}</CardTitle>
                        <CardDescription>{integration.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {integration.features.map((feature, j) => (
                            <li key={j} className="flex items-center gap-2">
                              <Check className="h-4 w-4 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-rose-500 hover:bg-rose-600">
                          Conectar
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="crm" className="mt-0">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">Mostrando integraciones de CRM</h3>
                </div>
              </TabsContent>

              <TabsContent value="otros" className="mt-0">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">Mostrando otras integraciones</h3>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">API completa para desarrolladores</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Integra TicketPro directamente en tu sitio web o aplicación con nuestra API RESTful.
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Documentación completa y ejemplos de código</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>SDKs para JavaScript, PHP, Python y más</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Webhooks para eventos en tiempo real</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-green-100 p-1">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span>Entorno de sandbox para pruebas</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-rose-500 hover:bg-rose-600">
                    Explorar API
                    <Globe className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl border bg-white shadow-xl">
                  <img
                    src="/placeholder.svg?height=720&width=1280&text=API+Documentation"
                    alt="Documentación de la API"
                    width={1280}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-rose-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  ¿Listo para integrar tu sistema de pagos?
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comienza a aceptar pagos en minutos con nuestras integraciones.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button className="bg-rose-500 hover:bg-rose-600 px-8">
                  Comenzar ahora
                  <CreditCard className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Contactar soporte</Button>
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
