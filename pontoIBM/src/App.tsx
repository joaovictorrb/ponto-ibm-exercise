import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {AuthProvider} from './context/authContext';
import {DataProvider} from './context/dataContext';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <DataProvider>
          <Routes />
        </DataProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
