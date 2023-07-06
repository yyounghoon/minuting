import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CreateSpacePage from './pages/space/CreateSpacePage';
import PlaygroundPage from './pages/PlaygroundPage';
import LoginPage from './pages/auth/LoginPage';
import Root from './@shared/components/Root';
import SpaceDashBoardPage from './pages/space/SpaceDashBoardPage';
import CreateMinutesPage from './pages/minutes/CreateMinutesPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,

      children: [
        {
          path: 'dashboard',
          element: <DashboardPage />, // 로그인 후, 진입 페이지
        },
        {
          path: 'space',
          children: [
            {
              path: ':id',
              element: <SpaceDashBoardPage />,
              children: [
                {
                  path: 'board',
                  children: [
                    {
                      path: ':boardId',
                      element: <div>'보드 아이디'</div>,
                    },
                  ],
                },
              ],
            },
            {
              path: 'create',
              element: <CreateSpacePage />,
            },
          ],
        },
        {
          path: 'minutes',
          children: [
            {
              path: ':id',
              element: <div>회의록 조회</div>,
            },
            {
              path: 'create',
              element: <CreateMinutesPage />,
            },
          ],
        },
      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      path: 'playground',
      element: <PlaygroundPage />,
    },
    {
      path: '*',
      element: <div>잘못된 경로입니다.</div>,
    },
  ],
  {
    // basename: import.meta.env.DEV ? '/' : '/minuting/',
  },
);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
