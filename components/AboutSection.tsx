
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1 reveal" data-reveal-delay="80">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Movimento Consciente</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Educar o corpo para que ele se mova com qualidade, leveza e segurança.</p>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 translate-y-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9" /></svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Nutrição Real</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Nutrir o corpo com inteligência, equilíbrio e respeito.</p>
                </div>
              </div>
              <div className="space-y-4 flex flex-col justify-center">
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                  <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Recuperação Eficaz</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Cuidar das dores, prevenir lesões e permitir que você continue evoluindo.</p>
                </div>
              </div>
            </div>
          </div>         
          <div className="lg:w-1/2 order-1 lg:order-2 reveal" data-reveal-delay="160">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              Três pilares e <span className="text-emerald-500 underline decoration-emerald-200">um só propósito.</span> Cuidar de você por completo.
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              A NutriTrain nasceu para integrar o que sempre deveria caminhar junto: treino, nutrição e recuperação. Aqui, o seu corpo, a sua mente e a sua rotina são considerados em cada etapa do processo. Nós acreditamos em um cuidado humano, individual e baseado em ciência. Não existem protocolos engessados. Existe você.
            </p>
            <ul className="space-y-4 mb-10">
              {['Plano individual, feito sob medida para você', 'Suporte via WhatsApp', 'Planejamento estratégico e personalizado em cada etapa'].map((item, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/></svg>
                  </div>
                  <span className="font-semibold text-slate-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
