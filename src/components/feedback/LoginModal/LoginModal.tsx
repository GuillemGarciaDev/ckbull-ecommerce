import { Col, Modal, Typography, createModal } from "@peersyst/react-components";
import Button from "../../input/Button/Button";
import QRCode from "react-qr-code";

const LoginModal = createModal(({ close, ...props }): JSX.Element => {
  const token = "G9AsLgFBLireNHv2uX9rFoIPSdkiBHasb/G6aHOaDD5FXJy+cJJL4pHp3RIcLir7aam0UOpW3LGzdleQ9bSdtg==";

  return (
    <Modal {...props}>
      <Col gap={40}>
        <Typography variant="h3Strong">Scan this QR code with CKBull Wallet to log in</Typography>
        <Col flex={1} alignItems="center" css={{ width: 100, aspectRatio: 1 }}>
          <QRCode value={token} size={220} />
        </Col>
        <Button size="lg" fullWidth onClick={close}>
          Close
        </Button>
      </Col>
    </Modal>
  );
});

export default LoginModal;
