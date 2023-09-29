import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './pages/Home';
import router from './router';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router}/>
      </AuthProvider>
  </React.StrictMode>,
)
