import './App.css';
import { Trans, useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const age = 23;

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('tr')}>TR</button>
      <button onClick={() => changeLanguage('de')}>DE</button>
      <h2>{t('title', { name: 'Yiğit' })}</h2>
      <p>{t('description.part1')}</p>
      <Trans i18nKey="description.part2">Hello world</Trans>
      <Trans i18nKey="age">
        You're
        <strong title={t('ageTitle')}>{{ age: age }}</strong>
        <i> years old </i>
      </Trans>
    </div>
  );
}

export default App;
