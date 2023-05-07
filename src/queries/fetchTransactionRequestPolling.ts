import axios from "axios";

export default async function fetchTransactionRequestPolling(transactionRequestToken: string) {
  return axios.get(encodeURI(`http://localhost:3002/transaction/${encodeURIComponent(transactionRequestToken)}`)).then((res) => {
    return res.data;
  });
}
