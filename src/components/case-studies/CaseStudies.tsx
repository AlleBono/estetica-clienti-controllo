
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Check } from "lucide-react"

const successCases = [
  {
    id: 1,
    procedure: "Trattamento Viso Anti-età",
    results: "Riduzione visibile delle rughe",
    duration: "3 mesi",
    satisfaction: "98%",
    beforeImage: "https://source.unsplash.com/featured/800x600?face,skin&1",
    afterImage: "https://source.unsplash.com/featured/800x600?face,glow&1"
  },
  {
    id: 2,
    procedure: "Peeling Professionale",
    results: "Miglioramento della texture",
    duration: "6 settimane",
    satisfaction: "95%",
    beforeImage: "https://source.unsplash.com/featured/800x600?face,skin&2",
    afterImage: "https://source.unsplash.com/featured/800x600?face,glow&2"
  },
  {
    id: 3,
    procedure: "Trattamento Idratante Intensivo",
    results: "Pelle luminosa e idratata",
    duration: "4 settimane",
    satisfaction: "97%",
    beforeImage: "https://source.unsplash.com/featured/800x600?face,skin&3",
    afterImage: "https://source.unsplash.com/featured/800x600?face,glow&3"
  }
]

export default function CaseStudies() {
  return (
    <Card className="bg-white/50 backdrop-blur-sm border-neutral-200/50">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-clinic-text flex items-center gap-2">
          Casi di Successo
          <Check className="text-green-500 h-6 w-6" />
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {successCases.map((caseStudy) => (
              <CarouselItem key={caseStudy.id}>
                <div className="p-1">
                  <Card className="bg-gradient-to-br from-clinic-light-blue/10 to-white border-neutral-200/50">
                    <CardContent className="p-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div className="relative group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center">
                              <span className="text-white font-medium px-4 py-2 bg-black/40 rounded-full">Prima</span>
                            </div>
                            <img 
                              src={caseStudy.beforeImage} 
                              alt="Prima del trattamento"
                              className="w-full aspect-[4/3] object-cover rounded-lg"
                            />
                          </div>
                          <p className="text-sm text-muted-foreground text-center">Prima del trattamento</p>
                        </div>
                        <div className="space-y-4">
                          <div className="relative group">
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center">
                              <span className="text-white font-medium px-4 py-2 bg-black/40 rounded-full">Dopo</span>
                            </div>
                            <img 
                              src={caseStudy.afterImage} 
                              alt="Dopo il trattamento"
                              className="w-full aspect-[4/3] object-cover rounded-lg"
                            />
                          </div>
                          <p className="text-sm text-muted-foreground text-center">Dopo il trattamento</p>
                        </div>
                      </div>
                      <div className="mt-6 text-center">
                        <h3 className="text-xl font-semibold text-clinic-vibrant-blue mb-2">
                          {caseStudy.procedure}
                        </h3>
                        <div className="grid grid-cols-3 gap-4 mt-4">
                          <div className="bg-clinic-light-blue/20 p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground">Risultati</p>
                            <p className="font-medium text-clinic-text">{caseStudy.results}</p>
                          </div>
                          <div className="bg-clinic-light-blue/20 p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground">Durata</p>
                            <p className="font-medium text-clinic-text">{caseStudy.duration}</p>
                          </div>
                          <div className="bg-clinic-light-blue/20 p-4 rounded-lg">
                            <p className="text-sm text-muted-foreground">Soddisfazione</p>
                            <p className="font-medium text-clinic-text">{caseStudy.satisfaction}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </CardContent>
    </Card>
  )
}
