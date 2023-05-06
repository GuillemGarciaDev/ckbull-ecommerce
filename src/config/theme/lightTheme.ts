import { ThemePalette, createTheme } from "@peersyst/react-components";
import theme from "./theme";
import { ThemeOverlay } from "./theme.declarations";

export const white = "#FFFFFF";
export const black = "#000000";
export const red = "#FF1717";
export const orange = "#E3935B";
export const blue = "#5F8AFA";

export const green: ThemePalette["green"] = {
  200: "#1ED882",
  400: "#34AEAE",
};

export const botticelli = {
  50: "#f8f6f4",
  100: "#efebe5",
  200: "#ded6ca",
  300: "#cabaa7",
  400: "#b9a28d",
  500: "#a4846b",
  600: "#97745f",
  700: "#7e5f50",
  800: "#674f45",
  900: "#54423a",
  950: "#2c211e",
};

export const overlay100: ThemeOverlay = {
  "6%": "#2929290F",
  "8%": "#29292914",
  "12%": "#2929291F",
  "24%": "#2929293D",
  "48%": "#2929297A",
};

export const gray: ThemePalette["gray"] = {
  10: "#E7E9EB",
  20: "#A7A7A7",
};

// Overlay - gray
export const overlay300: ThemeOverlay = {
  "6%": "#A7A7A70F",
  "8%": "#A7A7A714",
  "12%": "#A7A7A71F",
  "24%": "#A7A7A73D",
  "48%": "#A7A7A77A",
};

export const overlay: ThemePalette["overlay"] = {
  100: overlay100,
  300: overlay300,
};

const lightTheme = createTheme({
  ...theme,
  palette: {
    mode: "light",
    primary: botticelli[700],
    background: white,
    border: overlay[100]["8%"],
    text: black[30],
    backdrop: overlay[100]["24%"],
    status: {
      info: blue,
      warning: orange,
      error: red,
      success: green[200],
    },
    blue,
    gray,
    orange,
    red,
    green,
    white,
    overlay,
    botticelli,
    components: {
      card: white,
      appBar: white,
    },
  },
});

export default lightTheme;
