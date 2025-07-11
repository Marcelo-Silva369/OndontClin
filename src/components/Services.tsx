
import { Smile, Sparkles, Shield, Zap, Crown, Scissors } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Smile,
      title: 'Clínica Geral',
      description: 'Consultas preventivas, limpeza profissional, restaurações e tratamentos básicos para manter sua saúde bucal sempre em dia.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      price: 'A partir de R$ 80'
    },
    {
      icon: Sparkles,
      title: 'Estética Dental',
      description: 'Clareamento dental, facetas de porcelana, lentes de contato dental e harmonização do sorriso para resultados incríveis.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      price: 'A partir de R$ 300'
    },
    {
      icon: Crown,
      title: 'Próteses',
      description: 'Próteses fixas, móveis e sobre implantes para restaurar completamente a função e estética dos seus dentes.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      price: 'A partir de R$ 500'
    },
    {
      icon: Zap,
      title: 'Implantodontia',
      description: 'Implantes dentários com tecnologia 3D e materiais de última geração para substituir dentes perdidos com total segurança.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      price: 'A partir de R$ 1.200'
    },
    {
      icon: Shield,
      title: 'Ortodontia',
      description: 'Aparelhos fixos convencionais, aparelhos estéticos e alinhadores invisíveis para correção perfeita do sorriso.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      price: 'A partir de R$ 200/mês'
    },
    {
      icon: Scissors,
      title: 'Cirurgia Oral',
      description: 'Extrações simples e complexas, cirurgias de terceiros molares e procedimentos cirúrgicos especializados.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      price: 'A partir de R$ 150'
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Oferecemos uma gama completa de tratamentos odontológicos com 
            tecnologia avançada e profissionais especializados em cada área.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-md transform hover:scale-105 group">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`h-8 w-8 ${service.color}`} />
                </div>
                <CardTitle className="text-xl text-gray-900 mb-2">{service.title}</CardTitle>
                <div className="text-lg font-semibold text-blue-600">{service.price}</div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <Button variant="outline" className="w-full hover:bg-blue-50 transition-colors duration-300">
                  Saiba Mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Convênios e Facilidades de Pagamento
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Trabalhamos com os principais convênios odontológicos e oferecemos 
              parcelamento em até 12x sem juros para todos os tratamentos.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <div className="bg-blue-100 px-4 py-2 rounded-full text-blue-800 font-medium">
                Unimed
              </div>
              <div className="bg-green-100 px-4 py-2 rounded-full text-green-800 font-medium">
                Amil
              </div>
              <div className="bg-purple-100 px-4 py-2 rounded-full text-purple-800 font-medium">
                SulAmérica
              </div>
              <div className="bg-yellow-100 px-4 py-2 rounded-full text-yellow-800 font-medium">
                Bradesco Dental
              </div>
              <div className="bg-red-100 px-4 py-2 rounded-full text-red-800 font-medium">
                MetLife
              </div>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 shadow-lg">
              Verificar Cobertura do Convênio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
