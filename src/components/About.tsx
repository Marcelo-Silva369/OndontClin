
import { CheckCircle, Heart, Star, Target, Award, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in">
            Sobre a Odontoclin
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
            Há mais de 15 anos cuidando do sorriso de milhares de pacientes com 
            excelência, tecnologia e humanização.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Compromisso com a Excelência
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              A Odontoclin nasceu com o propósito de transformar a experiência 
              odontológica, combinando tecnologia de ponta com atendimento 
              humanizado. Nossa equipe multidisciplinar é formada por especialistas 
              em diversas áreas da odontologia.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Profissionais Qualificados</h4>
                  <p className="text-gray-600">Dentistas especialistas com formação continuada e certificações internacionais</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Tecnologia Avançada</h4>
                  <p className="text-gray-600">Equipamentos de última geração e técnicas inovadoras para melhores resultados</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Atendimento Personalizado</h4>
                  <p className="text-gray-600">Cada paciente recebe um plano de tratamento individual e especial</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Missão</h4>
              <p className="text-gray-600">
                Proporcionar saúde bucal com excelência e humanização
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Visão</h4>
              <p className="text-gray-600">
                Ser referência em odontologia na região
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl text-center col-span-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Valores</h4>
              <p className="text-gray-600">
                Ética, qualidade, inovação e respeito ao paciente são nossos pilares fundamentais
              </p>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Award className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Anos de Experiência</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Shield className="h-12 w-12 mx-auto mb-4 text-green-300" />
              <div className="text-3xl font-bold mb-2">5000+</div>
              <div className="text-blue-100">Pacientes Satisfeitos</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Star className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Taxa de Satisfação</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Heart className="h-12 w-12 mx-auto mb-4 text-pink-300" />
              <div className="text-3xl font-bold mb-2">24h</div>
              <div className="text-blue-100">Suporte Emergencial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
