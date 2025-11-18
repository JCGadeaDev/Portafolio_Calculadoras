import { calculators } from "@/data/calculators";
import { LandingContent } from "@/components/landing-content";

export default function Home() {
  return <LandingContent calculators={calculators} />;
}
