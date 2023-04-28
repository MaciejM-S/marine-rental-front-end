import { theme } from "../../../../theme/theme";

const aboutUsStyle = {
  mainBoxStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "75px 25px",
    background: "white",
    [theme.breakpoints.up(1200)]: {
      flexDirection: "row",
    },
  },
  boxImageStyle: {
    p: "20px 5px 20px 35px",
    [theme.breakpoints.up(1200)]: { p: 1 },
  },
  imgStyle: {
    maxWidth: "90%",
  },
  textBoxStyle: {
    p: "5%",
    [theme.breakpoints.up(1200)]: {
      mt: -5,
      p: " 0 5% 0 0",
      width: "100%",
    },
  },
  titleStyle: {
    color: "#162753",
    fontSize: "20px",
    fontWeight: 700,
    margin: "0px 0px 25px",
    [theme.breakpoints.up(600)]: {
      fontSize: "33px",
    },
  },
  descriptionStyle: {
    fontSize: "14px",
    lineHeight: "180%",
    [theme.breakpoints.up(600)]: {
      fontSize: "18px",
    },
  },
};

export default aboutUsStyle;
