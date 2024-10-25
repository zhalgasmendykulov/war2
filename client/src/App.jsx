import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPages from './components/pages/MainPages';
import Layout from './components/Layout';
import ProtectedRoute from './components/hoc/ProtectedRoute';
import AccountNewPage from './components/pages/AccountNewPage';
import AccountLoginPage from './components/pages/AccountLoginPage';
import useUser from './hooks/useUser';
import ParralaxBackground from './components/ui/ParralaxBackground';
import ApplicationUser from './components/pages/ApplicationUser';
import MessagePage from './components/pages/MessagePage';
import Scene from './components/ui/Scene';
import { Suspense } from 'react';
import TestPage from './components/pages/Test';

function App() {
  const { logoutHandler, signInHandler, signUpHandler, user } = useUser();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout user={user} logoutHandler={logoutHandler} />,
      children: [
        {
          path: '/',
          element: (
            <ParralaxBackground>
              <MainPages user={user} />
              <MainPages user={user} />
            </ParralaxBackground>
          ),
        },
        {
          // element: <ProtectedRoute isAllowed={user.status !== 'logged'}/>,
          children: [
            {
              path: '/account/register',
              element: <AccountNewPage signUpHandler={signUpHandler}/>
            },
            {
              path: '/watches',
              element: <TestPage /> 
            },
            {
              path: '/account/login',
              element: <AccountLoginPage signInHandler={signInHandler} />,
            },
            {
              path: '/account/application',
              element: <ApplicationUser />,
            },
            {
              path: '/account/application/message',
              element: <MessagePage />,
            },
            {
              path: '/account/application/message/sceen',
              element: <Scene />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
