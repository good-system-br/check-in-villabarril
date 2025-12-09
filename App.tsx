import React, { useState, useEffect } from 'react';
import { SECTIONS, CONTACT_INFO, APP_INFO } from './constants';
import InfoCard from './components/InfoCard';
import FloatingCTA from './components/FloatingCTA';
import Hero from './components/Hero';
import { BedDouble, Moon, Sun, MapPin, Phone, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  const [showContent, setShowContent] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize dark mode based on system preference
  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const handleOpenNavigation = () => {
    const latitude = -22.854601;
    const longitude = -46.078602;
    const label = "Villa Barril";
    
    // Detecta se está em dispositivo móvel
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Tenta abrir Waze primeiro
      const wazeUrl = `waze://?ll=${latitude},${longitude}&navigate=yes`;
      const mapsUrl = `https://maps.apple.com/?ll=${latitude},${longitude}&q=${encodeURIComponent(label)}`;
      const googleMapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
      
      // Tenta abrir Waze
      const wazeLink = document.createElement('a');
      wazeLink.href = wazeUrl;
      wazeLink.style.display = 'none';
      document.body.appendChild(wazeLink);
      wazeLink.click();
      
      // Se Waze não abrir em 2 segundos, tenta Google Maps
      setTimeout(() => {
        window.location.href = googleMapsUrl;
      }, 2000);
    } else {
      // Em desktop, abre Google Maps
      window.open(`https://maps.google.com/?q=${latitude},${longitude}`, '_blank');
    }
  };

  if (!showContent) {
    return <Hero onStart={() => setShowContent(true)} />;
  }

  return (
    <div className="min-h-screen relative pb-24">
      {/* Sticky Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-olive-50/90 dark:bg-stone-900/90 border-b border-olive-100 dark:border-stone-800 shadow-sm transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* Left Side: Back Button + Logo */}
          <div className="flex items-center gap-1 sm:gap-2">
            <button 
              onClick={() => setShowContent(false)}
              className="p-2 rounded-full hover:bg-olive-100 dark:hover:bg-stone-800 text-stone-500 dark:text-stone-400 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400/50"
              aria-label="Voltar para o início"
            >
              <ArrowLeft size={22} />
            </button>
            
            <button 
              onClick={() => setShowContent(false)}
              className="flex items-center gap-2 group focus:outline-none ml-1"
            >
              <BedDouble className="text-gold-600 dark:text-gold-500 group-hover:scale-110 transition-transform duration-300" size={24} />
              <span className="font-serif font-bold text-stone-800 dark:text-stone-100 text-lg sm:text-xl tracking-wide group-hover:text-gold-600 dark:group-hover:text-gold-400 transition-colors">
                VILLA BARRIL
              </span>
            </button>
          </div>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-olive-100 dark:hover:bg-stone-800 text-stone-600 dark:text-gold-500 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400/50"
            aria-label="Alternar tema"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
        <div className="space-y-6 sm:space-y-8">
          
          {/* Logo */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <img 
              src="/logo.png" 
              alt="Villa Barril Logo" 
              className="h-24 object-contain drop-shadow-lg"
            />
          </div>
          
          {/* Intro Text */}
          <div className="text-center py-6 animate-fade-in">
            <h2 className="font-serif text-3xl text-stone-800 dark:text-stone-100 mb-2">Bem-vindo</h2>
            <p className="text-stone-600 dark:text-stone-400 font-sans max-w-lg mx-auto">
              Reunimos aqui todas as informações essenciais para tornar sua estadia conosco inesquecível.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SECTIONS.map((section, index) => (
              <InfoCard key={section.id} section={section} index={index} />
            ))}
          </div>

          {/* Location Section */}
          <div className="mt-12 bg-white dark:bg-stone-800 rounded-2xl shadow-sm border border-olive-200 dark:border-stone-700 overflow-hidden animate-slide-up" style={{ animationDelay: '800ms' }}>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="text-gold-500" size={24} />
                <h3 className="font-serif text-xl font-bold text-stone-800 dark:text-stone-100">Localização</h3>
              </div>
              <p className="text-stone-600 dark:text-stone-300 mb-6 font-medium">
                {CONTACT_INFO.address}
              </p>
              
              <div className="w-full h-64 bg-stone-200 rounded-xl overflow-hidden relative">
                 <iframe 
                   src={CONTACT_INFO.mapEmbedUrl}
                   width="100%" 
                   height="100%" 
                   style={{ border: 0 }} 
                   allowFullScreen 
                   loading="lazy" 
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Localização da Pousada"
                   className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
                 ></iframe>
              </div>
              
              <a 
                href="https://maps.google.com/?q=-22.854601,-46.078602"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg font-medium"
              >
                <MapPin size={20} />
                Abrir no Google Maps
              </a>
              
              <button 
                onClick={handleOpenNavigation}
                className="mt-3 w-full flex items-center justify-center gap-2 px-6 py-3 bg-stone-700 hover:bg-stone-800 dark:bg-stone-700 dark:hover:bg-stone-600 text-white rounded-xl transition-all duration-300 shadow-md hover:shadow-lg font-medium"
              >
                <MapPin size={20} />
                Ir para Villa Barril (Navegação)
              </button>
            </div>
            
            <div className="bg-olive-50 dark:bg-stone-900/50 p-6 border-t border-olive-100 dark:border-stone-700">
               <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white dark:bg-stone-800 rounded-full shadow-sm">
                      <Phone size={18} className="text-gold-600" />
                    </div>
                    <div>
                      <p className="text-xs text-stone-500 dark:text-stone-400 uppercase tracking-wider font-bold">Recepção</p>
                      <p className="text-stone-800 dark:text-stone-200 font-semibold">{CONTACT_INFO.phone}</p>
                    </div>
                  </div>
                  <div className="text-xs text-stone-400 dark:text-stone-500 font-mono">
                    MG | 37653-000
                  </div>
               </div>
            </div>
          </div>
          
          {/* Footer Logo */}
          <div className="text-center pt-12 pb-6 opacity-50">
             <BedDouble className="mx-auto text-stone-400 mb-2" size={32} strokeWidth={1} />
             <p className="text-xs tracking-[0.3em] text-stone-500 font-serif">VILLA BARRIL</p>
          </div>
        </div>
      </main>

      <FloatingCTA />
    </div>
  );
};

export default App;