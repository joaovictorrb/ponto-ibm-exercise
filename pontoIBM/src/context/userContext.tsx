import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react'
import { Alert } from 'react-native';
import { UserContextType, IUser } from '../@types/user'
import useAxios from '../hooks/useAxios';

export const UserContext = createContext<UserContextType | null>(null)

export const UserProvider = () => {
  const [currentUser, setCurrentUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState<Boolean>()
  const [error, setError] = useState<Error>()
  const [login, setLogin] = useState<Boolean>(false)

  async function getUserSession(token: String) {
    async () => {
      const response = await useAxios({
        method: 'POST',
        url: 'login',
      })
      setCurrentUser(response.response?.data)
      setLogin(true)
    }, [Request]
  }

  // login
  async function userLogin(email: String, password: String) {
    try {
      const getUser = useAxios({
        method: 'POST',
        url: 'login',
        data: {
          email,
          password
        }
      })

      console.log(getUser);

      if (getUser.response?.status !== 201) {
        Alert.alert(getUser.error?.message)
        setError(getUser.error?.message)
      }

      // não sei direito quando usar a INTERFACE do usuario
      const token = getUser.response?.data.token

      await AsyncStorage.setItem(@Ponto:token)

      await getUserSession(token)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(true)
    }
  }

  const userLogout = useCallback(
    async function () {
      setCurrentUser(null);
      // ?
      setError(undefined);
      setLoading(false);
      setLogin(false);
      await AsyncStorage.removeItem('Token');

      // Navegar para tela de login
    },[]
    // [navigate],
  );

  // useEffect(() => {
  //   async function autoLogin() {
  //     // Veficar a questao do token
  //     const token = await AsyncStorage.getItem(@Ponto:token);

  //     // ?
  //     if (token) {
  //       try {
  //         setError(undefined);
  //         setLoading(true);

  //         await getUserSession();
  //       } catch (err) {
  //       } finally {
  //         setLoading(false);
  //       }
  //     } else {
  //       setLogin(false);
  //     }
  //   }
  //   autoLogin();
  // }, [userLogout, getUserSession]);
}