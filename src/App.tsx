import ReactMarkdown from 'react-markdown';
import { Trans, useTranslation } from 'react-i18next';
import { useLanguageContext } from './context/LanguageContext';
import SimpleMarkdown from './components/SimpleMarkdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import { useState } from 'react';
import Cookies from 'js-cookie';

function App() {
  const { t, i18n } = useTranslation(['translation', 'markdown']);

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

  const [selectedLang, setSelectedLang] = useState<string>(
    Cookies.get('i18next') || 'en',
  );

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
      <ReactMarkdown
        children={t('markdown:math')}
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[rehypeKatex]}
      />
      <SimpleMarkdown />
      <p>Hocam yeni bir mesajınız var feat add messages</p>
      <p>Bakalım Nolacak TESTT</p>
      <p>Bu feat 3 Test 3</p>
      <p>BURASI FIX 8</p>
    </div>
  );
}

export default App;
