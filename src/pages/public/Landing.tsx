
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MarketingIdeas from "@/components/marketing/MarketingIdeas";
import ConsultationForm from "@/components/forms/ConsultationForm";
import HeroSection from "@/components/sections/HeroSection";
import TreatmentsSection from "@/components/sections/TreatmentsSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ResultsSection from "@/components/sections/ResultsSection";
import { Sparkles } from "lucide-react";

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
      <HeroSection onConsultationClick={() => setConsultationFormOpen(true)} />

      {/* Treatments Section */}
      <TreatmentsSection />

      {/* Premium Features Section */}
      <FeaturesSection />

      {/* Marketing Ideas Section */}
      <MarketingIdeas />

      {/* Results Section */}
      <ResultsSection />

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
