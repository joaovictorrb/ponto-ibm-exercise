import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {AuthProvider} from './context/authContext';
import {DataProvider} from './context/dataContext';
import GlobalStatusBar from './components/StatusBar';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <DataProvider>
          <GlobalStatusBar/>
          <Routes />
        </DataProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

// Versao perfeita do projeto
