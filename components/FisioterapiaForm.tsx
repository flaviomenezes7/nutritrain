import React from 'react';

const styles = `
.field-enter{animation: fadeInUp .32s ease both}
@keyframes fadeInUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
`;

type Props = {
  fisioInjury: string;
  setFisioInjury: (v: string) => void;
  fisioTime: string;
  setFisioTime: (v: string) => void;
  fisioHistory: string;
  setFisioHistory: (v: string) => void;
  fisioGoal: string;
  setFisioGoal: (v: string) => void;

  errors?: Record<string, string>;
  touched?: Record<string, boolean>;
  onTouch?: (key: string) => void;
};

const FisioterapiaForm: React.FC<Props> = ({
  fisioInjury,
  setFisioInjury,
  fisioTime,
  setFisioTime,
  fisioHistory,
  setFisioHistory,
  fisioGoal,
  setFisioGoal,
  errors,
  touched,
  onTouch,
}) => {
  return (
    <div className="field-enter space-y-5">
      <style>{styles}</style>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Lesão / Queixa principal</label>
        <input
          value={fisioInjury}
          onChange={(e) => setFisioInjury(e.target.value)}
          onBlur={() => onTouch?.('fisioInjury')}
          data-field="fisioInjury"
          className={`w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400 ${
            touched?.fisioInjury && errors?.fisioInjury ? 'border-red-300 focus:ring-red-300' : ''
          }`}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5 sm:gap-4">
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Tempo da lesão</label>
          <input
            value={fisioTime}
            onChange={(e) => setFisioTime(e.target.value)}
            onBlur={() => onTouch?.('fisioTime')}
            data-field="fisioTime"
            className={`w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400 ${
              touched?.fisioTime && errors?.fisioTime ? 'border-red-300 focus:ring-red-300' : ''
            }`}
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Histórico médico</label>
          <input
            value={fisioHistory}
            onChange={(e) => setFisioHistory(e.target.value)}
            onBlur={() => onTouch?.('fisioHistory')}
            data-field="fisioHistory"
            className={`w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400 ${
              touched?.fisioHistory && errors?.fisioHistory ? 'border-red-300 focus:ring-red-300' : ''
            }`}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-bold text-slate-600 uppercase tracking-wider">Objetivo da reabilitação</label>
        <input
          value={fisioGoal}
          onChange={(e) => setFisioGoal(e.target.value)}
          onBlur={() => onTouch?.('fisioGoal')}
          data-field="fisioGoal"
          className={`w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-slate-900 outline-none transition transform duration-200 ease-out focus:-translate-y-1 focus:scale-[1.01] focus:shadow-xl focus:ring-2 focus:ring-emerald-400 ${
            touched?.fisioGoal && errors?.fisioGoal ? 'border-red-300 focus:ring-red-300' : ''
          }`}
        />
      </div>
    </div>
  );
};

export default FisioterapiaForm;
