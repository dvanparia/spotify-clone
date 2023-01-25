import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStartedScreen, WelcomeScreen } from '@screens';
import { AuthStackParamList } from './types';

const Stack = createStackNavigator<AuthStackParamList>();

export const AuthStack = (props: AuthStackProps): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName='Welcome'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={'Welcome'} component={WelcomeScreen} />
      <Stack.Screen name={'GetStarted'} component={GetStartedScreen} />
    </Stack.Navigator>
  )
}

interface AuthStackProps {

}