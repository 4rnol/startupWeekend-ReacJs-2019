import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/styles.scss';
import App from './App';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import * as serviceWorker from './serviceWorker';
import common_en from './translations/en/common.json';
import common_es from './translations/es/common.json';

const resources = {
    en: {
        common: common_en
    },
    es: {
        common: common_es
    }
};

i18next.init({
    interpolation: { escapeValue: false },  // React already does escaping
    lng: 'es',                              // language to use
    resources: resources
});

ReactDOM.render(
    <I18nextProvider i18n={i18next}>
        <App/>
    </I18nextProvider>, document.getElementById('root'));
serviceWorker.unregister();
