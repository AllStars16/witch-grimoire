import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import configureStore from "./state/configureStore.js";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const storeObj = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={storeObj.persistor}>
      <Provider store={storeObj.store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
