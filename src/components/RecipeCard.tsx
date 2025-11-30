"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Recipe } from "@/data/recipes";

interface RecipeCardProps {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: RecipeCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'desayuno':
        return 'bg-yellow-500 text-white';
      case 'almuerzo':
        return 'bg-green-500 text-white';
      case 'cena':
        return 'bg-orange-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case 'desayuno':
        return 'Desayuno';
      case 'almuerzo':
        return 'Almuerzo';
      case 'cena':
        return 'Cena';
      default:
        return category;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group">
          <div className="relative">
            <img 
              src={recipe.image} 
              alt={recipe.name}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className={`absolute top-4 left-4 ${getCategoryColor(recipe.category)}`}>
              {getCategoryLabel(recipe.category)}
            </Badge>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-medium text-green-800">
              {recipe.calories} cal
            </div>
          </div>
          <CardHeader>
            <CardTitle className="text-green-800 group-hover:text-green-600 transition-colors">
              {recipe.name}
            </CardTitle>
            <CardDescription className="line-clamp-2">
              {recipe.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between text-sm text-green-600 mb-3">
              <span>⏱️ {recipe.prepTime} min</span>
              <span>👥 {recipe.servings} porciones</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {recipe.tags.slice(0, 2).map((tag, index) => (
                <Badge key={index} variant="secondary" className="text-xs bg-green-100 text-green-700">
                  {tag}
                </Badge>
              ))}
              {recipe.tags.length > 2 && (
                <Badge variant="secondary" className="text-xs bg-gray-100 text-gray-600">
                  +{recipe.tags.length - 2}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="relative mb-4">
            <img 
              src={recipe.image} 
              alt={recipe.name}
              className="w-full h-64 object-cover rounded-lg"
            />
            <Badge className={`absolute top-4 left-4 ${getCategoryColor(recipe.category)}`}>
              {getCategoryLabel(recipe.category)}
            </Badge>
          </div>
          <DialogTitle className="text-2xl text-green-800">{recipe.name}</DialogTitle>
          <DialogDescription className="text-lg">
            {recipe.description}
          </DialogDescription>
        </DialogHeader>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Recipe Info */}
          <div className="md:col-span-1 space-y-4">
            <Card className="border-green-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-green-800">Información Nutricional</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-700">Calorías:</span>
                  <span className="font-semibold text-green-800">{recipe.calories}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Proteínas:</span>
                  <span className="font-semibold text-green-800">{recipe.nutrition.protein}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Carbohidratos:</span>
                  <span className="font-semibold text-green-800">{recipe.nutrition.carbs}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Grasas:</span>
                  <span className="font-semibold text-green-800">{recipe.nutrition.fat}g</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Fibra:</span>
                  <span className="font-semibold text-green-800">{recipe.nutrition.fiber}g</span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-yellow-200">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-green-800">Detalles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-green-700">Tiempo:</span>
                  <span className="font-semibold text-green-800">{recipe.prepTime} min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-green-700">Porciones:</span>
                  <span className="font-semibold text-green-800">{recipe.servings}</span>
                </div>
                <div className="space-y-2">
                  <span className="text-green-700">Etiquetas:</span>
                  <div className="flex flex-wrap gap-1">
                    {recipe.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs bg-green-100 text-green-700">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ingredients and Instructions */}
          <div className="md:col-span-2 space-y-6">
            {/* Ingredients */}
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Ingredientes</h3>
              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {recipe.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-3 text-green-700">
                        <span className="text-green-500 mt-1 text-sm">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Separator />

            {/* Instructions */}
            <div>
              <h3 className="text-xl font-semibold text-green-800 mb-4">Preparación</h3>
              <Card className="border-green-200">
                <CardContent className="pt-6">
                  <ol className="space-y-4">
                    {recipe.instructions.map((instruction, index) => (
                      <li key={index} className="flex gap-4">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                          {index + 1}
                        </div>
                        <p className="text-green-700 pt-1">{instruction}</p>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <Button 
            onClick={() => setIsOpen(false)}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
          >
            ¡Voy a cocinar esta receta!
          </Button>
          <Button 
            variant="outline"
            className="border-green-600 text-green-600 hover:bg-green-50"
            onClick={() => {
              // Share functionality could be added here
              navigator.share?.({
                title: recipe.name,
                text: recipe.description,
                url: window.location.href
              });
            }}
          >
            Compartir
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}