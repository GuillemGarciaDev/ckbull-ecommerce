import "styled-components";
import "@peersyst/react-components";
import { Theme } from "@peersyst/react-components";
import "styled-components/cssprop";
import { CSSProp } from "styled-components";

export interface ThemeOverlay {
  "6%": string;
  "8%": string;
  "12%": string;
  "24%": string;
  "48%": string;
}

export interface ThemeOverlays {
  100: ThemeOverlay;
  300: ThemeOverlay;
}

export interface ThemeComponents {
  card: string;
  appBar: string;
}

// Custom components theme
declare module "@peersyst/react-components" {
  export interface Theme {
    borderRadiusMd: string;
    borderRadiusLg: string;
  }

  export interface CreateTheme {
    borderRadiusMd: string;
    borderRadiusLg: string;
  }

  export interface ThemePalette {
    gray: {
      10: string;
      20: string;
    };
    black: {
      10: string;
      20: string;
      30: string;
    };
    white: string;
    green: {
      200: string;
      400: string;
    };
    botticelli: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
      950: string;
    };
    red: string;
    blue: string;
    orange: string;
    overlay: ThemeOverlays;
    gradient: {
      greenDarkGreen: string;
      greenViolet: string;
    };
    border: string;
    components: ThemeComponents;
  }

  export interface TypographyVariantsOverrides {
    subtitle1: false;
    subtitle2: false;
    caption: false;
    h1Strong: true;
    h1Regular: true;
    h1Light: true;
    h2Strong: true;
    h2Regular: true;
    h2Light: true;
    h3Strong: true;
    h3Regular: true;
    h3Light: true;
    h4Strong: true;
    h4Regular: true;
    h4Light: true;
    h5Strong: true;
    h5Regular: true;
    h5Light: true;
    h6Strong: true;
    h6Regular: true;
    h6Light: true;
  }
}

// Type styled components theme with our components theme
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

// Use css prop in components
declare module "react" {
  export interface Attributes {
    css?: CSSProp<Theme>;
  }
}
