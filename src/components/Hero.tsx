
import { Button } from '@/components/ui/button';
import { Shield, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-gradient-to-br from-blue-50 to-white py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Seu sorriso é nossa
              <span className="text-blue-600 block">prioridade</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Na Odontoclin, oferecemos tratamentos odontológicos de excelência com 
              tecnologia avançada e profissionais altamente qualificados para cuidar 
              do seu sorriso.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Agendar Consulta
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-2 hover:bg-blue-50 transition-all duration-300">
                Conheça nossos serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">5000+</div>
                <div className="text-sm text-gray-600">Pacientes</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Anos</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">100%</div>
                <div className="text-sm text-gray-600">Segurança</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 shadow-md">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">24h</div>
                <div className="text-sm text-gray-600">Emergência</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-3xl p-8 transform rotate-3 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 transform -rotate-6 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center shadow-lg">
                    <div className="text-6xl animate-pulse">🦷</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Tecnologia Avançada
                  </h3>
                  <p className="text-gray-600">
                    Equipamentos modernos para os melhores resultados
                  </p>
                </div>
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-200 rounded-full opacity-70 animate-bounce"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-green-200 rounded-full opacity-60 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
