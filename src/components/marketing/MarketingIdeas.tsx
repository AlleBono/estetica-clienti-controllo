
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Rocket, HandHeart, Users, Smartphone } from "lucide-react";

const marketingStrategies = [
  {
    title: "Personalización Inteligente",
    description: "Tratamientos a medida basados en tu tipo de piel y tus necesidades específicas",
    icon: HandHeart,
    score: 9,
    gradient: "from-clinic-light-gold/20 to-clinic-light-gold/80"
  },
  {
    title: "Vista Previa Virtual de Belleza",
    description: "Prueba virtualmente los resultados de nuestros tratamientos con tecnología AR",
    icon: Smartphone,
    score: 9,
    gradient: "from-stone-100 to-clinic-light-gold/60"
  },
  {
    title: "Desafíos de Belleza",
    description: "Participa en nuestros desafíos de cuidado de la piel y gana premios exclusivos",
    icon: Rocket,
    score: 5,
    gradient: "from-neutral-100 to-clinic-light-gold/40"
  },
  {
    title: "Colaboración con Influencers",
    description: "Descubre las experiencias auténticas de nuestros socios locales",
    icon: Users,
    score: 3,
    gradient: "from-gray-100 to-clinic-light-gold/30"
  },
  {
    title: "Eco-Belleza",
    description: "Tratamientos sostenibles y respetuosos con el medio ambiente",
    icon: Leaf,
    score: 8,
    gradient: "from-clinic-light-gold/40 to-clinic-light-gold/70"
  }
];

export default function MarketingIdeas() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800">
          Innovaciones de Belleza 2025
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingStrategies.map((strategy) => {
            const Icon = strategy.icon;
            return (
              <Card 
                key={strategy.title}
                className={`overflow-hidden transition-all duration-300 hover:scale-105 border-clinic-light-gold/40 bg-gradient-to-br ${strategy.gradient}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-clinic-gold/10 backdrop-blur-sm border border-clinic-light-gold/60">
                      <Icon className="h-6 w-6 text-clinic-deep-gold" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-neutral-600">
                        Puntuación de Tendencia:
                      </span>
                      <span className="text-lg font-semibold text-clinic-deep-gold">
                        {strategy.score}/10
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-neutral-800">
                    {strategy.title}
                  </h3>
                  <p className="text-neutral-700">
                    {strategy.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
