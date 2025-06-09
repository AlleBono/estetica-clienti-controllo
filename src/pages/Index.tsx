
import AppLayout from "@/components/layout/AppLayout";
import ClientStats from "@/components/dashboard/ClientStats";
import ClientList from "@/components/clients/ClientList";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarClock } from "lucide-react";

export default function Index() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Panel de Control</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline">Exportar Datos</Button>
            <Button className="bg-clinic-gold hover:bg-clinic-deep-gold">Nueva Cliente</Button>
          </div>
        </div>
        
        <ClientStats />
        
        <div className="grid gap-6 md:grid-cols-6">
          <Card className="col-span-6 md:col-span-4">
            <CardHeader className="pb-3">
              <CardTitle>Clientes Recientes</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ClientList />
            </CardContent>
          </Card>
          
          <Card className="col-span-6 md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium">Seguimientos Próximos</CardTitle>
              <CalendarClock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { client: "María Rossi", procedure: "Tratamiento Facial", date: "10 Mayo" },
                  { client: "Jorge Blanco", procedure: "Peeling Químico", date: "15 Mayo" },
                  { client: "Ana Verde", procedure: "Botox", date: "20 Mayo" },
                ].map((item, index) => (
                  <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                    <p className="font-medium text-sm">{item.client}</p>
                    <p className="text-xs text-muted-foreground">{item.procedure}</p>
                    <p className="text-xs mt-1 text-clinic-gold">{item.date}</p>
                  </div>
                ))}
                <Button variant="link" className="text-clinic-gold p-0 w-full text-sm justify-start">
                  Ver todos
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
