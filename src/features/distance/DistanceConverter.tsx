"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Unit = "Kilometro" | "Metro" | "Centimetro";

function convertirDistancia(valor: number, unidadFrom: Unit, unidadTo: Unit) {
  let resultado = valor;

  if (unidadFrom === "Kilometro" && unidadTo === "Kilometro") {
    resultado = valor * 1;
  }
  if (unidadFrom === "Kilometro" && unidadTo === "Metro") {
    resultado = valor * 1000;
  }
  if (unidadFrom === "Kilometro" && unidadTo === "Centimetro") {
    resultado = valor * 100000;
  }

  if (unidadFrom === "Metro" && unidadTo === "Kilometro") {
    resultado = valor / 1000;
  }
  if (unidadFrom === "Metro" && unidadTo === "Metro") {
    resultado = valor * 1;
  }
  if (unidadFrom === "Metro" && unidadTo === "Centimetro") {
    resultado = valor * 100;
  }

  if (unidadFrom === "Centimetro" && unidadTo === "Kilometro") {
    resultado = valor / 100000;
  }
  if (unidadFrom === "Centimetro" && unidadTo === "Metro") {
    resultado = valor / 100;
  }
  if (unidadFrom === "Centimetro" && unidadTo === "Centimetro") {
    resultado = valor * 1;
  }

  return resultado;
}

export function DistanceConverter() {
  const [valor, setValor] = useState<string>("");
  const [unidadFrom, setUnidadFrom] = useState<Unit>("Kilometro");
  const [unidadTo, setUnidadTo] = useState<Unit>("Metro");
  const [resultado, setResultado] = useState<string | null>(null);

  function handleConvert() {
    if (!valor) {
      setResultado(null);
      return;
    }
    const numero = parseFloat(valor);
    if (Number.isNaN(numero)) {
      setResultado("Introduce un número válido.");
      return;
    }

    const res = convertirDistancia(numero, unidadFrom, unidadTo);
    setResultado(
      `${numero} ${unidadFrom}/s equivalen a ${res} ${unidadTo}/s`,
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="border-white/20 bg-white/5 text-white shadow-lg shadow-black/30">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Conversor de Distancia</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-xs">
          <div className="space-y-1">
            <label htmlFor="valor" className="text-[11px] text-white/80">
              Valor
            </label>
            <input
              id="valor"
              type="number"
              value={valor}
              onChange={(e) => setValor(e.target.value)}
              className="w-full rounded-md border border-white/20 bg-black/30 px-3 py-2 text-xs text-white outline-none ring-1 ring-transparent transition focus:border-white focus:ring-white/30"
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-[11px] text-white/80">De</label>
              <select
                value={unidadFrom}
                onChange={(e) => setUnidadFrom(e.target.value as Unit)}
                className="w-full rounded-md border border-white/20 bg-black/30 px-2 py-2 text-xs text-white outline-none ring-1 ring-transparent transition focus:border-white focus:ring-white/30"
              >
                <option value="Kilometro">Kilometro</option>
                <option value="Metro">Metro</option>
                <option value="Centimetro">Centimetro</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-[11px] text-white/80">A</label>
              <select
                value={unidadTo}
                onChange={(e) => setUnidadTo(e.target.value as Unit)}
                className="w-full rounded-md border border-white/20 bg-black/30 px-2 py-2 text-xs text-white outline-none ring-1 ring-transparent transition focus:border-white focus:ring-white/30"
              >
                <option value="Kilometro">Kilometro</option>
                <option value="Metro">Metro</option>
                <option value="Centimetro">Centimetro</option>
              </select>
            </div>
          </div>
          {resultado && (
            <p className="text-[11px] text-white/80">
              {resultado}
            </p>
          )}
        </CardContent>
        <CardFooter>
          <Button size="sm" className="text-xs" onClick={handleConvert}>
            Convertir
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

