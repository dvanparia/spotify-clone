import { images } from '@assets';
import { Button } from '@components';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { styles } from './styles';


export const GetStartedScreen = (props: GetStartedScreenProps): JSX.Element => {

  return (
    <View style={styles.container}>
      <Image
        source={images.spotify}
        style={styles.spotifyLogo}
      />
      <Text style={styles.tagLineText}>
        Millions of Songs.{'\n'}
        Free on Spotify.
      </Text>
      <Button
        title={'Sign up free'}
        style={styles.primaryButtonStyle}
        titleStyle={styles.primaryButtonText}
      />
      <Button
        title={'Continue with Phone Number'}
        style={styles.secondaryButtonStyle}
        titleStyle={styles.secondaryButtonText}
      />
      <Button
        title={'Continue with Google'}
        style={styles.secondaryButtonStyle}
        titleStyle={styles.secondaryButtonText}
        iconLeft={(
          <Image
            source={images.google}
            style={styles.buttonIconLeft}
          />
        )}
      />
      <Button
        title={'Continue with Facebook'}
        style={styles.secondaryButtonStyle}
        titleStyle={styles.secondaryButtonText}
        iconLeft={(
          <Image
            source={images.facebook}
            style={styles.buttonIconLeft}
          />
        )}
      />
      <Button
        title={'Continue with Apple'}
        style={styles.secondaryButtonStyle}
        titleStyle={styles.secondaryButtonText}
        iconLeft={(
          <Image
            source={images.apple}
            style={styles.buttonIconLeft}
          />
        )}
      />
      <Pressable style={styles.loginButtonStyle}>
        <Text style={styles.loginButtonText}>
          Log in
        </Text>
      </Pressable>
    </View>
  )
};

interface GetStartedScreenProps {
}