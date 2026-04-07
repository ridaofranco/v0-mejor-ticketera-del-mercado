import { Textarea } from "@/components/ui/textarea"
import { SelectItem } from "@/components/ui/select"
import { SelectContent } from "@/components/ui/select"
import { SelectValue } from "@/components/ui/select"
import { SelectTrigger } from "@/components/ui/select"
import { Select } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowRight, FileText, MessageCircle, Search, Ticket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AyudaPage() {
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
            <Link href="/ayuda" className="text-sm font-medium text-rose-500 hover:underline">
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
        <section className="py-12 md:py-24 bg-gradient-to-b from-rose-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Centro de Ayuda</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Encuentra respuestas a tus preguntas y resuelve tus dudas.
                </p>
              </div>
              <div className="w-full max-w-2xl">
                <div className="flex w-full max-w-sm items-center space-x-2 mx-auto">
                  <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      type="search"
                      placeholder="Buscar en la ayuda..."
                      className="pl-8 rounded-l-md rounded-r-none border-r-0"
                    />
                  </div>
                  <Button type="submit" className="bg-rose-500 hover:bg-rose-600 rounded-l-none">
                    Buscar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
              {[
                {
                  title: "Para Compradores",
                  description: "Información para quienes compran tickets para eventos.",
                  icon: <Ticket className="h-8 w-8 text-rose-500" />,
                  topics: [
                    "Cómo comprar tickets",
                    "Reembolsos y cambios",
                    "Tickets digitales",
                    "Problemas con mi compra",
                    "Métodos de pago aceptados",
                  ],
                },
                {
                  title: "Para Organizadores",
                  description: "Recursos para quienes crean y gestionan eventos.",
                  icon: <FileText className="h-8 w-8 text-rose-500" />,
                  topics: [
                    "Crear un evento",
                    "Gestionar tickets",
                    "Promocionar mi evento",
                    "Pagos y liquidaciones",
                    "Reportes y estadísticas",
                  ],
                },
                {
                  title: "Soporte Técnico",
                  description: "Ayuda con problemas técnicos y la plataforma.",
                  icon: <MessageCircle className="h-8 w-8 text-rose-500" />,
                  topics: [
                    "Problemas de acceso",
                    "Errores en la plataforma",
                    "Integraciones y API",
                    "Dispositivos móviles",
                    "Seguridad y privacidad",
                  ],
                },
              ].map((category, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="mb-2">{category.icon}</div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.topics.map((topic, j) => (
                        <li key={j}>
                          <Link href="#" className="text-rose-500 hover:underline flex items-center">
                            <ArrowRight className="h-3 w-3 mr-2" />
                            {topic}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Ver todos los temas
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="space-y-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Preguntas Frecuentes</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Respuestas a las preguntas más comunes sobre nuestra plataforma.
                </p>
              </div>

              <Tabs defaultValue="compradores" className="w-full">
                <div className="flex justify-center mb-8">
                  <TabsList>
                    <TabsTrigger value="compradores">Compradores</TabsTrigger>
                    <TabsTrigger value="organizadores">Organizadores</TabsTrigger>
                    <TabsTrigger value="pagos">Pagos</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="compradores" className="space-y-4">
                  {[
                    {
                      question: "¿Cómo recibo mis tickets después de comprarlos?",
                      answer:
                        "Después de completar tu compra, recibirás tus tickets digitales por email. También puedes acceder a ellos en cualquier momento desde tu cuenta en la sección 'Mis Tickets'.",
                    },
                    {
                      question: "¿Puedo transferir mis tickets a otra persona?",
                      answer:
                        "Sí, puedes transferir tus tickets a otra persona desde tu cuenta. Ve a 'Mis Tickets', selecciona el ticket que deseas transferir y haz clic en 'Transferir'. Ingresa el email de la persona a quien deseas transferirlo.",
                    },
                    {
                      question: "¿Qué hago si no puedo asistir al evento?",
                      answer:
                        "Si no puedes asistir al evento, tienes varias opciones. Algunos eventos permiten reembolsos hasta cierta fecha antes del evento. También puedes transferir tu ticket a otra persona o revenderlo a través de nuestra plataforma oficial de reventa si el organizador lo permite.",
                    },
                    {
                      question: "¿Cómo puedo contactar al organizador del evento?",
                      answer:
                        "Puedes contactar al organizador directamente desde la página del evento. Busca la sección 'Contacto' o 'Organizador' y encontrarás un formulario para enviar tu mensaje o sus datos de contacto.",
                    },
                    {
                      question: "¿Qué hago si mi código QR no funciona?",
                      answer:
                        "Si tu código QR no funciona, asegúrate de tener buena conexión a internet y que la pantalla de tu dispositivo esté limpia y con buen brillo. Si el problema persiste, contacta a nuestro soporte técnico o al organizador del evento.",
                    },
                  ].map((faq, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="organizadores" className="space-y-4">
                  {[
                    {
                      question: "¿Cómo creo mi primer evento?",
                      answer:
                        "Para crear tu primer evento, inicia sesión en tu cuenta, ve al Dashboard y haz clic en 'Crear Evento'. Sigue los pasos del formulario para configurar todos los detalles de tu evento, incluyendo fecha, ubicación, descripción y tipos de tickets.",
                    },
                    {
                      question: "¿Cuándo recibo el dinero de las ventas de tickets?",
                      answer:
                        "Los pagos se procesan según el plan que hayas elegido. Generalmente, los fondos se liquidan 7 días después del evento. Los organizadores Premium pueden acceder a liquidaciones anticipadas. Puedes ver el estado de tus pagos en la sección 'Finanzas' de tu Dashboard.",
                    },
                    {
                      question: "¿Cómo puedo promocionar mi evento en la plataforma?",
                      answer:
                        "Ofrecemos varias opciones para promocionar tu evento: destacados en la página principal, newsletters, promoción en redes sociales y programas de afiliados. Visita la sección 'Marketing' en tu Dashboard para ver todas las opciones disponibles.",
                    },
                    {
                      question: "¿Puedo personalizar la página de mi evento?",
                      answer:
                        "Sí, puedes personalizar la página de tu evento con tu marca, colores, imágenes y contenido. Los planes Premium y Empresarial ofrecen opciones de personalización avanzadas, incluyendo dominio personalizado y checkout personalizado.",
                    },
                    {
                      question: "¿Cómo gestiono el control de acceso el día del evento?",
                      answer:
                        "Ofrecemos una aplicación móvil para escanear los tickets y controlar el acceso. También puedes imprimir listas de asistentes o utilizar nuestro sistema de check-in en línea. Todas estas opciones están disponibles en la sección 'Gestión de Evento' de tu Dashboard.",
                    },
                  ].map((faq, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="pagos" className="space-y-4">
                  {[
                    {
                      question: "¿Qué métodos de pago aceptan?",
                      answer:
                        "Aceptamos múltiples métodos de pago, incluyendo tarjetas de crédito/débito (Visa, Mastercard, American Express), PayPal, transferencias bancarias, y en algunos países, opciones de pago locales como Mercado Pago, Oxxo, y más.",
                    },
                    {
                      question: "¿Es seguro comprar en TicketPro?",
                      answer:
                        "Sí, todas nuestras transacciones están protegidas con encriptación SSL de 256 bits. No almacenamos datos completos de tarjetas y cumplimos con los estándares PCI DSS. Además, ofrecemos garantía de compra segura para todas las transacciones.",
                    },
                    {
                      question: "¿Puedo pagar en cuotas?",
                      answer:
                        "Sí, dependiendo de tu banco y tarjeta, ofrecemos opciones de pago en cuotas. Durante el proceso de checkout, verás las opciones disponibles para tu método de pago específico.",
                    },
                    {
                      question: "¿Qué hago si veo un cargo duplicado en mi tarjeta?",
                      answer:
                        "Si ves un cargo duplicado, no te preocupes. A veces aparecen autorizaciones temporales que se liberan en 3-5 días hábiles. Si el problema persiste, contacta a nuestro equipo de soporte con los detalles de tu compra.",
                    },
                    {
                      question: "¿Emiten facturas por las compras?",
                      answer:
                        "Sí, puedes solicitar factura por tu compra. Durante el proceso de checkout, marca la opción 'Necesito factura' y completa los datos fiscales requeridos. También puedes solicitar factura después de la compra desde la sección 'Mis Compras'.",
                    },
                  ].map((faq, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p>{faq.answer}</p>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 bg-rose-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">¿No encuentras lo que buscas?</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Nuestro equipo de soporte está listo para ayudarte con cualquier duda o problema.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-rose-500 hover:bg-rose-600">
                    Contactar soporte
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                  <Button variant="outline">Ver tutoriales</Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <Card>
                  <CardHeader>
                    <CardTitle>Contacto directo</CardTitle>
                    <CardDescription>Completa el formulario y te responderemos lo antes posible</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Asunto</Label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Selecciona un asunto" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="compra">Problema con mi compra</SelectItem>
                          <SelectItem value="evento">Problema con mi evento</SelectItem>
                          <SelectItem value="cuenta">Problema con mi cuenta</SelectItem>
                          <SelectItem value="pago">Problema con el pago</SelectItem>
                          <SelectItem value="otro">Otro</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe tu problema o pregunta..."
                        className="min-h-[120px]"
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full bg-rose-500 hover:bg-rose-600">Enviar mensaje</Button>
                  </CardFooter>
                </Card>
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
