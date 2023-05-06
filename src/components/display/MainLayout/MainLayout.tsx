import { ReactNode } from "react";
import { MainLayoutRoot } from "./MainLayout.styles";
import PageContent from "../PageContent/PageContent";
import AppBar from "../AppBar/AppBar";
import { Toolbar } from "@peersyst/react-components";

interface BasePageProps {
  toolbarOffset?: boolean;
  children?: ReactNode;
}

const MainLayout = ({ toolbarOffset = true, children }: BasePageProps): JSX.Element => (
  <MainLayoutRoot>
    <PageContent>
      <AppBar />
      {toolbarOffset && <Toolbar />}
      {children}
    </PageContent>
  </MainLayoutRoot>
);

export default MainLayout;
