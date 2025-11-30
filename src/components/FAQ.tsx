"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
  tags: string[];
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "¿Por qué es importante evitar los alimentos procesados?",
    answer: "Los alimentos procesados contienen altos niveles de azúcares añadidos, grasas trans, sodio y conservantes químicos que pueden causar inflamación, aumentar el riesgo de enfermedades cardiovasculares, diabetes tipo 2 y obesidad. Además, su producción genera un mayor impacto ambiental debido al uso intensivo de recursos y packaging. Los alimentos naturales, por el contrario, mantienen sus nutrientes originales y son más fáciles de digerir.",
    category: "Alimentación Saludable",
    tags: ["procesados", "salud", "nutrición"]
  },
  {
    id: "2",
    question: "¿Cuántas veces al día debo comer para mantener un peso saludable?",
    answer: "Lo ideal es realizar 3 comidas principales (desayuno, almuerzo y cena) y 2 snacks saludables entre comidas. Esto ayuda a mantener estables los niveles de glucosa en sangre, acelera el metabolismo y evita la sensación de hambre extrema que puede llevar a comer en exceso. Es importante que cada comida incluya proteínas, carbohidratos complejos y grasas saludables.",
    category: "Hábitos Alimentarios",
    tags: ["frecuencia", "peso", "metabolismo"]
  },
  {
    id: "3",
    question: "¿Qué beneficios tiene la quinua y por qué es considerada un superalimento?",
    answer: "La quinua es una proteína completa que contiene los 9 aminoácidos esenciales, es rica en fibra, hierro, magnesio y antioxidantes. Es libre de gluten, tiene un bajo índice glucémico y ayuda a controlar el colesterol. Además, es un cultivo ancestral peruano que se adapta a diferentes climas, siendo sostenible ambientalmente. Su versatilidad permite usarla en desayunos, almuerzos y cenas.",
    category: "Superalimentos",
    tags: ["quinua", "proteína", "sin gluten", "peruano"]
  },
  {
    id: "4",
    question: "¿Cómo puedo calcular las porciones adecuadas para mis comidas?",
    answer: "Una forma práctica es usar la 'regla del plato': llena la mitad del plato con verduras y frutas, un cuarto con proteínas magras (tamaño de la palma de tu mano) y un cuarto con carbohidratos complejos (tamaño de tu puño cerrado). Para grasas saludables, usa el tamaño de tu pulgar. También puedes usar nuestra calculadora de IMC para obtener recomendaciones personalizadas según tu peso y altura.",
    category: "Porciones",
    tags: ["porciones", "plato", "medidas"]
  },
  {
    id: "5",
    question: "¿Cuál es el impacto ambiental de la comida chatarra vs alimentos naturales?",
    answer: "La producción de comida chatarra genera 3 veces más emisiones de CO2, usa 2.5 veces más agua y produce más residuos plásticos por el empaquetado. Los alimentos naturales y locales requieren menos procesamiento, transporte y packaging. Elegir productos de temporada y locales reduce significativamente tu huella de carbono. Además, apoyar la agricultura sostenible ayuda a preservar la biodiversidad.",
    category: "Impacto Ambiental",
    tags: ["medio ambiente", "sostenibilidad", "CO2"]
  },
  {
    id: "6",
    question: "¿Qué ingredientes peruanos son especialmente nutritivos?",
    answer: "El Perú tiene increíbles superalimentos: la quinua (proteína completa), la kiwicha o amaranto (alto en calcio), la lúcuma (antioxidantes y betacaroteno), el aguaymanto (vitamina C), la maca (energía y hormonas), las semillas de chía (omega-3), el camu camu (vitamina C), y el sacha inchi (proteína y omega-3). Estos ingredientes ancestrales son la base de nuestras recetas saludables.",
    category: "Ingredientes Peruanos",
    tags: ["superalimentos", "peruano", "ancestral", "nutritivo"]
  },
  {
    id: "7",
    question: "¿Cómo puedo mantener una alimentación saludable con un presupuesto limitado?",
    answer: "Compra alimentos de temporada y locales, planifica tus menús semanalmente, compra granos y legumbres en cantidad, aprovecha las ofertas de mercados locales, cultiva hierbas aromáticas en casa, y prepara comidas en lotes para congelar. Los ingredientes básicos como quinua, lentejas, avena y verduras de temporada son económicos y muy nutritivos. Evita alimentos procesados que son más caros y menos saludables.",
    category: "Presupuesto",
    tags: ["económico", "planificación", "ahorro"]
  },
  {
    id: "8",
    question: "¿Es necesario tomar suplementos si como de forma saludable?",
    answer: "Una dieta balanceada y variada generalmente proporciona todos los nutrientes necesarios. Sin embargo, algunos suplementos pueden ser útiles: vitamina D (especialmente en lugares con poco sol), vitamina B12 (para vegetarianos), omega-3 (si no consumes pescado regularmente), y hierro (en casos de anemia). Siempre consulta con un profesional de la salud antes de tomar suplementos.",
    category: "Suplementos",
    tags: ["vitaminas", "suplementos", "nutrientes"]
  },
  {
    id: "9",
    question: "¿Cómo puedo hacer que mis hijos coman más saludable?",
    answer: "Involúcralos en la preparación de comidas, haz que las verduras sean divertidas con colores y formas, ofrece opciones saludables sin forzar, sé un buen ejemplo comiendo saludable tú mismo, introduce nuevos alimentos gradualmente mezclándolos con sus favoritos, y evita usar la comida como premio o castigo. Las recetas de NutriLife incluyen opciones coloridas y atractivas para niños.",
    category: "Alimentación Infantil",
    tags: ["niños", "familia", "educación"]
  },
  {
    id: "10",
    question: "¿Qué debo hacer si tengo intolerancias alimentarias?",
    answer: "Identifica claramente tus intolerancias con ayuda médica, lee siempre las etiquetas de los productos, busca alternativas nutritivas (por ejemplo, leches vegetales para intolerancia a la lactosa), mantén un diario alimentario para identificar patrones, y consulta con un nutricionista para asegurar que obtienes todos los nutrientes. Muchas de nuestras recetas son naturalmente libres de gluten y lácteos.",
    category: "Intolerancias",
    tags: ["intolerancias", "alergias", "alternativas"]
  }
];

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = ["all", ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = searchTerm === "" || 
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Preguntas Frecuentes</h2>
        <p className="text-xl text-green-600 max-w-2xl mx-auto">
          Encuentra respuestas a las preguntas más comunes sobre alimentación saludable, 
          nutrición y estilo de vida consciente.
        </p>
      </div>

      {/* Search and Filter */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">❓</span>
            </div>
            Buscar Respuestas
          </CardTitle>
          <CardDescription>
            Busca por palabras clave o navega por categorías
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            type="text"
            placeholder="Buscar preguntas, respuestas o temas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border-green-200 focus:ring-green-500 focus:border-green-500"
          />
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={selectedCategory === category ? "default" : "secondary"}
                className={`cursor-pointer ${
                  selectedCategory === category
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-green-100 text-green-700 hover:bg-green-200"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category === "all" ? "Todas las categorías" : category}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Results */}
      <div className="text-green-700 mb-4">
        <span className="font-semibold">{filteredFAQ.length}</span> preguntas encontradas
      </div>

      {/* FAQ Accordion */}
      {filteredFAQ.length > 0 ? (
        <Accordion type="single" collapsible className="space-y-4">
          {filteredFAQ.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border border-green-200 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:text-green-600 py-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-green-800">{item.question}</h3>
                  <div className="flex gap-2">
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 text-xs">
                      {item.category}
                    </Badge>
                    {item.tags.slice(0, 2).map((tag, index) => (
                      <Badge key={index} variant="secondary" className="bg-green-100 text-green-700 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-green-700 pb-6 leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="text-center py-12">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">No se encontraron preguntas</h3>
            <p className="text-green-600 mb-4">
              No hay preguntas que coincidan con tu búsqueda. Intenta con otros términos.
            </p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setSearchTerm("")}
                className="px-4 py-2 border border-green-600 text-green-600 rounded-lg hover:bg-green-50"
              >
                Limpiar búsqueda
              </button>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Ver todas las preguntas
              </button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Contact for more questions */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-800">¿No encontraste tu respuesta?</CardTitle>
          <CardDescription>
            Estamos aquí para ayudarte con cualquier duda sobre alimentación saludable
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-green-700 mb-4">
            Si tienes una pregunta específica que no está en nuestra lista, no dudes en contactarnos. 
            Nuestro equipo de nutricionistas estará encantado de ayudarte.
          </p>
          <div className="flex gap-3">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium">
              Contactar Nutricionista
            </button>
            <button className="px-6 py-3 border border-green-600 text-green-600 rounded-lg hover:bg-green-50 font-medium">
              Enviar Pregunta
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}