import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import MarketingIdeas from "@/components/marketing/MarketingIdeas";
import { Star, Sparkles, Heart, Award } from "lucide-react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-clinic-light-gold via-white to-clinic-background overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-clinic-gold/20 to-clinic-deep-gold/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-clinic-vibrant-blue/20 to-clinic-light-blue/10 rounded-full blur-lg animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-gradient-to-br from-clinic-gold/15 to-transparent rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      {/* Navigation */}
      <nav className="relative bg-white/60 backdrop-blur-md border-b border-clinic-gold/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-clinic-gold" />
              <div className="text-xl font-bold bg-gradient-to-r from-clinic-gold to-clinic-deep-gold bg-clip-text text-transparent">
                EstheticaClinic
              </div>
            </div>
            <Button asChild className="bg-gradient-to-r from-clinic-gold to-clinic-deep-gold hover:from-clinic-deep-gold hover:to-clinic-gold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              <Link to="/admin">Área Reservada</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-clinic-gold via-clinic-deep-gold to-clinic-vibrant-blue bg-clip-text text-transparent mb-8 leading-tight">
              Transforma Tu
              <span className="block">Belleza Natural</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Tratamientos personalizados y resultados extraordinarios para valorar tu unicidad con la tecnología más avanzada
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-clinic-gold to-clinic-deep-gold hover:from-clinic-deep-gold hover:to-clinic-gold text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <a href="#treatments">
                  <Heart className="mr-2 h-5 w-5" />
                  Descubre los Tratamientos
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-clinic-gold text-clinic-deep-gold hover:bg-clinic-gold/10 text-lg px-8 py-4 transform hover:scale-105 transition-all duration-300">
                <Award className="mr-2 h-5 w-5" />
                Consulta Gratuita
              </Button>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            {[
              { number: "500+", label: "Clientes Satisfechas" },
              { number: "10+", label: "Años de Experiencia" },
              { number: "15+", label: "Tratamientos Disponibles" }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-3xl md:text-4xl font-bold text-clinic-deep-gold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-clinic-deep-gold to-clinic-vibrant-blue bg-clip-text text-transparent mb-6">
              Nuestros Tratamientos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Elige entre una amplia gama de tratamientos de vanguardia para todo tipo de piel
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Tratamientos Faciales",
                description: "Rejuvenecimiento e hidratación profunda para una piel radiante y luminosa",
                image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-pink-400/20 to-clinic-gold/20"
              },
              {
                title: "Peeling Profesional",
                description: "Renueva tu piel con tratamientos dirigidos y eficaces de última generación",
                image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-blue-400/20 to-clinic-vibrant-blue/20"
              },
              {
                title: "Tratamientos Anti-edad",
                description: "Soluciones innovadoras para combatir los signos del tiempo con resultados duraderos",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-purple-400/20 to-clinic-deep-gold/20"
              }
            ].map((treatment, index) => (
              <Card key={index} className="group overflow-hidden border-clinic-gold/20 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/80 backdrop-blur-sm">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${treatment.gradient} to-transparent opacity-60`}></div>
                  <div className="absolute top-4 right-4">
                    <Star className="h-6 w-6 text-clinic-gold fill-current" />
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-clinic-deep-gold group-hover:text-clinic-vibrant-blue transition-colors duration-300">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {treatment.description}
                  </p>
                  <Button variant="outline" className="mt-6 border-clinic-gold text-clinic-deep-gold hover:bg-clinic-gold/10 transition-all duration-300">
                    Descubre Más
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Ideas Section */}
      <MarketingIdeas />

      {/* Results Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-clinic-background/50 to-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-clinic-deep-gold to-clinic-vibrant-blue bg-clip-text text-transparent mb-6">
              Resultados Reales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Las transformaciones de nuestras clientas hablan por sí solas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <Card key={i} className="overflow-hidden border-clinic-gold/20 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="aspect-[3/4] relative rounded-xl overflow-hidden">
                        <img
                          src={`https://images.unsplash.com/photo-154897290${i + 3}505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                          alt="Antes del tratamiento"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 px-4 py-2 bg-gradient-to-r from-black/70 to-black/50 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                          Antes
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="aspect-[3/4] relative rounded-xl overflow-hidden">
                        <img
                          src={`https://images.unsplash.com/photo-158109122${i + 5}825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`}
                          alt="Después del tratamiento"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-3 left-3 px-4 py-2 bg-gradient-to-r from-clinic-gold to-clinic-deep-gold text-white rounded-full text-sm font-medium backdrop-blur-sm">
                          Después
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <div className="flex justify-center space-x-1 mb-2">
                      {[...Array(5)].map((_, starIndex) => (
                        <Star key={starIndex} className="h-5 w-5 text-clinic-gold fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic">"¡Resultados increíbles, super recomendado!"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-clinic-gold/10 to-clinic-vibrant-blue/10 border-t border-clinic-gold/20 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <Sparkles className="h-6 w-6 text-clinic-gold" />
                <span className="text-xl font-bold text-clinic-deep-gold">EstheticaClinic</span>
              </div>
              <p className="text-gray-600">Tu belleza es nuestra pasión</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-clinic-deep-gold mb-4">Contactos</h4>
              <p className="text-gray-600">info@estheticaclinic.es</p>
              <p className="text-gray-600">+34 123 456 7890</p>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-clinic-deep-gold mb-4">Síguenos</h4>
              <p className="text-gray-600">@estheticaclinic</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-clinic-gold/20">
            <p className="text-gray-600">
              © 2025 EstheticaClinic. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
