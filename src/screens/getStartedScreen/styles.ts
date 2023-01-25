import { Palette } from "@utils";
import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
  container: {
    height: '100%',
    paddingVertical: '60@ms',
    paddingHorizontal: '24@ms',
    justifyContent: 'flex-end',
    backgroundColor: Palette.eerieBlack
  },
  tagLineText: {
    fontWeight: '700',
    fontSize: '28@ms',
    lineHeight: '38@ms',
    textAlign: 'center',
    marginBottom: '22@ms',
    color: Palette.white,
  },
  spotifyLogo: {
    height: '60@ms',
    width: '60@ms',
    alignSelf: 'center',
    marginBottom: '10@ms'
  },
  primaryButtonStyle: {
    backgroundColor: Palette.primary,
    borderRadius: '45@ms',
    paddingVertical: '13@ms',
    marginBottom: '12@ms'
  },
  secondaryButtonStyle: {
    backgroundColor: Palette.eerieBlack,
    borderRadius: '45@ms',
    paddingVertical: '13@ms',
    borderWidth: '0.6@ms',
    borderColor: Palette.white500,
    marginBottom: '12@ms'
  },
  primaryButtonText: {
    fontWeight: '600',
    fontSize: '16@ms',
    lineHeight: '22@ms',
    textAlign: 'center',
    color: Palette.black,
  },
  secondaryButtonText: {
    fontWeight: '700',
    fontSize: '15@ms',
    lineHeight: '22@ms',
    textAlign: 'center',
    color: Palette.white,
  },
  buttonIconLeft: {
    width: '20@ms',
    height: '20@ms',
    resizeMode: 'contain',
    marginLeft: '16@ms'
  },
  loginButtonStyle: {
    alignItems: 'center',
    marginTop: '12@ms',
  },
  loginButtonText: {
    color: Palette.white,
    fontWeight: '700',
    fontSize: '17@ms',
    lineHeight: '23@ms',
  }
});