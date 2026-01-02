
import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const quemRef = useRef<HTMLAnchorElement | null>(null);
  const aboutRef = useRef<HTMLAnchorElement | null>(null);
  const contactRef = useRef<HTMLAnchorElement | null>(null);

  const triggerEffect = (ref: React.RefObject<HTMLElement>) => {
    if (!ref.current) return;
    ref.current.classList.add('click-effect');
    setTimeout(() => ref.current && ref.current.classList.remove('click-effect'), 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .click-effect{ animation: click-pop 260ms ease; }
        @keyframes click-pop{ 0%{ transform: scale(1); } 50%{ transform: scale(0.96); } 100%{ transform: scale(1); } }
      `}</style>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-effect shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-black text-xl">NT</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-slate-900">Nutri<span className="text-emerald-500">Train</span></span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-600">
          <a
            href="#quem-sou-eu"
            ref={quemRef}
            onClick={() => triggerEffect(quemRef)}
            className="hover:text-emerald-500 transition-colors"
          >Quem Sou Eu</a>
          <a
            href="#sobre"
            ref={aboutRef}
            onClick={() => triggerEffect(aboutRef)}
            className="hover:text-emerald-500 transition-colors"
          >A NutriTrain</a>
          <a
            href="#contato"
            ref={contactRef}
            onClick={() => triggerEffect(contactRef)}
            className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200"
          >
            Falar com Especialista
          </a>
        </div>
      </div>
      </nav>
    </>
  );
};

export default Navbar;
