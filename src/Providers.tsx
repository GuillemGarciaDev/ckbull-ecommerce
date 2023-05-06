import { PropsWithChildren } from "react";
import QueryClientProvider from "./queries/QueryClientProvider";
import { ConfigProvider } from "./config";

const Providers = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  return (
    <ConfigProvider>
      <QueryClientProvider>{children}</QueryClientProvider>
    </ConfigProvider>
  );
};

export default Providers;
