import { ClotheCardRoot } from "./ClotheCard.styles";

export interface ClotheCardProps {
  id: number;
  image: string;
}

const ClotheCard = ({ id, image }: ClotheCardProps): JSX.Element => {
  return <ClotheCardRoot src={image} alt={`clothe-${id}`} />;
};

export default ClotheCard;
