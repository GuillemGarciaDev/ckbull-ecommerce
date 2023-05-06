import { Col, Typography } from "@peersyst/react-components";
import ClotheCarousel, { Clothe } from "../../components/display/ClotheCarousel/ClotheCarousel";
import Logo from "../../components/display/Logo/Logo";
import useProduct from "../../hooks/useProduct";

const MainScreen = () => {
  const clothes = useProduct() as Clothe[];

  return (
    <Col gap={30} flex={1} alignItems="center">
      <Logo />
      <Typography variant="h4Light" light>
        BEST SELLERS
      </Typography>
      <ClotheCarousel clothes={clothes} />
    </Col>
  );
};

export default MainScreen;
