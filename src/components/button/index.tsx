import React, { ReactNode } from "react";
import { Pressable, PressableProps, StyleProp, Text, TextStyle, View, } from "react-native";
import { styles } from "./styles";

export const Button = (props: ButtonProps): JSX.Element => {

  const { title, titleStyle, iconLeft, iconRight } = props;

  return (
    <Pressable {...props}>
      <View style={styles.innerContainer}>
        <View style={styles.iconLeftContainer}>
          {iconLeft}
        </View>
        <Text
          style={titleStyle}
        >
          {title}
        </Text>
        <View style={styles.iconRightContainer}>
          {iconRight}
        </View>
      </View>
    </Pressable>
  )
}

interface ButtonProps extends PressableProps {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}