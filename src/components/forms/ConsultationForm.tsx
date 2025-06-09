
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const formSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  apellido: z.string().min(2, 'El apellido debe tener al menos 2 caracteres'),
  telefono: z.string().min(9, 'El teléfono debe tener al menos 9 dígitos'),
  email: z.string().email('Ingresa un email válido'),
  consulta: z.string()
    .min(10, 'La consulta debe tener al menos 10 caracteres')
    .max(200, 'La consulta no puede exceder 200 caracteres'),
});

type FormData = z.infer<typeof formSchema>;

interface ConsultationFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ConsultationForm({ open, onOpenChange }: ConsultationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
      consulta: '',
    },
  });

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Número de WhatsApp de administración (formato internacional sin +)
      const phoneNumber = '34123456789'; // Cambiar por el número real
      
      // Formatear el mensaje para WhatsApp
      const message = `*Nueva Consulta Gratuita - EstheticaClinic*

*Datos del Cliente:*
• Nombre: ${data.nombre} ${data.apellido}
• Teléfono: ${data.telefono}
• Email: ${data.email}

*Consulta:*
${data.consulta}

*Fecha:* ${new Date().toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })}`;

      // Crear URL de WhatsApp
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
      // Abrir WhatsApp en una nueva ventana
      window.open(whatsappUrl, '_blank');
      
      toast({
        title: "¡Consulta enviada!",
        description: "Te hemos redirigido a WhatsApp para completar el envío.",
      });
      
      // Limpiar formulario y cerrar modal
      form.reset();
      onOpenChange(false);
      
    } catch (error) {
      console.error('Error al enviar consulta:', error);
      toast({
        title: "Error",
        description: "Hubo un problema al procesar tu consulta. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const watchedConsulta = form.watch('consulta');
  const consultaLength = watchedConsulta?.length || 0;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-clinic-deep-gold">
            Consulta Gratuita
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Completa el formulario y nos pondremos en contacto contigo para resolver todas tus dudas.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="nombre"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre *</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="apellido"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido *</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu apellido" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="telefono"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Teléfono *</FormLabel>
                  <FormControl>
                    <Input placeholder="+34 123 456 789" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="tu@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="consulta"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>¿En qué podemos ayudarte? *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Cuéntanos sobre el tratamiento que te interesa o cualquier duda que tengas..."
                      className="min-h-[100px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <div className="flex justify-between items-center text-xs">
                    <FormMessage />
                    <span className={`${consultaLength > 200 ? 'text-destructive' : 'text-muted-foreground'}`}>
                      {consultaLength}/200 caracteres
                    </span>
                  </div>
                </FormItem>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-clinic-gold to-clinic-deep-gold hover:from-clinic-deep-gold hover:to-clinic-gold"
            >
              {isSubmitting ? (
                "Enviando..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Enviar Consulta por WhatsApp
                </>
              )}
            </Button>

            <p className="text-xs text-center text-muted-foreground">
              Al enviar este formulario, serás redirigido a WhatsApp para completar el envío de tu consulta.
            </p>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
