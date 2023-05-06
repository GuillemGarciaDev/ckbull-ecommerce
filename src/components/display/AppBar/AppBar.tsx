import { Row, useModal } from "@peersyst/react-components";
import Button from "../../input/Button/Button";
import LoginModal from "../../feedback/LoginModal/LoginModal";

const AppBar = () => {
  const { showModal } = useModal();

  const handleLogin = () => {
    showModal(LoginModal);
  };

  return (
    <Row justifyContent="flex-end" css={{ width: "100%" }}>
      <Button size="lg" onClick={handleLogin}>
        Log in with CKBull
      </Button>
    </Row>
  );
};

export default AppBar;
