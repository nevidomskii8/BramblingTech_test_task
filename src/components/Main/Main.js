import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Header } from '../Header/Header';
import { Preview } from '../Preview/Preview';
import { Tabel } from '../Tabel/Tabel';
import { AppLocaleList, DEFAULT_LOCALE } from '../../i18n';

import './Main.scss';
import LanguageProvider from '../../LanguageProvider';

const defaultLocale = localStorage['locale'] ? localStorage['locale'] : DEFAULT_LOCALE;


export const Main = () => {
    const { nav } = useParams();
    const [currentLocale, setCurrentLocale] = useState(defaultLocale);

    const onChangeLanguage = (e) => {
        const selectedLocale = e.target.value;
        setCurrentLocale(selectedLocale);
        localStorage.setItem('locale', selectedLocale);
    }

    return (
        <div className='container'>
            <LanguageProvider locale={currentLocale}>
              <div>
              <Header />
                <select onChange={onChangeLanguage} defaultValue={currentLocale}>
                    {
                        AppLocaleList.map((locale, index) => (
                            <option key={index} value={locale.code}>{locale.name}</option>
                        ))
                    }
                </select>
              </div>
            </LanguageProvider>
            <main className="main">
                {nav === 'tabel' && <Tabel />}
                {nav === 'preview' && <Preview />}
            </main>
        </div>
    )
};