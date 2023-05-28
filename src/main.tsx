import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import NotFound from './components/NotFound';
import LandingPage from './components/LandingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LandingPage />
    ),
    errorElement: <NotFound />
  },
  {
    path: "/to-do",
    element: (
    <App />
    ),
    errorElement: <NotFound />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)