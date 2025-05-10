
import AppLayout from "@/components/layout/AppLayout";
import NotificationList from "@/components/notifications/NotificationList";
import CaseStudies from "@/components/case-studies/CaseStudies";

export default function Notifications() {
  return (
    <AppLayout>
      <div className="space-y-6 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-clinic-gold to-clinic-deep-gold bg-clip-text text-transparent">
            Sistema di Notifiche e Casi di Successo
          </h1>
        </div>
        
        <CaseStudies />
        
        <NotificationList />
      </div>
    </AppLayout>
  );
}
