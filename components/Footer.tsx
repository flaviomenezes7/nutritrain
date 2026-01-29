
import React from 'react';
import logoNutriTrain from '../assets/nutritrain_logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-16 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-3 mb-12">
          <div>
            <div className="flex items-center space-x-4 mb-4 translate-y-2">
              <img
                src={logoNutriTrain}
                alt="Logo NutriTrain"
                className="h-16 w-16 object-contain scale-[3.6] origin-left"
              />
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Transformando a saúde através da ciência e do acompanhamento humanizado.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Links Rápidos</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li><a href="#quem-sou-eu" className="hover:text-emerald-500 transition-colors">Quem sou eu</a></li>
              <li><a href="#nutricionista" className="hover:text-emerald-500 transition-colors">Nutricionista</a></li>
              <li><a href="#contato" className="hover:text-emerald-500 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Contato</h4>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a className="hover:text-emerald-600 transition-colors" href="https://wa.me/5527996649908" target="_blank" rel="noreferrer">
                  (27) 99664-9908
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Espírito Santo - Vitória</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-200 text-center">
          <p className="text-slate-400 text-xs">
            © {new Date().getFullYear()} NutriTrain Saúde Integrada. Todos os direitos reservados.
          </p>
          <p className="mt-3 text-slate-400 text-[11px]">
            Ícones: <a className="underline hover:text-emerald-600" href="https://www.flaticon.com/br/icones-gratis/maca" title="maçã ícones" target="_blank" rel="noreferrer">Maçã</a> (Freepik/Flaticon),{' '}
            <a className="underline hover:text-emerald-600" href="https://www.flaticon.com/br/icones-gratis/atleta" title="atleta ícones" target="_blank" rel="noreferrer">Atleta</a> (Freepik/Flaticon),{' '}
            <a className="underline hover:text-emerald-600" href="https://www.flaticon.com/br/icones-gratis/recuperacao" title="recuperação ícones" target="_blank" rel="noreferrer">Recuperação</a> (Uniconlabs/Flaticon).
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
