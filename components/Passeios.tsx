import React, { useRef, useState } from 'react';
import { ChevronDown, Phone, MapPin } from 'lucide-react';
import { PASSEIOS, PasseioContato } from '../passeios';

const cleanPhone = (telefone: string) => telefone.replace(/\D/g, '');

const Passeios: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const openPhone = (telefone: string) => `tel:${cleanPhone(telefone)}`;

  return (
    <div className="relative overflow-hidden rounded-xl border border-olive-200 bg-white shadow-sm transition-all duration-300 ease-in-out animate-slide-up opacity-0 fill-mode-forwards dark:border-stone-700 dark:bg-stone-800 hover:border-gold-400 dark:hover:border-gold-600">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-4 sm:p-5 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-inset rounded-xl"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className="p-2.5 rounded-full bg-olive-50 text-olive-700 dark:bg-stone-700 dark:text-gold-400">
            <MapPin size={22} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <h3 className="font-serif text-lg font-semibold text-stone-800 dark:text-stone-100">
              Passeios em Monte Verde
            </h3>
            <div className="text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wide">
              Quadriciclos e jeeps
            </div>
          </div>
        </div>

        <ChevronDown
          className={`transition-transform duration-300 text-stone-400 dark:text-stone-500 ${isOpen ? 'rotate-180 text-gold-500 dark:text-gold-400' : 'animate-bounce'}`}
          size={20}
        />
      </button>

      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0.6,
        }}
      >
        <div className="p-5 pt-0">
          <div className="h-px w-full bg-olive-100 dark:bg-stone-700 mb-4 opacity-50" />

          <div className="space-y-3">
            {PASSEIOS.map((passeio) => {
              const telefoneLimpo = cleanPhone(passeio.telefone);

              return (
                <article
                  key={passeio.nome}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md dark:border-stone-700 dark:bg-stone-900/60"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500 shadow-sm dark:bg-stone-800 dark:text-stone-300">
                        <MapPin size={12} />
                        Passeio
                      </p>
                      <h4 className="mt-2 text-base font-bold leading-tight text-stone-900 dark:text-stone-100">
                        {passeio.nome}
                      </h4>
                    </div>

                    <div className="rounded-xl bg-amber-100 p-2 text-amber-700 transition group-hover:scale-105 dark:bg-amber-900/30 dark:text-amber-300">
                      <Phone size={18} />
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">
                    {passeio.descricao}
                  </p>

                  <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                    <a
                      href={openPhone(passeio.telefone)}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-800"
                    >
                      <Phone size={16} />
                      Ligar
                    </a>

                    <div className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-sky-200 bg-sky-50 px-4 py-2.5 text-sm font-semibold text-sky-900 dark:border-sky-900/60 dark:bg-sky-900/20 dark:text-sky-100">
                      <MapPin size={16} />
                      {passeio.telefone}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passeios;