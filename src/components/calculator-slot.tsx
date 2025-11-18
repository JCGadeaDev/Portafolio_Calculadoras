"use client";

import type { ComponentType, ReactNode } from "react";
import { ImcCalculator } from "@/features/imc/ImcCalculator";
import { AgeCalculator } from "@/features/age/AgeCalculator";
import { DistanceConverter } from "@/features/distance/DistanceConverter";
import { WeightConverter } from "@/features/weight/WeightConverter";
import { BasicCalculator } from "@/features/basic/BasicCalculator";
import { ScientificCalculator } from "@/features/scientific/ScientificCalculator";

const map: Record<string, ComponentType | undefined> = {
  imc: ImcCalculator,
  "age-calculator": AgeCalculator,
  "conversor-distancia": DistanceConverter,
  "weight-converter": WeightConverter,
  "calculadora-basica": BasicCalculator,
  "calculadora-cientifica": ScientificCalculator,
};

type CalculatorSlotProps = {
  slug: string;
  fallback?: ReactNode;
};

export function CalculatorSlot({ slug, fallback }: CalculatorSlotProps) {
  const Component = map[slug];

  if (!Component) {
    return <>{fallback ?? null}</>;
  }

  return <Component />;
}


