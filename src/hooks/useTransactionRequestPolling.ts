import { polling } from "@peersyst/react-utils";
import fetchTransactionRequestPolling from "../queries/fetchTransactionRequestPolling";

export default function useTransactionRequestPolling(transactionRequestToken: string, onSuccess: () => void) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleStatus = (data: any) => {
    return data.status === "pending";
  };

  const poll = async () => {
    await polling(() => fetchTransactionRequestPolling(transactionRequestToken), handleStatus, { delay: 1000 });
    onSuccess();
  };

  return { poll };
}
