import React from "react";
import { Pressable, PressableProps, Text, } from "react-native";
import { styles } from "./styles";

export const Button = (props: ButtonProps): JSX.Element => {

  const { title } = props;

  return (
    <Pressable
      style={styles.container}
      {...props}
    >
      <Text style={styles.titleTextStyle}>
        {title}
      </Text>
    </Pressable>
  )
}

interface ButtonProps extends PressableProps {
  title: string;
}