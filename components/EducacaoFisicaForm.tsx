import React from 'react';

const styles = `
.field-enter{animation: fadeInUp .32s ease both}
@keyframes fadeInUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
`;

type Props = {
  efAge: string;
  setEfAge: (v: string) => void;
  efHeight: string;
  setEfHeight: (v: string) => void;
  efWeight: string;
  setEfWeight: (v: string) => void;
  efGoal: string;
  setEfGoal: (v: string) => void;
};

const EducacaoFisicaForm: React.FC<Props> = ({
  efAge,
  setEfAge,
  efHeight,
  setEfHeight,
  efWeight,
  setEfWeight,
  efGoal,
  setEfGoal,
}) => {
  const onlyDigits3 = (value: string) => value.replace(/\D/g, '').slice(0, 3);

  const formatHeight = (value: string) => {
    const digits = onlyDigits3(value);
    if (digits.length <= 1) return digits;
    if (digits.length === 2) return `${digits[0]}.${digits[1]}`;
    return `${digits[0]}.${digits[1]}${digits[2]}`;
  };

  return (
    <div className="field-enter grid md:grid-cols-3 gap-4">
      <style>{styles}</style>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Idade</label>
        <input
          value={efAge}
          onChange={(e) => setEfAge(onlyDigits3(e.target.value))}
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={3}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Altura (m)</label>
        <input
          value={efHeight}
          onChange={(e) => setEfHeight(formatHeight(e.target.value))}
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={4}
          placeholder=""
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Peso (kg)</label>
        <input
          value={efWeight}
          onChange={(e) => setEfWeight(onlyDigits3(e.target.value))}
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={3}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
        />
      </div>
      <div className="space-y-2 md:col-span-3">
        <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Objetivo de treino</label>
        <input
          value={efGoal}
          onChange={(e) => setEfGoal(e.target.value)}
          className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400"
        />
      </div>
    </div>
  );
};

export default EducacaoFisicaForm;
