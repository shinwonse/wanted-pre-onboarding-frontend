import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ToDos from './pages/ToDos';
import Root from './Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'todo',
        element: <ToDos />,
      },
    ],
  },
]);

export default router;
