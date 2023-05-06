import { useModal } from "@peersyst/react-components";
import Button from "../Button/Button";
import PurchaseModal from "../../feedback/PurchaseModal/PurchaseModal";

const BuyButton = () => {
  const { showModal } = useModal();

  const handleClick = () => {
    showModal(PurchaseModal);
  };

  return (
    <Button size="lg" onClick={handleClick}>
      BUY NOW
    </Button>
  );
};

export default BuyButton;
