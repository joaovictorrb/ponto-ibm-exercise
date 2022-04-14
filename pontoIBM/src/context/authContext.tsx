import React, {createContext, useState} from 'react';
import {signIn} from '../mockup/login';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  LogIn(): Promise<unknown>;
  LogOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [user, setUser] = useState<object | null>(null);

  async function LogIn() {
    const response = await signIn();

    setUser(response.user);
  }

  function LogOut() {
    const response = signIn();

    setUser(null);
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, LogIn, LogOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
