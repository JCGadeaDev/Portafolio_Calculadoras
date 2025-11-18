"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CalculatorDefinition } from "@/data/calculators";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ThemeToggle } from "@/components/theme-toggle";

type LandingContentProps = {
  calculators: CalculatorDefinition[];
};

// Considerar mover fadeIn fuera del componente si no depende de props
const fadeIn = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export function LandingContent({ calculators }: LandingContentProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--brand-0)] via-[var(--brand-2)] to-[var(--brand-5)] text-zinc-50">
      <div className="bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_45%)]">

        {/* HEADER */}
        <header className="border-b border-white/10 bg-[#120010]/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-baseline gap-2">
              <span className="rounded bg-white/90 px-2 py-1 text-xs font-semibold text-[#2c001f]">
                Calculadoras
              </span>
              <span className="text-sm text-white/70">Portfolio</span>
            </Link>

            {/* NAV DESKTOP */}
            <nav className="hidden items-center gap-6 text-xs text-white/70 md:flex">
              <NavigationMenu>
                <NavigationMenuList>
                  {calculators.slice(0, 4).map((c) => (
                    <NavigationMenuItem key={c.slug}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={`/calculadoras/${c.slug}`}
                          className="rounded-md px-3 py-1 text-white/80 transition hover:bg-white/10 hover:text-white"
                        >
                          {c.title}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </nav>

            {/* TOGGLES + MOBILE MENU */}
            <div className="flex items-center gap-3">
              <ThemeToggle />

              <div className="md:hidden">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/30 bg-black/20 text-xs text-white"
                    >
                      Calculadoras
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className="border-white/10 bg-[#15000f] text-white"
                  >
                    <SheetHeader>
                      <SheetTitle>Calculadoras</SheetTitle>
                    </SheetHeader>

                    <div className="mt-6 flex flex-col gap-2">
                      {calculators.map((c) => (
                        <Link
                          key={c.slug}
                          href={`/calculadoras/${c.slug}`}
                          className="rounded-md px-3 py-2 text-sm text-white/80 transition hover:bg-white/10"
                        >
                          {c.title}
                        </Link>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT */}
        <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pb-16 pt-12">

          {/* HERO SECTION */}
          <section className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
            <motion.div
              className="space-y-4"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              <Badge className="bg-white/15 text-white ring-1 ring-white/40">
                Next.js • TypeScript • Tailwind • shadcn/ui • Framer Motion • Math.js
              </Badge>

              <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl lg:text-6xl">
                Un portafolio vivo de todas mis calculadoras.
              </h1>

              <p className="max-w-xl text-base leading-relaxed text-white/85">
                La evolución de mis calculadoras: De <strong>Angular</strong> y{" "}
                <strong>Vanilla JS</strong> a un ecosistema <strong>Next.js</strong>. Una
                interfaz única, animada y visualmente armónica. Haz clic en cualquier
                tarjeta para abrir su versión modernizada.
              </p>

              <div className="flex flex-wrap gap-3 text-xs text-white/85">
                <span className="rounded-full border border-white/30 px-3 py-1">
                  +{calculators.length} herramientas listas
                </span>
                <span className="rounded-full border border-white/30 px-3 py-1">
                  Salud • Conversiones • Cálculo
                </span>
              </div>
            </motion.div>

            {/* SIDECARD RIGHT */}
            <motion.div
              className="grid gap-4 text-base text-white"
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeIn}
            >
              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 shadow-lg shadow-black/20">
                <p className="mb-3 text-base font-semibold text-white">Flujo de trabajo</p>
                <ol className="space-y-2 text-sm text-white/85">
                  <li className="flex gap-2">
                    <span className="font-semibold text-white">1.</span>
                    Selecciona una calculadora del catálogo.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-white">2.</span>
                    Revisa su ficha técnica y tecnologías usadas.
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-white">3.</span>
                    Usa la herramienta directamente sin salir de la app.
                  </li>
                </ol>
              </div>
            </motion.div>
          </section>

          {/* LISTA DE CALCULADORAS */}
          <section className="space-y-4">
            <div className="flex items-baseline justify-between gap-2">
              <h2 className="text-base font-semibold tracking-tight text-white">
                Calculadoras disponibles
              </h2>
              <p className="text-xs text-white/80">
                Haz clic en cualquier tarjeta para ir directamente a la herramienta.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {calculators.map((calc, index) => (
                <motion.div
                  key={calc.slug}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  custom={index}
                >
                  <Link href={`/calculadoras/${calc.slug}`}>
                    <Card className="group h-full border-white/10 bg-white/5 text-white transition hover:-translate-y-1.5 hover:border-white/50 hover:bg-white/15">
                      <CardHeader className="space-y-3">
                        <div className="flex items-center justify-between gap-2">
                          <CardTitle className="text-base font-semibold group-hover:text-white">
                            {calc.title}
                          </CardTitle>

                          <Badge
                            variant="outline"
                            className="border-white/30 bg-transparent text-[11px] text-white"
                          >
                            {calc.difficulty}
                          </Badge>
                        </div>

                        <CardDescription className="text-sm text-white/80">
                          {calc.shortDescription}
                        </CardDescription>

                        <div className="flex flex-wrap gap-2 text-[11px] text-white/80">
                          <Badge className="bg-white/10 text-[11px] text-white">
                            {calc.category === "salud"
                              ? "Salud"
                              : calc.category === "conversiones"
                              ? "Conversiones"
                              : "General"}
                          </Badge>

                          <span className="rounded-full border border-white/30 px-2 py-0.5 text-white">
                            {calc.techLabel}
                          </span>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
