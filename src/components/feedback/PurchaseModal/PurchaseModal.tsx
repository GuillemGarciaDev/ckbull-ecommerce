import { Button, CheckIcon, Expandable, Loader, Modal, Row, Typography, createModal } from "@peersyst/react-components";
import { PurchaseModalRoot } from "./PurchaseModal.styles";
import { useState } from "react";

interface BaseExpandableProps {
  active: boolean;
  title: string;
  content: string;
  success?: boolean;
}

const PurchaseExpandable = ({ active, title, content, success = false }: BaseExpandableProps) => {
  return (
    <Expandable open={active}>
      <Expandable.Display>
        <Row gap={20} justifyContent="center" alignItems="center">
          {active && <Loader />}
          {!active && success && <CheckIcon />}
          <Typography variant="h5Strong" light={!active || success}>
            {title}
          </Typography>
        </Row>
      </Expandable.Display>
      <Expandable.Body style={{ border: 0 }}>
        <Expandable.Content>
          <Typography variant="h5Regular" light>
            {content}
          </Typography>
        </Expandable.Content>
      </Expandable.Body>
    </Expandable>
  );
};

const PurchaseModal = createModal(({ close, ...modalProps }) => {
  const [signActive, setSignActive] = useState(false);
  const [signSuccess, setSignSuccess] = useState(false);
  const [successActive, setSuccessActive] = useState(true);

  return (
    <Modal {...modalProps}>
      <PurchaseModalRoot gap={28} flex={1}>
        <PurchaseExpandable
          active={signActive}
          success={signSuccess}
          title="Sign transaction in your wallet"
          content="Go to CKBull Wallet and sign the transaction to complete the purchase."
        />

        <PurchaseExpandable
          active={false}
          success={successActive}
          title="Success!"
          content="Transaction has been completed and the product is on its way!"
        />
        {successActive && (
          <Button fullWidth onClick={close}>
            Close
          </Button>
        )}
      </PurchaseModalRoot>
    </Modal>
  );
});

export default PurchaseModal;
