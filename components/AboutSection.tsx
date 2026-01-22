
import React from 'react';
import corridaPng from '../assets/icons/corrida.png';
import macaDouradaPng from '../assets/icons/maca-dourada.png';
import recuperacaoPng from '../assets/icons/recuperacao.png';

type IconBadgeProps = {
  src: string;
  className: string;
};

const IconBadge: React.FC<IconBadgeProps> = ({ src, className }) => (
  <div className={className}>
    <span
      aria-hidden="true"
      className="w-8 h-8 bg-current"
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
    />
  </div>
);

const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-slate-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div
                  className="reveal bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  data-reveal-delay="60"
                  tabIndex={0}
                >
                  <IconBadge
                    src={corridaPng}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-700 ring-1 ring-blue-200 shadow-sm"
                  />
                  <h3 className="text-lg font-bold mb-2">Movimento Constante</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Educar o corpo para que ele se mova com qualidade, leveza e segurança.</p>
                </div>
                <div
                  className="reveal bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  data-reveal-delay="120"
                  tabIndex={0}
                >
                  <IconBadge
                    src={macaDouradaPng}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-emerald-50 to-emerald-100 text-emerald-700 ring-1 ring-emerald-200 shadow-sm"
                  />
                  <h3 className="text-lg font-bold mb-2">Nutrição Real</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">Nutrir o corpo com inteligência, equilíbrio e respeito.</p>
                </div>
              </div>
              <div className="space-y-4 flex flex-col justify-center">
                <div
                  className="reveal bg-white p-8 rounded-3xl shadow-sm border border-slate-100 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  data-reveal-delay="180"
                  tabIndex={0}
                >
                  <IconBadge
                    src={recuperacaoPng}
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-orange-50 to-orange-100 text-orange-700 ring-1 ring-orange-200 shadow-sm"
                  />
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
            <div className="text-slate-600 text-lg mb-8 leading-relaxed space-y-4">
              <p>
                A NutriTrain nasceu para integrar o que sempre deveria caminhar junto: treino, nutrição e recuperação.
                Aqui, o seu corpo, a sua mente e a sua rotina são considerados em cada etapa do processo.
              </p>
              <p>
                Nós acreditamos em um cuidado humano, individual e baseado em ciência. Não existem protocolos engessados.
                Existe você.
              </p>
            </div>
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

            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3 text-sm font-extrabold text-white shadow-lg shadow-emerald-200 transition-all hover:bg-emerald-600 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
