
import AppLayout from "@/components/layout/AppLayout";
import ClientList from "@/components/clients/ClientList";

export default function Clients() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Gestione Clienti</h1>
        </div>
        
        <ClientList />
      </div>
    </AppLayout>
  );
}
