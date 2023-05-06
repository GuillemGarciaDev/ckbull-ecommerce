import { ConfigProvider as GenesysConfigProvider } from "@peersyst/react-components";
import { ReactNode } from "react";
import { StyleSheetManager } from "styled-components";

import config from "./config";
import { GlobalStyles } from "./theme/GlobalStyles";

export interface ConfigProviderProps {
  children?: ReactNode;
}

const ConfigProvider = ({ children }: ConfigProviderProps): JSX.Element => {
  return (
    <GenesysConfigProvider config={config}>
      <StyleSheetManager target={document.head}>
        <GlobalStyles />
      </StyleSheetManager>
      {children}
    </GenesysConfigProvider>
  );
};

export default ConfigProvider;
