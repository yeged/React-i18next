import React, { createContext, useContext, useState } from 'react';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

interface LanguageObject {
  language: string;
  onChangeLanguage: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const LanguageContext = createContext<LanguageObject>({
  language: 'en',
  onChangeLanguage: () => {},
});

const LanguageProvider: React.FC<{}> = (props) => {
  const [selectedLang, setSelectedLang] = useState<string>(
    cookies.get('i18next') || 'en',
  );

  const changeLanguage = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setSelectedLang(e.target.value);
    i18next.changeLanguage(e.target.value);
  };

  const values: LanguageObject = {
    language: selectedLang,
    onChangeLanguage: changeLanguage,
  };

  return (
    <I18nextProvider i18n={i18n}>
      <LanguageContext.Provider value={values}>
        {props.children}
      </LanguageContext.Provider>
    </I18nextProvider>
  );
};

export const useLanguageContext = () => useContext(LanguageContext);
export default LanguageProvider;
