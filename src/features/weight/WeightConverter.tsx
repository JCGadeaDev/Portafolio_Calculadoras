"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function WeightConverter() {
  const [lbs, setLbs] = useState<string>("");

  const lbsValue = parseFloat(lbs || "0");
  const showOutputs = !!lbs && !Number.isNaN(lbsValue);

  const grams = showOutputs ? lbsValue / 0.0022046 : 0;
  const kg = showOutputs ? lbsValue / 2.2046 : 0;
  const oz = showOutputs ? lbsValue * 16 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="border-white/20 bg-white/5 text-white shadow-lg shadow-black/30">
        <CardHeader>
          <CardTitle className="text-sm font-semibold">Conversor de Peso</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-xs">
          <div className="space-y-1">
            <label htmlFor="lbsInput" className="text-[11px] text-white/80">
              Libras (lb)
            </label>
            <input
              id="lbsInput"
              type="number"
              value={lbs}
              onChange={(e) => setLbs(e.target.value)}
              placeholder="Introduce libras..."
              className="w-full rounded-md border border-white/20 bg-black/30 px-3 py-2 text-xs text-white outline-none ring-1 ring-transparent transition focus:border-white focus:ring-white/30"
            />
          </div>

          {showOutputs && (
            <div className="space-y-2 text-[11px] text-white">
              <div className="rounded-md border border-white/20 bg-black/30 px-3 py-2">
                <p className="font-semibold text-white/90">Gramos</p>
                <p className="text-white/80">{grams.toFixed(2)}</p>
              </div>
              <div className="rounded-md border border-white/20 bg-black/30 px-3 py-2">
                <p className="font-semibold text-white/90">Kilogramos</p>
                <p className="text-white/80">{kg.toFixed(2)}</p>
              </div>
              <div className="rounded-md border border-white/20 bg-black/30 px-3 py-2">
                <p className="font-semibold text-white/90">Onzas</p>
                <p className="text-white/80">{oz.toFixed(2)}</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}

