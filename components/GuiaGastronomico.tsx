import React, { useRef, useState } from 'react';
import { ArrowRight, ChevronDown, MapPin, Phone, UtensilsCrossed } from 'lucide-react';
import { RESTAURANTES, Restaurante } from '../restaurantes';

const CATEGORIAS_ORDEM = ['Massas', 'Fondue', 'Alemã', 'Outros'];

const cleanPhone = (telefone: string) => telefone.replace(/\D/g, '');

const getMapUrl = (restaurante: Restaurante) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${restaurante.nome} ${restaurante.localizacao}`)}`;

const GuiaGastronomico: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const categorias = CATEGORIAS_ORDEM.map((categoria) => ({
    categoria,
    restaurantes: RESTAURANTES.filter((restaurante) => restaurante.categoria === categoria)
  })).filter((grupo) => grupo.restaurantes.length > 0);

  return (
    <div className="relative overflow-hidden rounded-xl border border-olive-200 bg-white shadow-sm transition-all duration-300 ease-in-out animate-slide-up opacity-0 fill-mode-forwards dark:border-stone-700 dark:bg-stone-800 hover:border-gold-400 dark:hover:border-gold-600">
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-amber-200/25 via-transparent to-emerald-200/25 opacity-80" />
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-amber-300/20 blur-2xl animate-pulse" />
      <div className="pointer-events-none absolute -left-8 -bottom-8 h-24 w-24 rounded-full bg-emerald-300/20 blur-2xl animate-pulse [animation-delay:800ms]" />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 w-full text-left p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-inset rounded-xl"
        aria-expanded={isOpen}
      >
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
          <div className="relative">
            <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-amber-300 ring-4 ring-amber-100 shadow-[0_0_0_6px_rgba(217,164,74,0.12)] dark:ring-amber-950/40" />
            <div className="p-2.5 rounded-full bg-olive-50 text-olive-700 shadow-inner dark:bg-stone-700 dark:text-gold-400">
              <UtensilsCrossed size={22} strokeWidth={1.5} />
            </div>
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <h3 className="font-serif text-base sm:text-lg font-semibold text-stone-800 dark:text-stone-100">
              Guia Gastronômico
            </h3>
            <div className="text-[11px] sm:text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wide">
              {RESTAURANTES.length} locais organizados por categoria
            </div>
            {!isOpen && (
              <div className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-gradient-to-r from-stone-800 via-stone-700 to-amber-900 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.18em] text-amber-50 shadow-md shadow-stone-900/10 ring-1 ring-white/10 transition-transform duration-300 group-hover:translate-x-0.5">
                <span className="h-0.5 w-6 rounded-full bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-80 animate-pulse" />
                Clique para abrir
                <ArrowRight size={12} className="text-amber-200" />
              </div>
            )}
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
        <div className="p-4 sm:p-5 pt-0">
          <div className="h-px w-full bg-olive-100 dark:bg-stone-700 mb-4 opacity-50" />

          <div className="space-y-5 sm:space-y-6">
            {categorias.map(({ categoria, restaurantes }) => (
              <div key={categoria} className="space-y-3">
                <div className="flex items-start sm:items-center justify-between gap-2 sm:gap-3">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-stone-900 dark:text-stone-100">{categoria}</h4>
                    <p className="text-[11px] sm:text-xs text-stone-500 dark:text-stone-400">{restaurantes.length} opção(ões)</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-stone-200 bg-stone-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500 dark:border-stone-600 dark:bg-stone-700 dark:text-stone-300">
                    Monte Verde
                  </span>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {restaurantes.map((restaurante) => {
                    const telefoneLimpo = cleanPhone(restaurante.telefone);
                    const mapUrl = getMapUrl(restaurante);

                    return (
                      <article
                        key={restaurante.nome}
                        className="group overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md dark:border-stone-700 dark:bg-stone-900/60"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500 shadow-sm dark:bg-stone-800 dark:text-stone-300">
                              <MapPin size={12} />
                              {restaurante.categoria}
                            </p>
                            <h5 className="mt-2 text-base font-bold leading-tight text-stone-900 dark:text-stone-100">
                              {restaurante.nome}
                            </h5>
                          </div>

                          <div className="rounded-xl bg-amber-100 p-2 text-amber-700 transition group-hover:scale-105 dark:bg-amber-900/30 dark:text-amber-300">
                            <UtensilsCrossed size={18} />
                          </div>
                        </div>

                        <p className="mt-3 text-sm leading-6 text-stone-600 dark:text-stone-300">
                          {restaurante.especialidade}
                        </p>

                        <div className="mt-3 rounded-xl bg-white p-3 dark:bg-stone-800">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400 dark:text-stone-500">
                            Localização
                          </p>
                          <p className="mt-1 text-sm font-medium text-stone-700 dark:text-stone-200">
                            {restaurante.localizacao}
                          </p>
                        </div>

                        <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                          {telefoneLimpo ? (
                            <a
                              href={`tel:${telefoneLimpo}`}
                              className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-stone-800"
                            >
                              <Phone size={16} />
                              Ligar
                            </a>
                          ) : null}

                          <a
                            href={mapUrl}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-amber-200 px-4 py-2.5 text-sm font-semibold transition ${
                              telefoneLimpo
                                ? 'bg-amber-50 text-amber-900 hover:bg-amber-100'
                                : 'bg-amber-500 text-white hover:bg-amber-600'
                            }`}
                          >
                            <MapPin size={16} />
                            Ver no Mapa
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuiaGastronomico;