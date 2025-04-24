
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Users } from "lucide-react";

export default function ClientStats() {
  // In a real app, these would come from your API
  const stats = {
    totalClients: 246,
    newClients: 12,
    pendingFollowups: 18,
  };

  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-3 mb-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Clienti Totali</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalClients}</div>
          <p className="text-xs text-muted-foreground">
            +{stats.newClients} nell'ultimo mese
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Nuovi Clienti</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.newClients}</div>
          <p className="text-xs text-muted-foreground">
            Nell'ultimo mese
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium">Follow-up Pendenti</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.pendingFollowups}</div>
          <p className="text-xs text-muted-foreground">
            Da contattare
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
