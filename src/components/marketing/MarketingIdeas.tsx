
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Rocket, HandHeart, Users, Smartphone } from "lucide-react";

const marketingStrategies = [
  {
    title: "Personalizzazione Intelligente",
    description: "Trattamenti su misura basati sul tuo tipo di pelle e le tue esigenze specifiche",
    icon: HandHeart,
    score: 9,
    gradient: "from-rose-100 to-teal-100"
  },
  {
    title: "Virtual Beauty Preview",
    description: "Prova virtualmente i risultati dei nostri trattamenti con la tecnologia AR",
    icon: Smartphone,
    score: 9,
    gradient: "from-blue-100 to-purple-100"
  },
  {
    title: "Sfide Beauty",
    description: "Partecipa alle nostre sfide skincare e vinci premi esclusivi",
    icon: Rocket,
    score: 5,
    gradient: "from-amber-100 to-orange-100"
  },
  {
    title: "Influencer Partnership",
    description: "Scopri le esperienze autentiche dei nostri partner locali",
    icon: Users,
    score: 3,
    gradient: "from-pink-100 to-rose-100"
  },
  {
    title: "Eco-Beauty",
    description: "Trattamenti sostenibili e rispettosi dell'ambiente",
    icon: Leaf,
    score: 8,
    gradient: "from-emerald-100 to-teal-100"
  }
];

export default function MarketingIdeas() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-clinic-text">
          Innovazioni Beauty 2025
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingStrategies.map((strategy) => {
            const Icon = strategy.icon;
            return (
              <Card 
                key={strategy.title}
                className={`overflow-hidden transition-all duration-300 hover:scale-105 border-neutral-200/50 bg-gradient-to-br ${strategy.gradient}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-white/80 backdrop-blur-sm">
                      <Icon className="h-6 w-6 text-clinic-vibrant-blue" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-clinic-text/70">
                        Trend Score:
                      </span>
                      <span className="text-lg font-semibold text-clinic-vibrant-blue">
                        {strategy.score}/10
                      </span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-clinic-text">
                    {strategy.title}
                  </h3>
                  <p className="text-clinic-text/80">
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
