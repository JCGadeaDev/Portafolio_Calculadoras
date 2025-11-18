"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function calculateAgeFromParts(day: number, month: number, year: number) {
  const now = new Date();
  let d2 = now.getDate();
  let m2 = 1 + now.getMonth();
  let y2 = now.getFullYear();
  const monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (day > d2) {
    d2 = d2 + monthDays[m2 - 1];
    m2 = m2 - 1;
  }
  if (month > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }

  const d = d2 - day;
  const m = m2 - month;
  const y = y2 - year;

  return { years: y, months: m, days: d };
}

export function AgeCalculator() {
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [resultado, setResultado] = useState<string | null>(null);

  function handleCalculate() {
    const d1 = parseInt(day, 10);
    const m1 = parseInt(month, 10);
    const y1 = parseInt(year, 10);

    if (!d1 || !m1 || !y1) {
      setResultado("Por favor, introduce una fecha válida.");
      return;
    }

    const { years, months, days } = calculateAgeFromParts(d1, m1, y1);

    setResultado(`Tu edad es de ${years} años, ${months} meses y ${days} días.`);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="border-white/20 bg-white/5 text-white shadow-lg shadow-black/30">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Calculadora de Edad</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-xs">
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1">
              <label htmlFor="day" className="text-[11px] text-white/80">
                Día
              </label>
              <input
                id="day"
                type="number"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="w-full rounded-md border border-white/20 bg-black/30 px-2 py-2 text-xs text-white outline-none ring-1 ring-transparent transition focus:border-white focus:ring-white/30"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="month" className="text-[11px] text-white/80">
                Mes
              </label>
              <input
                id="month"
                type="number"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full rounded-md border border-white/20 bg-black/30 px-2 py-2 text-xs text-white outline-none ring-1 ring-transparent transition focus:border-white focus:ring-white/30"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="year" className="text-[11px] text-white/80">
                Año
              </label>
              <input
                id="year"
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full rounded-md border border-white/20 bg-black/30 px-2 py-2 text-xs text-white outline-none ring-1 ring-transparent transition focus:border-white focus:ring-white/30"
              />
            </div>
          </div>
          {resultado && (
            <p className="text-[11px] text-white/80">
              {resultado}
            </p>
          )}
        </CardContent>
        <CardFooter>
          <Button size="sm" className="text-xs" onClick={handleCalculate}>
            Calcular edad
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

