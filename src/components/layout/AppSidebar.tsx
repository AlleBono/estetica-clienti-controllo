
import { CalendarClock, Users, Bell, User } from "lucide-react";
import { 
  Sidebar, 
  SidebarContent, 
  SidebarGroup, 
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger
} from "../ui/sidebar";
import { Link } from "react-router-dom";

const sidebarItems = [
  {
    title: "Clienti",
    url: "/admin/clients",
    icon: Users
  },
  {
    title: "Procedimenti",
    url: "/admin/procedures",
    icon: CalendarClock
  },
  {
    title: "Notifiche",
    url: "/admin/notifications",
    icon: Bell
  },
  {
    title: "Profilo",
    url: "/admin/profile",
    icon: User
  }
];

export default function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="p-4 flex items-center">
        <SidebarTrigger className="md:hidden mr-2" />
        <Link to="/admin" className="font-semibold text-xl text-clinic-vibrant-blue">
          EstheticaAdmin
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Gestione</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex items-center gap-3">
                      <item.icon size={20} className="text-clinic-blue" />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
