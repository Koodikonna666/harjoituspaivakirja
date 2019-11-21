import React from 'react';
import AuthScreen from '../screens/AuthScreen';
import { createStackNavigator } from 'react-navigation-stack';



const AuthNavigator = createStackNavigator({
    Auth: AuthScreen
  });


export default AuthNavigator;