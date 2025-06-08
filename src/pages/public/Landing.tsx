
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import MarketingIdeas from "@/components/marketing/MarketingIdeas";

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-clinic-light-gold to-white">
      {/* Navigation */}
      <nav className="bg-white/50 backdrop-blur-sm border-b border-neutral-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-semibold text-clinic-gold">
              EstheticaClinic
            </div>
            <Button asChild className="bg-clinic-gold hover:bg-clinic-deep-gold">
              <Link to="/admin">Area Riservata</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section with Image */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-clinic-gold to-clinic-deep-gold bg-clip-text text-transparent mb-6">
                Trasforma la Tua Bellezza Naturale
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8">
                Trattamenti personalizzati e risultati straordinari per valorizzare la tua unicità
              </p>
              <Button asChild size="lg" className="bg-clinic-gold hover:bg-clinic-deep-gold">
                <a href="#treatments">Scopri i Trattamenti</a>
              </Button>
            </div>
            
            {/* Image Column */}
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Giovane donna che rappresenta bellezza e giovinezza"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-clinic-gold/20 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-clinic-light-gold rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-clinic-gold/30 rounded-full opacity-40"></div>
            </div>
          </div>
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
