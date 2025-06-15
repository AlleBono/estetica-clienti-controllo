
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Shield, Heart, Sparkles, Gem } from "lucide-react";

export default function TreatmentsSection() {
  const treatments = [
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
  ];

  return (
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
          {treatments.map((treatment, index) => (
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
  );
}
