import React, {createContext, FC, useCallback, useState} from 'react';
import {Alert} from 'react-native';
import {DataContextData} from '../@types/types';
import useAxios from '../hooks/useAxios';

const DataContext = createContext<DataContextData>({} as DataContextData);

export const DataProvider: FC = ({children}) => {
  const {request} = useAxios();

  const [userPoint, setUserPoint] = useState<Object | null>(null);
  const [userRegistry, setUserRegistry] = useState<Object | null>(null);
  const [recordPoints, setRecordPoints] = useState<Object | null>(null);
  const [flagIsEntry, setFlagIsEntry] = useState<boolean>(false);

  const getUserPoint = async () => {
    const response = await request('get', 'showPoints', {});
    console.log('=========== Response - GetUserPoint =============');
    console.log(response?.data.points);
    console.log('=========== Response - GetUserPoint =============');
    setUserPoint(response?.data.points);
  };

  const getUserRegistry = async () => {
    const response = await request('get', 'registry', {});
    console.log('=========== Response - GetUserRegistry =============');
    console.log(response?.data.registries);
    console.log('=========== Response - GetUserRegistry =============');
    setUserRegistry(response?.data.registries);
  };

  const handleSubmit = useCallback(async function handleSubmit() {
    const response = await request('post', 'newPointRegistry', {});
    console.log('=========== Response - handleSubmit =============');
    console.log(response?.data);
    console.log('=========== Response - handleSubmit =============');

    if (response?.status !== 201) {
      return Alert.alert('Alguma coisa deu errado');
    }
    setFlagIsEntry(true);
    return Alert.alert('O ponto foi registrado com sucesso!');
  }, []);

  const submitToRegistry = useCallback( async function submitToRegistry() {
    const response = await request('post', 'registry', {});
    console.log('=========== Response - submitToRegistry =============');
    console.log(response?.data);
    console.log('=========== Response - submitToRegistry =============');

    if (response?.status !== 201) {
      return Alert.alert('Alguma coisa deu errado');
    }

    setRecordPoints(response?.data);
    return Alert.alert('Os pontos foram enviados com sucesso!');
  }, []);

  // Acho que nao estou sabendo enviar os dados, tenho que rever o submitToRegistry.
  // - dados estao sendo recebidos
  // - dados estao sendo gerados
  // - Há um erro estranho no submitToRegistry, porem n sei dizer se é uma resposta padrao ou algo assim.

  return (
    <DataContext.Provider
      value={{
        userPoint,
        userRegistry,
        getUserPoint,
        getUserRegistry,
        flagIsEntry,
        handleSubmit,
        recordPoints,
        submitToRegistry,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;

// Esquema de registro do ponto

// const OnClickSubmit = useCallback(
//   async function handleSubmit(event) {
//     event.preventDefault();
//     const response = await request('post', `/${userId}/newPointRegistry`);

//     if (response.status !== 200) {
//       // navigate(`/review/${id}`);
//       return alert('Somethign went wrong while trying to save the review.');
//     }
//     // setDisable(true);
//     setFlagIsEntry({flagIsEntryPoint});
//     // navigate(`/review/${id}`);
//     return alert('Successfully saved point.');
//   },
//   [/*navigate, reviewDescription, review,*/ iuserId, request],
// );
