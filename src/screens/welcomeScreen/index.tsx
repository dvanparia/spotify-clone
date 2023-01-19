import React from 'react';
import { images } from '@assets';
import { Button } from '@components';
import { Image, ImageBackground, Text, View } from 'react-native';
import { styles } from './styles';


export const WelcomeScreen = (props: WelcomeScreenProps): JSX.Element => {

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
            onPress={() => { }}
          />
        </View>
      </View>
    </ImageBackground>
  )
};

interface WelcomeScreenProps {

}