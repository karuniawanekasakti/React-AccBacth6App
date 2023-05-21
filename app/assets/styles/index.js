import { Dimensions } from "react-native";

const Fonts = {
  Nunito: {
    Bold: "Nunito-Bold",
    BoldItalic: "Nunito-BoldItalic",
    SemiBold: "Nunito-SemiBold",
    SemiBoldItalic: "Nunito-SemiBoldItalic",
    Regular: "Nunito-Regular",
  },
};

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("screen").height;

const guidelineBaseHeight = 375;
const guidelineBaseWidth = 812;

const horizontalScale = (size) => (WIDTH / guidelineBaseWidth) * size;
const verticalScale = (size) => (HEIGHT / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

const Shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
};

export {
  Fonts,
  WIDTH,
  HEIGHT,
  horizontalScale,
  verticalScale,
  moderateScale,
  Shadow,
};
