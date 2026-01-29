import React from 'react';

const NUTRI_NAME = 'Larissa Fernanda';
const NUTRI_ROLE = 'Nutricionista';
const NUTRI_IMAGE: string | null = null;
const NUTRI_BIO =
  'Atendimento focado em reeducação alimentar, praticidade e resultados sustentáveis, respeitando sua rotina.';
const NUTRI_MISSION = 'Transformar hábitos com leveza, ciência e acolhimento.';
const NUTRI_TAGS = [
  {
    label: 'Nutrição',
    className: 'bg-emerald-100 text-emerald-700 border border-emerald-200',
  },
] as const;

const HIGHLIGHTS = [
  {
    title: 'Nutrição com propósito',
    description: 'Planos simples, sustentáveis e fáceis de seguir no dia a dia.',
  },
  {
    title: 'Acompanhamento humano',
    description: 'Escuta ativa e ajustes constantes para manter sua evolução.',
  },
  {
    title: 'Foco em resultados',
    description: 'Estratégias baseadas em ciência para saúde real e duradoura.',
  },
] as const;

const CREDENTIALS = [
  { label: 'CRN', value: '' },
] as const;

const Check: React.FC = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const getInitials = (name: string) =>
  name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();

const WhoAmINutricionista: React.FC = () => {
  const visibleCredentials = CREDENTIALS.filter((c) => (c.value || '').trim().length > 0);

  return (
    <section
      id="nutricionista"
      className="relative overflow-hidden bg-slate-50 pt-20 pb-16 before:absolute before:inset-x-0 before:top-0 before:h-24 before:bg-gradient-to-b before:from-white before:to-slate-50"
    >
      <div className="absolute inset-0">
        <div className="absolute -top-32 -right-32 h-80 w-80 rounded-full bg-emerald-100 blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="reveal lg:order-2" data-reveal-delay="80">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-slate-200 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-slate-600">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Especialista em nutrição
            </div>

            <h2 className="mt-6 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Nutrição com <span className="text-emerald-500">{NUTRI_NAME}</span>
            </h2>

            <p className="mt-3 text-lg font-semibold text-slate-700">
              {NUTRI_ROLE} clínica · cuidado leve e personalizado
            </p>

            <div className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl space-y-3">
              <p>
                {NUTRI_BIO}
              </p>
              <p className="text-slate-700 font-semibold">
                Missão: <span className="text-slate-600 font-normal">{NUTRI_MISSION}</span>
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {NUTRI_TAGS.map((tag) => (
                <span
                  key={tag.label}
                  className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-bold ${tag.className}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            {visibleCredentials.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {visibleCredentials.map((c) => (
                  <span
                    key={c.label}
                    aria-label={`${c.label} ${c.value}`}
                    className="inline-flex items-center gap-2 rounded-2xl bg-white border border-slate-200 px-4 py-2 shadow-sm"
                  >
                    <span className="inline-flex items-center justify-center h-7 w-7 rounded-xl bg-slate-50 border border-slate-200 text-emerald-600 font-extrabold text-xs">
                      {c.label}
                    </span>
                    <span className="text-sm font-extrabold text-slate-900">{c.value}</span>
                  </span>
                ))}
              </div>
            )}

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
                Quero atendimento nutricional
              </a>
            </div>
          </div>

          <div className="relative reveal lg:order-1" data-reveal-delay="160">
            <div className="relative">
              <div className="absolute -inset-6 rounded-[3.25rem] bg-white border border-slate-200" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5] border-[12px] border-white">
                {NUTRI_IMAGE ? (
                  <img
                    src={NUTRI_IMAGE}
                    alt={`Foto da ${NUTRI_NAME}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-full w-full bg-gradient-to-br from-emerald-100 via-white to-emerald-50 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="mx-auto h-40 w-40 rounded-full bg-white border border-slate-200 shadow-lg flex items-center justify-center">
                        <span className="text-4xl font-extrabold text-emerald-600">
                          {getInitials(NUTRI_NAME)}
                        </span>
                      </div>
                      <div className="px-6">
                        <div className="text-xs font-extrabold uppercase tracking-widest text-slate-500">
                          Foto indisponível
                        </div>
                        <div className="mt-2 text-sm text-slate-600">
                          Ilustração com iniciais da profissional.
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="absolute -bottom-6 -left-6 glass-effect rounded-3xl border border-white/50 p-6 shadow-2xl hidden md:block">
                <div className="text-xs font-extrabold uppercase tracking-widest text-slate-600">NutriTrain</div>
                <div className="mt-1 text-2xl font-extrabold text-emerald-500">Nutrição</div>
                <div className="mt-1 text-sm font-bold text-slate-600 uppercase tracking-tighter">
                  Rotina leve e eficiente
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmINutricionista;
