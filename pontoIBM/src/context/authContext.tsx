import React, {
  createContext,
  FC,
  useCallback,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthContextData} from '../@types/types';
import useAxios from '../hooks/useAxios';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: FC = ({children}) => {
  const [userData, setUserData] = useState<Object | null>(null);
  const [error, setError] = useState<String | null>(null);
  const [loading, setLoading] = useState<Boolean>(false);

  const {request} = useAxios();

  async function SignIn(email: String, password: String) {
    try {
      setError(null);
      setLoading(true);

      const response = await request('post', 'login', {
        email,
        password,
      });

      const token = response?.data.token;
      await AsyncStorage.setItem('Token', token);

      await getUserData();
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  const getUserData = async () => {
    const response = await request('post', 'sessions', {});
    setUserData(response?.data);
  };

  async function SignOut() {
    await AsyncStorage.removeItem('Token');
    setUserData(null);
    setError('');
    setLoading(false);
  }

  // Verificaçao do token para o login. AutoLogin.

  useEffect(() => {
    async function autoLogin() {
      const token = await AsyncStorage.getItem('Token');

      if (token) {
        try {
          setError(null);
          setLoading(true);

          await getUserData();
        } catch (err) {
        } finally {
          setLoading(false);
        }
      } else {
        isLogged: !!userData
      }
    }
    autoLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{isLogged: !!userData, userData, SignIn, SignOut, getUserData}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;