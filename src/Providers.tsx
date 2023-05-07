import { PropsWithChildren } from "react";
import QueryClientProvider from "./queries/QueryClientProvider";
import { ConfigProvider } from "./config";
import { RecoilRoot } from "recoil";

const Providers = ({ children }: PropsWithChildren<unknown>): JSX.Element => {
  return (
    <ConfigProvider>
      <RecoilRoot>
        <QueryClientProvider>{children}</QueryClientProvider>
      </RecoilRoot>
    </ConfigProvider>
  );
};

export default Providers;
