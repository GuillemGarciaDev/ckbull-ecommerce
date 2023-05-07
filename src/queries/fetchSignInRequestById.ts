import axios from "axios";

export default async function fetchSignInRequestById(signInToken: string) {
  return await axios.get(encodeURI(`http://localhost:3002/auth/sign-in-request/${encodeURIComponent(signInToken)}`)).then((res) => {
    return res.data;
  });
}
