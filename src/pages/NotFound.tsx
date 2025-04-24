
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-clinic-light-blue to-clinic-background">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold mb-4 text-clinic-vibrant-blue">404</h1>
        <p className="text-xl text-clinic-text mb-6">Pagina non trovata</p>
        <p className="mb-8 text-clinic-text">La pagina che stai cercando non esiste o è stata spostata.</p>
        <Button asChild className="bg-clinic-vibrant-blue hover:bg-clinic-blue">
          <Link to="/">Torna alla Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
