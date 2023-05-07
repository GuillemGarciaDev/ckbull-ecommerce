import { polling } from "@peersyst/react-utils";
import fetchSignInRequestPolling from "../queries/fetchSignInRequestPolling";

export default function useSignInRequestPolling(signInToken: string, onSuccess: () => void) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleStatus = (data: any) => {
    return data.status === "pending";
  };

  const poll = async () => {
    await polling(() => fetchSignInRequestPolling(signInToken), handleStatus, { delay: 1000 });
    onSuccess();
  };

  return { poll };
}
