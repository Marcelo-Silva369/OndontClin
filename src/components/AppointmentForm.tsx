
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration_minutes: number;
  service_type: string;
}

interface AppointmentFormProps {
  onSuccess: () => void;
}

const AppointmentForm: React.FC<AppointmentFormProps> = ({ onSuccess }) => {
  const { user } = useAuth();
  const [services, setServices] = useState<Service[]>([]);
  const [selectedService, setSelectedService] = useState<string>('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [notes, setNotes] = useState('');
  const [insurancePlan, setInsurancePlan] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('is_active', true)
        .order('name');

      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
      toast.error('Erro ao carregar serviços');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('appointments')
        .insert({
          patient_id: user.id,
          service_id: selectedService,
          appointment_date: appointmentDate,
          appointment_time: appointmentTime,
          notes: notes || null,
          insurance_plan: insurancePlan || null,
        });

      if (error) throw error;

      toast.success('Agendamento criado com sucesso!');
      setSelectedService('');
      setAppointmentDate('');
      setAppointmentTime('');
      setNotes('');
      setInsurancePlan('');
      onSuccess();
    } catch (error: any) {
      console.error('Error creating appointment:', error);
      toast.error('Erro ao criar agendamento: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="service" className="text-sm font-medium">
          Serviço *
        </label>
        <Select value={selectedService} onValueChange={setSelectedService} required>
          <SelectTrigger>
            <SelectValue placeholder="Selecione um serviço" />
          </SelectTrigger>
          <SelectContent>
            {services.map((service) => (
              <SelectItem key={service.id} value={service.id}>
                {service.name} - R$ {service.price?.toFixed(2)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="date" className="text-sm font-medium">
            Data *
          </label>
          <Input
            id="date"
            type="date"
            min={getMinDate()}
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="time" className="text-sm font-medium">
            Horário *
          </label>
          <Input
            id="time"
            type="time"
            value={appointmentTime}
            onChange={(e) => setAppointmentTime(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="insurance" className="text-sm font-medium">
          Plano de Saúde (opcional)
        </label>
        <Input
          id="insurance"
          type="text"
          placeholder="Nome do plano de saúde"
          value={insurancePlan}
          onChange={(e) => setInsurancePlan(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="notes" className="text-sm font-medium">
          Observações (opcional)
        </label>
        <Textarea
          id="notes"
          placeholder="Informações adicionais sobre a consulta"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Agendando...' : 'Agendar Consulta'}
      </Button>
    </form>
  );
};

export default AppointmentForm;
