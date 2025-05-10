
import AppLayout from "@/components/layout/AppLayout";
import ClientList from "@/components/clients/ClientList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Clients() {
  return (
    <AppLayout>
      <div className="space-y-6 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-clinic-gold to-clinic-deep-gold bg-clip-text text-transparent">
            Gestione Clienti
          </h1>
        </div>
        
        <div className="grid gap-6 mb-8">
          <Card className="bg-gradient-to-br from-clinic-light-gold/10 to-white border-neutral-200/50">
            <CardHeader className="pb-0">
              <CardTitle className="text-lg font-medium">
                Risultati dei Nostri Trattamenti
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="relative group overflow-hidden rounded-lg">
                    <div className="aspect-[4/3] bg-neutral-100 rounded-lg overflow-hidden">
                      <img
                        src={`https://source.unsplash.com/featured/800x600?face,beauty,treatment&${i}`}
                        alt={`Treatment result ${i}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 p-4 text-white">
                        <p className="font-medium">Trattamento Premium</p>
                        <p className="text-sm opacity-90">Risultati dopo 3 sessioni</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <ClientList />
        </div>
      </div>
    </AppLayout>
  );
}
