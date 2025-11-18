"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function BasicCalculator() {
  const [operandoA, setOperandoA] = useState<string>("");
  const [operandoB, setOperandoB] = useState<string>("");
  const [resultado, setResultado] = useState<number | null>(null);

  function sumar() {
    const a = parseFloat(operandoA);
    const b = parseFloat(operandoB);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      setResultado(null);
      return;
    }
    setResultado(a + b);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="border-white/20 bg-white/5 text-white shadow-lg shadow-black/30">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Calculadora Básica</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-xs">
          <div className="space-y-1">
            <label htmlFor="operandoA" className="text-[11px] text-white/80">
              Operando A
            </label>
            <input
              id="operandoA"
              type="number"
              value={operandoA}
              onChange={(e) => setOperandoA(e.target.value)}
              className="w-full rounded-md border border-white/20 bg-black/30 px-3 py-2 text-xs text-white outline-none ring-1 ring-transparent transition focus:border-white focus:ring-white/30"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="operandoB" className="text-[11px] text-white/80">
              Operando B
            </label>
            <input
              id="operandoB"
              type="number"
              value={operandoB}
              onChange={(e) => setOperandoB(e.target.value)}
              className="w-full rounded-md border border-white/20 bg-black/30 px-3 py-2 text-xs text-white outline-none ring-1 ring-transparent transition focus:border-white focus:ring-white/30"
            />
          </div>
          {resultado !== null && (
            <p className="text-[11px] text-white/80">
              Resultado: {resultado}
            </p>
          )}
        </CardContent>
        <CardFooter>
          <Button size="sm" className="text-xs" onClick={sumar}>
            Sumar
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

