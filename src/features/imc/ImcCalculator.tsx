"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ImcCalculator() {
  const [peso, setPeso] = useState<string>("");
  const [altura, setAltura] = useState<string>("");
  const [resultado, setResultado] = useState<string | null>(null);

  function calcularIMC() {
    const pesoNum = parseFloat(peso.replace(",", "."));
    const alturaNum = parseFloat(altura.replace(",", "."));

    if (!pesoNum || !alturaNum) {
      setResultado("Por favor, introduce peso y altura válidos.");
      return;
    }

    const imc = pesoNum / (alturaNum * alturaNum);
    const imcRedondeado = Math.round(imc);

    setResultado(`Tu IMC es ${imcRedondeado}`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="border-white/20 bg-white/5 text-white shadow-lg shadow-black/30">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Calculadora de IMC</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-xs">
          <div className="space-y-1">
            <label htmlFor="peso" className="text-[11px] text-white/80">
              Peso (kg)
            </label>
            <input
              id="peso"
              type="number"
              value={peso}
              onChange={(e) => setPeso(e.target.value)}
              className="w-full rounded-md border border-white/20 bg-black/30 px-3 py-2 text-xs text-white outline-none ring-1 ring-transparent transition focus:border-white focus:ring-white/30"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="altura" className="text-[11px] text-white/80">
              Altura (m)
            </label>
            <input
              id="altura"
              type="number"
              step="0.01"
              value={altura}
              onChange={(e) => setAltura(e.target.value)}
              className="w-full rounded-md border border-white/20 bg-black/30 px-3 py-2 text-xs text-white outline-none ring-1 ring-transparent transition focus:border-white focus:ring-white/30"
            />
          </div>
          {resultado && (
            <p className="text-[11px] text-white/80">
              {resultado}
            </p>
          )}
        </CardContent>
        <CardFooter>
          <Button size="sm" className="text-xs" onClick={calcularIMC}>
            Calcular IMC
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}


