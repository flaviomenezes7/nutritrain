import React from 'react';

const styles = `
.field-enter{animation: fadeInUp .32s ease both}
@keyframes fadeInUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
`;

type Props = {
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

const NutricaoForm: React.FC<Props> = ({
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
  return (
    <div className="field-enter grid md:grid-cols-3 gap-4">
      <style>{styles}</style>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Idade</label>
        <input
          type="text"
          inputMode="numeric"
          pattern="\d*"
          value={nutAge}
          onChange={(e) => {
            const digits = e.target.value.replace(/\D/g, '').slice(0, 3);
            setNutAge(digits);
          }}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Altura (m)</label>
        <input
          type="text"
          inputMode="decimal"
          value={nutHeight}
          onChange={(e) => {
            let raw = e.target.value.replace(/,/g, '.').replace(/[^0-9.]/g, '');
            const digitsOnly = raw.replace(/\D/g, '').slice(0, 3);
            if (!digitsOnly) {
              setNutHeight('');
              return;
            }
            if (digitsOnly.length >= 3) {
              const intPart = digitsOnly.slice(0, digitsOnly.length - 2);
              const decPart = digitsOnly.slice(-2);
              raw = intPart + '.' + decPart;
            } else {
              raw = digitsOnly;
            }
            setNutHeight(raw);
          }}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Peso (kg)</label>
        <input
          type="text"
          inputMode="decimal"
          value={nutWeight}
          onChange={(e) => {
            let raw = e.target.value.replace(/,/g, '.');
            raw = raw.replace(/[^0-9.]/g, '');
            const parts = raw.split('.');
            const integer = (parts.shift() || '').replace(/\D/g, '').slice(0, 3);
            const decimal = parts.join('').replace(/\D/g, '').slice(0, 2);
            const v = decimal ? integer + '.' + decimal : integer;
            setNutWeight(v);
          }}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
        />
      </div>
      <div className="space-y-2 md:col-span-3">
        <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">
          Hábitos alimentares <span className="font-semibold text-slate-500">(o que não pode faltar na sua dieta)</span>
        </label>
        <input
          value={nutHabits}
          onChange={(e) => setNutHabits(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
        />
      </div>
      <div className="space-y-2 md:col-span-3">
        <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Alimentos que você evita / não consome</label>
        <input
          value={nutRestrictions}
          onChange={(e) => setNutRestrictions(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
        />
      </div>
      <div className="space-y-2 md:col-span-3">
        <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Intolerância alimentar / Alergia alimentar</label>
        <input
          value={nutAllergy}
          onChange={(e) => setNutAllergy(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
        />
      </div>
      <div className="space-y-2 md:col-span-3">
        <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Objetivo nutricional</label>
        <input
          value={nutGoal}
          onChange={(e) => setNutGoal(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
        />
      </div>
    </div>
  );
};

export default NutricaoForm;
