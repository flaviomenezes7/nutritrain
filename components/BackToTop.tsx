import React, { useEffect, useMemo, useState } from 'react';

type Props = {
  showAfter?: number;
};

const BackToTop: React.FC<Props> = ({ showAfter = 700 }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > showAfter);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [showAfter]);

  const className = useMemo(() => {
    const base =
      'fixed bottom-6 right-6 z-50 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-extrabold text-slate-900 shadow-xl shadow-slate-200 transition-all';
    const hidden = 'pointer-events-none opacity-0 translate-y-3';
    const shown = 'opacity-100 translate-y-0 hover:-translate-y-0.5';
    return `${base} ${visible ? shown : hidden}`;
  }, [visible]);

  return (
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={className}
    >
      <span className="inline-flex items-center gap-2">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5l-7 7m7-7l7 7M12 5v14" />
        </svg>
        Topo
      </span>
    </button>
  );
};

export default BackToTop;
