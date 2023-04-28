import { theme } from "../../../theme/theme";

const vesselStyle = {
  mainPaperStyle: {
    background: "rgba(255,255,255, 0.95)",
    p: 4,
    [theme.breakpoints.down(600)]: {
      p: 0,
    },
  },
  submitButtonStyle: {
    ml: 2,
    color: "white",
    fontWeight: 600,
    mr: 2,
    pl: 3,
    pr: 3,
    [theme.breakpoints.down(600)]: {
      margin: "15px 0 25px",
    },
  },
  mainBoxStyle: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  featuersBoxStyle: {
    display: "flex",
    width: 500,
    [theme.breakpoints.down(600)]: {
      display: "none",
    },
  },
  dateRangeBoxStyle: {
    m: 4,
    display: "flex",
    width: 500,
    [theme.breakpoints.down(600)]: {
      width: "90%",
      justifyContent: "space-around",
      alignItems: "center",
      m: "15px 0px",
    },
  },
};

export default vesselStyle;
