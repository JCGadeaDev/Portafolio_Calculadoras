export type CalculatorCategory = "salud" | "conversiones" | "finanzas" | "otros";

export type CalculatorStack = "html-css-js" | "angular" | "react-next";

export type CalculatorDefinition = {
  slug: string;
  title: string;
  shortDescription: string;
  category: CalculatorCategory;
  stack: CalculatorStack;
  techLabel: string;
  difficulty: "básico" | "intermedio" | "avanzado";
  highlight?: string;
};

export const calculators: CalculatorDefinition[] = [
  {
    slug: "age-calculator",
    title: "Calculadora de Edad",
    shortDescription: "Calcula rápidamente tu edad exacta a partir de tu fecha de nacimiento.",
    category: "salud",
    stack: "html-css-js",
    techLabel: "HTML • CSS • JS",
    difficulty: "básico",
    highlight: "Ideal para practicar manejo de fechas en JavaScript.",
  },
  {
    slug: "imc",
    title: "Calculadora de IMC",
    shortDescription: "Calcula tu índice de masa corporal y clasifica tu rango de peso.",
    category: "salud",
    stack: "html-css-js",
    techLabel: "HTML • CSS • JS",
    difficulty: "básico",
    highlight: "Basada en una calculadora IMC existente de tu portfolio.",
  },
  {
    slug: "conversor-distancia",
    title: "Conversor de Distancia",
    shortDescription: "Convierte entre kilómetros, metros, millas y más, al instante.",
    category: "conversiones",
    stack: "html-css-js",
    techLabel: "HTML • CSS • JS",
    difficulty: "básico",
  },
  {
    slug: "weight-converter",
    title: "Conversor de Peso",
    shortDescription: "Transforma unidades de peso como kilogramos, libras y onzas.",
    category: "conversiones",
    stack: "html-css-js",
    techLabel: "HTML • CSS • JS",
    difficulty: "básico",
  },
  {
    slug: "calculadora-basica",
    title: "Calculadora Básica",
    shortDescription: "Suma, resta, multiplica y divide con una interfaz clara y minimalista.",
    category: "otros",
    stack: "angular",
    techLabel: "Angular",
    difficulty: "intermedio",
  },
  {
    slug: "calculadora-cientifica",
    title: "Calculadora Científica",
    shortDescription: "Funciones científicas avanzadas para cálculos más complejos.",
    category: "otros",
    stack: "angular",
    techLabel: "Angular",
    difficulty: "avanzado",
  },
];


