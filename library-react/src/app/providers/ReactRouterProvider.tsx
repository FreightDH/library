import type { FC, ReactElement } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div></div>,
  },
]);

export const ReactRouterProvider: FC = (): ReactElement => <RouterProvider router={router} />;
