
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import MarketingIdeas from "@/components/marketing/MarketingIdeas";
import ConsultationForm from "@/components/forms/ConsultationForm";
import { Star, Sparkles, Heart, Award, Zap, Shield, Gem } from "lucide-react";

export default function Landing() {
  const [consultationFormOpen, setConsultationFormOpen] = useState(false);

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
                SteticLab
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
                  onClick={() => setConsultationFormOpen(true)}
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
                    <Sparkles className="h-6 w-6 text-clinic-gold" />
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

      {/* Treatments Section */}
      <section id="treatments" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-clinic-deep-gold to-clinic-vibrant-blue bg-clip-text text-transparent mb-6">
              Tratamientos de Élite Mundial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Técnicas exclusivas inspiradas en los mejores centros estéticos de Beverly Hills, París y Tokio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "HydraFacial MD®",
                description: "El tratamiento signature de Beverly Hills. Limpieza profunda, exfoliación e hidratación instantánea con resultados inmediatos",
                image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-pink-400/20 to-clinic-gold/20",
                icon: Zap
              },
              {
                title: "Radiofrecuencia Morpheus8",
                description: "Tecnología de microagujas con RF utilizada en las mejores clínicas de Manhattan para reafirmación profunda",
                image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-blue-400/20 to-clinic-vibrant-blue/20",
                icon: Shield
              },
              {
                title: "Vampire Facial PRP",
                description: "El revolucionario tratamiento de plasma rico en plaquetas favorito de celebrities internacionales",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-red-400/20 to-clinic-deep-gold/20",
                icon: Heart
              },
              {
                title: "Peeling Médico VI Peel",
                description: "Peeling de grado médico utilizado en las clínicas más exclusivas de Miami para renovación celular",
                image: "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-purple-400/20 to-clinic-gold/20",
                icon: Sparkles
              },
              {
                title: "Láser Fraccionado CO2",
                description: "Resurfacing láser de última generación para rejuvenecimiento intensivo usado en Suiza",
                image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-green-400/20 to-clinic-vibrant-blue/20",
                icon: Zap
              },
              {
                title: "Lifting Facial HIFU",
                description: "Ultrasonido focalizado de alta intensidad, la alternativa no invasiva al lifting quirúrgico de Corea",
                image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-yellow-400/20 to-clinic-deep-gold/20",
                icon: Gem
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
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <treatment.icon className="h-5 w-5 text-clinic-gold" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-clinic-deep-gold group-hover:text-clinic-vibrant-blue transition-colors duration-300">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm mb-4">
                    {treatment.description}
                  </p>
                  <Button variant="outline" className="w-full border-clinic-gold text-clinic-deep-gold hover:bg-clinic-gold/10 transition-all duration-300">
                    Más Información
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-clinic-background/30 to-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-clinic-deep-gold to-clinic-vibrant-blue bg-clip-text text-transparent mb-6">
              Estándares Internacionales
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protocolos y tecnologías utilizadas en los centros más prestigiosos del mundo
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Certificación FDA",
                description: "Todos nuestros equipos cuentan con certificación FDA, el estándar más exigente de Estados Unidos"
              },
              {
                icon: Gem,
                title: "Productos Médicos",
                description: "Utilizamos las mismas marcas premium que Beverly Hills: SkinMedica, ZO Skin Health, Obagi"
              },
              {
                icon: Award,
                title: "Protocolos de Élite",
                description: "Seguimos los protocolos de tratamiento de las clínicas más exclusivas de Manhattan y París"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-clinic-gold to-clinic-deep-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-clinic-deep-gold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
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
                <span className="text-xl font-bold text-clinic-deep-gold">SteticLab</span>
              </div>
              <p className="text-gray-600">Laboratorio de Estética Avanzada</p>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-clinic-deep-gold mb-4">Contactos</h4>
              <p className="text-gray-600">info@steticlab.es</p>
              <p className="text-gray-600">+34 123 456 7890</p>
            </div>
            <div className="text-center md:text-right">
              <h4 className="font-semibold text-clinic-deep-gold mb-4">Síguenos</h4>
              <p className="text-gray-600">@steticlab</p>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-clinic-gold/20">
            <p className="text-gray-600">
              © 2025 SteticLab. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Consultation Form Modal */}
      <ConsultationForm 
        open={consultationFormOpen} 
        onOpenChange={setConsultationFormOpen} 
      />
    </div>
  );
}
