
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Banner de acesso ao sistema */}
      <div className="bg-blue-600 text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-4">
            <Calendar className="h-6 w-6" />
            <span className="text-lg font-medium">
              Agende sua consulta online de forma rápida e segura
            </span>
            <Link to="/auth">
              <Button variant="secondary" size="sm">
                Entrar no Sistema
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
