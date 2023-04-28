import { theme } from "../../../../theme/theme";

const navbarStyle = {
  desktopBoxStyle: {
    display: "none",
    [theme.breakpoints.up(900)]: {
      display: "flex",
    },
  },
  mobileBoxStyle: {
    [theme.breakpoints.up(900)]: {
      display: "none",
    },
  },
  menuIconStyle: {
    color: "#6dc5cb",
  },
  iconStyle: {
    mr: 1,
    width: "18px",
  },
  iconButtonStyle: {
    display: "block",
    height: "45px",
    margin: "10px 15px 10px auto",
    border: "1px solid #6dc5cb",
    borderRadius: 2,
  },
  itemStyle: {
    fontWeight: "600",
    color: "#143060",
  },

  logoStyle: {
    height: "30px",
  },
  mobileLogoBoxStyle: {
    ml: 2,
    mt: "3px",
    [theme.breakpoints.down(600)]: { display: "none" },
  },
  boxImageStyle: {
    ml: 2,
    mt: "3px",
    display: "none",
    [theme.breakpoints.down(600)]: { display: "block" },
  },
  tabStyle: {
    fontSize: "16px",
    fontWeight: 600,
    color: "#d9ebe8",
  },
  signedInStyle: {
    color: "white",
  },
};

export default navbarStyle;
