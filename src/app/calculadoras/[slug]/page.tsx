import { notFound } from "next/navigation";
import Link from "next/link";
import { calculators } from "@/data/calculators";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalculatorSlot } from "@/components/calculator-slot";

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;   // ⬅️ ESTO es lo que soluciona el error

  const calculator = calculators.find((c) => c.slug === slug);

  if (!calculator) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[var(--brand-0)] via-[#1b000f] to-[var(--brand-5)] text-white">
      <main className="mx-auto flex max-w-4xl flex-col gap-8 px-4 pb-16 pt-12">
        <Link
          href="/"
          className="text-[11px] text-white/70 transition hover:text-white"
        >
          ← Volver al catálogo
        </Link>

        <header className="flex flex-col gap-3">
          <Badge className="w-fit bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/40">
            Calculadora
          </Badge>
          <h1 className="text-3xl font-semibold tracking-tight">{calculator.title}</h1>
          <p className="max-w-xl text-sm text-white/70">
            {calculator.shortDescription}
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <Card className="border-white/15 bg-white/10 text-white shadow-lg shadow-black/30">
            <CardHeader className="space-y-3">
              <CardTitle className="text-sm font-semibold">
                Calculadora
              </CardTitle>
              <CardDescription className="text-xs text-white/70">
                Esta es la versión en React/Next.js integrada dentro del nuevo layout
                de portafolio.
              </CardDescription>
            </CardHeader>
            <div className="px-4 pb-4">
              <CalculatorSlot
                slug={calculator.slug}
                fallback={
                  <CardDescription className="text-xs text-white/70">
                    Próximamente migraré esta calculadora al nuevo stack. Mientras tanto,
                    ya puedes navegar y ver su ficha técnica como parte del portafolio.
                  </CardDescription>
                }
              />
            </div>
          </Card>

          <Card className="border-white/15 bg-white/10 text-white shadow-lg shadow-black/30">
            <CardHeader className="space-y-3">
              <CardTitle className="text-sm font-semibold">Detalles técnicos</CardTitle>
              <CardDescription className="space-y-2 text-xs text-white/80">
                <p>
                  <span className="font-semibold text-white">Stack original: </span>
                  {calculator.techLabel}
                </p>
                <p>
                  <span className="font-semibold text-white">Categoría: </span>
                  {calculator.category === "salud"
                    ? "Salud"
                    : calculator.category === "conversiones"
                    ? "Conversiones"
                    : "General"}
                </p>
                <p>
                  <span className="font-semibold text-white">Complejidad: </span>
                  {calculator.difficulty}
                </p>
                {calculator.highlight && (
                  <p className="text-[11px] text-white/70">{calculator.highlight}</p>
                )}
              </CardDescription>
            </CardHeader>
          </Card>
        </section>
      </main>
    </div>
  );
}
