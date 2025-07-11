
-- Criar enum para status de agendamento
CREATE TYPE appointment_status AS ENUM ('scheduled', 'confirmed', 'completed', 'cancelled', 'no_show');

-- Criar enum para tipos de serviço
CREATE TYPE service_type AS ENUM ('general', 'aesthetic', 'prosthetics', 'implants', 'orthodontics', 'surgery');

-- Criar tabela de perfis de usuários
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  full_name TEXT NOT NULL,
  phone TEXT,
  date_of_birth DATE,
  cpf TEXT UNIQUE,
  address TEXT,
  emergency_contact TEXT,
  emergency_phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  PRIMARY KEY (id)
);

-- Criar tabela de serviços disponíveis
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  price DECIMAL(10,2),
  duration_minutes INTEGER DEFAULT 60,
  service_type service_type NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de agendamentos
CREATE TABLE public.appointments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  service_id UUID NOT NULL REFERENCES public.services(id),
  appointment_date DATE NOT NULL,
  appointment_time TIME NOT NULL,
  status appointment_status DEFAULT 'scheduled',
  notes TEXT,
  insurance_plan TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar tabela de histórico médico
CREATE TABLE public.medical_history (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  patient_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  visit_date DATE NOT NULL,
  service_performed TEXT NOT NULL,
  diagnosis TEXT,
  treatment TEXT,
  notes TEXT,
  next_visit_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Inserir serviços padrão
INSERT INTO public.services (name, description, price, duration_minutes, service_type) VALUES
('Consulta de Rotina', 'Consulta preventiva com limpeza profissional', 80.00, 60, 'general'),
('Limpeza Profissional', 'Limpeza e profilaxia dental completa', 120.00, 45, 'general'),
('Restauração', 'Restauração com resina ou amálgama', 150.00, 90, 'general'),
('Clareamento Dental', 'Clareamento profissional a laser', 300.00, 90, 'aesthetic'),
('Facetas de Porcelana', 'Facetas estéticas em porcelana', 800.00, 120, 'aesthetic'),
('Lentes de Contato Dental', 'Laminados ultrafinos', 1200.00, 120, 'aesthetic'),
('Prótese Parcial', 'Prótese parcial fixa ou móvel', 500.00, 90, 'prosthetics'),
('Prótese Total', 'Prótese dentária completa', 1500.00, 120, 'prosthetics'),
('Implante Unitário', 'Implante dentário com coroa', 1200.00, 180, 'implants'),
('Aparelho Fixo', 'Aparelho ortodôntico convencional', 200.00, 60, 'orthodontics'),
('Aparelho Estético', 'Aparelho com braquetes estéticos', 300.00, 60, 'orthodontics'),
('Extração Simples', 'Extração de dente simples', 150.00, 45, 'surgery'),
('Extração de Siso', 'Extração de terceiro molar', 300.00, 90, 'surgery');

-- Habilitar RLS (Row Level Security)
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.appointments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medical_history ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Políticas RLS para profiles
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- Políticas RLS para appointments
CREATE POLICY "Users can view their own appointments" ON public.appointments
  FOR SELECT USING (auth.uid() = patient_id);

CREATE POLICY "Users can create their own appointments" ON public.appointments
  FOR INSERT WITH CHECK (auth.uid() = patient_id);

CREATE POLICY "Users can update their own appointments" ON public.appointments
  FOR UPDATE USING (auth.uid() = patient_id);

-- Políticas RLS para medical_history
CREATE POLICY "Users can view their own medical history" ON public.medical_history
  FOR SELECT USING (auth.uid() = patient_id);

-- Políticas RLS para services (público para leitura)
CREATE POLICY "Anyone can view services" ON public.services
  FOR SELECT TO authenticated, anon USING (is_active = true);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Triggers para atualizar updated_at
CREATE TRIGGER update_profiles_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_appointments_updated_at BEFORE UPDATE ON public.appointments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Função para criar perfil automaticamente quando usuário se registra
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name)
  VALUES (NEW.id, COALESCE(NEW.raw_user_meta_data->>'full_name', 'Usuário'));
  RETURN NEW;
END;
$$;

-- Trigger para criar perfil automaticamente
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
