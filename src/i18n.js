const AppLocaleList = [
    { name: 'English', code: 'en', lang: 'English' },
    { name: 'русский', code: 'ru', lang: 'Russian' },
];

const addLocaleData = require('react-intl').addLocaleData; 

const en = require('react-intl/locale-data/en');
const ru = require('react-intl/locale-data/ru');

addLocaleData(en);
addLocaleData(ru);

const enTranslationMessages = require('./translations/en.json');
const ruTranslationMessages = require('./translations/ru.json');

const translatedMessages = {
    en: enTranslationMessages,
    ru: ruTranslationMessages,
};

const DEFAULT_LOCALE = navigator.language.match(/^[A-Za-z]{2}/)[0];

export { AppLocaleList, translatedMessages, DEFAULT_LOCALE };
