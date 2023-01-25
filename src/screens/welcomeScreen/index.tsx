import React from 'react';
import { images } from '@assets';
import { Button } from '@components';
import { Image, ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { AuthStackNavigationProp } from 'src/navigation/types';


export const WelcomeScreen = (props: WelcomeScreenProps): JSX.Element => {

  const navigation = useNavigation<AuthStackNavigationProp>();

  return (
    <ImageBackground
      blurRadius={5}
      source={images.wallpaper1}
    >
      <View style={styles.container}>
        <Image
          source={images.logoWithText}
          style={styles.logoWithTextImage}
        />
        <View>
          <Text style={styles.taglineText}>
            Enjoy Listening To Music
          </Text>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consect et dolor. Lorem ipsum dolor sit amet
          </Text>
          <Button
            title={'Get Started'}
            style={styles.buttonStyle}
            titleStyle={styles.buttonTitleStyle}
            onPress={() => navigation.navigate('GetStarted')}
          />
        </View>
      </View>
    </ImageBackground>
  )
};

interface WelcomeScreenProps {

}