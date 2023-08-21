import { useNavigate } from "react-router-dom";
import { LogoRoot } from "./Logo.styles";
import { MainRoutes } from "../../../Router";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(MainRoutes.HOME);

  return (
    <LogoRoot
      src="https://img.freepik.com/premium-vector/clothing-store-logo-design-inspiration-vector-illustration_500223-481.jpg"
      alt="logo"
      onClick={handleClick}
    />
  );
};

export default Logo;
