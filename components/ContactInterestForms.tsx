import React from 'react';
import EducacaoFisicaForm from './EducacaoFisicaForm';
import FisioterapiaForm from './FisioterapiaForm';
import NutricaoForm from './NutricaoForm';

export type Interest =
  | 'Educação Física'
  | 'Fisioterapia'
  | 'Nutrição'
  | 'Prescrição de treino e dieta'
  | '';

export type InterestFormValues = {
  efAge: string;
  efHeight: string;
  efWeight: string;
  efGoal: string;

  fisioInjury: string;
  fisioTime: string;
  fisioHistory: string;
  fisioGoal: string;

  nutAge: string;
  nutHeight: string;
  nutWeight: string;
  nutHabits: string;
  nutRestrictions: string;
  nutAllergy: string;
  nutGoal: string;
};

export function composeInterestDetails(interest: Interest, values: InterestFormValues) {
  const lines: string[] = [];

  const formatOrNA = (value: string) => {
    const v = (value || '').trim();
    return v ? v : 'Não informado';
  };

  const withUnit = (value: string, unit: string) => {
    const v = (value || '').trim();
    return v ? `${v} ${unit}` : 'Não informado';
  };

  const section = (title: string) => {
    if (lines.length > 0 && lines[lines.length - 1] !== '') lines.push('');
    lines.push(title);
  };

  const bullet = (label: string, value: string) => {
    lines.push(`- ${label}: ${value}`);
  };

  const bulletValue = (value: string) => {
    lines.push(`- ${value}`);
  };

  if (!interest) return lines;

  if (interest === 'Educação Física') {
    section('Dados iniciais');
    bullet('Idade', withUnit(values.efAge, 'anos'));
    bullet('Altura', withUnit(values.efHeight, 'm'));
    bullet('Peso', withUnit(values.efWeight, 'kg'));

    section('Objetivo de treino');
    bulletValue(formatOrNA(values.efGoal));
  }

  if (interest === 'Fisioterapia') {
    section('Lesao / Queixa principal');
    bulletValue(formatOrNA(values.fisioInjury));

    section('Tempo da lesao');
    bulletValue(formatOrNA(values.fisioTime));

    section('Historico medico');
    bulletValue(formatOrNA(values.fisioHistory));

    section('Objetivo da reabilitacao');
    bulletValue(formatOrNA(values.fisioGoal));
  }

  if (interest === 'Nutrição') {
    section('Dados iniciais');
    bullet('Idade', withUnit(values.nutAge, 'anos'));
    bullet('Altura', withUnit(values.nutHeight, 'm'));
    bullet('Peso', withUnit(values.nutWeight, 'kg'));

    section('Habitos alimentares');
    bullet('Rotina atual', formatOrNA(values.nutHabits));

    section('Restricoes alimentares');
    bulletValue(formatOrNA(values.nutRestrictions));

    section('Intolerancia alimentar / Alergia alimentar');
    bulletValue(formatOrNA(values.nutAllergy));

    section('Objetivo nutricional');
    bulletValue(formatOrNA(values.nutGoal));
  }

  if (interest === 'Prescrição de treino e dieta') {
    section('Dados iniciais');
    bullet('Idade', withUnit(values.efAge || values.nutAge, 'anos'));
    bullet('Altura', withUnit(values.efHeight || values.nutHeight, 'm'));
    bullet('Peso', withUnit(values.efWeight || values.nutWeight, 'kg'));

    section('Objetivo de treino');
    bulletValue(formatOrNA(values.efGoal));

    section('Habitos alimentares');
    bullet('Rotina atual', formatOrNA(values.nutHabits));

    section('Restricoes alimentares');
    bulletValue(formatOrNA(values.nutRestrictions));

    section('Intolerancia alimentar / Alergia alimentar');
    bulletValue(formatOrNA(values.nutAllergy));

    section('Objetivo nutricional');
    bulletValue(formatOrNA(values.nutGoal));
  }

  return lines;
}

type Props = {
  interest: Interest;
  setInterest: (v: Interest) => void;

  efAge: string;
  setEfAge: (v: string) => void;
  efHeight: string;
  setEfHeight: (v: string) => void;
  efWeight: string;
  setEfWeight: (v: string) => void;
  efGoal: string;
  setEfGoal: (v: string) => void;

  fisioInjury: string;
  setFisioInjury: (v: string) => void;
  fisioTime: string;
  setFisioTime: (v: string) => void;
  fisioHistory: string;
  setFisioHistory: (v: string) => void;
  fisioGoal: string;
  setFisioGoal: (v: string) => void;

  nutAge: string;
  setNutAge: (v: string) => void;
  nutHeight: string;
  setNutHeight: (v: string) => void;
  nutWeight: string;
  setNutWeight: (v: string) => void;
  nutHabits: string;
  setNutHabits: (v: string) => void;
  nutRestrictions: string;
  setNutRestrictions: (v: string) => void;
  nutAllergy: string;
  setNutAllergy: (v: string) => void;
  nutGoal: string;
  setNutGoal: (v: string) => void;
};

