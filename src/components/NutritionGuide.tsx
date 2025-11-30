"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";


export default function NutritionGuide() {
  const nutritionTips = [
    {
      id: "macronutrients",
      title: "Macronutrientes Esenciales",
      description: "Conoce los nutrientes principales que tu cuerpo necesita diariamente",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="border-green-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-green-800">Proteínas</CardTitle>
                <Badge className="bg-blue-100 text-blue-800 w-fit">15-25% diario</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm mb-3">
                  Esenciales para la construcción y reparación de tejidos, enzimas y hormonas.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>Fuentes:</strong> Quinua, pescado, pollo, legumbres, huevos</div>
                  <div><strong>Cantidad:</strong> 0.8-1.2g por kg de peso corporal</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-green-800">Carbohidratos</CardTitle>
                <Badge className="bg-yellow-100 text-yellow-800 w-fit">45-65% diario</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm mb-3">
                  Principal fuente de energía para el cerebro y músculos.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>Fuentes:</strong> Quinua, avena, camote, frutas, verduras</div>
                  <div><strong>Priorizar:</strong> Carbohidratos complejos y fibra</div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-green-800">Grasas Saludables</CardTitle>
                <Badge className="bg-green-100 text-green-800 w-fit">20-35% diario</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-green-700 text-sm mb-3">
                  Importantes para la absorción de vitaminas y salud hormonal.
                </p>
                <div className="space-y-2 text-sm">
                  <div><strong>Fuentes:</strong> Palta, nueces, aceite de oliva, pescado</div>
                  <div><strong>Evitar:</strong> Grasas trans y exceso de saturadas</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "vitamins",
      title: "Vitaminas y Minerales Clave",
      description: "Micronutrientes esenciales para el funcionamiento óptimo del organismo",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-800 mb-4">Vitaminas Esenciales</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h5 className="font-medium text-green-800">Vitamina C</h5>
                  <p className="text-sm text-green-700">Antioxidante, inmunidad</p>
                  <p className="text-xs text-green-600">Fuentes: Aguaymanto, camu camu, cítricos</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h5 className="font-medium text-green-800">Vitamina D</h5>
                  <p className="text-sm text-green-700">Salud ósea, inmunidad</p>
                  <p className="text-xs text-green-600">Fuentes: Sol, pescado graso, huevos</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h5 className="font-medium text-green-800">Vitaminas B</h5>
                  <p className="text-sm text-green-700">Energía, sistema nervioso</p>
                  <p className="text-xs text-green-600">Fuentes: Quinua, legumbres, verduras verdes</p>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-green-800 mb-4">Minerales Importantes</h4>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h5 className="font-medium text-green-800">Hierro</h5>
                  <p className="text-sm text-green-700">Transporte de oxígeno</p>
                  <p className="text-xs text-green-600">Fuentes: Quinua, lentejas, espinaca</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h5 className="font-medium text-green-800">Calcio</h5>
                  <p className="text-sm text-green-700">Salud ósea y dental</p>
                  <p className="text-xs text-green-600">Fuentes: Kiwicha, brócoli, almendras</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h5 className="font-medium text-green-800">Magnesio</h5>
                  <p className="text-sm text-green-700">Función muscular y nerviosa</p>
                  <p className="text-xs text-green-600">Fuentes: Quinua, nueces, semillas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "hydration",
      title: "Hidratación y Líquidos",
      description: "La importancia del agua y otros líquidos saludables",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-blue-800">Necesidades de Agua</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-800">2-3L</div>
                    <div className="text-sm text-blue-600">por día (adultos)</div>
                  </div>
                  <div className="space-y-2 text-sm text-blue-700">
                    <div>• Al despertar: 1-2 vasos</div>
                    <div>• Antes de comidas: 1 vaso</div>
                    <div>• Durante ejercicio: según sudoración</div>
                    <div>• Antes de dormir: 1 vaso</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Líquidos Saludables</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span>Agua pura</span>
                    <Badge className="bg-green-500 text-white">Excelente</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Infusiones naturales</span>
                    <Badge className="bg-green-400 text-white">Muy bueno</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Agua con limón</span>
                    <Badge className="bg-green-400 text-white">Muy bueno</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Jugos naturales</span>
                    <Badge className="bg-yellow-500 text-white">Moderado</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Bebidas azucaradas</span>
                    <Badge className="bg-red-500 text-white">Evitar</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "meal-timing",
      title: "Horarios y Frecuencia de Comidas",
      description: "Cuándo y con qué frecuencia comer para optimizar tu metabolismo",
      content: (
        <div className="space-y-6">
          <div className="grid gap-4">
            <Card className="border-yellow-200 bg-yellow-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <span className="text-2xl">🌅</span>
                  Desayuno (7:00 - 9:00 AM)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">Importancia:</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Activa el metabolismo</li>
                      <li>• Proporciona energía para el día</li>
                      <li>• Mejora la concentración</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">Componentes ideales:</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Proteína (quinua, huevos)</li>
                      <li>• Carbohidratos complejos (avena)</li>
                      <li>• Frutas frescas</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200 bg-green-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <span className="text-2xl">☀️</span>
                  Almuerzo (12:00 - 2:00 PM)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">Características:</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Comida principal del día</li>
                      <li>• Mayor aporte calórico</li>
                      <li>• Incluir todos los grupos alimentarios</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">Distribución del plato:</h5>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-green-500 rounded"></div>
                        <span className="text-sm">50% Verduras</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500 rounded"></div>
                        <span className="text-sm">25% Proteína</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                        <span className="text-sm">25% Carbohidratos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-green-800 flex items-center gap-2">
                  <span className="text-2xl">🌙</span>
                  Cena (6:00 - 8:00 PM)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">Principios:</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Comida más ligera</li>
                      <li>• 2-3 horas antes de dormir</li>
                      <li>• Fácil digestión</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-800 mb-2">Alimentos recomendados:</h5>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Sopas y cremas</li>
                      <li>• Ensaladas</li>
                      <li>• Pescado al vapor</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    },
    {
      id: "superfoods",
      title: "Superalimentos Peruanos",
      description: "Descubre los increíbles beneficios de los alimentos ancestrales del Perú",
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Quinua - El Grano de Oro</CardTitle>
                <Badge className="bg-yellow-500 text-white w-fit">Proteína Completa</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-green-700">
                    Contiene los 9 aminoácidos esenciales, es rica en fibra, hierro y magnesio.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>Proteína: 14g/100g</div>
                    <div>Fibra: 7g/100g</div>
                    <div>Hierro: 4.6mg/100g</div>
                    <div>Sin gluten: ✓</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Lúcuma - Oro de los Incas</CardTitle>
                <Badge className="bg-orange-500 text-white w-fit">Antioxidante</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-green-700">
                    Rica en betacaroteno, hierro, zinc y vitaminas B3. Sabor dulce natural.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>Betacaroteno: Alto</div>
                    <div>Hierro: 0.7mg/100g</div>
                    <div>Zinc: 0.2mg/100g</div>
                    <div>Índice glucémico: Bajo</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Aguaymanto - Vitamina C</CardTitle>
                <Badge className="bg-yellow-500 text-white w-fit">Inmunidad</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-green-700">
                    Contiene más vitamina C que la naranja, rico en antioxidantes y fibra.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>Vitamina C: 43mg/100g</div>
                    <div>Antioxidantes: Alto</div>
                    <div>Fibra: 4.9g/100g</div>
                    <div>Calorías: 53/100g</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-green-200">
              <CardHeader>
                <CardTitle className="text-green-800">Kiwicha - Amaranto Andino</CardTitle>
                <Badge className="bg-red-500 text-white w-fit">Calcio</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-green-700">
                    Excelente fuente de calcio, proteína de alta calidad y sin gluten.
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>Calcio: 159mg/100g</div>
                    <div>Proteína: 13.6g/100g</div>
                    <div>Lisina: Alto</div>
                    <div>Sin gluten: ✓</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Guía Nutricional Completa</h2>
        <p className="text-xl text-green-600 max-w-3xl mx-auto">
          Aprende los fundamentos de una alimentación saludable con información científica 
          y práctica para transformar tu estilo de vida.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="border-green-200 text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-green-800">5</div>
            <div className="text-sm text-green-600">Porciones de frutas y verduras diarias</div>
          </CardContent>
        </Card>
        <Card className="border-yellow-200 text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-green-800">2-3L</div>
            <div className="text-sm text-green-600">Agua recomendada por día</div>
          </CardContent>
        </Card>
        <Card className="border-blue-200 text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-green-800">30g</div>
            <div className="text-sm text-green-600">Fibra diaria recomendada</div>
          </CardContent>
        </Card>
        <Card className="border-red-200 text-center">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-green-800">150min</div>
            <div className="text-sm text-green-600">Ejercicio semanal recomendado</div>
          </CardContent>
        </Card>
      </div>

      {/* Nutrition Guide Accordion */}
      <Accordion type="single" collapsible className="space-y-4">
        {nutritionTips.map((tip) => (
          <AccordionItem key={tip.id} value={tip.id} className="border border-green-200 rounded-lg px-6">
            <AccordionTrigger className="text-left hover:text-green-600 py-6">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-green-800">{tip.title}</h3>
                <p className="text-green-600">{tip.description}</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              {tip.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Action Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800">Comienza Tu Transformación</CardTitle>
            <CardDescription>
              Implementa estos conocimientos con nuestras recetas saludables
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 mb-4">
              Usa esta guía junto con nuestro recetario de 21 platos peruanos saludables 
              para crear un plan alimentario completo y delicioso.
            </p>
            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 font-medium">
              Ver Recetas Saludables
            </button>
          </CardContent>
        </Card>
        
        <Card className="border-yellow-200 bg-yellow-50">
          <CardHeader>
            <CardTitle className="text-green-800">Calcula Tu IMC</CardTitle>
            <CardDescription>
              Obtén recomendaciones personalizadas según tu perfil
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-green-700 mb-4">
              Combina esta información nutricional con tu índice de masa corporal 
              para recibir consejos específicos para tu situación.
            </p>
            <button className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 font-medium">
              Calcular Mi IMC
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}