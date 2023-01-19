import { Palette } from "@utils";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
  container: {
    backgroundColor: Palette.primary,
    borderRadius: '20@ms',
    paddingVertical: '17@ms'
  },
  titleTextStyle: {
    color: Palette.white,
    fontWeight: '500',
    fontSize: '24@ms',
    lineHeight: '36@ms',
    textAlign: 'center'
  }
});