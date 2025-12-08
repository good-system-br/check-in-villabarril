import React, { useState, useEffect } from 'react';
import { ChevronDown, BedDouble } from 'lucide-react';
import { APP_INFO } from '../constants';

// ==================================================================================
// CONFIGURAÇÃO DAS FOTOS (CARROSSEL)
// ==================================================================================
// A pasta 'assets' já foi preparada para você.
// 1. Coloque suas fotos originais dentro da pasta 'assets'.
// 2. Substitua os links abaixo pelo caminho da foto. Ex: '/assets/minha-foto.jpg'
// ==================================================================================
const HERO_IMAGES = [
  "/assets/1.jpg",
  "/assets/2.jpg",
  "/assets/3.jpg",
  "/assets/4.jpg",
  "/assets/5.jpg",
  "/assets/6.jpg",
  "/assets/7.jpg",
  "/assets/8.jpg",
  "/assets/9.jpg",
  "/assets/10.jpg",
  "/assets/11.jpg",
  "/assets/12.jpg"
];

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Efeito para trocar as imagens automaticamente (Carrossel)
  useEffect(() => {
    // Preload images para evitar piscadas
    const preloadImages = HERO_IMAGES.map((src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    });

    Promise.all(preloadImages).then(() => setImagesLoaded(true));

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden text-center px-6 bg-stone-900">
      
      {/* BACKGROUND CAROUSEL */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="relative w-full h-full">
          {HERO_IMAGES.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Imagem ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              className={`
                absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out
                ${imagesLoaded && index === currentImageIndex ? 'opacity-100' : 'opacity-0'}
              `}
            />
          ))}
          {/* Overlay Escuro para leitura do texto */}
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-black/20 to-black/70 backdrop-blur-[2px]"></div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="z-10 flex flex-col items-center max-w-lg w-full">
        <div className="mb-8 p-6 bg-white/10 rounded-full border border-white/20 backdrop-blur-md animate-fade-in shadow-2xl">
           <BedDouble size={48} className="text-white drop-shadow-md" strokeWidth={1} />
        </div>
        
        <h1 className="font-serif text-4xl md:text-6xl text-white font-bold tracking-wider mb-4 animate-slide-up drop-shadow-lg" style={{ animationDelay: '200ms' }}>
          {APP_INFO.name}
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl font-light tracking-[0.2em] mb-12 animate-slide-up drop-shadow-md" style={{ animationDelay: '400ms' }}>
          {APP_INFO.subtitle}
        </p>

        <button
          onClick={onStart}
          className="
            group flex items-center gap-3 px-8 py-4 
            bg-gold-500/90 hover:bg-gold-500 text-white rounded-full 
            transition-all duration-300 shadow-lg shadow-black/30
            backdrop-blur-sm border border-white/20
            animate-slide-up hover:scale-105
          "
          style={{ animationDelay: '600ms' }}
        >
          <span className="font-medium tracking-wide">VER INFORMAÇÕES</span>
          <ChevronDown className="group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Indicadores do Carrossel */}
      <div className="absolute bottom-24 flex gap-2 z-10">
        {HERO_IMAGES.map((_, index) => (
          <div 
            key={index}
            className={`
              h-1 rounded-full transition-all duration-300 
              ${index === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'}
            `}
          />
        ))}
      </div>

      <div className="absolute bottom-8 text-white/60 text-xs font-sans tracking-widest animate-fade-in z-10" style={{ animationDelay: '1000ms' }}>
        MONTE VERDE, MG
      </div>
    </div>
  );
};

export default Hero;