import navbarStyle from "./navbarStyle";
import logoNavbar from "../../../../pub/logo-navbar.png";
import whiteLogo from "../../../../pub/logo-white.svg";
import { Box } from "@mui/material";

const { logoStyle, mobileLogoBoxStyle, boxImageStyle } = navbarStyle;

function MobileLogo() {
  return (
    <>
      <Box sx={mobileLogoBoxStyle}>
        <img style={logoStyle} src={logoNavbar} alt="" />
      </Box>
      <Box sx={boxImageStyle}>
        <img style={logoStyle} src={whiteLogo} alt="" />
      </Box>
    </>
  );
}

export default MobileLogo;
