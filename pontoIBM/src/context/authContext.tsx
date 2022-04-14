import React, {createContext, FC, useCallback, useState} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import {AuthContextData, UserType} from '../@types/types'
import useAxios from '../hooks/useAxios'

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: FC = ({children}) => {
  const [userData, setUserData] = useState<UserType | {}>({})
  const [isLogged, setIsLogged] = useState<AuthContextData | Boolean>(false) 
  const [error, setError] = useState<String | null>(null)
  const [loading, setLoading] = useState<Boolean>(false);

  const { request } = useAxios()

  async function SignIn(email: String, password: String) {
    try {
      setError(null)
      setLoading(true)
      
      const response = await request('post', 'login', {
        email,
        password,
      })

      const token = response?.data.token
      await AsyncStorage.setItem('Token', token);

      // await getUserData(token)
    } catch (error) {
      setError(error)
      setIsLogged(false)
    } finally {
      setLoading(false)
    }
  }

  // FAZER FUNCAO QUE ADQUIRE OS DADOS DO USUARIO
  // const getUserData = useCallback() {
  //   async (token) => {
  //     const response = await request('post', 'sessions');
  //     setUserData(response.data);
  //     setIsLogged(true);
  //   }
  // }

  return (
    <AuthContext.Provider value={{isLogged: false, user: {}, SignIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
/*
  const [userData, setUserData] = useState<AuthContextData| null>(null);
  const [loading, setLoading] = useState<Boolean>();
  const [error, setError] = useState('');

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
*/
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
