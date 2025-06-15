
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export default function ResultsSection() {
  return (
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
  );
}
