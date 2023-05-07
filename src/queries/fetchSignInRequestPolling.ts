import axios from "axios";

export default async function fetchSignInRequestPolling(signInToken: string) {
  return axios.get(encodeURI(`http://localhost:3002/auth/login/${encodeURIComponent(signInToken)}`)).then((res) => {
    return res.data;
  });
}
