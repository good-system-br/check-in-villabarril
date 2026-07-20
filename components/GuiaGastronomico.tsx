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
    <div className="group relative overflow-hidden rounded-xl border border-olive-200 bg-white shadow-sm transition-all duration-300 ease-in-out animate-slide-up opacity-0 fill-mode-forwards dark:border-stone-700 dark:bg-stone-800 hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-xl dark:hover:border-gold-600">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gold-500" />
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-gold-100/35 via-transparent to-gold-100/25 opacity-80" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gold-300/20 blur-3xl animate-pulse" />
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-10 w-full text-left p-4 sm:p-5 flex items-start sm:items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-inset rounded-xl"
        aria-expanded={isOpen}
      >
        <div className="flex items-start sm:items-center gap-3 sm:gap-4 min-w-0">
          <div className="relative">
            <div className="p-2.5 rounded-full bg-gold-100 text-gold-700 shadow-md shadow-gold-500/15 dark:bg-stone-700 dark:text-gold-400">
              <UtensilsCrossed size={22} strokeWidth={1.5} />
            </div>
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <div className="inline-flex w-fit items-center rounded-full border border-gold-200 bg-white/90 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.22em] text-gold-700 shadow-sm dark:border-gold-900/50 dark:bg-stone-800/90 dark:text-gold-300">
              Destaque gastronômico
            </div>
            <h3 className="font-serif text-lg sm:text-xl font-semibold text-stone-800 dark:text-stone-100">
              Guia Gastronômico
            </h3>
            <div className="text-[11px] sm:text-xs font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wide">
              {RESTAURANTES.length} locais organizados por categoria
            </div>
            {!isOpen && (
              <div className="mt-1 inline-flex w-fit items-center gap-2 rounded-full border border-stone-200 bg-gradient-to-r from-stone-900 via-stone-700 to-gold-900 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-gold-50 shadow-lg shadow-stone-900/10 ring-1 ring-white/10 transition duration-300 group-hover:translate-x-1 group-hover:shadow-xl">
                <span className="h-2 w-2 rounded-full bg-gold-300 shadow-[0_0_12px_rgba(208,166,68,0.5)]" />
                Toque para explorar
                <ArrowRight size={12} className="text-gold-200" />
              </div>
            )}
          </div>
        </div>

        <ChevronDown
          className={`transition-transform duration-300 text-stone-400 dark:text-stone-500 ${isOpen ? 'rotate-180 text-gold-500 dark:text-gold-400' : 'animate-bounce group-hover:text-gold-500 dark:group-hover:text-gold-400'}`}
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
                        className="group overflow-hidden rounded-2xl border border-stone-200 bg-stone-50 p-4 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:shadow-md dark:border-stone-700 dark:bg-stone-900/60"
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

                          <div className="rounded-xl bg-gold-100 p-2 text-gold-700 transition group-hover:scale-105 dark:bg-gold-900/30 dark:text-gold-300">
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
                            className={`inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gold-200 px-4 py-2.5 text-sm font-semibold transition ${
                              telefoneLimpo
                                ? 'bg-gold-50 text-gold-900 hover:bg-gold-100'
                                : 'bg-gold-500 text-white hover:bg-gold-600'
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