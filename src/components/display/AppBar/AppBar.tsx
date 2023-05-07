import { CheckIcon, Row, useModal } from "@peersyst/react-components";
import Button from "../../input/Button/Button";
import LoginModal from "../../feedback/LoginModal/LoginModal";
import { useState } from "react";
import fetchSignInRequest from "../../../queries/fetchSignInRequest";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState } from "../../../state/userState";

const AppBar = () => {
  const { showModal } = useModal();
  const [loading, setLoading] = useState<boolean>(false);
  const { loggedIn, address } = useRecoilValue(userState);
  const [, setUserState] = useRecoilState(userState);

  const handleLogin = () => {
    setLoading(true);
    fetchSignInRequest().then((data) => {
      console.log(data.signInToken);
      setLoading(false);
      setUserState((prev) => ({ ...prev, signInToken: data.signInToken }));
      showModal(LoginModal, { signInToken: data.signInToken, loading });
    });
  };

  return (
    <Row justifyContent="flex-end" css={{ width: "100%" }}>
      {!loggedIn ? (
        <Button variant="outlined" size="lg" loading={loading} onClick={handleLogin}>
          Log in with CKBull
        </Button>
      ) : (
        <Button disabled variant="outlined" size="lg" loading={loading} onClick={handleLogin}>
          <CheckIcon /> Logged in as {address.slice(0, 6)}...{address.slice(-6)}
        </Button>
      )}
    </Row>
  );
};

export default AppBar;
