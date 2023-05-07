import { Col, Modal, ModalProps, Skeleton, Typography, createModal, useModal } from "@peersyst/react-components";
import Button from "../../input/Button/Button";
import QRCode from "react-qr-code";
import { useEffect } from "react";
import useSignInRequestPolling from "../../../hooks/useSignInRequestPolling";
import { useRecoilState } from "recoil";
import { userState } from "../../../state/userState";
import fetchSignInRequestById from "../../../queries/fetchSignInRequestById";

interface LoginModalProps extends ModalProps {
  signInToken: string;
  loading: boolean;
}

const LoginModal = createModal<LoginModalProps>(({ signInToken, loading, ...props }: LoginModalProps): JSX.Element => {
  const { hideModal } = useModal();
  const [, setUserState] = useRecoilState(userState);

  console.log(signInToken);

  const close = () => hideModal(LoginModal.id);

  const handleSuccess = () => {
    fetchSignInRequestById(signInToken).then((data) => {
      setUserState((prev) => ({ ...prev, address: data.metadata.address, loggedIn: true }));
      close();
    });
  };

  const { poll } = useSignInRequestPolling(signInToken, () => handleSuccess());

  useEffect(() => {
    if (!loading && signInToken.length > 0) poll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, signInToken]);

  return (
    <Modal {...props}>
      <Col gap={40}>
        <Typography variant="h3Strong">Scan this QR code with CKBull Wallet to log in</Typography>
        <Col flex={1} alignItems="center" css={{ width: 100, aspectRatio: 1 }}>
          <Skeleton loading={loading}>
            <QRCode value={signInToken} size={220} />
          </Skeleton>
        </Col>
        <Button size="lg" fullWidth onClick={close}>
          Close
        </Button>
      </Col>
    </Modal>
  );
});

export default LoginModal;
