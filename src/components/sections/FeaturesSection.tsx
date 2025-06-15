
import { Shield, Gem, Award } from "lucide-react";

export default function FeaturesSection() {
  const features = [
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
  ];

  return (
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
          {features.map((feature, index) => (
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
  );
}
