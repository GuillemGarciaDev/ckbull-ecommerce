import { PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider as BaseQueryClientProvider } from "react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      staleTime: 600000,
    },
  },
});

const QueryClientProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <BaseQueryClientProvider client={queryClient}>{children}</BaseQueryClientProvider>;
};

export default QueryClientProvider;
