
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Heart, Award } from "lucide-react";

interface HeroSectionProps {
  onConsultationClick: () => void;
}

export default function HeroSection({ onConsultationClick }: HeroSectionProps) {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-clinic-gold via-clinic-deep-gold to-clinic-vibrant-blue bg-clip-text text-transparent mb-8 leading-tight">
              Transforma Tu
              <span className="block">Belleza Natural</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto lg:mx-0 mb-12 leading-relaxed">
              Laboratorio de Estética Avanzada con tratamientos inspirados en los centros más prestigiosos del mundo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-clinic-gold to-clinic-deep-gold hover:from-clinic-deep-gold hover:to-clinic-gold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <a href="#treatments">
                  <Heart className="mr-2 h-5 w-5" />
                  Descubre los Tratamientos
                </a>
              </Button>
              <Button 
                onClick={onConsultationClick}
                variant="outline" 
                size="lg" 
                className="border-clinic-gold text-clinic-deep-gold hover:bg-clinic-gold/10 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300"
              >
                <Award className="mr-2 h-5 w-5" />
                Consulta Gratuita
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="animate-fade-in lg:animate-slide-in-right">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/5] relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-clinic-gold/20 to-clinic-vibrant-blue/20">
                <img
                  src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Tratamiento facial profesional - SteticLab"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg animate-pulse">
                  <Star className="h-6 w-6 text-clinic-gold" />
                </div>
                
                <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-clinic-gold fill-current" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-gray-800">5.0</span>
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    "Resultados increíbles, tecnología de vanguardia"
                  </p>
                  <p className="text-xs text-gray-500 mt-1">- María González</p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-clinic-gold/30 to-clinic-deep-gold/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-clinic-vibrant-blue/30 to-clinic-light-blue/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
          {[
            { number: "500+", label: "Clientes Satisfechas" },
            { number: "10+", label: "Años de Experiencia" },
            { number: "20+", label: "Tratamientos Exclusivos" }
          ].map((stat, index) => (
            <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="text-3xl md:text-4xl font-bold text-clinic-deep-gold mb-2">{stat.number}</div>
              <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
