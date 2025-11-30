"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { recipes } from "@/data/recipes";
import RecipeCard from "./RecipeCard";

type CategoryFilter = 'all' | 'desayuno' | 'almuerzo' | 'cena';

export default function RecipeCollection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRecipes = useMemo(() => {
    let filtered = recipes;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(recipe => recipe.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(recipe =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        recipe.tags.some(tag => 
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    return filtered;
  }, [activeCategory, searchTerm]);

  const getCategoryCount = (category: CategoryFilter) => {
    if (category === 'all') return recipes.length;
    return recipes.filter(recipe => recipe.category === category).length;
  };

  const getCategoryLabel = (category: CategoryFilter) => {
    switch (category) {
      case 'all':
        return 'Todas';
      case 'desayuno':
        return 'Desayunos';
      case 'almuerzo':
        return 'Almuerzos';
      case 'cena':
        return 'Cenas';
      default:
        return category;
    }
  };

  const categories: CategoryFilter[] = ['all', 'desayuno', 'almuerzo', 'cena'];

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-4">Recetario Saludable Peruano</h2>
        <p className="text-xl text-green-600 max-w-3xl mx-auto">
          Descubre 21 recetas auténticas del Perú, adaptadas para una alimentación consciente y nutritiva. 
          Cada receta incluye información nutricional completa y pasos detallados.
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center gap-2">
            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
              <span className="text-green-600 font-bold">🔍</span>
            </div>
            Buscar Recetas
          </CardTitle>
          <CardDescription>
            Encuentra la receta perfecta por nombre, ingredientes o categoría
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Search Input */}
          <div className="relative">
            <Input
              type="text"
              placeholder="Buscar por nombre, ingredientes o etiquetas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border-green-200 focus:ring-green-500 focus:border-green-500 pl-4 pr-4"
            />
          </div>

          {/* Category Filters */}
          <div className="space-y-3">
            <h4 className="font-medium text-green-800">Filtrar por categoría:</h4>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={`${
                    activeCategory === category
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "border-green-600 text-green-600 hover:bg-green-50"
                  }`}
                >
                  {getCategoryLabel(category)}
                  <Badge 
                    variant="secondary" 
                    className={`ml-2 ${
                      activeCategory === category 
                        ? "bg-green-500 text-white" 
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {getCategoryCount(category)}
                  </Badge>
                </Button>
              ))}
            </div>
          </div>

          {/* Active Filters */}
          {(searchTerm || activeCategory !== 'all') && (
            <div className="flex items-center gap-3 pt-3 border-t border-green-100">
              <span className="text-sm text-green-700 font-medium">Filtros activos:</span>
              {searchTerm && (
                <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                  Búsqueda: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm('')}
                    className="ml-2 text-yellow-600 hover:text-yellow-800"
                  >
                    ×
                  </button>
                </Badge>
              )}
              {activeCategory !== 'all' && (
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  {getCategoryLabel(activeCategory)}
                  <button
                    onClick={() => setActiveCategory('all')}
                    className="ml-2 text-green-600 hover:text-green-800"
                  >
                    ×
                  </button>
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <div className="text-green-700">
          <span className="font-semibold">{filteredRecipes.length}</span> recetas encontradas
          {activeCategory !== 'all' && (
            <span className="ml-2 text-green-600">
              en {getCategoryLabel(activeCategory).toLowerCase()}
            </span>
          )}
        </div>
        {filteredRecipes.length > 0 && (
          <div className="text-sm text-green-600">
            Promedio: {Math.round(filteredRecipes.reduce((acc, recipe) => acc + recipe.calories, 0) / filteredRecipes.length)} calorías por porción
          </div>
        )}
      </div>

      {/* Recipe Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="text-center py-12">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold text-green-800 mb-2">No se encontraron recetas</h3>
            <p className="text-green-600 mb-4">
              No hay recetas que coincidan con tu búsqueda. Intenta con otros términos o categorías.
            </p>
            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => setSearchTerm('')}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Limpiar búsqueda
              </Button>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Ver todas las recetas
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recipe Statistics */}
      {filteredRecipes.length > 0 && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-800">Estadísticas Nutricionales</CardTitle>
            <CardDescription>
              Información promedio de las recetas mostradas
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-800">
                  {Math.round(filteredRecipes.reduce((acc, recipe) => acc + recipe.calories, 0) / filteredRecipes.length)}
                </div>
                <div className="text-sm text-green-600">Calorías promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-800">
                  {Math.round(filteredRecipes.reduce((acc, recipe) => acc + recipe.nutrition.protein, 0) / filteredRecipes.length)}g
                </div>
                <div className="text-sm text-green-600">Proteína promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-800">
                  {Math.round(filteredRecipes.reduce((acc, recipe) => acc + recipe.prepTime, 0) / filteredRecipes.length)} min
                </div>
                <div className="text-sm text-green-600">Tiempo promedio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-800">
                  {Math.round(filteredRecipes.reduce((acc, recipe) => acc + recipe.nutrition.fiber, 0) / filteredRecipes.length)}g
                </div>
                <div className="text-sm text-green-600">Fibra promedio</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}