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
  const [temperature, setTemperature] = useState<string | null>(null);
  const [weatherCondition, setWeatherCondition] = useState<string>('Carregando...');

  // Buscar temperatura em tempo real
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Usando Open-Meteo API (gratuita, sem chave necessária)
        // Coordenadas: Monte Verde, MG: -22.854601, -46.078602
        const response = await fetch(
          'https://api.open-meteo.com/v1/forecast?latitude=-22.854601&longitude=-46.078602&current=temperature_2m,weather_code&temperature_unit=celsius&timezone=America/Sao_Paulo'
        );
        const data = await response.json();
        
        if (data.current) {
          const temp = Math.round(data.current.temperature_2m);
          setTemperature(`${temp}°C`);
          
          // Descrição do tempo baseado no código
          const weatherCode = data.current.weather_code;
          const weatherDescriptions: { [key: number]: string } = {
            0: 'Céu Claro',
            1: 'Parcialmente Nublado',
            2: 'Nublado',
            3: 'Encoberto',
            45: 'Neblina',
            48: 'Neblina com Geada',
            51: 'Chuva Leve',
            53: 'Chuva Moderada',
            55: 'Chuva Forte',
            61: 'Chuva',
            63: 'Chuva Forte',
            65: 'Chuva Muito Forte',
            71: 'Neve Leve',
            73: 'Neve',
            75: 'Neve Forte',
            80: 'Chuva de Arrebols',
            81: 'Chuva Forte de Arrebols',
            82: 'Chuva Muito Forte de Arrebols',
            85: 'Neve de Arrebols',
            86: 'Neve Forte de Arrebols',
            95: 'Tempestade',
            96: 'Tempestade com Granizo',
            99: 'Tempestade com Granizo Forte'
          };
          
          setWeatherCondition(weatherDescriptions[weatherCode] || 'Clima Ameno');
        }
      } catch (error) {
        console.error('Erro ao buscar clima:', error);
        setTemperature('N/A');
        setWeatherCondition('Clima Ameno');
      }
    };

    fetchWeather();
    
    // Atualizar a cada 30 minutos
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

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
    }, 3000); // Troca a cada 3 segundos

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
          <div></div>
        </div>
      </div>

      {/* CONTEÚDO */}
      <div className="z-10 flex flex-col items-center max-w-lg w-full">
        <div className="mb-8 animate-fade-in">
           <img 
             src="/logo.png" 
             alt="Villa Barril Logo" 
             className="h-32 object-contain drop-shadow-lg"
           />
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

      <div className="absolute bottom-8 text-white/70 text-xs font-sans tracking-widest animate-fade-in z-10 text-center" style={{ animationDelay: '1000ms' }}>
        <p className="mb-2">MONTE VERDE, MG</p>
        <div className="text-white/60 text-[10px] space-x-3 flex justify-center flex-wrap justify-center gap-2">
          <span>Altitude: 1.500m</span>
          <span>•</span>
          <span>{temperature || 'Carregando...'}</span>
          <span>•</span>
          <span>{weatherCondition}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;