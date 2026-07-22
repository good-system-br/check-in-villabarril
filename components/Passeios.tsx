import React, { useRef, useState } from 'react';
import { ChevronDown, Compass, Phone, MapPin } from 'lucide-react';
import { PASSEIOS, PasseioContato } from '../passeios';

const CATEGORIAS_ORDEM = ['Quadriciclo', 'Jipe', 'Cavalgada', 'Trilha e Arvorismo', 'Moto', 'Astronomia', 'Fazenda e Tour Guiado', 'Fazenda', 'Falcoaria', 'Ice Bar', 'Patinação no Gelo'];

const cleanPhone = (telefone: string) => telefone.replace(/\D/g, '');

const Passeios: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const categorias = CATEGORIAS_ORDEM.map((categoria) => ({
    categoria,
    passeios: PASSEIOS.filter((passeio) => passeio.categoria === categoria)
  })).filter((grupo) => grupo.passeios.length > 0);

  const openPhone = (telefone: string) => `tel:${cleanPhone(telefone)}`;

  return (
    <div className="group relative overflow-hidden rounded-xl border border-olive-200 bg-white shadow-sm transition-all duration-300 ease-in-out animate-slide-up opacity-0 fill-mode-forwards dark:border-stone-700 dark:bg-stone-800 hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-xl dark:hover:border-gold-600">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gold-500 z-10" />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-full h-36 sm:h-44 text-left focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-inset rounded-t-xl overflow-hidden"
        aria-expanded={isOpen}
      >
        <img
          src="/assets/aventura.jpg"
          alt="Experiências em Monte Verde"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        <div className="relative z-10 h-full p-4 sm:p-5 flex items-end justify-between gap-4">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="p-2.5 rounded-full bg-gold-500/90 text-white shadow-md shrink-0">
              <Compass size={22} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-white drop-shadow-md">
                Experiências em Monte Verde
              </h3>
              <div className="text-[11px] sm:text-xs font-bold text-white/85 uppercase tracking-wide drop-shadow">
                {PASSEIOS.length} experiência(s) organizadas por categoria
              </div>
            </div>
          </div>

          <ChevronDown
            className={`transition-transform duration-300 text-white shrink-0 ${isOpen ? 'rotate-180' : 'animate-bounce'}`}
            size={20}
          />
        </div>
      </button>

      <div
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0.6,
        }}
      >
        <div className="p-4 sm:p-5 pt-0">
          <div className="h-px w-full bg-olive-100 dark:bg-stone-700 mb-4 opacity-50" />

          <div className="space-y-5 sm:space-y-6">
            {categorias.map(({ categoria, passeios }) => (
              <div key={categoria} className="space-y-3">
                <div className="flex items-start sm:items-center justify-between gap-2 sm:gap-3">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">{categoria}</h4>
                    <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400">{passeios.length} opção(ões)</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:border-stone-600 dark:bg-stone-700 dark:text-stone-300">
                    Monte Verde
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {passeios.map((passeio) => (
                    <article
                      key={passeio.nome}
                      className="group overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-md dark:border-stone-700 dark:bg-stone-900/60"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500 shadow-sm dark:bg-stone-800 dark:text-stone-300">
                            <MapPin size={12} />
                            {passeio.categoria}
                          </p>
                          <h5 className="mt-2 text-base font-bold leading-tight text-stone-900 dark:text-stone-100">
                            {passeio.nome}
                          </h5>
                        </div>

                        <div className="rounded-xl bg-gold-100 p-2 text-gold-700 transition group-hover:scale-105 dark:bg-gold-900/30 dark:text-gold-300">
                          <Compass size={18} />
                        </div>
                      </div>

                      <p className="mt-3 whitespace-pre-line text-sm leading-6 text-stone-600 dark:text-stone-300">
                        {passeio.descricao}
                      </p>

                      {passeio.localizacao && (
                        <div className="mt-3 rounded-xl bg-white p-3 dark:bg-stone-800">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">
                            Localização
                          </p>
                          <p className="mt-1 text-sm font-medium text-stone-700 dark:text-stone-200">
                            {passeio.localizacao}
                          </p>
                        </div>
                      )}

                      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                        <a
                          href={openPhone(passeio.telefone)}
                          className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-800"
                        >
                          <Phone size={16} />
                          Ligar
                        </a>

                        <div className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gold-200 bg-gold-50 px-4 py-2.5 text-sm font-semibold text-gold-900 dark:border-gold-900/60 dark:bg-gold-900/20 dark:text-gold-100">
                          <MapPin size={16} />
                          {passeio.telefone}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Passeios;
