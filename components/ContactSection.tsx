import React, { useMemo, useState } from 'react';
import ContactInterestForms, { composeInterestDetails, type Interest, type InterestFormValues } from './ContactInterestForms';

type Status = 'idle' | 'opening' | 'sent';

const WHATSAPP_TO = '5527996115905';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [interest, setInterest] = useState<Interest>('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

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

  const errors = useMemo(() => {
    const next: Record<string, string> = {};

    if (!name.trim()) next.name = 'Informe seu nome.';

    return next;
  }, [name]);

  const canSubmit = Object.keys(errors).length === 0 && status !== 'opening';

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

    setTouched({ name: true });
    if (!canSubmit) return;

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
                <div>
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Seu nome</label>
                  <input
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

                <div>
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Seu interesse (opcional)</label>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {interests.map((it) => {
                      const active = interest === it;
                      return (
                        <button
                          key={it}
                          type="button"
                          onClick={() => changeInterest(interest === it ? '' : it)}
                          className={`px-4 py-2 rounded-2xl text-sm font-semibold border transition-all ${
                            active
                              ? 'bg-emerald-500 border-emerald-500 text-white'
                              : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                          }`}
                        >
                          {it}
                        </button>
                      );
                    })}
                  </div>
                </div>

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
                />

                <div>
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Mensagem (opcional)</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Me diga em 1–2 frases o que você busca (ex: emagrecimento, dor no joelho, ganho de massa...)"
                    className="mt-2 w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:shadow-xl focus:ring-2 focus:ring-emerald-400 h-28 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className={`w-full rounded-2xl py-4 font-extrabold transition-all ${
                    canSubmit
                      ? 'bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-200'
                      : 'bg-slate-200 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  {status === 'opening' ? 'Abrindo WhatsApp...' : status === 'sent' ? 'Enviado!' : 'Enviar agora'}
                </button>

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
