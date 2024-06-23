import type { ReactElement } from 'react';
import { ReactRouterProvider } from './providers';
import { AuthProvider } from '@/shared/lib/contexts/AuthContext';

export const App = (): ReactElement => (
  <AuthProvider>
    <ReactRouterProvider />
  </AuthProvider>
);
