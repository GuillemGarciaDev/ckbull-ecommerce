import { Col, Divider, Row, Typography } from "@peersyst/react-components";
import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import { Clothe } from "../../components/display/ClotheCarousel/ClotheCarousel";
import ProductImage from "../../components/display/ProductImage/ProductImage";
import Logo from "../../components/display/Logo/Logo";
import BuyButton from "../../components/input/BuyButton/BuyButton";

const ProductScreen = () => {
  const { id } = useParams();

  const { id: clotheId, image } = useProduct(Number(id)) as Clothe;

  const sizes = ["S", "M", "L", "XL"];

  return (
    <Col gap={40} alignItems="center" justifyContent="space-between">
      <Logo />
      <Row>
        <Col flex={1}>
          <ProductImage src={image} alt={clotheId.toString()} />
        </Col>
        <Col gap={20} flex={1} justifyContent="center">
          <Col>
            <Typography variant="h2Strong">Long Sleeve Shirt</Typography>
            <Typography variant="h4Strong" light>
              Spring collection
            </Typography>
          </Col>
          <Typography variant="h3Light">120 CKB</Typography>
          <Typography variant="h5Regular">
            Wide sweatshirt with round neck and short sleeves. Matching tone-on-tone stitching detail.
          </Typography>
          <Divider />
          {sizes.map((size) => (
            <Typography variant="h5Regular">{size}</Typography>
          ))}
          <Divider />
          <BuyButton />
        </Col>
      </Row>
    </Col>
  );
};

export default ProductScreen;
