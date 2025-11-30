"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BMICalculator from "@/components/BMICalculator";
import RecipeCollection from "@/components/RecipeCollection";
import NutritionGuide from "@/components/NutritionGuide";
import EnvironmentalImpact from "@/components/EnvironmentalImpact";
import FAQ from "@/components/FAQ";

export default function NutriLifePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 overflow-x-hidden">
      {/* Floating Animation Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-200/30 rounded-full animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-200/30 rounded-full animate-bounce" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-orange-200/30 rounded-full animate-bounce" style={{animationDelay: '2s', animationDuration: '5s'}}></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-300/20 rounded-full animate-bounce" style={{animationDelay: '0.5s', animationDuration: '3.5s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-yellow-300/25 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-14 h-14 bg-green-400/20 rounded-full animate-pulse" style={{animationDelay: '2.5s'}}></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg border-b border-green-100 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8a07d2d3-904e-4ac7-9ec0-eba2457ef8a2.png" 
                  alt="NutriLife Logo Moderno - Alimentación saludable con diseño contemporáneo circular"
                  className="w-14 h-14 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
              </div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent">NutriLife</h1>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('inicio')} 
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'inicio' ? 'text-green-900 font-semibold bg-green-100 shadow-md' : 'text-green-700 hover:text-green-900 hover:bg-green-50'}`}
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('recetas')} 
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'recetas' ? 'text-green-900 font-semibold bg-green-100 shadow-md' : 'text-green-700 hover:text-green-900 hover:bg-green-50'}`}
              >
                Recetas
              </button>
              <button 
                onClick={() => scrollToSection('calculadora')} 
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'calculadora' ? 'text-green-900 font-semibold bg-green-100 shadow-md' : 'text-green-700 hover:text-green-900 hover:bg-green-50'}`}
              >
                Calculadora
              </button>
              <button 
                onClick={() => scrollToSection('guia')} 
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'guia' ? 'text-green-900 font-semibold bg-green-100 shadow-md' : 'text-green-700 hover:text-green-900 hover:bg-green-50'}`}
              >
                Guía
              </button>
              <button 
                onClick={() => scrollToSection('juegos')} 
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'juegos' ? 'text-green-900 font-semibold bg-green-100 shadow-md' : 'text-green-700 hover:text-green-900 hover:bg-green-50'}`}
              >
                Juegos
              </button>
              <button 
                onClick={() => scrollToSection('impacto')} 
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'impacto' ? 'text-green-900 font-semibold bg-green-100 shadow-md' : 'text-green-700 hover:text-green-900 hover:bg-green-50'}`}
              >
                Impacto
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className={`relative px-4 py-2 rounded-lg transition-all duration-300 ${activeSection === 'faq' ? 'text-green-900 font-semibold bg-green-100 shadow-md' : 'text-green-700 hover:text-green-900 hover:bg-green-50'}`}
              >
                FAQ
              </button>
            </nav>
            <Button 
              onClick={() => scrollToSection('recetas')}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Comenzar Ahora
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="pt-24 pb-20 px-4 relative">
        <div className="container mx-auto text-center relative z-20">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Badge className="mb-8 bg-gradient-to-r from-yellow-100 to-green-100 text-green-800 border-green-200 text-lg px-6 py-2 shadow-lg">
              🌱 Alimentación Consciente y Sostenible
            </Badge>
            <h2 className="text-6xl md:text-8xl font-bold text-green-800 mb-8 leading-tight">
              Transforma tu vida con
              <span className="text-transparent bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text block animate-pulse">NutriLife</span>
            </h2>
            <p className="text-2xl text-green-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              Descubre el poder de la alimentación saludable con recetas peruanas auténticas, 
              herramientas de nutrición y guías para un estilo de vida más consciente y sostenible.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('recetas')}
                className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-10 py-5 text-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Explorar Recetas
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('calculadora')}
                className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-10 py-5 text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Calcular IMC
              </Button>
            </div>
          </div>
          
          {/* 3D Animated Center Element */}
          <div className="mt-20 relative">
            <div className="relative mx-auto w-full max-w-5xl">
              {/* Main Hero Image */}
              <img 
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/674a15d8-abd6-4c44-914b-2eab579297d1.png" 
                alt="Platos saludables peruanos coloridos con quinua, frutas y verduras frescas en un ambiente natural"
                className="w-full rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* 3D Floating Elements */}
              <div className="absolute -top-10 -left-10 w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-xl animate-bounce opacity-80" style={{animationDelay: '0s', animationDuration: '3s'}}></div>
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full shadow-xl animate-bounce opacity-80" style={{animationDelay: '1s', animationDuration: '4s'}}></div>
              <div className="absolute -bottom-8 left-10 w-16 h-16 bg-gradient-to-r from-red-400 to-red-600 rounded-full shadow-xl animate-bounce opacity-80" style={{animationDelay: '2s', animationDuration: '3.5s'}}></div>
              <div className="absolute -bottom-5 -right-8 w-28 h-28 bg-gradient-to-r from-green-300 to-green-500 rounded-full shadow-xl animate-bounce opacity-70" style={{animationDelay: '0.5s', animationDuration: '4.5s'}}></div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/30 via-transparent to-yellow-500/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Modern Icons */}
      <section className="py-20 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold text-green-800 mb-6">¿Por qué elegir NutriLife?</h3>
            <p className="text-2xl text-green-600 max-w-3xl mx-auto">
              Combinamos la riqueza nutricional de la gastronomía peruana con conocimiento científico 
              para ofrecerte una experiencia completa de bienestar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <Card className="border-green-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-green-50 to-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2ddc2c3f-4a97-452a-8259-09fd2335f431.png" 
                    alt="Icono moderno de recetas con gorro de chef en verde"
                    className="w-14 h-14"
                  />
                </div>
                <CardTitle className="text-2xl text-green-800 mb-4">Recetas Auténticas</CardTitle>
                <CardDescription className="text-lg text-green-600">
                  21 recetas peruanas saludables para desayuno, almuerzo y cena con ingredientes naturales
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-yellow-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-yellow-50 to-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/3848a958-4998-4e15-8b84-4a7472ff2778.png" 
                    alt="Icono moderno de calculadora de salud con corazón en amarillo"
                    className="w-14 h-14"
                  />
                </div>
                <CardTitle className="text-2xl text-green-800 mb-4">Herramientas Nutricionales</CardTitle>
                <CardDescription className="text-lg text-green-600">
                  Calculadora de IMC avanzada y guías personalizadas para tu bienestar integral
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-red-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-red-50 to-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-red-400 to-red-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/821ca424-08d6-4285-b0fc-da8c47a96450.png" 
                    alt="Icono moderno de planeta tierra verde sostenible"
                    className="w-14 h-14"
                  />
                </div>
                <CardTitle className="text-2xl text-green-800 mb-4">Impacto Ambiental</CardTitle>
                <CardDescription className="text-lg text-green-600">
                  Aprende sobre alimentación sostenible y su impacto positivo en nuestro planeta
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Recipe Collection Section */}
      <section id="recetas" className="py-20 px-4 bg-gradient-to-br from-yellow-50 via-green-50 to-white">
        <div className="container mx-auto">
          <RecipeCollection />
        </div>
      </section>

      {/* BMI Calculator Section */}
      <section id="calculadora" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <BMICalculator />
        </div>
      </section>

      {/* Nutrition Guide Section */}
      <section id="guia" className="py-20 px-4 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto">
          <NutritionGuide />
        </div>
      </section>

      {/* Games Section */}
      <section id="juegos" className="py-20 px-4 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-green-800 mb-6">Juegos Nutricionales</h2>
            <p className="text-2xl text-green-600 max-w-3xl mx-auto">
              Aprende sobre alimentación saludable de manera divertida e interactiva con nuestros juegos educativos
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-purple-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-purple-50 to-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
                  <span className="text-4xl">👨‍🍳</span>
                </div>
                <CardTitle className="text-2xl text-green-800 mb-4">Cheffmilia</CardTitle>
                <CardDescription className="text-lg text-green-600 mb-6">
                  Juego familiar de cocina saludable donde aprendes a preparar comidas nutritivas
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  onClick={() => window.open('https://familiasaludable.my.canva.site/', '_blank')}
                  className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Jugar Ahora
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
                  <span className="text-4xl">🎯</span>
                </div>
                <CardTitle className="text-2xl text-green-800 mb-4">NutriBross</CardTitle>
                <CardDescription className="text-lg text-green-600 mb-6">
                  Quiz nutritivo interactivo para poner a prueba tus conocimientos sobre alimentación
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  onClick={() => window.open('https://quizznutritivo.my.canva.site/atrapa', '_blank')}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Jugar Ahora
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-orange-200 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-gradient-to-br from-orange-50 to-white">
              <CardHeader className="text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center mb-6 mx-auto shadow-xl">
                  <span className="text-4xl">🏆</span>
                </div>
                <CardTitle className="text-2xl text-green-800 mb-4">NutriDesafío</CardTitle>
                <CardDescription className="text-lg text-green-600 mb-6">
                  Desafíos nutricionales para convertirte en un experto en alimentación saludable
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  onClick={() => window.open('https://xn---desafo-nutrilite-ntb2e6764i.my.canva.site/', '_blank')}
                  className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Jugar Ahora
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Environmental Impact Section */}
      <section id="impacto" className="py-20 px-4 bg-gradient-to-br from-red-50 to-yellow-50">
        <div className="container mx-auto">
          <EnvironmentalImpact />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <FAQ />
        </div>
      </section>

      {/* Footer with Credits */}
      <footer className="bg-gradient-to-r from-green-800 to-green-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7e7e51cc-a0bf-47dd-88d7-7628585dabfa.png" 
                  alt="NutriLife Logo Footer"
                  className="w-12 h-12 rounded-full shadow-lg"
                />
                <h4 className="text-2xl font-bold">NutriLife</h4>
              </div>
              <p className="text-green-200 text-lg">
                Transformando vidas a través de la alimentación consciente y sostenible.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-6 text-xl">Navegación</h5>
              <ul className="space-y-3 text-green-200">
                <li><button onClick={() => scrollToSection('recetas')} className="hover:text-white transition-colors text-lg">Recetas</button></li>
                <li><button onClick={() => scrollToSection('calculadora')} className="hover:text-white transition-colors text-lg">Calculadora IMC</button></li>
                <li><button onClick={() => scrollToSection('guia')} className="hover:text-white transition-colors text-lg">Guía Nutricional</button></li>
                <li><button onClick={() => scrollToSection('juegos')} className="hover:text-white transition-colors text-lg">Juegos</button></li>
                <li><button onClick={() => scrollToSection('faq')} className="hover:text-white transition-colors text-lg">FAQ</button></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-6 text-xl">Estudiantes</h5>
              <ul className="space-y-3 text-green-200 text-lg">
                <li>Cicarely Guadalupe</li>
                <li>Josselyn Massiel</li>
                <li>Maricielo Margarita</li>
                <li>Camila Del Pilar</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-6 text-xl">Docentes</h5>
              <ul className="space-y-3 text-green-200 text-lg">
                <li>Gladys Rocío</li>
                <li>Maritza Rene</li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-green-700" />
          
          <div className="text-center text-green-200">
            <p className="text-lg">&copy; 2024 NutriLife. Todos los derechos reservados. Alimentación saludable para un mundo mejor.</p>
            <p className="mt-2 text-green-300">Desarrollado con ❤️ por estudiantes comprometidos con la salud y el bienestar.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}