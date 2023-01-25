import React from "react";
import { Pressable, PressableProps, StyleProp, Text, TextStyle, } from "react-native";
import { styles } from "./styles";

export const Button = (props: ButtonProps): JSX.Element => {

  const { title, titleStyle } = props;

  return (
    <Pressable {...props}>
      <Text
        style={titleStyle}
      >
        {title}
      </Text>
    </Pressable>
  )
}

interface ButtonProps extends PressableProps {
  title: string;
  titleStyle?: StyleProp<TextStyle>;
}