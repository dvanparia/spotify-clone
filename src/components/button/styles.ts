import { Palette } from "@utils";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconLeftContainer: {
    flex: 1,
  },
  iconRightContainer: {
    flex: 1,
  }
});