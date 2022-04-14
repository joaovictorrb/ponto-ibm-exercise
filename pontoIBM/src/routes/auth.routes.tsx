import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SignUp from '../screens/Auth/SignUp';
import Login from '../screens/Auth/Login';

const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}

export default AuthRoutes;
