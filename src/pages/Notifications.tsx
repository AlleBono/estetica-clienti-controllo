
import AppLayout from "@/components/layout/AppLayout";
import NotificationList from "@/components/notifications/NotificationList";

export default function Notifications() {
  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Sistema di Notifiche</h1>
        </div>
        
        <NotificationList />
      </div>
    </AppLayout>
  );
}
