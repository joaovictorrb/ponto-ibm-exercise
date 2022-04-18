import React, {createContext, FC, useCallback, useState} from 'react';
import {DataContextData} from '../@types/types';
import useAxios from '../hooks/useAxios';

const DataContext = createContext<DataContextData>({} as DataContextData);

export const DataProvider: FC = ({children}) => {
  const [userPoint, setUserPoint] = useState<Object | null>(null);

  const {request} = useAxios();

  // Faz a requisiçao dos dados do usuario, neste caso, quero o Token.
  const getUserPoint = async () => {
    const response = await request('get', 'showPoints', {});

    
    setUserPoint(response?.data);
  };

  console.log('===========DataContext=============');
  console.log(userPoint);
  console.log('===========DataContext=============');
  
  return (
    <DataContext.Provider
      value={{isLogged: !!userPoint, userPoint, getUserPoint}}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
