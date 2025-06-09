
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Users } from "lucide-react";

export default function ClientStats() {
  // En una aplicación real, estos datos vendrían de tu API
  const stats = {
    totalClients: 246,
    newClients: 12,
    pendingFollowups: 18,
  };

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Clientes Totales</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalClients}</div>
          <p className="text-xs text-muted-foreground">
            +{stats.newClients} en el último mes
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Nuevas Clientes</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.newClients}</div>
          <p className="text-xs text-muted-foreground">
            En el último mes
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Seguimientos Pendientes</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.pendingFollowups}</div>
          <p className="text-xs text-muted-foreground">
            Por contactar
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
