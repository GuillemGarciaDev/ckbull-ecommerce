import { useModal } from "@peersyst/react-components";
import Button from "../Button/Button";
import PurchaseModal from "../../feedback/PurchaseModal/PurchaseModal";
import fetchTransactionRequest from "../../../queries/fetchTransactionRequest";
import { useRecoilValue } from "recoil";
import { userState } from "../../../state/userState";
import { useState } from "react";

const BuyButton = () => {
  const { showModal } = useModal();
  const { signInToken } = useRecoilValue(userState);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    setLoading(true);
    fetchTransactionRequest(signInToken, 120).then((data) => {
      setLoading(false);
      showModal(PurchaseModal, { transactionRequestToken: data.transactionToken });
    });
  };

  return (
    <Button size="lg" onClick={handleClick} loading={loading}>
      BUY NOW
    </Button>
  );
};

export default BuyButton;
