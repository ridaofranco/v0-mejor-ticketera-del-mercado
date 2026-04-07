import Link from "next/link"
import { ArrowLeft, Ticket } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ResetPasswordPage() {
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
            <Link
              href="/auth/login"
              className="inline-flex items-center text-sm font-medium text-rose-500 hover:underline"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Volver al inicio de sesión
            </Link>
          </div>

          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Recuperar contraseña</CardTitle>
              <CardDescription>Ingresa tu email para recibir instrucciones de recuperación</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" />
              </div>
              <Button className="w-full bg-rose-500 hover:bg-rose-600">Enviar instrucciones</Button>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-500">
                Te enviaremos un enlace para restablecer tu contraseña. Si no recibes el email, revisa tu carpeta de
                spam.
              </p>
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
