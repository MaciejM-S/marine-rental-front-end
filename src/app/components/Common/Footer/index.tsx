import { Typography, Box } from "@mui/material";
import Link from "@mui/material/Link";
import { theme } from "../../../../theme/theme";
import logo from "../../../../pub/logo-navbar.png";
import logoDark from "../../../../pub/logoDark.png";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import { css, keyframes } from "@emotion/react";
import { useTheme } from "@mui/material/styles";
import footerStyle from "./footerStyle";

const { logoStyle, contactRowStyle, textStyle } = footerStyle;
type FooterProps = {
  changeFooter: boolean;
};
const spin = keyframes`
  from {
    color: black;
  }
  to {
    color: white;
  }
`;

function Footer(props: FooterProps) {
  const theme = useTheme();
  const animationStyle = {
    color: "black",
    transition: "5s",
    animation: props.changeFooter ? `${spin} 2s ease` : "none",
    animationFillMode: "forwards",
  };
  function Copyright() {
    return (
      <>
        <Typography variant="body2" sx={animationStyle} align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://mui.com/">
            marinerental.com
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
        <Typography
          sx={animationStyle}
          variant="body2"
          color="text.secondary"
          align="center"
        >
          All rigghts reserved.
        </Typography>
      </>
    );
  }

  return (
    <>
      <Box
        sx={{ background: theme.palette.secondary.main, pt: 4, pb: 4 }}
        component="footer"
      >
        <Box>
          <Box sx={{ textAlign: "center" }}>
            <img style={logoStyle} src={logo} alt="" />
          </Box>

          <Copyright />
        </Box>
        <Typography
          sx={{ color: "#DDD", p: 2, pb: 0 }}
          component="h6"
          align="center"
          gutterBottom
        >
          Find your vessel.
          <br /> Create unforgettable marine experience!
        </Typography>
        <Box sx={{ ...contactRowStyle, transform: "translateX(-1%)" }}>
          <PhoneIcon sx={{ mr: 1 }} />
          <Typography sx={textStyle}>+91 48-123-2255-2178</Typography>
        </Box>
        <Box sx={{ ...contactRowStyle }}>
          <EmailIcon sx={{ mr: 1 }} />
          <Typography sx={textStyle}>marine-rental@office.com</Typography>
        </Box>
      </Box>
    </>
  );
}

export default Footer;
