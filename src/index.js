import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'; // Importez PersistGate
import { store, persistor } from "./state/store.js"; // Importez le store et le persistor


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}> {/* Utilisez PersistGate */}
      <StrictMode>
        <App />
      </StrictMode>
    </PersistGate>
  </Provider>,
);

