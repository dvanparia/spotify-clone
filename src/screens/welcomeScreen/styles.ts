import { Palette } from "@utils";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
  container: {
    height: '100%',
    paddingVertical: '60@ms',
    justifyContent: 'space-between',
    paddingHorizontal: '20@ms'
  },
  taglineText: {
    color: Palette.white,
    fontWeight: '600',
    fontSize: '20@ms',
    lineHeight: '30@ms',
    marginBottom: '25@ms',
    textAlign: 'center',
  },
  descriptionText: {
    color: Palette.white500,
    fontWeight: '500',
    fontSize: '15@ms',
    lineHeight: '22@ms',
    marginBottom: '25@ms',
    textAlign: 'center',
  },
  logoWithTextImage: {
    width: '173@ms',
    height: '52@ms',
    resizeMode: 'contain',
    alignSelf: 'center',
  },

});