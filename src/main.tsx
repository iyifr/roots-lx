import React from 'react';
import ReactDOM from 'react-dom/client';

import Provider from './providers/index.tsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import '@fontsource/italiana';
import '@fontsource-variable/inter';
import App from './routes/App.tsx';

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
      {/* <App /> */}
    </Provider>
  </React.StrictMode>
);
