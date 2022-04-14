import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';
import Espelho from '../screens/Dashboard/Espelho';
import ConsultarPontos from '../screens/Dashboard/ConsultarPontos';
import RegistrarPontos from '../screens/Dashboard/RegistrarPontos';

const AppStack = createStackNavigator();

function AppRoutes() {
  return (
    <AppStack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Dashboard" component={Dashboard} />
      <AppStack.Screen name="ConsultarPontos" component={ConsultarPontos} />
      <AppStack.Screen name="RegistrarPontos" component={RegistrarPontos} />
      <AppStack.Screen name="Espelho" component={Espelho} />
    </AppStack.Navigator>
  );
}

export default AppRoutes;
