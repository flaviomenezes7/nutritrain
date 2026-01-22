
import React, { useState, useEffect, useRef } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<'quem-sou-eu' | 'sobre' | 'contato'>('quem-sou-eu');
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

  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const ids = ['quem-sou-eu', 'sobre', 'contato'] as const;
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        if (!visible) return;
        const id = (visible.target as HTMLElement).id as (typeof ids)[number];
        setActiveSection(id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: [0.01, 0.1, 0.25] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
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
            className={`transition-colors ${activeSection === 'quem-sou-eu' ? 'text-emerald-600' : 'hover:text-emerald-500'}`}
          >Quem Sou Eu</a>
          <a
            href="#sobre"
            ref={aboutRef}
            onClick={() => triggerEffect(aboutRef)}
            className={`transition-colors ${activeSection === 'sobre' ? 'text-emerald-600' : 'hover:text-emerald-500'}`}
          >A NutriTrain</a>
          <a
            href="#contato"
            ref={contactRef}
            onClick={() => triggerEffect(contactRef)}
            className={`bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200 nt-shine ${
              activeSection === 'contato' ? 'ring-2 ring-emerald-200' : ''
            }`}
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
