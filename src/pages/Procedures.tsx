
import AppLayout from "@/components/layout/AppLayout";
import ProcedureList from "@/components/procedures/ProcedureList";

export default function Procedures() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Gestione Procedimenti</h1>
        </div>
        
        <ProcedureList />
      </div>
    </AppLayout>
  );
}
