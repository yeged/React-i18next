# i18next & React

## Resources

- [i18n NPM](https://www.npmjs.com/package/i18n)
- [i18next React](https://react.i18next.com/)
  - [useTranslation Hook](https://react.i18next.com/latest/usetranslation-hook)
  - [Trans Componenet](https://react.i18next.com/latest/trans-component)
  - [Plurals](https://www.i18next.com/translation-function/plurals#languages-with-multiple-plurals)
  - [I18Next Provider](https://react.i18next.com/latest/i18nextprovider)
  - [Create Instanca](https://www.i18next.com/overview/api#createinstance)
- [i18n Langauge Detector](https://github.com/i18next/i18next-browser-languageDetector)
- [i18n HTTP Backend](https://github.com/i18next/i18next-http-backend)
- [Js Cookie](https://github.com/js-cookie/js-cookie)

## Installation

`npm install react-i18next i18next --save`

`npm install i18next-browser-languagedetector`

`npm install i18next-http-backend`

`npm i js-cookie`

### Translation JSON & use Transation & Trans Component

<table>
<tr>
<th>Translation JSON</th>
</tr>
<tr>
 <td>
   
````
{
    "title": "Welcome {{name}}",
    "description": {
      "part1": "Learning i18next package with React",
      "part2": "Switch language between english and german using buttons above."
    },
    "age":"You're <1>{{age}}</1>  <2>years old.</2>",
    "ageTitle":"Age"
  }
````
   
</td>
  
  <table>
<tr>
<th>use Transation</th>
<th>Trans Component</th>
</tr>
<tr>
 <td>
   
````
import { useTranslation } from 'react-i18next';
   
const App = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h2>{t('title', { name: 'Yeged' })}</h2>
      <p>{t('description.part1')}</p>
    </div>
  );
}
   
````
   
</td>
  
   <td>
   
````
import { Trans } from 'react-i18next';
   
const App = () => {
  return (
    <div>
      <Trans i18nKey="description.part2" />
      <br />
      <Trans i18nKey="age">
        You're
        <strong title={t('ageTitle')}>{{ age: age }}</strong>
        <i> years old </i>
      </Trans>
    </div>
  );
}
   
````
   
</td>
 </table>
 
### Toogle The Language
  <table>
<tr>
<th>Import i18next</th>
<th>Use Transation</th>
</tr>
<tr>
 <td>
   
````
import i18next from 'i18next';
   
const App = () => {
  const { t } = useTranslation();
 const changeLanguage = (lang: string): void => {
    i18next.changeLanguage(lang);
  };
     
  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('tr')}>TR</button>
      <h2>{t('title', { name: 'Yeged' })}</h2>
      <p>{t('description.part1')}</p>
    </div>
  );
}
   
````
   
</td>
  
   <td>
   
````
import { useTranslation } from 'react-i18next';
   
const App = () => {
  const { t, i18n } = useTranslation();
     
  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
  };
     
  return (
    <div>
      <button onClick={() => changeLanguage('en')}>EN</button>
      <button onClick={() => changeLanguage('tr')}>TR</button>
      <h2>{t('title', { name: 'Yeged' })}</h2>
      <p>{t('description.part1')}</p>
    </div>
  );
}
   
````
   
</td>
 </table>
  
### Plural & Trans Component Count Prop
  
<table>
<tr>
<th>Translation JSON</th>
<th>App.tsx</th>
<th>Output</th>
</tr>
<tr>
 <td>
   
````
{
    "messages_one": "You got {{count}} message.",
    "messages_other": "You got {{count}} messages."
}
   
````
   
</td>
  
   <td>
   
````
import { Trans } from 'react-i18next';
   
const App = () => {
  const messages: string[] = ['sa', 'as'];
  return (
    <Trans i18nKey="messages" count={messages.length}>
      You got {{ count: messages.length }} messages.
    </Trans>
  );
}
   
````
   
</td>
   <td>
   
````
// const messages = ["Hello"]
// return You got 1 message
     
// const messages = ["Hello", "World"]
// return You got 2 messages
   
````
   
</td>
 </table>
  
  
  
### Language Detector
  
This is a i18next language detection plugin use to detect user language in the browser
  
<table>
<tr>
<th>Implementation</th>
<th>Detector-Cache Opitons</th>
<th>Options</th>
</tr>
<tr>
 <td>
   
````
import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18next.use(LanguageDetector).init({
detection: options,
});

```

</td>

 <td>

```

detection: {
order: [
'path',
'cookie',
'htmlTag',
'localStorage',
'subdomain',
],
caches: ['cookie'],
},

```

</td>
   <td>

```

{
// order and from where user language should be detected
order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],

// keys or params to lookup language from
lookupQuerystring: 'lng',
lookupCookie: 'i18next',
lookupLocalStorage: 'i18nextLng',
lookupSessionStorage: 'i18nextLng',
lookupFromPathIndex: 0,
lookupFromSubdomainIndex: 0,

// cache user language on
caches: ['localStorage', 'cookie'],
excludeCacheFor: ['cimode'], // languages to not persist (cookie, localStorage)

// optional expire and domain for set cookie
cookieMinutes: 10,
cookieDomain: 'myDomain',

// optional htmlTag with lang attribute, the default is:
htmlTag: document.documentElement,

// optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
cookieOptions: { path: '/', sameSite: 'strict' }
}

```

</td>
</table>


### HTTP Backend

This is a simple i18next backend to be used in Node.js, in the browser and for Deno. It will load resources from a backend server using the XMLHttpRequest or the fetch API.

```

import i18next from 'i18next';
import HttpApi from 'i18next-http-backend';

i18next.use(HttpApi).init({
backend: options,
});

---

backend: {
loadPath: '/assets/locales/{{lng}}/{{ns}}.json',
},

```
### Suspense

Suspense for Data Fetching is a new feature that lets you also use <Suspense> to declaratively “wait” for anything else, including data. This page focuses on the data fetching use case, but it can also wait for images, scripts, or other asynchronous work.

Prevent rendering application until translations are loaded

```

<Suspense fallback={<div>Loading...</div>}>
<App />
</Suspense>

```

```

- [Babel Edit](https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-react-app-with-react-i18next)
- [Internationalization](https://lemoncode.github.io/fonk-doc/messages/internationalization)
