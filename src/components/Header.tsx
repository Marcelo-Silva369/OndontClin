
import { useState } from 'react';
import { Menu, X, Phone, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>(11) 3456-7890</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold text-blue-900">Odontoclin</h1>
            <div className="ml-2 text-blue-600 text-sm font-medium">
              Clínica Odontológica
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
              Início
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sobre
            </a>
            <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">
              Serviços
            </a>
            <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contato
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Agendar Consulta
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">
                Início
              </a>
              <a href="#sobre" className="text-gray-700 hover:text-blue-600 transition-colors">
                Sobre
              </a>
              <a href="#servicos" className="text-gray-700 hover:text-blue-600 transition-colors">
                Serviços
              </a>
              <a href="#contato" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contato
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                Agendar Consulta
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
