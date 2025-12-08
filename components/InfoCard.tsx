import React, { useState, useRef, useEffect } from 'react';
import { InfoSection } from '../types';
import { ChevronDown, Copy, Check } from 'lucide-react';

interface InfoCardProps {
  section: InfoSection;
  index: number;
}

const InfoCard: React.FC<InfoCardProps> = ({ section, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Staggered animation delay based on index
  const animationDelay = `${index * 100}ms`;

  const toggle = () => setIsOpen(!isOpen);

  const handleCopy = async () => {
    if (section.copyableText) {
      await navigator.clipboard.writeText(section.copyableText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div 
      className={`
        relative overflow-hidden rounded-xl border transition-all duration-300 ease-in-out
        animate-slide-up opacity-0 fill-mode-forwards
        ${section.highlight 
          ? 'border-red-400 bg-red-50/50 dark:bg-red-900/10 dark:border-red-800' 
          : 'border-olive-200 bg-white dark:bg-stone-800 dark:border-stone-700 hover:border-gold-400 dark:hover:border-gold-600'}
        shadow-sm hover:shadow-md
      `}
      style={{ animationDelay }}
    >
      <button
        onClick={toggle}
        className="w-full text-left p-5 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-gold-400 focus:ring-inset rounded-xl"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div className={`
            p-2.5 rounded-full 
            ${section.highlight 
              ? 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400' 
              : 'bg-olive-50 text-olive-700 dark:bg-stone-700 dark:text-gold-400'}
          `}>
            <section.icon size={22} strokeWidth={1.5} />
          </div>
          <h3 className={`font-serif text-lg font-semibold ${section.highlight ? 'text-red-700 dark:text-red-400' : 'text-stone-800 dark:text-stone-100'}`}>
            {section.title}
          </h3>
        </div>
        
        <ChevronDown 
          className={`
            transition-transform duration-300 text-stone-400 dark:text-stone-500
            ${isOpen ? 'rotate-180 text-gold-500 dark:text-gold-400' : ''}
          `}
          size={20}
        />
      </button>

      <div 
        ref={contentRef}
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{ 
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px',
          opacity: isOpen ? 1 : 0.6
        }}
      >
        <div className="p-5 pt-0">
          <div className="h-px w-full bg-olive-100 dark:bg-stone-700 mb-4 opacity-50" />
          <p className="text-stone-600 dark:text-stone-300 whitespace-pre-line leading-relaxed text-sm md:text-base font-medium">
            {section.content}
          </p>
          {section.externalLink && (
            <a
              href={section.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm"
            >
              <section.icon size={18} />
              {section.buttonText || 'Acessar'}
            </a>
          )}
          {section.copyableText && (
            <button
              onClick={handleCopy}
              className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-600 text-white rounded-lg transition-all duration-300 shadow-md hover:shadow-lg font-medium text-sm disabled:opacity-50"
            >
              {copied ? (
                <>
                  <Check size={18} />
                  Copiado!
                </>
              ) : (
                <>
                  <Copy size={18} />
                  {section.copyLabel || 'Copiar'}
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;