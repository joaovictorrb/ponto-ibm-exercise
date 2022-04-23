import React, {
  createContext,
  FC,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {AuthContextData} from '../@types/types';
import useAxios from '../hooks/useAxios';
import { Alert } from 'react-native';

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

  async function SignUp(email: String, username: String, password: String) {
    try {
      setError(null);
      const response = await request('post', 'register', {
        username,
        email,
        password,
      });
    } catch (error) {
      Alert.alert('Alguma coisa deu errado,');
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  async function getUserData() {
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
        isLogged: !!userData;
      }
    }
    autoLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{isLogged: !!userData, userData, SignIn, SignOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
