import logoNavbar from "../../../../pub/logo-navbar.png";
import { Box } from "@mui/material";

const logoStyle = {
  padding: "10px",
  width: "250px",
};

function Logo() {
  return (
    <Box>
      <img style={logoStyle} src={logoNavbar} alt="" />
    </Box>
  );
}

export default Logo;
