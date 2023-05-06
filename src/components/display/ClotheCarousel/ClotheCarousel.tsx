import ClotheCard from "../ClotheCard/ClotheCard";
import { ClotheCarouselRoot } from "./ClotheCarousel.styles";

export interface Clothe {
  id: number;
  image: string;
}

export interface ClotheCarouselProps {
  clothes: Clothe[];
}

const ClotheCarousel = ({ clothes }: ClotheCarouselProps): JSX.Element => {
  return (
    <ClotheCarouselRoot>
      {clothes.map((clothe) => (
        <ClotheCard {...clothe} />
      ))}
    </ClotheCarouselRoot>
  );
};

export default ClotheCarousel;
