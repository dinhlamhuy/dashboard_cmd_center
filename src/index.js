
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import global_en from "./utils/en.json";
import global_tw from "./utils/tw.json";
import i18next from 'i18next';
import { I18nextProvider, initReactI18next } from 'react-i18next';
import { BrowserRouter as Router } from "react-router-dom";

const languages = localStorage.getItem('languages');

i18next.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: languages === null ? "TW" : languages,
  fallbackLng:'TW',
  ns:['global'],
  debug: true,
  resources: {
    EN: {
      global:global_en,
    },
    TW: {
      global:global_tw,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18next}>
  <Router>
    <App />
  </Router>
  </I18nextProvider>
);

