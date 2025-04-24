
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { Link } from "react-router-dom";

// Mock data for clients
const mockClients = [
  { id: 1, name: "Maria Rossi", email: "maria.rossi@example.com", phone: "+39 123 456 7890", lastVisit: "2023-04-10", nextFollowup: "2023-05-10" },
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
    <div className="rounded-md border bg-white shadow animate-fade-in">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-clinic-text">Lista Clienti</h2>
          <Button className="bg-clinic-vibrant-blue hover:bg-clinic-blue">
            + Nuovo Cliente
          </Button>
        </div>
        <div className="mb-4">
          <Input 
            placeholder="Cerca per nome o email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Telefono</TableHead>
                <TableHead>Ultima Visita</TableHead>
                <TableHead>Prossimo Follow-up</TableHead>
                <TableHead>Azioni</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.length > 0 ? (
                filteredClients.map(client => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">{client.name}</TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell>{client.phone}</TableCell>
                    <TableCell>{client.lastVisit}</TableCell>
                    <TableCell>{client.nextFollowup}</TableCell>
                    <TableCell>
                      <Link 
                        to={`/clients/${client.id}`} 
                        className="text-clinic-vibrant-blue hover:underline"
                      >
                        Dettagli
                      </Link>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-4">
                    Nessun cliente trovato
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
