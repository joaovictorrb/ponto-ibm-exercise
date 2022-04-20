import React, {createContext, FC, useCallback, useState} from 'react';
import {DataContextData} from '../@types/types';
import useAxios from '../hooks/useAxios';

const DataContext = createContext<DataContextData>({} as DataContextData);

export const DataProvider: FC = ({children}) => {
  const {request} = useAxios();

  const [userPoint, setUserPoint] = useState<Object | null>(null);
  const [userRegistry, setUserRegistry] = useState<Object | null>(null);

  // Faz a requisiçao dos dados do usuario. Neste caso os pontos do dia.
  const getUserPoint = async () => {
    const response = await request('get', 'showPoints', {});
    console.log('=========== Response - GetUserPoint =============');
    console.log(response?.data[0].points);
    console.log('=========== Response - GetUserPoint =============');
    setUserPoint(response?.data[0].points);
  };

  // Faz a requisiçao dos dados do usuario. Neste caso, o registro de pontos.
  const getUserRegistry = async () => {
    const response = await request('get', 'registry', {});
    console.log('=========== Response - GetUserRegistry =============');
    console.log(response?.data[0].registries);
    console.log('=========== Response - GetUserRegistry =============');
    setUserRegistry(response?.data[0].registries);
  };

  return (
    <DataContext.Provider
      value={{userPoint, userRegistry, getUserPoint, getUserRegistry}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
