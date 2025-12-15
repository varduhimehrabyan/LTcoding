'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { useState, useRef, useEffect } from 'react';
// Import flag components
import US from 'country-flag-icons/react/3x2/US';
import AM from 'country-flag-icons/react/3x2/AM';

const languages = {
  en: {
    name: 'English',
    flag: <US className="w-5 h-3" />
  },
  am: {
    name: 'Հայերեն',
    flag: <AM className="w-5 h-3" />
  }
};

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const switchLanguage = (newLocale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLanguage = languages[locale];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded-lg transition-colors duration-200 border border-gray-600 cursor-pointer"
      >
        <span className="flex items-center">{currentLanguage.flag}</span>
        <span className="text-sm font-medium text-white">{locale.toUpperCase()}</span>
        <svg
          className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-1 left-0 md:right-0 md:left-auto bg-gray-800 border border-gray-600 rounded-lg shadow-lg min-w-[140px] z-50">
          {Object.entries(languages).map(([langCode, lang]) => (
            <button
              key={langCode}
              onClick={() => switchLanguage(langCode)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-700 transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg cursor-pointer ${locale === langCode ? 'bg-gray-700' : ''
                }`}
            >
              <span className="flex items-center">{lang.flag}</span>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">{lang.name}</span>
                <span className="text-xs text-gray-400">{langCode.toUpperCase()}</span>
              </div>
              {locale === langCode && (
                <svg className="w-4 h-4 text-green-400 ml-auto" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}