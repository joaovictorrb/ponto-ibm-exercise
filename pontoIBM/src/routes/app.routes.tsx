import React from 'react';
import SignIn from '../screens/SignIn';

import {createStackNavigator} from '@react-navigation/stack';
import Dashboard from '../screens/Dashboard';

const AppStack = createStackNavigator();

function AppRoutes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AppStack.Screen name="Dashboard" component={Dashboard} />
    </AppStack.Navigator>
  );
}

export default AppRoutes;