const ContactInterestForms: React.FC<Props> = ({
  interest,
  setInterest,
  efAge,
  setEfAge,
  efHeight,
  setEfHeight,
  efWeight,
  setEfWeight,
  efGoal,
  setEfGoal,
  fisioInjury,
  setFisioInjury,
  fisioTime,
  setFisioTime,
  fisioHistory,
  setFisioHistory,
  fisioGoal,
  setFisioGoal,
  nutAge,
  setNutAge,
  nutHeight,
  setNutHeight,
  nutWeight,
  setNutWeight,
  nutHabits,
  setNutHabits,
  nutRestrictions,
  setNutRestrictions,
  nutAllergy,
  setNutAllergy,
  nutGoal,
  setNutGoal,
}) => {
  if (!interest) return null;

  const sharedAge = efAge || nutAge;
  const sharedHeight = efHeight || nutHeight;
  const sharedWeight = efWeight || nutWeight;

  const setSharedAge = (v: string) => {
    setEfAge(v);
    setNutAge(v);
  };

  const setSharedHeight = (v: string) => {
    setEfHeight(v);
    setNutHeight(v);
  };

  const setSharedWeight = (v: string) => {
    setEfWeight(v);
    setNutWeight(v);
  };

  return (
    <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-extrabold uppercase tracking-widest text-slate-500">Formulário rápido</div>
          <div className="mt-1 text-lg font-extrabold text-slate-900">{interest}</div>
          <p className="mt-1 text-sm text-slate-600">
            Preencha só o que fizer sentido — isso já vai junto na mensagem.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setInterest('')}
          className="shrink-0 rounded-2xl bg-white border border-slate-200 px-4 py-2 text-sm font-bold text-slate-700 hover:border-slate-300 transition"
        >
          Fechar
        </button>
      </div>

      <div className="mt-6">
        {interest === 'Educação Física' && (
          <EducacaoFisicaForm
            efAge={efAge}
            setEfAge={setEfAge}
            efHeight={efHeight}
            setEfHeight={setEfHeight}
            efWeight={efWeight}
            setEfWeight={setEfWeight}
            efGoal={efGoal}
            setEfGoal={setEfGoal}
          />
        )}

        {interest === 'Fisioterapia' && (
          <FisioterapiaForm
            fisioInjury={fisioInjury}
            setFisioInjury={setFisioInjury}
            fisioTime={fisioTime}
            setFisioTime={setFisioTime}
            fisioHistory={fisioHistory}
            setFisioHistory={setFisioHistory}
            fisioGoal={fisioGoal}
            setFisioGoal={setFisioGoal}
          />
        )}

        {interest === 'Nutrição' && (
          <NutricaoForm
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
        )}

        {interest === 'Prescrição de treino e dieta' && (
          <div className="space-y-8">
            <div>
              <div className="text-sm font-extrabold uppercase tracking-widest text-slate-500">Dados base</div>
              <div className="mt-4 grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Idade</label>
                  <input
                    value={sharedAge}
                    onChange={(e) => setSharedAge(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Altura (m)</label>
                  <input
                    value={sharedHeight}
                    onChange={(e) => setSharedHeight(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Peso (kg)</label>
                  <input
                    value={sharedWeight}
                    onChange={(e) => setSharedWeight(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mt-4 grid gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Objetivo de treino</label>
                  <input
                    value={efGoal}
                    onChange={(e) => setEfGoal(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="mt-4 grid gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">
                    Hábitos alimentares <span className="font-semibold text-slate-500">(o que não pode faltar na sua dieta)</span>
                  </label>
                  <input
                    value={nutHabits}
                    onChange={(e) => setNutHabits(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Restrições alimentares</label>
                  <input
                    value={nutRestrictions}
                    onChange={(e) => setNutRestrictions(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Intolerância alimentar / Alergia alimentar</label>
                  <input
                    value={nutAllergy}
                    onChange={(e) => setNutAllergy(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Objetivo nutricional</label>
                  <input
                    value={nutGoal}
                    onChange={(e) => setNutGoal(e.target.value)}
                    className="w-full bg-white border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactInterestForms;
