import 'unfonts.css'
import './index.css'
import '@fontsource/italiana/400.css';
import '@fontsource-variable/inter'
import React from 'react';
import ReactDOM from 'react-dom/client';

import Provider from './providers/index.tsx';
import {
  BrowserRouter
} from "react-router-dom";
import App from './routes/App.tsx';
import { enableStaticRendering } from 'mobx-react-lite';
enableStaticRendering(typeof window === 'undefined');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
