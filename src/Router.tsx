import { ModalProvider } from "@peersyst/react-components";
import { BrowserRouter, Outlet, RouteObject, useRoutes } from "react-router-dom";
import MainLayout from "./components/display/MainLayout/MainLayout";
import MainScreen from "./screens/Main/Main";

enum MainRoutes {
  HOME = "",
  PRODUCT = "/product/:id",
}

const useMainRoutes = (): RouteObject[] => {
  return [
    {
      path: MainRoutes.HOME,
      element: (
        <MainLayout>
          <Outlet />
        </MainLayout>
      ),
      children: [{ path: MainRoutes.HOME, element: <MainScreen /> }],
    },
  ];
};

const Routes = () => {
  const mainRoutes = useMainRoutes();

  return useRoutes([...mainRoutes]);
};

const Router = () => {
  return (
    <BrowserRouter>
      <ModalProvider>
        <Routes />
      </ModalProvider>
    </BrowserRouter>
  );
};

export default Router;
