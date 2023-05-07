import axios from "axios";

export default async function fetchSignInRequest() {
  return await axios.post("http://localhost:3002/auth/login").then((res) => {
    return res.data;
  });
}
