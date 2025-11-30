"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function EnvironmentalImpact() {
  const [selectedComparison, setSelectedComparison] = useState<'co2' | 'water' | 'land'>('co2');

  const impactData = {
    co2: {
      title: "Emisiones de CO2",
      unit: "kg CO2 eq",
      processed: 5.2,
      natural: 1.8,
      difference: 189,
      description: "La producción de alimentos procesados genera casi 3 veces más emisiones de carbono"
    },
    water: {
      title: "Uso de Agua",
      unit: "litros",
      processed: 2500,
      natural: 1000,
      difference: 150,
      description: "Los alimentos procesados requieren 2.5 veces más agua en su producción"
    },
    land: {
      title: "Uso de Tierra",
      unit: "m² por kg",
      processed: 12.5,
      natural: 4.2,
      difference: 198,
      description: "La agricultura intensiva para procesados usa casi 3 veces más tierra"
    }
  };

  const sustainableTips = [
    {
      icon: "🌱",
      title: "Compra Local y de Temporada",
      description: "Reduce el transporte y apoya la agricultura local",
      impact: "Reduce CO2 en 40%"
    },
    {
      icon: "🥬",
      title: "Elige Alimentos Integrales",
      description: "Menos procesamiento significa menor impacto ambiental",
      impact: "Reduce energía en 60%"
    },
    {
      icon: "♻️",
      title: "Reduce el Desperdicio",
      description: "Planifica tus comidas y aprovecha sobras",
      impact: "Reduce residuos en 30%"
    },
    {
      icon: "🌾",
      title: "Apoya la Agricultura Orgánica",
      description: "Sin pesticidas químicos, mejor para el suelo",
      impact: "Mejora biodiversidad"
    }
  ];

  const foodComparisons = [
    {
      category: "Proteínas",
      processed: { name: "Nuggets procesados", co2: 6.8, water: 3200, land: 15.2 },
      natural: { name: "Pollo orgánico", co2: 2.3, water: 1400, land: 5.8 }
    },
    {
      category: "Carbohidratos",
      processed: { name: "Pan blanco industrial", co2: 1.2, water: 800, land: 3.5 },
      natural: { name: "Quinua orgánica", co2: 0.4, water: 320, land: 1.2 }
    },
    {
      category: "Snacks",
      processed: { name: "Papas fritas empaquetadas", co2: 3.8, water: 1800, land: 8.2 },
      natural: { name: "Frutas frescas", co2: 0.6, water: 400, land: 1.5 }
    },
    {
      category: "Bebidas",
      processed: { name: "Gaseosa embotellada", co2: 2.1, water: 2000, land: 0.8 },
      natural: { name: "Agua filtrada", co2: 0.1, water: 50, land: 0.1 }
    }
  ];

  const getCurrentData = () => impactData[selectedComparison];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Impacto Ambiental de los Alimentos</h2>
        <p className="text-xl text-green-600 max-w-3xl mx-auto">
          Descubre cómo tus decisiones alimentarias afectan al planeta y aprende a elegir 
          opciones más sostenibles para un futuro mejor.
        </p>
      </div>

      {/* Impact Comparison */}
      <Card className="border-red-200 bg-gradient-to-r from-red-50 to-orange-50">
        <CardHeader>
          <CardTitle className="text-green-800 text-center text-2xl">
            Comparación: Alimentos Procesados vs Naturales
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Impacto ambiental por kilogramo de alimento producido
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* Metric Selector */}
            <div className="flex justify-center">
              <div className="flex gap-2 p-1 bg-white rounded-lg border border-green-200">
                {Object.entries(impactData).map(([key, data]) => (
                  <Button
                    key={key}
                    variant={selectedComparison === key ? "default" : "ghost"}
                    onClick={() => setSelectedComparison(key as 'co2' | 'water' | 'land')}
                    className={selectedComparison === key ? "bg-green-600 text-white" : "text-green-700"}
                  >
                    {data.title}
                  </Button>
                ))}
              </div>
            </div>

            {/* Visual Comparison */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-red-300 bg-red-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-red-800 flex items-center justify-center gap-2">
                    <span className="text-2xl">🏭</span>
                    Alimentos Procesados
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-red-800 mb-2">
                    {getCurrentData().processed} {getCurrentData().unit}
                  </div>
                  <Badge className="bg-red-500 text-white">
                    +{getCurrentData().difference}% más impacto
                  </Badge>
                </CardContent>
              </Card>

              <Card className="border-green-300 bg-green-50">
                <CardHeader className="text-center">
                  <CardTitle className="text-green-800 flex items-center justify-center gap-2">
                    <span className="text-2xl">🌿</span>
                    Alimentos Naturales
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-4xl font-bold text-green-800 mb-2">
                    {getCurrentData().natural} {getCurrentData().unit}
                  </div>
                  <Badge className="bg-green-500 text-white">
                    Impacto reducido
                  </Badge>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <p className="text-lg text-green-700 font-medium">
                {getCurrentData().description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Comparisons */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800">Comparación Detallada por Categorías</CardTitle>
          <CardDescription>
            Impacto ambiental específico de diferentes tipos de alimentos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="co2" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="co2">Emisiones CO2</TabsTrigger>
              <TabsTrigger value="water">Uso de Agua</TabsTrigger>
              <TabsTrigger value="land">Uso de Tierra</TabsTrigger>
            </TabsList>
            
            <TabsContent value="co2" className="space-y-4">
              {foodComparisons.map((comparison, index) => (
                <div key={index} className="grid md:grid-cols-3 gap-4 p-4 border border-green-100 rounded-lg">
                  <div className="font-semibold text-green-800 flex items-center">
                    {comparison.category}
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-red-700">{comparison.processed.name}</div>
                    <div className="text-lg font-bold text-red-800">{comparison.processed.co2} kg CO2</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-green-700">{comparison.natural.name}</div>
                    <div className="text-lg font-bold text-green-800">{comparison.natural.co2} kg CO2</div>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="water" className="space-y-4">
              {foodComparisons.map((comparison, index) => (
                <div key={index} className="grid md:grid-cols-3 gap-4 p-4 border border-green-100 rounded-lg">
                  <div className="font-semibold text-green-800 flex items-center">
                    {comparison.category}
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-red-700">{comparison.processed.name}</div>
                    <div className="text-lg font-bold text-red-800">{comparison.processed.water}L</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-green-700">{comparison.natural.name}</div>
                    <div className="text-lg font-bold text-green-800">{comparison.natural.water}L</div>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="land" className="space-y-4">
              {foodComparisons.map((comparison, index) => (
                <div key={index} className="grid md:grid-cols-3 gap-4 p-4 border border-green-100 rounded-lg">
                  <div className="font-semibold text-green-800 flex items-center">
                    {comparison.category}
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-red-700">{comparison.processed.name}</div>
                    <div className="text-lg font-bold text-red-800">{comparison.processed.land} m²</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm text-green-700">{comparison.natural.name}</div>
                    <div className="text-lg font-bold text-green-800">{comparison.natural.land} m²</div>
                  </div>
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Sustainable Tips */}
      <Card className="border-green-200 bg-green-50">
        <CardHeader>
          <CardTitle className="text-green-800">Consejos para una Alimentación Sostenible</CardTitle>
          <CardDescription>
            Pequeños cambios que generan un gran impacto positivo en el planeta
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            {sustainableTips.map((tip, index) => (
              <Card key={index} className="border-green-200 bg-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-green-800 flex items-center gap-3">
                    <span className="text-2xl">{tip.icon}</span>
                    {tip.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-700 mb-3">{tip.description}</p>
                  <Badge className="bg-green-500 text-white">{tip.impact}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Section */}
      <Card className="border-yellow-200 bg-gradient-to-r from-yellow-50 to-green-50">
        <CardHeader>
          <CardTitle className="text-green-800 text-center">¡Únete al Cambio!</CardTitle>
          <CardDescription className="text-center text-lg">
            Cada decisión alimentaria cuenta para crear un futuro más sostenible
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-800">-40%</div>
              <div className="text-sm text-green-600">Reducción de CO2 eligiendo local</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-800">-60%</div>
              <div className="text-sm text-green-600">Menos energía con alimentos integrales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-800">-30%</div>
              <div className="text-sm text-green-600">Menos residuos planificando comidas</div>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className="text-green-700 text-lg">
              Comienza tu transformación hacia una alimentación más consciente y sostenible. 
              Nuestras recetas peruanas saludables te ayudan a cuidar tu salud y el planeta.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                Ver Recetas Sostenibles
              </Button>
              <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3">
                Calcular Mi Impacto
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}