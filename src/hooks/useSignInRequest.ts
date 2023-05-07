import { useQuery } from "react-query";
import fetchSignInRequest from "../queries/fetchSignInRequest";

export default function useSignInRequest() {
  return useQuery({ queryKey: "signInRequest", queryFn: () => fetchSignInRequest() });
}
