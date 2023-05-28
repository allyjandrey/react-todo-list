import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = lazy(() => import('./App'))
const NotFound = lazy(() => import('./components/NotFound'))
const LandingPage = lazy(() => import('./components/LandingPage'))

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <LandingPage />
      </Suspense>
    ),
    errorElement: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: "/to-do",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    errorElement: <Suspense fallback={<div>Loading...</div>}>
      <NotFound />
    </Suspense>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)