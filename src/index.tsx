import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDedector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDedector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      en: {
        translation: {
          'Welcome to React': 'Welcome to React and react-i18next',
        },
      },
      tr: {
        translation: {
          'Welcome to React': 'Reacte Hoş geldin ve react-i18next',
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    detection: {
      order: [
        'htmlTag',
        'cookie',
        'localStorage',
        'path',
        'subdomain',
      ],
      caches: ['cookie'],
    },
  });
function App() {
  const { t } = useTranslation();
  return <h2>{t('Welcome to React')}</h2>;
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
