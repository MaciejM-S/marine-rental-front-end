import { Box } from "@mui/material";
import logoNavbar from "../../../../pub/logo-navbar.png";
import mainFeedStyle from "./mainFeedStyle";

const { boxStyle, logoStyle } = mainFeedStyle;

function Logo() {
  return (
    <Box sx={boxStyle}>
      <img style={logoStyle} src={logoNavbar} alt="" />
    </Box>
  );
}

export default Logo;
