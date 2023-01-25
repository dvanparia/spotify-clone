import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { GetStartedScreen, WelcomeScreen } from '@screens';

const Stack = createStackNavigator();

export const AppStack = (props: AppStackProps): JSX.Element => {
  return (
    <Stack.Navigator>
    </Stack.Navigator>
  )
}

interface AppStackProps {

}