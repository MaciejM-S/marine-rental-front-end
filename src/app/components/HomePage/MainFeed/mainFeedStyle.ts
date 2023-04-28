import { theme } from "../../../../theme/theme";

const mainFeedStyle = {
  mobileBoxStyle: {
    display: "block",
    margin: "24px 20px 24px auto",
    [theme.breakpoints.between(700, 900)]: {
      fontSize: "25px",
      color: "pink",
    },
    [theme.breakpoints.up(900)]: {
      display: "none",
    },
    [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
      margin: "14px 20px 14px 24px",
    },
    [`${theme.breakpoints.down(700)} and (orientation: landscape)`]: {
      margin: "7px 20px 7px 24px",
    },
  },
  desktopBoxStyle: {
    ml: "auto",
    mr: "200px",
    justifyContent: "space-around",
    display: "none",
    [theme.breakpoints.up(900)]: {
      display: "block",
    },
  },
  buttonStyle: {
    fontWeight: 600,
    color: "white",
    border: "2px white solid",
    fontSize: "10px",
    [theme.breakpoints.between(500, 900)]: {
      fontSize: "12px",
    },
    [`${theme.breakpoints.down(700)} and (orientation: landscape)`]: {
      fontSize: "10px",
    },
  },
  iconStyle: {
    mr: 0.5,
    [theme.breakpoints.down(500)]: {
      fontSize: "12px",
    },
    [`${theme.breakpoints.down(700)} and (orientation: landscape)`]: {
      fontSize: "10px",
    },
  },
  boxStyle: {
    ml: "115px",
    display: "none",
    [theme.breakpoints.up(900)]: {
      display: "block",
    },
  },
  logoStyle: {
    padding: "40px",
    width: "350px",
    color: "yellow",
  },
};

export default mainFeedStyle;
