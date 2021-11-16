import ReactMarkdown from 'react-markdown';
import { Trans, useTranslation } from 'react-i18next';
import { useLanguageContext } from './context/LanguageContext';
import SimpleMarkdown from './components/SimpleMarkdown';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

function App() {
  const { t } = useTranslation(['translation', 'markdown']);

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

  const { language, onChangeLanguage } = useLanguageContext();

  return (
    <div>
      <select
        value={language}
        onChange={onChangeLanguage}
        onBlur={onChangeLanguage}
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
    </div>
  );
}

export default App;
