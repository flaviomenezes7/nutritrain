
import React from 'react';
import profile from '../assets/profile.png';

const WhoAmI: React.FC = () => {
  return (
    <section id="quem-sou-eu" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 hidden lg:block"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 reveal" data-reveal-delay="80">
            <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Especialista
            </span>
                <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-8">
                  Muito prazer, eu sou a <span className="text-emerald-500">Dra. Laiane Fernanda</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-xl">
                 Acredito que saúde é equilíbrio. Por isso, integro fisioterapia, nutrição e treinamento para tratar a causa, e não só os sintomas. Tudo com um acompanhamento humano, acolhedor e baseado em ciência.
                </p>
            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 text-emerald-500 mt-1">
                  <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase">Plano sob medida</h4>
                  <p className="text-xs text-slate-500">Nada de protocolos engessados.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 text-emerald-500 mt-1">
                  <svg fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase">Corpo e mente alinhados</h4>
                  <p className="text-xs text-slate-500">Resultados sustentáveis, além do consultório.</p>
                </div>
              </div>
            </div>
            <a href="#contato" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-200">
              Agende sua avaliação!
            </a>
          </div>
          <div className="lg:w-1/2 relative reveal" data-reveal-delay="180">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-[12px] border-white">
              <img src={profile} alt="Dra. Laiane Fernanda" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-8 glass-effect p-8 rounded-3xl shadow-2xl border border-white/50 hidden md:block">
                  <p className="text-2xl font-extrabold text-emerald-500 mb-1">LAIANE F.</p>
                  <p className="text-sm font-bold text-slate-600 uppercase tracking-tighter">Saúde Integrada com foco em resultados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
