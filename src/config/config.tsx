import { createConfig } from "@peersyst/react-components";
import lightTheme from "./theme/lightTheme";

const uiConfig = createConfig({
  projectName: "ckbull-ecommerce",
  themes: {
    default: lightTheme,
  },
});

export default uiConfig;
