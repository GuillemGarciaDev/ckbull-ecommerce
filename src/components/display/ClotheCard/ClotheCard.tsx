import { useNavigate } from "react-router-dom";
import { ClotheCardRoot } from "./ClotheCard.styles";
import { MainRoutes } from "../../../Router";

export interface ClotheCardProps {
  id: number;
  image: string;
}

const ClotheCard = ({ id, image }: ClotheCardProps): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(MainRoutes.PRODUCT.replace(":id", id.toString()));
  };

  return <ClotheCardRoot src={image} alt={`clothe-${id}`} onClick={handleClick} />;
};

export default ClotheCard;
