import axios from "axios";

export default async function fetchTransactionRequest(signInToken: string, amount: number) {
  return await axios
    .post("http://localhost:3002/transaction/create", {
      signInToken: signInToken,
      to: "ckt1qzda0cr08m85hc8jlnfp3zer7xulejywt49kt2rr0vthywaa50xwsqgt3qqjv3aw6r9z0qpmhphzflh0ga0gzequlaqnd",
      amount: amount,
    })
    .then((res) => {
      return res.data;
    });
}
