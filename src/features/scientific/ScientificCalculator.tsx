"use client";

import { useState } from "react";
import { evaluate } from "mathjs";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function processSpecialOperations(expression: string): string {
  let exp = expression;
  exp = exp.replace(/pi/g, "pi");
  exp = exp.replace(/e/g, "e");
  exp = exp.replace(/sqtr\(/g, "e");
  exp = exp.replace(/sin\(/g, "sin(");
  exp = exp.replace(/cos\(/g, "cos(");
  exp = exp.replace(/tan\(/g, "tan(");
  exp = exp.replace(/log\(/g, "log10(");
  exp = exp.replace(/ln\(/g, "log(");
  exp = exp.replace(/exp\(/g, "exp(");

  exp = exp.replace(/(\d+)\^(\d+)/g, (_, base: string, exponent: string) => `(${base} ^ ${exponent})`);

  return exp;
}

export function ScientificCalculator() {
  const [display, setDisplay] = useState<string>("");

  function appendToInput(value: string) {
    setDisplay((current) => {
      if (current.length < 30) {
        return current + value;
      }
      return current;
    });
  }

  function clearDisplay() {
    setDisplay("");
  }

  function deleteLast() {
    setDisplay((current) => current.slice(0, -1));
  }

  function calculate() {
    try {
      const openParenthesesCount = (display.match(/\(/g) || []).length;
      const closeParenthesesCount = (display.match(/\)/g) || []).length;

      if (openParenthesesCount !== closeParenthesesCount) {
        setDisplay("Error: paréntesis");
        return;
      }

      const sanitized = processSpecialOperations(display);
      const result = evaluate(sanitized);
      setDisplay(String(result));
    } catch (error) {
      setDisplay("Error");
    }
  }

  const buttons: string[] = [
    "7", "8", "9", "/", "sin(",
    "4", "5", "6", "*", "cos(",
    "1", "2", "3", "-", "tan(",
    "0", ".", "^", "+", "log(",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <Card className="border-white/20 bg-white/5 text-white shadow-lg shadow-black/30">
      <CardHeader>
        <CardTitle className="text-sm font-semibold">Calculadora Científica</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 text-xs">
        <div className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 text-right font-mono text-sm">
          {display || "0"}
        </div>
        <div className="grid grid-cols-5 gap-2">
          {buttons.map((b) => (
            <Button
              key={b}
              size="sm"
              variant="outline"
              className="h-8 text-[11px]"
              onClick={() => appendToInput(b)}
            >
              {b}
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button size="sm" variant="outline" className="text-[11px]" onClick={clearDisplay}>
          C
        </Button>
        <Button size="sm" variant="outline" className="text-[11px]" onClick={deleteLast}>
          ⌫
        </Button>
        <Button size="sm" className="ml-auto text-[11px]" onClick={calculate}>
          =
        </Button>
      </CardFooter>
      </Card>
    </motion.div>
  );
}

