import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from './appStack';
import { AuthStack } from './authStack';

const isAuthenticated = false;

export const Router = (props: RouterProps): JSX.Element => {
  return (
    <NavigationContainer>
      {isAuthenticated ?
        <AppStack /> :
        <AuthStack />
      }
    </NavigationContainer>
  )
}

interface RouterProps {

}