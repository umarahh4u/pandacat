import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

// Global style overrides
import styles from "./styles";

// Foundational style overrides
import borders from "./foundations/borders";
import space from "./foundations/space";
import zIndices from "./foundations/zIndices";
import radii from "./foundations/radii";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import fontSizes from "./foundations/fontSizes";
import fontWeights from "./foundations/fontWeights";
import lineHeights from "./foundations/lineHeights";
import letterSpacings from "./foundations/letterSpacings";
import breakpoints from "./foundations/breakpoints";
import textStyles from "./foundations/textStyles";

// Component style overrides
import Button from "./components/button";
import Modal from "./components/modal";
import Switch from "./components/switchButton";

const overrides = {
  styles,
  textStyles,
  borders,
  space,
  zIndices,
  radii,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  breakpoints,
  // Other foundational style overrides go here
  components: {
    Button,
    Modal,
    Switch,
    // Other components go here
  },
};

export default extendTheme(
  overrides,
  withDefaultColorScheme({
    colorScheme: "brand.primary",
    components: ["Switch"],
  })
);
