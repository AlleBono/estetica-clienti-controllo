
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";

// Mock data for procedures
const mockProcedures = [
  { id: 1, name: "Trattamento Viso", client: "Maria Rossi", date: "2023-04-10", followupPeriod: "30 giorni", status: "Completato" },
  { id: 2, name: "Peeling Chimico", client: "Giorgio Bianchi", date: "2023-04-05", followupPeriod: "45 giorni", status: "Completato" },
  { id: 3, name: "Botox", client: "Anna Verdi", date: "2023-04-15", followupPeriod: "60 giorni", status: "Completato" },
  { id: 4, name: "Acido Ialuronico", client: "Marco Neri", date: "2023-04-20", followupPeriod: "30 giorni", status: "Completato" },
  { id: 5, name: "Microdermoabrasione", client: "Sofia Russo", date: "2023-04-25", followupPeriod: "14 giorni", status: "In corso" },
];

export default function ProcedureList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [procedures, setProcedures] = useState(mockProcedures);
  const [statusFilter, setStatusFilter] = useState("all");
  
  const filteredProcedures = procedures.filter(procedure => {
    const matchesSearch = 
      procedure.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      procedure.client.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || procedure.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="rounded-md border bg-white shadow animate-fade-in">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-clinic-text">Procedimenti</h2>
          <Button className="bg-clinic-vibrant-blue hover:bg-clinic-blue">
            + Nuovo Procedimento
          </Button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <Input 
            placeholder="Cerca per procedimento o cliente..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Select 
            value={statusFilter} 
            onValueChange={setStatusFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtro Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tutti</SelectItem>
              <SelectItem value="Completato">Completato</SelectItem>
              <SelectItem value="In corso">In corso</SelectItem>
              <SelectItem value="Pianificato">Pianificato</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Procedimento</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Periodo Follow-up</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Azioni</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredProcedures.length > 0 ? (
                filteredProcedures.map(procedure => (
                  <TableRow key={procedure.id}>
                    <TableCell className="font-medium">{procedure.name}</TableCell>
                    <TableCell>{procedure.client}</TableCell>
                    <TableCell>{procedure.date}</TableCell>
                    <TableCell>{procedure.followupPeriod}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        procedure.status === "Completato" 
                          ? "bg-green-100 text-green-800" 
                          : procedure.status === "In corso"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {procedure.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="link" className="text-clinic-vibrant-blue p-0 h-auto">
                        Dettagli
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
                    Nessun procedimento trovato
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
