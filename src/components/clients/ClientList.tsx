
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Plus, Search } from "lucide-react";

// Mock data with added treatment images
const mockClients = [
  { 
    id: 1, 
    name: "Maria Rossi", 
    email: "maria.rossi@example.com", 
    phone: "+39 123 456 7890", 
    lastVisit: "2023-04-10", 
    nextFollowup: "2023-05-10",
    treatment: "Trattamento Viso Premium"
  },
  { id: 2, name: "Giorgio Bianchi", email: "giorgio.bianchi@example.com", phone: "+39 234 567 8901", lastVisit: "2023-04-05", nextFollowup: "2023-05-05" },
  { id: 3, name: "Anna Verdi", email: "anna.verdi@example.com", phone: "+39 345 678 9012", lastVisit: "2023-04-15", nextFollowup: "2023-05-15" },
  { id: 4, name: "Marco Neri", email: "marco.neri@example.com", phone: "+39 456 789 0123", lastVisit: "2023-04-20", nextFollowup: "2023-05-20" },
  { id: 5, name: "Sofia Russo", email: "sofia.russo@example.com", phone: "+39 567 890 1234", lastVisit: "2023-04-25", nextFollowup: "2023-05-25" },
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
              Lista Clienti
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Gestisci i tuoi clienti e i loro trattamenti
            </p>
          </div>
          <Button 
            className="bg-amber-600 hover:bg-amber-700 transition-colors duration-200"
          >
            <Plus className="mr-2 h-4 w-4" />
            Nuovo Cliente
          </Button>
        </div>
        
        <div className="mt-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input 
            placeholder="Cerca per nome o email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 border-neutral-200/70 bg-white/70 backdrop-blur-sm focus:border-amber-600 transition-colors duration-200"
          />
        </div>
      </CardHeader>
      
      <CardContent className="p-0">
        <div className="overflow-x-auto rounded-b-lg">
          <Table>
            <TableHeader>
              <TableRow className="bg-neutral-50/50 hover:bg-neutral-50/70">
                <TableHead className="font-semibold">Cliente</TableHead>
                <TableHead className="font-semibold">Contatto</TableHead>
                <TableHead className="font-semibold">Ultima Visita</TableHead>
                <TableHead className="font-semibold">Prossimo Follow-up</TableHead>
                <TableHead className="font-semibold">Trattamento</TableHead>
                <TableHead className="font-semibold">Azioni</TableHead>
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
                      <span className="text-amber-700 font-medium">
                        {client.nextFollowup}
                      </span>
                    </TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                        {client.treatment}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Link 
                        to={`/clients/${client.id}`} 
                        className="text-amber-700 hover:text-amber-900 transition-colors duration-200 text-sm font-medium"
                      >
                        Visualizza Dettagli
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
                    Nessun cliente trovato
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
