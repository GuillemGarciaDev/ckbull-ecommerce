import { useNavigate } from "react-router-dom";
import { LogoRoot } from "./Logo.styles";
import { MainRoutes } from "../../../Router";

const Logo = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate(MainRoutes.HOME);

  return (
    <LogoRoot
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Zara_Logo.svg/2560px-Zara_Logo.svg.png"
      alt="logo"
      onClick={handleClick}
    />
  );
};

export default Logo;
