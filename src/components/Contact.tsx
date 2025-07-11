
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Entre em Contato
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Estamos prontos para cuidar do seu sorriso. Agende sua consulta ou 
            tire suas dúvidas conosco. Atendimento personalizado e humanizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Informações de Contato
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                <div className="bg-blue-100 p-3 rounded-lg shadow-md">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Endereço</h4>
                  <p className="text-gray-600">
                    Rua das Flores, 123 - Centro<br />
                    São Paulo - SP, 01234-567<br />
                    <span className="text-sm text-blue-600">Estacionamento gratuito disponível</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                <div className="bg-green-100 p-3 rounded-lg shadow-md">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Telefones</h4>
                  <p className="text-gray-600">
                    <strong>Recepção:</strong> (11) 3456-7890<br />
                    <strong>WhatsApp:</strong> (11) 99876-5432<br />
                    <span className="text-sm text-green-600">Ligação gratuita pelo 0800</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                <div className="bg-purple-100 p-3 rounded-lg shadow-md">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">E-mails</h4>
                  <p className="text-gray-600">
                    <strong>Geral:</strong> contato@odontoclin.com.br<br />
                    <strong>Agendamento:</strong> agendamento@odontoclin.com.br<br />
                    <strong>Financeiro:</strong> financeiro@odontoclin.com.br
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors duration-300">
                <div className="bg-yellow-100 p-3 rounded-lg shadow-md">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Horário de Funcionamento</h4>
                  <p className="text-gray-600">
                    <strong>Segunda a Sexta:</strong> 8h às 18h<br />
                    <strong>Sábado:</strong> 8h às 12h<br />
                    <strong>Domingo:</strong> Fechado<br />
                    <span className="text-sm text-yellow-600">Horário estendido mediante agendamento</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-red-500 to-red-600 rounded-2xl text-white">
              <h4 className="font-semibold mb-4 flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Atendimento de Emergência 24h
              </h4>
              <p className="mb-4 text-red-100">
                Para urgências odontológicas, temos plantão disponível 24 horas por dia, 
                7 dias por semana. Dor de dente não espera!
              </p>
              <Button className="bg-white text-red-600 hover:bg-red-50 font-semibold">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp Emergência
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  Agende sua Consulta
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Seu nome completo" />
                  <Input placeholder="Seu telefone" />
                </div>
                <Input placeholder="Seu e-mail" />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Especialidade desejada" />
                  <Input placeholder="Data preferida" />
                </div>
                <Textarea 
                  placeholder="Descreva brevemente sua necessidade ou dúvida" 
                  rows={4}
                  className="resize-none"
                />
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 shadow-lg">
                  Agendar Consulta
                </Button>
              </CardContent>
            </Card>

            {/* Testimonial */}
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">
                  "Excelente atendimento! A Dra. Marina foi muito atenciosa e o resultado 
                  do meu clareamento ficou perfeito. Recomendo a todos!"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-300 rounded-full flex items-center justify-center">
                    <span className="text-blue-800 font-semibold">MC</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Maria Clara</div>
                    <div className="text-sm text-gray-600">Paciente desde 2022</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Nossa Localização</h3>
          <div className="bg-gradient-to-br from-blue-100 to-blue-200 h-64 rounded-2xl flex items-center justify-center shadow-lg">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                Fácil Acesso e Localização Privilegiada
              </h4>
              <p className="text-gray-700 max-w-md">
                Localizada no coração da cidade, com fácil acesso por transporte público 
                e estacionamento gratuito para nossos pacientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
