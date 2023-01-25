import { Button } from '@components';
import React from 'react';
import { View } from 'react-native';


export const LoginScreen = (props: LoginScreenProps): JSX.Element => {

  return (
    <View>
      <Button
        title={'Get Started'}
      />
    </View>
  )
};

interface LoginScreenProps {
  b: string
}