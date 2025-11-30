"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface BMIResult {
  bmi: number;
  category: string;
  color: string;
  recommendations: string[];
}

export default function BMICalculator() {
  const [weight, setWeight] = useState<string>("");
  const [height, setHeight] = useState<string>("");
  const [result, setResult] = useState<BMIResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const calculateBMI = () => {
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height) / 100; // Convert cm to meters

    if (!weightNum || !heightNum || weightNum <= 0 || heightNum <= 0) {
      alert("Por favor ingresa valores válidos para peso y altura");
      return;
    }

    setIsCalculating(true);

    // Simulate calculation delay for better UX
    setTimeout(() => {
      const bmi = weightNum / (heightNum * heightNum);
      let category = "";
      let color = "";
      let recommendations: string[] = [];

      if (bmi < 18.5) {
        category = "Bajo peso";
        color = "bg-blue-500";
        recommendations = [
          "Consulta con un nutricionista para aumentar peso de forma saludable",
          "Incluye más proteínas y grasas saludables en tu dieta",
          "Considera ejercicios de fuerza para ganar masa muscular",
          "Aumenta la frecuencia de comidas con snacks nutritivos"
        ];
      } else if (bmi >= 18.5 && bmi < 25) {
        category = "Peso normal";
        color = "bg-green-500";
        recommendations = [
          "¡Excelente! Mantén tu peso actual con una dieta balanceada",
          "Continúa con ejercicio regular para mantener tu salud",
          "Incluye las recetas de NutriLife en tu rutina diaria",
          "Mantén una hidratación adecuada y descanso suficiente"
        ];
      } else if (bmi >= 25 && bmi < 30) {
        category = "Sobrepeso";
        color = "bg-yellow-500";
        recommendations = [
          "Reduce gradualmente las porciones y aumenta la actividad física",
          "Enfócate en alimentos integrales y evita procesados",
          "Incluye más verduras y proteínas magras en tus comidas",
          "Considera consultar con un profesional de la salud"
        ];
      } else {
        category = "Obesidad";
        color = "bg-red-500";
        recommendations = [
          "Es importante consultar con un médico y nutricionista",
          "Implementa cambios graduales en tu alimentación",
          "Inicia con ejercicio de bajo impacto como caminar",
          "Busca apoyo profesional para un plan personalizado"
        ];
      }

      setResult({
        bmi: Math.round(bmi * 10) / 10,
        category,
        color,
        recommendations
      });
      setIsCalculating(false);
    }, 1000);
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setResult(null);
  };

  const getBMIProgress = (bmi: number) => {
    // Scale BMI to 0-100 for progress bar (BMI 15-35 range)
    return Math.min(Math.max(((bmi - 15) / 20) * 100, 0), 100);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Calculadora de IMC</h2>
        <p className="text-xl text-green-600 max-w-2xl mx-auto">
          Calcula tu Índice de Masa Corporal y recibe recomendaciones personalizadas para tu bienestar
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Calculator Input */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 font-bold">📊</span>
              </div>
              Datos Personales
            </CardTitle>
            <CardDescription>
              Ingresa tu peso y altura para calcular tu IMC
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="weight" className="text-green-700 font-medium">
                Peso (kg)
              </Label>
              <Input
                id="weight"
                type="number"
                placeholder="Ej: 70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="border-green-200 focus:ring-green-500 focus:border-green-500"
                min="1"
                max="300"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="height" className="text-green-700 font-medium">
                Altura (cm)
              </Label>
              <Input
                id="height"
                type="number"
                placeholder="Ej: 170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="border-green-200 focus:ring-green-500 focus:border-green-500"
                min="100"
                max="250"
              />
            </div>

            <div className="flex gap-3">
              <Button 
                onClick={calculateBMI}
                disabled={isCalculating || !weight || !height}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white"
              >
                {isCalculating ? "Calculando..." : "Calcular IMC"}
              </Button>
              {result && (
                <Button 
                  onClick={resetCalculator}
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                >
                  Nuevo Cálculo
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-green-800 flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                <span className="text-yellow-600 font-bold">📋</span>
              </div>
              Resultados
            </CardTitle>
            <CardDescription>
              Tu índice de masa corporal y recomendaciones
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!result ? (
              <div className="text-center py-8 text-gray-500">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚖️</span>
                </div>
                <p>Ingresa tus datos para ver los resultados</p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* BMI Value */}
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-800 mb-2">
                    {result.bmi}
                  </div>
                  <Badge className={`${result.color} text-white text-lg px-4 py-2`}>
                    {result.category}
                  </Badge>
                </div>

                {/* BMI Scale */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Bajo peso</span>
                    <span>Normal</span>
                    <span>Sobrepeso</span>
                    <span>Obesidad</span>
                  </div>
                  <Progress 
                    value={getBMIProgress(result.bmi)} 
                    className="h-3"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>&lt;18.5</span>
                    <span>18.5-24.9</span>
                    <span>25-29.9</span>
                    <span>≥30</span>
                  </div>
                </div>

                {/* Recommendations */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-800">Recomendaciones:</h4>
                  <ul className="space-y-2">
                    {result.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-green-700">
                        <span className="text-green-500 mt-1">•</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* BMI Information */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="text-green-800">¿Qué es el IMC?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-green-700 mb-4">
            El Índice de Masa Corporal (IMC) es una medida que relaciona tu peso y altura para 
            determinar si tienes un peso saludable. Es una herramienta útil para evaluar riesgos 
            de salud relacionados con el peso.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-semibold text-green-800 mb-2">Categorías del IMC:</h5>
              <ul className="space-y-1 text-green-700">
                <li><span className="font-medium">Bajo peso:</span> Menos de 18.5</li>
                <li><span className="font-medium">Normal:</span> 18.5 - 24.9</li>
                <li><span className="font-medium">Sobrepeso:</span> 25 - 29.9</li>
                <li><span className="font-medium">Obesidad:</span> 30 o más</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-green-800 mb-2">Importante recordar:</h5>
              <ul className="space-y-1 text-green-700">
                <li>• El IMC es una guía general</li>
                <li>• No considera masa muscular</li>
                <li>• Consulta a un profesional</li>
                <li>• Combina con otros indicadores</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}