import './App.css';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('title', { name: 'Yiğit' })}</h2>
      <p>{t('description.part1')}</p>
    </div>
  );
}

export default App;
