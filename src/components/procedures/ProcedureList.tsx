
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";

// Datos simulados para procedimientos
const mockProcedures = [
  { id: 1, name: "Tratamiento Facial", client: "María Rossi", date: "2023-04-10", followupPeriod: "30 días", status: "Completado" },
  { id: 2, name: "Peeling Químico", client: "Jorge Blanco", date: "2023-04-05", followupPeriod: "45 días", status: "Completado" },
  { id: 3, name: "Botox", client: "Ana Verde", date: "2023-04-15", followupPeriod: "60 días", status: "Completado" },
  { id: 4, name: "Ácido Hialurónico", client: "Marco Negro", date: "2023-04-20", followupPeriod: "30 días", status: "Completado" },
  { id: 5, name: "Microdermoabrasión", client: "Sofía Roja", date: "2023-04-25", followupPeriod: "14 días", status: "En progreso" },
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
          <h2 className="text-xl font-semibold text-clinic-text">Procedimientos</h2>
          <Button className="bg-clinic-vibrant-blue hover:bg-clinic-blue">
            + Nuevo Procedimiento
          </Button>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <Input 
            placeholder="Buscar por procedimiento o cliente..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Select 
            value={statusFilter} 
            onValueChange={setStatusFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filtro Estado" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="Completado">Completado</SelectItem>
              <SelectItem value="En progreso">En progreso</SelectItem>
              <SelectItem value="Planificado">Planificado</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Procedimiento</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Fecha</TableHead>
                <TableHead>Período de Seguimiento</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Acciones</TableHead>
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
                        procedure.status === "Completado" 
                          ? "bg-green-100 text-green-800" 
                          : procedure.status === "En progreso"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}>
                        {procedure.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button variant="link" className="text-clinic-vibrant-blue p-0 h-auto">
                        Detalles
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
                    No se encontraron procedimientos
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
