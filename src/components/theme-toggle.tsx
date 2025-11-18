"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        size="icon"
        variant="outline"
        className="h-8 w-8 border-white/30 bg-black/20 text-white/70"
        aria-label="Cambiar tema"
      >
        <Sun className="h-4 w-4" />
      </Button>
    );
  }

  const isDark = theme === "dark";

  return (
    <Button
      size="icon"
      variant="outline"
      className="h-8 w-8 border-white/30 bg-black/20 text-white"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Cambiar tema"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}


