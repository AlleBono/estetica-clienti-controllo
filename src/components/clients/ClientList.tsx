
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Plus, Search } from "lucide-react";

// Datos simulados con imágenes de tratamientos añadidas
const mockClients = [
  { 
    id: 1, 
    name: "María Rossi", 
    email: "maria.rossi@example.com", 
    phone: "+34 123 456 7890", 
    lastVisit: "2023-04-10", 
    nextFollowup: "2023-05-10",
    treatment: "Tratamiento Facial Premium"
  },
  { id: 2, name: "Jorge Blanco", email: "jorge.blanco@example.com", phone: "+34 234 567 8901", lastVisit: "2023-04-05", nextFollowup: "2023-05-05" },
  { id: 3, name: "Ana Verde", email: "ana.verde@example.com", phone: "+34 345 678 9012", lastVisit: "2023-04-15", nextFollowup: "2023-05-15" },
  { id: 4, name: "Marco Negro", email: "marco.negro@example.com", phone: "+34 456 789 0123", lastVisit: "2023-04-20", nextFollowup: "2023-05-20" },
  { id: 5, name: "Sofía Roja", email: "sofia.roja@example.com", phone: "+34 567 890 1234", lastVisit: "2023-04-25", nextFollowup: "2023-05-25" },
];

export default function ClientList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [clients, setClients] = useState(mockClients);
  
  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="bg-white/50 backdrop-blur-sm border-neutral-200/50 shadow-lg">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-semibold text-neutral-800">
              Lista de Clientes
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Gestiona tus clientes y sus tratamientos
            </p>
          </div>
          <Button 
            className="bg-clinic-gold hover:bg-clinic-deep-gold transition-colors duration-200"
          >
            <Plus className="mr-2 h-4 w-4" />
            Nueva Cliente
          </Button>
        </div>
        
        <div className="mt-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Buscar por nombre o email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-neutral-200/70 bg-white/70 backdrop-blur-sm focus:border-clinic-gold transition-colors duration-200"
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="overflow-x-auto rounded-b-lg">
          <Table>
            <TableHeader>
              <TableRow className="bg-neutral-50/50 hover:bg-neutral-50/70">
                <TableHead className="font-semibold">Cliente</TableHead>
                <TableHead className="font-semibold">Contacto</TableHead>
                <TableHead className="font-semibold">Última Visita</TableHead>
                <TableHead className="font-semibold">Próximo Seguimiento</TableHead>
                <TableHead className="font-semibold">Tratamiento</TableHead>
                <TableHead className="font-semibold">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.length > 0 ? (
                filteredClients.map(client => (
                  <TableRow 
                    key={client.id}
                    className="hover:bg-neutral-50/50 transition-colors duration-200"
                  >
                    <TableCell className="font-medium">{client.name}</TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="text-sm">{client.email}</div>
                        <div className="text-sm text-muted-foreground">{client.phone}</div>
                      </div>
                    </TableCell>
                    <TableCell>{client.lastVisit}</TableCell>
                    <TableCell>
                      <span className="text-clinic-deep-gold font-medium">
                        {client.nextFollowup}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-clinic-light-gold/30 text-clinic-deep-gold">
                        {client.treatment}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Link 
                        to={`/clients/${client.id}`} 
                        className="text-clinic-gold hover:text-clinic-deep-gold transition-colors duration-200 text-sm font-medium"
                      >
                        Ver Detalles
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell 
                    colSpan={6} 
                    className="text-center py-8 text-muted-foreground"
                  >
                    No se encontraron clientes
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
