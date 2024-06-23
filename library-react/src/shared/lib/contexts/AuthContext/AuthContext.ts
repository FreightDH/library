import { createContext } from 'react';

interface AuthContextProps {
  isAuth: boolean;
}

export const AuthContext = createContext<AuthContextProps>({
  isAuth: false,
});
