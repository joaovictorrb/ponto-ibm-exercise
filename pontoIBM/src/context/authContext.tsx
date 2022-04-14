import React, {createContext, useCallback, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useAxios from '../hooks/useAxios';

import {signIn} from '../mockup/login';
import {AuthContextData, UserType} from '../@types/user';
import {Alert} from 'react-native';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {
  const [userIsLogged, setUserIsLogged] = useState<object | null>(null);

  const [loggedUser, setLoggedUser] = useState<UserType>({});
  const [loading, setLoading] = useState<Boolean>();
  const [error, setError] = useState('');

  // Codigo do Kaio. Funcional.
  async function LogIn() {
    const response = await signIn();

    setUserIsLogged(response.user);
  }

  function LogOut() {
    const response = signIn();

    setUserIsLogged(null);
  }
  // -----------------------------

  // Definir se está logado ou nao.
  async function getUserSession(token: String) {
    const res = useAxios({
      method: 'POST',
      url: 'login',
    });

    setUserIsLogged(res.response?.data); // define o login para a route.
  }

  // login. De onde vem o Token
  async function userLogin(email: String, password: String) {
    try {
      const getUser = useAxios({
        method: 'POST',
        url: 'login',
        data: {
          email,
          password,
        },
      });

      console.log(getUser);

      if (getUser.response?.status !== 201) {
        Alert.alert(getUser.error?.message as string);
        setError(getUser.error?.message as string);
      }

      // não sei direito quando usar a INTERFACE do usuario
      const token = getUser.response!.data

      await AsyncStorage.setItem(token);

      await getUserSession(token);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(true);
    }
  }

  return (
    <AuthContext.Provider
      value={{signed: !!userIsLogged, userIsLogged, LogIn, LogOut, userLogin}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

// const userLogout = useCallback(
//   async function () {
//     setLoggedUser(null);
//     // ?
//     setError(undefined);
//     setLoading(false);
//     setLogin(false);
//     await AsyncStorage.removeItem('Token');

//     // Navegar para tela de login
//   },[]
//   // [navigate],
// );

// Verificaçao do token para o login. AutoLogin.

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
