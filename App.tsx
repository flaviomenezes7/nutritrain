
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import WhoAmI2 from './components/WhoAmI2';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { initReveal } from './utils/reveal';
import './reveal.css';
import { Analytics } from '@vercel/analytics/react';

const App: React.FC = () => {
  useEffect(() => {
    const stop = initReveal();
    return () => stop();
  }, []);
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Seção 1: Quem Sou Eu */}
        <WhoAmI2 />
        
        {/* Seção 2: Sobre a NutriTrain */}
        <AboutSection />
        
        {/* Seção 4: Entre em Contato */}
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
      <Analytics />
    </div>
  );
};

export default App;
