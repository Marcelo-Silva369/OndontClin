
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Heart, Award, Clock, Users } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-3xl font-bold">Odontoclin</h3>
              <Heart className="h-6 w-6 text-red-400 ml-2" />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Há mais de 15 anos cuidando do seu sorriso com excelência, 
              tecnologia e humanização. Sua saúde bucal é nossa prioridade!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-110">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-blue-400 p-3 rounded-lg hover:bg-blue-500 transition-colors duration-300 transform hover:scale-110">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            
            {/* Awards */}
            <div className="mt-8 p-4 bg-gradient-to-r from-yellow-600 to-yellow-700 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-5 w-5 text-yellow-200" />
                <span className="font-semibold text-yellow-100">Certificações</span>
              </div>
              <p className="text-yellow-100 text-sm">
                CRO-SP • ISO 9001 • Vigilância Sanitária
              </p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-blue-300">Nossos Serviços</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-blue-300 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                Clínica Geral
              </a></li>
              <li><a href="#" className="hover:text-purple-300 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                Estética Dental
              </a></li>
              <li><a href="#" className="hover:text-green-300 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Implantodontia
              </a></li>
              <li><a href="#" className="hover:text-red-300 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                Ortodontia
              </a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                Próteses Dentárias
              </a></li>
              <li><a href="#" className="hover:text-indigo-300 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                Cirurgia Oral
              </a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-green-300">Links Rápidos</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#inicio" className="hover:text-green-300 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Início
              </a></li>
              <li><a href="#sobre" className="hover:text-green-300 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Sobre Nós
              </a></li>
              <li><a href="#servicos" className="hover:text-green-300 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Serviços
              </a></li>
              <li><a href="#contato" className="hover:text-green-300 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Contato
              </a></li>
              <li><a href="#" className="hover:text-green-300 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Blog Odontológico
              </a></li>
              <li><a href="#" className="hover:text-green-300 transition-colors duration-300 flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                Convênios Aceitos
              </a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-purple-300">Fale Conosco</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <MapPin className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Endereço</p>
                  <p className="text-sm">Rua das Flores, 123 - Centro<br />São Paulo - SP, 01234-567</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <Phone className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Telefones</p>
                  <p className="text-sm">(11) 3456-7890<br />(11) 99876-5432</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                <Mail className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">E-mail</p>
                  <p className="text-sm">contato@odontoclin.com.br</p>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="mt-6 p-4 bg-gradient-to-r from-red-600 to-red-700 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-5 w-5 text-red-200" />
                <span className="font-semibold text-red-100">Emergência 24h</span>
              </div>
              <p className="text-red-100 text-sm mb-2">Plantão odontológico disponível</p>
              <p className="text-red-100 text-sm font-semibold">(11) 99999-0000</p>
            </div>
          </div>
        </div>

        {/* Statistics Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Users className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">5000+</div>
              <div className="text-gray-400 text-sm">Pacientes Atendidos</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">15+</div>
              <div className="text-gray-400 text-sm">Anos de Experiência</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Heart className="h-8 w-8 text-pink-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">98%</div>
              <div className="text-gray-400 text-sm">Satisfação</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <Clock className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-gray-400 text-sm">Suporte</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                © 2024 Odontoclin. Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                CNPJ: 12.345.678/0001-90 | CRO-SP: 12345
              </p>
            </div>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Termos de Uso
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Código de Ética
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Trabalhe Conosco
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
