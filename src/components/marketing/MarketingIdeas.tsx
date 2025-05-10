
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Rocket, HandHeart, Users, Smartphone } from "lucide-react";

const marketingStrategies = [
  {
    title: "Personalizzazione Intelligente",
    description: "Trattamenti su misura basati sul tuo tipo di pelle e le tue esigenze specifiche",
    icon: HandHeart,
    score: 9,
    gradient: "from-amber-50 to-amber-200"
  },
  {
    title: "Virtual Beauty Preview",
    description: "Prova virtualmente i risultati dei nostri trattamenti con la tecnologia AR",
    icon: Smartphone,
    score: 9,
    gradient: "from-stone-100 to-amber-100"
  },
  {
    title: "Sfide Beauty",
    description: "Partecipa alle nostre sfide skincare e vinci premi esclusivi",
    icon: Rocket,
    score: 5,
    gradient: "from-neutral-100 to-amber-100"
  },
  {
    title: "Influencer Partnership",
    description: "Scopri le esperienze autentiche dei nostri partner locali",
    icon: Users,
    score: 3,
    gradient: "from-gray-100 to-amber-50"
  },
  {
    title: "Eco-Beauty",
    description: "Trattamenti sostenibili e rispettosi dell'ambiente",
    icon: Leaf,
    score: 8,
    gradient: "from-amber-100 to-yellow-200"
  }
];

export default function MarketingIdeas() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-neutral-800">
          Innovazioni Beauty 2025
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketingStrategies.map((strategy) => {
            const Icon = strategy.icon;
            return (
              <Card 
                key={strategy.title}
                className={`overflow-hidden transition-all duration-300 hover:scale-105 border-amber-200/70 bg-gradient-to-br ${strategy.gradient}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-200">
                      <Icon className="h-6 w-6 text-amber-700" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-neutral-600">
                        Trend Score:
                      </span>
                      <span className="text-lg font-semibold text-amber-700">
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
