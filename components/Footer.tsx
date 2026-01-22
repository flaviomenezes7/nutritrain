
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">NT</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">NutriTrain</span>
            </div>
            <p className="text-slate-500 max-w-sm mb-6 leading-relaxed">
              Transformando a saúde através da ciência e do acompanhamento humanizado. Onde seu treino encontra sua nutrição e seu corpo encontra o equilíbrio.
            </p>
            <div className="flex space-x-4">
              {['instagram', 'twitter', 'linkedin'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-emerald-500 hover:border-emerald-500 transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask-icon" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Início</a></li>
              <li><a href="#services" className="hover:text-emerald-500 transition-colors">Serviços</a></li>
              <li><a href="#" className="hover:text-emerald-500 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Contato</h4>
            <ul className="space-y-4 text-slate-500 text-sm">
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>(27) 99611-5905</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span>Espirito Santo - Vitória </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-slate-200 text-center">
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
