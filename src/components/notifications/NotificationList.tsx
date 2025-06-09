
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { useState } from "react";

// Datos simulados para notificaciones
const mockNotifications = [
  { id: 1, client: "María Rossi", procedure: "Tratamiento Facial", dueDate: "2023-05-10", status: "Enviado", channel: "Email" },
  { id: 2, client: "Jorge Blanco", procedure: "Peeling Químico", dueDate: "2023-05-05", status: "Enviado", channel: "SMS" },
  { id: 3, client: "Ana Verde", procedure: "Botox", dueDate: "2023-05-15", status: "En espera", channel: "Email" },
  { id: 4, client: "Marco Negro", procedure: "Ácido Hialurónico", dueDate: "2023-05-20", status: "En espera", channel: "Email" },
  { id: 5, client: "Sofía Roja", procedure: "Microdermoabrasión", dueDate: "2023-05-08", status: "Falló", channel: "SMS" },
];

export default function NotificationList() {
  const [notifications, setNotifications] = useState(mockNotifications);

  const resendNotification = (id: number) => {
    setNotifications(prevNotifications => 
      prevNotifications.map(notification => 
        notification.id === id 
          ? { ...notification, status: "Enviado" } 
          : notification
      )
    );
  };

  return (
    <div className="rounded-md border bg-white shadow animate-fade-in">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-clinic-text">Notificaciones de Seguimiento</h2>
          <Button className="bg-primary hover:bg-primary/90">
            Configurar Notificaciones
          </Button>
        </div>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Cliente</TableHead>
                <TableHead>Procedimiento</TableHead>
                <TableHead>Fecha Prevista</TableHead>
                <TableHead>Canal</TableHead>
                <TableHead>Estado</TableHead>
                <TableHead>Acciones</TableHead>
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
                      notification.status === "Enviado" ? "bg-green-100 text-green-800 hover:bg-green-200" :
                      notification.status === "En espera" ? "bg-amber-100 text-amber-800 hover:bg-amber-200" :
                      "bg-red-100 text-red-800 hover:bg-red-200"
                    }>
                      {notification.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {notification.status === "Falló" ? (
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => resendNotification(notification.id)}
                      >
                        Reenviar
                      </Button>
                    ) : (
                      <Button 
                        variant="link" 
                        className="text-primary p-0 h-auto"
                      >
                        Detalles
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
