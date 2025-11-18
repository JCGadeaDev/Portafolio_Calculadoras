import { NextResponse } from "next/server";
import { calculators } from "@/data/calculators";

export const dynamic = "force-static";

export function GET() {
  return NextResponse.json(
    calculators.map((c) => ({
      slug: c.slug,
      title: c.title,
      shortDescription: c.shortDescription,
      category: c.category,
      stack: c.stack,
      techLabel: c.techLabel,
      difficulty: c.difficulty,
    })),
  );
}


