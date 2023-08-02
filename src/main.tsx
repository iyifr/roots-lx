import "./index.css";
import '@fontsource/italiana/400.css';
import '@fontsource-variable/inter';
import React from 'react';
import ReactDOM from 'react-dom/client';

import Provider from './providers/index.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './routes/Home/App.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
