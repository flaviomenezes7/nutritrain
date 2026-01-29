import React from 'react';
import profile from '../assets/profile.png';

const DOCTOR_NAME = 'Dra. Laiane Fernanda';

const CREDENTIALS = [
  { label: 'CREFITO', value: '444283-F' },
  { label: 'CRN', value: '' },
  { label: 'CREF', value: '015096-G/ES' },
] as const;

const HIGHLIGHTS = [
  {
    title: 'Plano sob medida',
    description: 'Nada de protocolos engessados — o plano é seu.',
  },
  {
    title: 'Acompanhamento humano',
    description: 'Acolhimento + ciência para decisões seguras.',
  },
  {
    title: 'Saúde integrada',
    description: 'Treino, nutrição e recuperação no mesmo caminho.',
  },
] as const;

const PILLARS = [
  {
    label: 'Fisioterapia',
    className: 'bg-orange-100 text-orange-700 border border-orange-200',
  },
  {
    label: 'Treinamento',
    className: 'bg-blue-100 text-blue-700 border border-blue-200',
  },
] as const;

const Check: React.FC = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const StarIcon: React.FC = () => (
  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2.6l2.93 5.94 6.56.95-4.74 4.62 1.12 6.53L12 17.56 6.13 20.64l1.12-6.53L2.5 9.49l6.56-.95L12 2.6z" />
  </svg>
);

const WhoAmI2: React.FC = () => {
  const visibleCredentials = CREDENTIALS.filter((c) => (c.value || '').trim().length > 0);

  return (
    <section id="quem-sou-eu" className="relative overflow-hidden bg-white pt-28 pb-16">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-emerald-100 blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal" data-reveal-delay="80">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Especialista em saúde integrada
            </div>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Muito prazer, eu sou a <span className="text-emerald-500">{DOCTOR_NAME}</span>
            </h1>

            <div className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl space-y-3">
              <p>
                Acredito que saúde é equilíbrio. Por isso, integro fisioterapia, nutrição e treinamento para tratar a causa
                — e não só os sintomas.
              </p>
              <p>
                Com um acompanhamento humano, acolhedor e baseado em ciência.
              </p>
            </div>

            {visibleCredentials.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {visibleCredentials.map((c) => (
                  <span
                    key={c.label}
                    aria-label={`${c.label} ${c.value}`}
                    className="inline-flex items-center gap-2 rounded-2xl bg-slate-50 border border-slate-200 px-4 py-2 shadow-sm"
                  >
                    <span className="inline-flex items-center justify-center h-7 w-7 rounded-xl bg-white border border-slate-200 text-emerald-600">
                      <StarIcon />
                    </span>
                    <span className="leading-tight">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        {c.label}
                      </span>
                      <span className="block text-sm font-extrabold text-slate-900">
                        {c.value}
                      </span>
                    </span>
                  </span>
                ))}
              </div>
            )}

            <div className="mt-7 flex flex-wrap gap-2">
              {PILLARS.map((p) => (
                <span key={p.label} className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-bold ${p.className}`}>
                  {p.label}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-3">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="flex gap-3 rounded-2xl bg-white border border-slate-200 p-4 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lg hover:border-slate-300 focus-within:ring-2 focus-within:ring-emerald-300"
                >
                  <div className="mt-0.5 text-emerald-600">
                    <Check />
                  </div>
                  <div>
                    <div className="text-sm font-extrabold text-slate-900 uppercase tracking-wider">{item.title}</div>
                    <div className="mt-1 text-sm text-slate-600">{item.description}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#contato"
                className="inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-8 py-4 font-extrabold text-white hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100 active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
              >
                Agende sua avaliação
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center rounded-2xl bg-white border border-slate-200 px-8 py-4 font-extrabold text-slate-800 hover:border-slate-300 transition-all active:scale-[0.99] focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2"
              >
                Conhecer a NutriTrain
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Resposta via WhatsApp. Sem cadastro.
            </p>
          </div>

          <div className="relative reveal" data-reveal-delay="160">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3.25rem] bg-slate-50 border border-slate-200" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-[12px] border-white">
                <img src={profile} alt={DOCTOR_NAME} className="w-full h-full object-cover" />
              </div>

              <div className="absolute -bottom-6 -left-6 glass-effect rounded-3xl border border-white/50 p-6 shadow-2xl hidden md:block">
                <div className="text-xs font-extrabold uppercase tracking-widest text-slate-600">NutriTrain</div>
                <div className="mt-1 text-2xl font-extrabold text-emerald-500">Saúde Integrada</div>
                <div className="mt-1 text-sm font-bold text-slate-600 uppercase tracking-tighter">
                  Foco em resultados sustentáveis
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI2;
