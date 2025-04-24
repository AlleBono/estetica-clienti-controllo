
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useState } from "react";

// Mock data for notifications
const mockNotifications = [
  { id: 1, client: "Maria Rossi", procedure: "Trattamento Viso", dueDate: "2023-05-10", status: "Inviato", channel: "Email" },
  { id: 2, client: "Giorgio Bianchi", procedure: "Peeling Chimico", dueDate: "2023-05-05", status: "Inviato", channel: "SMS" },
  { id: 3, client: "Anna Verdi", procedure: "Botox", dueDate: "2023-05-15", status: "In attesa", channel: "Email" },
  { id: 4, client: "Marco Neri", procedure: "Acido Ialuronico", dueDate: "2023-05-20", status: "In attesa", channel: "Email" },
  { id: 5, client: "Sofia Russo", procedure: "Microdermoabrasione", dueDate: "2023-05-08", status: "Fallito", channel: "SMS" },
];

export default function NotificationList() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const resendNotification = (id: number) => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => 
        notification.id === id 
          ? { ...notification, status: "Inviato" } 
          : notification
      )
    );
  };

  return (
    <div className="rounded-md border bg-white shadow animate-fade-in">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-clinic-text">Notifiche Follow-up</h2>
          <Button className="bg-clinic-vibrant-blue hover:bg-clinic-blue">
            Configura Notifiche
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Procedimento</TableHead>
                <TableHead>Data Prevista</TableHead>
                <TableHead>Canale</TableHead>
                <TableHead>Stato</TableHead>
                <TableHead>Azioni</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {notifications.map(notification => (
                <TableRow key={notification.id}>
                  <TableCell className="font-medium">{notification.client}</TableCell>
                  <TableCell>{notification.procedure}</TableCell>
                  <TableCell>{notification.dueDate}</TableCell>
                  <TableCell>{notification.channel}</TableCell>
                  <TableCell>
                    <Badge className={
                      notification.status === "Inviato" ? "bg-green-100 text-green-800 hover:bg-green-200" :
                      notification.status === "In attesa" ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200" :
                      "bg-red-100 text-red-800 hover:bg-red-200"
                    }>
                      {notification.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {notification.status === "Fallito" ? (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => resendNotification(notification.id)}
                      >
                        Reinvia
                      </Button>
                    ) : (
                      <Button 
                        variant="link" 
                        className="text-clinic-vibrant-blue p-0 h-auto"
                      >
                        Dettagli
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
