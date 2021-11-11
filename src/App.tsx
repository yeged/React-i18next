import './App.css';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function App() {
  const { t } = useTranslation();

  const changeLanguage = (lang: string): void => {
    i18next.changeLanguage(lang);
  };
  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('tr')}>TR</button>
      <button onClick={() => changeLanguage('de')}>DE</button>
      <h2>{t('title', { name: 'Yiğit' })}</h2>
      <p>{t('description.part1')}</p>
    </div>
  );
}

export default App;
