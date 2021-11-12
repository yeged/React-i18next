import './App.css';
import { Trans, useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import cookies from 'js-cookie';

function App() {
  const { t, i18n } = useTranslation();

  const [selectedLang, setSelectedLang] = useState<string>(
    cookies.get('i18next') || 'en',
  );

  const languages = [
    {
      code: 'en',
      name: 'English',
      country_code: 'gb',
    },
    {
      code: 'tr',
      name: 'Türkçe',
      country_code: 'tr',
    },
    {
      code: 'de',
      name: 'Deutsch',
      country_code: 'de',
    },
  ];
  const age: number = 23;
  const messages: string[] = ['sa', 'as'];

  const changeLanguage = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setSelectedLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div>
      <select
        value={selectedLang}
        onChange={changeLanguage}
        onBlur={changeLanguage}
      >
        {languages.map(({ code, name, country_code }) => {
          return (
            <option key={country_code} value={code}>
              {name}
            </option>
          );
        })}
      </select>

      <h2>{t('title', { name: 'Yiğit' })}</h2>
      <p>{t('description.part1')}</p>
      <Trans i18nKey="description.part2" />
      <br />
      <Trans i18nKey="age">
        You're
        <strong title={t('ageTitle')}>{{ age: age }}</strong>
        <i> years old </i>
      </Trans>
      <br />
      <Trans i18nKey="messages" count={messages.length}>
        You got {{ count: messages.length }} messages.
      </Trans>
    </div>
  );
}

export default App;
