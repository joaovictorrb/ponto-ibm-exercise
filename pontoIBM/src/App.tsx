import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SignIn from './screens/SignIn';
import Dashboard from './screens/Dashboard';
import AppRoutes from './routes/app.routes';
import AuthRoutes from './routes/auth.routes';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* <AppRoutes/> */}
      <AuthRoutes/>
    </NavigationContainer>
  );
}
