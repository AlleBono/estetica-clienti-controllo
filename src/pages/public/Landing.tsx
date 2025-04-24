import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import MarketingIdeas from "@/components/marketing/MarketingIdeas";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clinic-light-blue/20 to-white">
      {/* Navigation */}
      <nav className="bg-white/50 backdrop-blur-sm border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-semibold text-clinic-vibrant-blue">
              EstheticaClinic
            </div>
            <Button asChild className="bg-clinic-vibrant-blue hover:bg-clinic-blue">
              <Link to="/admin">Area Riservata</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-clinic-vibrant-blue to-clinic-blue bg-clip-text text-transparent mb-6">
            Trasforma la Tua Bellezza Naturale
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Trattamenti personalizzati e risultati straordinari per valorizzare la tua unicità
          </p>
          <Button asChild size="lg" className="bg-clinic-vibrant-blue hover:bg-clinic-blue">
            <a href="#treatments">Scopri i Trattamenti</a>
          </Button>
        </div>
      </section>

      {/* Treatments Section */}
      <section id="treatments" className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-clinic-text">
            I Nostri Trattamenti
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Trattamenti Viso",
                description: "Ringiovanimento e idratazione profonda per una pelle radiosa",
                image: "https://source.unsplash.com/featured/800x600?face,treatment"
              },
              {
                title: "Peeling Professionale",
                description: "Rinnova la tua pelle con trattamenti mirati ed efficaci",
                image: "https://source.unsplash.com/featured/800x600?skincare"
              },
              {
                title: "Trattamenti Anti-età",
                description: "Soluzioni innovative per contrastare i segni del tempo",
                image: "https://source.unsplash.com/featured/800x600?beauty,clinic"
              }
            ].map((treatment, index) => (
              <Card key={index} className="overflow-hidden border-neutral-200/50">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <img 
                    src={treatment.image}
                    alt={treatment.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-clinic-vibrant-blue">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600">
                    {treatment.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Ideas Section */}
      <MarketingIdeas />

      {/* Results Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-clinic-text">
            Risultati Reali
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <Card key={i} className="overflow-hidden border-neutral-200/50">
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="aspect-[3/4] relative">
                        <img
                          src={`https://source.unsplash.com/featured/600x800?face,before&${i}`}
                          alt="Prima del trattamento"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-2 left-2 px-3 py-1 bg-black/50 text-white rounded-full text-sm">
                          Prima
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="aspect-[3/4] relative">
                        <img
                          src={`https://source.unsplash.com/featured/600x800?face,after&${i}`}
                          alt="Dopo il trattamento"
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute top-2 left-2 px-3 py-1 bg-black/50 text-white rounded-full text-sm">
                          Dopo
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/50 border-t border-neutral-200/50 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2025 EstheticaClinic. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
}
