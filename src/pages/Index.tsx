
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
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <div className="flex items-center gap-2">
            <Button variant="outline">Esporta Dati</Button>
            <Button className="bg-clinic-gold hover:bg-clinic-deep-gold">Nuovo Cliente</Button>
          </div>
        </div>
        
        <ClientStats />
        
        <div className="grid gap-6 md:grid-cols-6">
          <Card className="col-span-6 md:col-span-4">
            <CardHeader className="pb-3">
              <CardTitle>Clienti Recenti</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ClientList />
            </CardContent>
          </Card>
          
          <Card className="col-span-6 md:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-md font-medium">Follow-up Imminenti</CardTitle>
              <CalendarClock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { client: "Maria Rossi", procedure: "Trattamento Viso", date: "10 Maggio" },
                  { client: "Giorgio Bianchi", procedure: "Peeling Chimico", date: "15 Maggio" },
                  { client: "Anna Verdi", procedure: "Botox", date: "20 Maggio" },
                ].map((item, index) => (
                  <div key={index} className="border-b pb-3 last:border-0 last:pb-0">
                    <p className="font-medium text-sm">{item.client}</p>
                    <p className="text-xs text-muted-foreground">{item.procedure}</p>
                    <p className="text-xs mt-1 text-clinic-gold">{item.date}</p>
                  </div>
                ))}
                <Button variant="link" className="text-clinic-gold p-0 w-full text-sm justify-start">
                  Vedi tutti
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
