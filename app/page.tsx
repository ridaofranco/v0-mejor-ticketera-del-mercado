'use client';

import Link from "next/link"
import { ArrowRight, BarChart3, Calendar, Check, CreditCard, Globe, Lock, Percent, Shield, Smartphone, Ticket, TrendingUp, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary font-bold text-white font-heading">
              E
            </div>
            <span className="text-xl font-bold font-heading">
              ENTRÃ<span className="text-primary">Ì</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline">
              Features
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline">
              Pricing
            </Link>
            <Link href="#footer" className="text-sm font-medium hover:underline">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/auth/login" className="text-sm font-medium hover:underline hidden md:inline-block">
              Sign In
            </Link>
            <Button className="bg-primary hover:bg-der-orange-dark" asChild>
              <Link href="/auth/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative overflow-hidden py-12 md:py-24 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-heading">
                    Sell More Tickets<br/>With ENTRÃ
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    The all-in-one ticketing platform that empowers venues, promoters, and organizers to create unforgettable experiences and drive revenue.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-primary hover:bg-der-orange-dark px-8" asChild>
                    <Link href="/dashboard">
                      Start Free Trial
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/eventos">Watch Demo</Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <div className="aspect-video overflow-hidden rounded-xl border border-primary/10 bg-card shadow-xl">
                  <img
                    src="/placeholder.svg?height=720&width=1280"
                    alt="ENTRÃ ticketing platform dashboard"
                    width={1280}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-12 md:py-24 lg:py-32 border-t border-primary/10 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary border border-primary/20">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-heading">Powerful Features for Modern Organizers</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage and sell tickets in one integrated platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-start space-y-4 rounded-lg border border-primary/10 bg-card p-6 hover:border-primary/30 transition">
                <Zap className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold font-heading">Lightning Fast</h3>
                <p className="text-muted-foreground">Process thousands of tickets per second with our optimized infrastructure.</p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border border-primary/10 bg-card p-6 hover:border-primary/30 transition">
                <Shield className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold font-heading">Enterprise Security</h3>
                <p className="text-muted-foreground">Advanced fraud detection and PCI-DSS compliant payment processing.</p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border border-primary/10 bg-card p-6 hover:border-primary/30 transition">
                <Globe className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold font-heading">Global Reach</h3>
                <p className="text-muted-foreground">Support for multiple currencies and payment methods worldwide.</p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border border-primary/10 bg-card p-6 hover:border-primary/30 transition">
                <BarChart3 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold font-heading">Real-time Analytics</h3>
                <p className="text-muted-foreground">Track sales, attendance, and revenue with intuitive dashboards.</p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border border-primary/10 bg-card p-6 hover:border-primary/30 transition">
                <Lock className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold font-heading">Fraud Prevention</h3>
                <p className="text-muted-foreground">Multi-layer verification and smart ticketing prevent scalping and fraud.</p>
              </div>
              <div className="flex flex-col items-start space-y-4 rounded-lg border border-primary/10 bg-card p-6 hover:border-primary/30 transition">
                <Smartphone className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold font-heading">Mobile First</h3>
                <p className="text-muted-foreground">Seamless experience across all devices with our native mobile app.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 bg-card/50 border-t border-primary/10">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none order-2 lg:order-1">
                <div className="aspect-video overflow-hidden rounded-xl border border-primary/10 bg-background shadow-xl">
                  <img
                    src="/placeholder.svg?height=720&width=1280"
                    alt="ENTRÃ ticket purchasing experience"
                    width={1280}
                    height={720}
                    className="w-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 order-1 lg:order-2">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary border border-primary/20">
                    User Experience
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-heading">
                    Designed for Simplicity
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    ENTRÃ makes it incredibly easy to create events, set up ticketing, and manage sales. Our intuitive interface means you can launch your first event in minutes.
                  </p>
                </div>
                <ul className="grid gap-3">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Create events with our step-by-step wizard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Customize your ticketing experience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Monitor sales and attendance in real-time</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">Access detailed reports and insights</span>
                  </li>
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-primary hover:bg-der-orange-dark" asChild>
                    <Link href="/eventos">Watch Demo</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12 md:py-24 lg:py-32 border-t border-primary/10 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary border border-primary/20">Pricing</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-heading">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for your needs. Scale as you grow.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col rounded-lg border border-primary/10 bg-card p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading">Starter</h3>
                  <p className="text-muted-foreground">Perfect for getting started</p>
                </div>
                <div className="mt-4 flex items-baseline text-foreground">
                  <span className="text-5xl font-extrabold tracking-tight">$0</span>
                  <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <Button variant="outline" className="mt-8 border-primary/30 text-primary hover:bg-primary/5">Get Started</Button>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Up to 5 events</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Basic analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Standard support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">2.5% + $0.50 per ticket</span>
                  </li>
                </ul>
              </div>
              <div className="relative flex flex-col rounded-lg border-2 border-primary bg-card p-6 transform md:scale-105">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading">Professional</h3>
                  <p className="text-muted-foreground">For growing organizers</p>
                </div>
                <div className="mt-4 flex items-baseline text-foreground">
                  <span className="text-5xl font-extrabold tracking-tight">$99</span>
                  <span className="ml-1 text-sm font-normal text-muted-foreground">/month</span>
                </div>
                <Button className="mt-8 bg-primary hover:bg-der-orange-dark">Start Free Trial</Button>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Unlimited events</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Advanced analytics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Priority support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">1.5% + $0.50 per ticket</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Custom branding</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col rounded-lg border border-primary/10 bg-card p-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold font-heading">Enterprise</h3>
                  <p className="text-muted-foreground">For large-scale organizers</p>
                </div>
                <div className="mt-4 flex items-baseline text-foreground">
                  <span className="text-2xl font-bold text-muted-foreground">Custom</span>
                </div>
                <Button variant="outline" className="mt-8 border-primary/30 text-primary hover:bg-primary/5">Contact Sales</Button>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Everything in Professional</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Dedicated support manager</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Custom integrations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">White-label solutions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Custom pricing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32 border-t border-primary/10 bg-background">
          <div className="container px-4 md:px-6">
            <div className="rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-primary/5 p-12 text-center">
              <TrendingUp className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-heading mb-4">
                Ready to Grow Your Ticketing Business?
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto mb-8">
                Join thousands of organizers who trust ENTRÃ to power their events.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                <Button className="bg-primary hover:bg-der-orange-dark px-8">
                  Start Your Free Trial Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer id="footer" className="border-t border-primary/10 bg-card/50">
        <div className="container px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-white font-heading">
                  E
                </div>
                <span className="font-heading font-bold">
                  ENTRÃ<span className="text-primary">Ì</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                The modern ticketing platform for organizers who want to grow.
              </p>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition">Features</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Pricing</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Security</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">API</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition">About</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Blog</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Careers</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="#" className="hover:text-foreground transition">Privacy</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Terms</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Cookies</Link></li>
                <li><Link href="#" className="hover:text-foreground transition">Compliance</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                Â© 2026 ENTRÃ by Somos DER. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Powered by Somos DER
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
