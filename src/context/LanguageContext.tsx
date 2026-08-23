import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, translations } from '../data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations['id'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'bri_kc_jelambar_lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('id');

  // Load persisted language on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem(STORAGE_KEY) as Language;
      if (savedLang && (savedLang === 'id' || savedLang === 'en' || savedLang === 'zh')) {
        setLanguageState(savedLang);
      }
    } catch (e) {
      console.warn('Unable to access localStorage for language preference:', e);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      console.warn('Unable to save language to localStorage:', e);
    }
  };

  const t = translations[language] || translations['id'];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
