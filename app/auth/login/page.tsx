import Link from "next/link"
import { ArrowLeft, Ticket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function LoginPage() {
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
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="container px-4 md:px-6 max-w-md">
          <div className="mb-4">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-rose-500 hover:underline">
              <ArrowLeft className="mr-1 h-4 w-4" />
              Volver al inicio
            </Link>
          </div>

          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Accede a tu cuenta</CardTitle>
              <CardDescription>Ingresa tus credenciales para acceder a la plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="login" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                  <TabsTrigger value="register">Registrarse</TabsTrigger>
                </TabsList>
                <TabsContent value="login" className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Contraseña</Label>
                      <Link href="/auth/reset-password" className="text-xs text-rose-500 hover:underline">
                        ¿Olvidaste tu contraseña?
                      </Link>
                    </div>
                    <Input id="password" type="password" />
                  </div>
                  <Button className="w-full bg-rose-500 hover:bg-rose-600" asChild>
                    <Link href="/dashboard">Iniciar Sesión</Link>
                  </Button>
                </TabsContent>
                <TabsContent value="register" className="space-y-4">
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
                    <Label htmlFor="email-register">Email</Label>
                    <Input id="email-register" type="email" placeholder="tu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password-register">Contraseña</Label>
                    <Input id="password-register" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="terms" className="rounded border-gray-300" />
                    <Label htmlFor="terms" className="text-sm">
                      Acepto los{" "}
                      <Link href="/ayuda" className="text-rose-500 hover:underline">
                        términos y condiciones
                      </Link>
                    </Label>
                  </div>
                  <Button className="w-full bg-rose-500 hover:bg-rose-600" asChild>
                    <Link href="/dashboard">Crear Cuenta</Link>
                  </Button>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">O continúa con</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                  Google
                </Button>
                <Button variant="outline">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 mr-2"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                  Facebook
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
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
