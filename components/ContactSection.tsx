import React, { useMemo, useRef, useState } from 'react';
import ContactInterestForms, { composeInterestDetails, type Interest, type InterestFormValues } from './ContactInterestForms';

type Status = 'idle' | 'opening' | 'sent';

const WHATSAPP_TO = '5527996115905';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState<Interest>('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);

  const nameInputRef = useRef<HTMLInputElement | null>(null);
  const interestSectionRef = useRef<HTMLDivElement | null>(null);
  const interestFormRef = useRef<HTMLDivElement | null>(null);

  const [efAge, setEfAge] = useState('');
  const [efHeight, setEfHeight] = useState('');
  const [efWeight, setEfWeight] = useState('');
  const [efGoal, setEfGoal] = useState('');

  const [fisioInjury, setFisioInjury] = useState('');
  const [fisioTime, setFisioTime] = useState('');
  const [fisioHistory, setFisioHistory] = useState('');
  const [fisioGoal, setFisioGoal] = useState('');

  const [nutAge, setNutAge] = useState('');
  const [nutHeight, setNutHeight] = useState('');
  const [nutWeight, setNutWeight] = useState('');
  const [nutHabits, setNutHabits] = useState('');
  const [nutRestrictions, setNutRestrictions] = useState('');
  const [nutAllergy, setNutAllergy] = useState('');
  const [nutGoal, setNutGoal] = useState('');

  const interests = useMemo<Interest[]>(
    () => ['Educação Física', 'Fisioterapia', 'Nutrição', 'Prescrição de treino e dieta'],
    []
  );

  const interestMeta = useMemo(() => {
    const iconClass = 'h-5 w-5';
    return {
      'Educação Física': {
        title: 'Educação Física',
        description: 'Treino, performance, hipertrofia e condicionamento.',
        icon: (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 9v6m12-6v6M4 9h16M4 15h16" />
          </svg>
        ),
      },
      Fisioterapia: {
        title: 'Fisioterapia',
        description: 'Dor, lesões, reabilitação e retorno ao movimento.',
        icon: (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21s-7-4.35-7-11a4 4 0 017-2.5A4 4 0 0119 10c0 6.65-7 11-7 11z" />
          </svg>
        ),
      },
      'Nutrição': {
        title: 'Nutrição',
        description: 'Emagrecimento, ganho de massa, rotina e hábitos.',
        icon: (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 14c0 4 4 7 8 7s8-3 8-7-4-9-8-9-8 5-8 9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5c0 3 2 5 5 5" />
          </svg>
        ),
      },
      'Prescrição de treino e dieta': {
        title: 'Treino + dieta',
        description: 'Plano completo: treino e nutrição juntos.',
        icon: (
          <svg className={iconClass} viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8M7 11h10M8 15h8" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 3h12a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" />
          </svg>
        ),
      },
    } as const;
  }, []);

  const errors = useMemo(() => {
    const next: Record<string, string> = {};

    const requireField = (key: string, label: string, value: string) => {
      if (!value.trim()) next[key] = `Informe ${label}.`;
    };

    if (!name.trim()) next.name = 'Informe seu nome.';
    if (!interest) next.interest = 'Selecione um interesse para continuar.';

    if (interest === 'Educação Física') {
      requireField('efAge', 'a idade', efAge);
      requireField('efHeight', 'a altura', efHeight);
      requireField('efWeight', 'o peso', efWeight);
      requireField('efGoal', 'o objetivo de treino', efGoal);
    }

    if (interest === 'Fisioterapia') {
      requireField('fisioInjury', 'a lesão / queixa principal', fisioInjury);
      requireField('fisioTime', 'o tempo da lesão', fisioTime);
      requireField('fisioHistory', 'o histórico médico', fisioHistory);
      requireField('fisioGoal', 'o objetivo da reabilitação', fisioGoal);
    }

    if (interest === 'Nutrição') {
      requireField('nutAge', 'a idade', nutAge);
      requireField('nutHeight', 'a altura', nutHeight);
      requireField('nutWeight', 'o peso', nutWeight);
      requireField('nutHabits', 'os hábitos alimentares', nutHabits);
      requireField('nutRestrictions', 'os alimentos que você evita', nutRestrictions);
      requireField('nutAllergy', 'a intolerância / alergia alimentar', nutAllergy);
      requireField('nutGoal', 'o objetivo nutricional', nutGoal);
    }

    if (interest === 'Prescrição de treino e dieta') {
      const sharedAge = (efAge || nutAge).trim();
      const sharedHeight = (efHeight || nutHeight).trim();
      const sharedWeight = (efWeight || nutWeight).trim();

      requireField('baseAge', 'a idade', sharedAge);
      requireField('baseHeight', 'a altura', sharedHeight);
      requireField('baseWeight', 'o peso', sharedWeight);
      requireField('efGoal', 'o objetivo de treino', efGoal);
      requireField('nutHabits', 'os hábitos alimentares', nutHabits);
      requireField('nutRestrictions', 'os alimentos que você evita', nutRestrictions);
      requireField('nutAllergy', 'a intolerância / alergia alimentar', nutAllergy);
      requireField('nutGoal', 'o objetivo nutricional', nutGoal);
    }

    return next;
  }, [
    name,
    interest,
    efAge,
    efHeight,
    efWeight,
    efGoal,
    fisioInjury,
    fisioTime,
    fisioHistory,
    fisioGoal,
    nutAge,
    nutHeight,
    nutWeight,
    nutHabits,
    nutRestrictions,
    nutAllergy,
    nutGoal,
  ]);

  const missingFieldsText = useMemo(() => {
    const labels: Record<string, string> = {
      name: 'Nome',
      interest: 'Interesse',
      efAge: 'Idade',
      efHeight: 'Altura',
      efWeight: 'Peso',
      efGoal: 'Objetivo de treino',
      fisioInjury: 'Lesão / Queixa',
      fisioTime: 'Tempo da lesão',
      fisioHistory: 'Histórico médico',
      fisioGoal: 'Objetivo da reabilitação',
      nutAge: 'Idade',
      nutHeight: 'Altura',
      nutWeight: 'Peso',
      nutHabits: 'Hábitos alimentares',
      nutRestrictions: 'Alimentos que evita',
      nutAllergy: 'Intolerância / Alergia',
      nutGoal: 'Objetivo nutricional',
      baseAge: 'Idade',
      baseHeight: 'Altura',
      baseWeight: 'Peso',
    };

    const keys = Object.keys(errors);
    if (keys.length === 0) return '';
    const uniqueLabels = Array.from(new Set(keys.map((k) => labels[k]).filter(Boolean)));
    return uniqueLabels.join(', ');
  }, [errors]);

  const hasErrors = Object.keys(errors).length > 0;
  const canSubmit = !hasErrors && status !== 'opening';
  const isSubmitting = status === 'opening';

  const interestValues: InterestFormValues = {
    efAge,
    efHeight,
    efWeight,
    efGoal,
    fisioInjury,
    fisioTime,
    fisioHistory,
    fisioGoal,
    nutAge,
    nutHeight,
    nutWeight,
    nutHabits,
    nutRestrictions,
    nutAllergy,
    nutGoal,
  };

  const resetInterestFields = () => {
    setEfAge('');
    setEfHeight('');
    setEfWeight('');
    setEfGoal('');

    setFisioInjury('');
    setFisioTime('');
    setFisioHistory('');
    setFisioGoal('');

    setNutAge('');
    setNutHeight('');
    setNutWeight('');
    setNutHabits('');
    setNutRestrictions('');
    setNutAllergy('');
    setNutGoal('');
  };

  const changeInterest = (next: Interest) => {
    setInterest(next);
    resetInterestFields();
    setTouched((t) => ({ ...t, interest: true }));
  };

  const composeMessage = () => {
    const safeName = name.trim();
    const safeInterest = (interest || '').trim();
    const safeMessage = message.trim();

    const lines: string[] = [];
    lines.push('NOVO CONTATO - NutriTrain');
    lines.push('');
    lines.push(`Nome: ${safeName}`);
    lines.push(`Interesse: ${safeInterest || 'Geral'}`);

    const details = composeInterestDetails(interest, interestValues).filter((l) => l.trim().length > 0 || l === '');
    if (details.length > 0) {
      lines.push('');
      lines.push(...details);
    }

    if (safeMessage) {
      lines.push('');
      lines.push('Mensagem');
      lines.push(`- ${safeMessage}`);
    }

    lines.push('');
    lines.push('Enviado atraves do site NutriTrain');
    return lines.join('\n');
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitAttempted(true);
    setTouched((prev) => {
      const next = { ...prev };
      for (const key of Object.keys(errors)) next[key] = true;
      return next;
    });

    if (!canSubmit) {
      const fieldOrder: Array<keyof typeof errors> = [
        'name',
        'interest',
        ...(interest === 'Educação Física' ? (['efAge', 'efHeight', 'efWeight', 'efGoal'] as const) : []),
        ...(interest === 'Fisioterapia' ? (['fisioInjury', 'fisioTime', 'fisioHistory', 'fisioGoal'] as const) : []),
        ...(interest === 'Nutrição'
          ? (['nutAge', 'nutHeight', 'nutWeight', 'nutHabits', 'nutRestrictions', 'nutAllergy', 'nutGoal'] as const)
          : []),
        ...(interest === 'Prescrição de treino e dieta'
          ? (['baseAge', 'baseHeight', 'baseWeight', 'efGoal', 'nutHabits', 'nutRestrictions', 'nutAllergy', 'nutGoal'] as const)
          : []),
      ];
      const firstErrorKey = fieldOrder.find((k) => Boolean(errors[k])) || (Object.keys(errors)[0] as keyof typeof errors);

      window.setTimeout(() => {
        if (firstErrorKey === 'name') {
          const el = nameInputRef.current;
          el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el?.focus({ preventScroll: true });
          return;
        }

        if (firstErrorKey === 'interest') {
          const el = interestSectionRef.current;
          el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
          const firstButton = el?.querySelector('button') as HTMLButtonElement | null;
          firstButton?.focus({ preventScroll: true });
          return;
        }

        const container = interestFormRef.current;
        if (!container) return;
        container.scrollIntoView({ behavior: 'smooth', block: 'start' });
        const fieldEl = container.querySelector(`[data-field="${String(firstErrorKey)}"]`) as
          | HTMLInputElement
          | HTMLTextAreaElement
          | null;
        fieldEl?.focus({ preventScroll: true });
      }, 0);

      return;
    }

    setStatus('opening');
    const body = composeMessage();
    const url = `https://wa.me/${WHATSAPP_TO}?text=${encodeURIComponent(body)}`;
    window.open(url, '_blank', 'noopener,noreferrer');

    setStatus('sent');
    window.setTimeout(() => {
      setName('');
      setInterest('');
      setMessage('');
      setTouched({});
      setSubmitAttempted(false);

      setEfAge('');
      setEfHeight('');
      setEfWeight('');
      setEfGoal('');

      setFisioInjury('');
      setFisioTime('');
      setFisioHistory('');
      setFisioGoal('');

      setNutAge('');
      setNutHeight('');
      setNutWeight('');
      setNutHabits('');
      setNutRestrictions('');
      setNutAllergy('');
      setNutGoal('');

      setStatus('idle');
    }, 1400);
  };

  return (
    <section id="contato" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200">
            <div className="absolute inset-x-0 -top-32 h-64 bg-gradient-to-br from-emerald-100 via-white to-blue-100 opacity-80" />

            <div className="relative grid gap-10 p-8 md:grid-cols-5 md:p-12">
              <div className="md:col-span-2">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">
                  Fale com a gente
                </h2>
                <p className="mt-3 text-slate-600 leading-relaxed">
                  Leva menos de 30 segundos. Ao enviar, abrimos o WhatsApp já com a mensagem pronta.
                </p>

                <div className="mt-6 text-sm text-slate-700">
                  WhatsApp: <span className="font-extrabold text-slate-900">+55 (27) 99611-5905</span>
                </div>

                <div className="mt-8 rounded-3xl bg-slate-50 border border-slate-200 p-6">
                  <div className="text-sm font-extrabold uppercase tracking-widest text-slate-500">
                    Como funciona
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-extrabold">
                        1
                      </span>
                      <span>Escolha seu interesse e preencha o formulário rápido.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-extrabold">
                        2
                      </span>
                      <span>Clique em <strong>Enviar</strong> e o WhatsApp abre com a mensagem pronta.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 font-extrabold">
                        3
                      </span>
                      <span>Nós retornamos com os próximos passos (avaliação, plano e acompanhamento).</span>
                    </li>
                  </ul>

                  <div className="mt-6 grid gap-3">
                    <div className="flex items-start gap-3 rounded-2xl bg-white border border-slate-200 p-4">
                      <svg className="mt-0.5 h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Rápido e direto</div>
                        <div className="text-xs text-slate-600">Sem cadastro, sem espera, sem complicação.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl bg-white border border-slate-200 p-4">
                      <svg className="mt-0.5 h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 0c-3.314 0-6 1.791-6 4v1h12v-1c0-2.209-2.686-4-6-4z" />
                      </svg>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Atendimento humanizado</div>
                        <div className="text-xs text-slate-600">Você fala com a equipe, não com robô.</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 rounded-2xl bg-white border border-slate-200 p-4">
                      <svg className="mt-0.5 h-5 w-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <div className="text-sm font-bold text-slate-900">Resposta em horário comercial</div>
                        <div className="text-xs text-slate-600">Se enviar fora do horário, respondemos assim que possível.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <form onSubmit={onSubmit} className="space-y-5 md:col-span-3">
                {submitAttempted && hasErrors && (
                  <div
                    role="alert"
                    aria-live="polite"
                    className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                  >
                    <div className="font-bold">Faltam campos obrigatórios.</div>
                    {missingFieldsText ? (
                      <div className="mt-1">Faltando: {missingFieldsText}.</div>
                    ) : (
                      <div className="mt-1">Verifique os campos em vermelho e tente novamente.</div>
                    )}
                  </div>
                )}

                <div>
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Seu nome</label>
                  <input
                    ref={nameInputRef}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onBlur={() => setTouched((t) => ({ ...t, name: true }))}
                    autoComplete="name"
                    placeholder="Ex: Maria Silva"
                    className={`mt-2 w-full bg-slate-50 border rounded-2xl p-4 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400 ${
                      touched.name && errors.name ? 'border-red-300 focus:ring-red-300' : 'border-slate-200'
                    }`}
                    aria-invalid={Boolean(touched.name && errors.name)}
                  />
                  {touched.name && errors.name && (
                    <p className="mt-2 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div ref={interestSectionRef}>
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Escolha seu interesse</label>
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {interests.map((it) => {
                      const active = interest === it;
                      const meta = interestMeta[it];
                      return (
                        <button
                          key={it}
                          type="button"
                          onClick={() => changeInterest(interest === it ? '' : it)}
                          className={`group text-left rounded-3xl border p-4 transition-all ${
                            active
                              ? 'bg-emerald-600 border-emerald-600 text-white shadow-xl shadow-emerald-100'
                              : 'bg-white border-slate-200 text-slate-900 hover:border-slate-300 hover:shadow-lg'
                          }`}
                          aria-pressed={active}
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className={`mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-2xl border ${
                                active
                                  ? 'bg-white/10 border-white/20 text-white'
                                  : 'bg-slate-50 border-slate-200 text-emerald-600 group-hover:border-slate-300'
                              }`}
                            >
                              {meta?.icon}
                            </div>
                            <div className="min-w-0">
                              <div className="text-sm font-extrabold tracking-tight">{meta?.title ?? it}</div>
                              <div className={`mt-1 text-xs ${active ? 'text-white/90' : 'text-slate-600'}`}>
                                {meta?.description}
                              </div>
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {touched.interest && errors.interest && (
                    <p className="mt-2 text-sm text-red-600">{errors.interest}</p>
                  )}
                </div>

                <div ref={interestFormRef}>
                  <ContactInterestForms
                    interest={interest}
                    setInterest={changeInterest}
                    efAge={efAge}
                    setEfAge={setEfAge}
                    efHeight={efHeight}
                    setEfHeight={setEfHeight}
                    efWeight={efWeight}
                    setEfWeight={setEfWeight}
                    efGoal={efGoal}
                    setEfGoal={setEfGoal}
                    fisioInjury={fisioInjury}
                    setFisioInjury={setFisioInjury}
                    fisioTime={fisioTime}
                    setFisioTime={setFisioTime}
                    fisioHistory={fisioHistory}
                    setFisioHistory={setFisioHistory}
                    fisioGoal={fisioGoal}
                    setFisioGoal={setFisioGoal}
                    nutAge={nutAge}
                    setNutAge={setNutAge}
                    nutHeight={nutHeight}
                    setNutHeight={setNutHeight}
                    nutWeight={nutWeight}
                    setNutWeight={setNutWeight}
                    nutHabits={nutHabits}
                    setNutHabits={setNutHabits}
                    nutRestrictions={nutRestrictions}
                    setNutRestrictions={setNutRestrictions}
                    nutAllergy={nutAllergy}
                    setNutAllergy={setNutAllergy}
                    nutGoal={nutGoal}
                    setNutGoal={setNutGoal}
                    errors={errors}
                    touched={touched}
                    onTouch={(key) => setTouched((t) => ({ ...t, [key]: true }))}
                  />
                </div>

                <div>
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Mensagem (opcional)</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Se quiser, deixe uma observação (ex: dor no joelho, rotina corrida, preferências alimentares...)"
                    className="mt-2 w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:shadow-xl focus:ring-2 focus:ring-emerald-400 h-28 resize-none"
                  />
                </div>

                {interest ? (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full rounded-2xl py-4 font-extrabold transition-all ${
                      !isSubmitting
                        ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-200'
                        : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    {status === 'opening' ? 'Abrindo WhatsApp...' : status === 'sent' ? 'Enviado!' : 'Enviar agora'}
                  </button>
                ) : (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                    Selecione um interesse acima para liberar o envio.
                  </div>
                )}

                <p className="text-xs text-slate-500">
                  Ao enviar, abrimos o WhatsApp para você confirmar a mensagem.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
