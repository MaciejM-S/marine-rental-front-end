import { theme } from "../../../../theme/theme";

const vesselStyle = {
  mainBoxStyle: {
    maxWidth: "980px",
    margin: "40px auto",
    padding: "0 30px",
    [theme.breakpoints.down(800)]: {
      p: 0,
    },
  },
  infoStyle: {
    m: 1,
    mt: 2,
    [theme.breakpoints.down(800)]: {
      flexDirection: "column",
    },
  },

  priceBox: {
    display: "flex",
  },
  perDayStyle: {
    padding: "2px 5px",
    opacity: 0.7,
    color: theme.palette.secondary.main,
  },
  perWeekStyle: { padding: "2px 5px", opacity: 0.75 },
  priceStyle: {
    fontWeight: "700",
    fontSize: "18px",
    [theme.breakpoints.down(600)]: {
      fontSize: "12px",
    },
  },
  descBox: {
    display: "flex",
    ml: 0.5,
    [theme.breakpoints.down(400)]: {
      ml: 0,
    },
  },
  descStyle: {
    display: "flex",
    alignItems: "center",
    opacity: 0.75,
    fontSize: "18px",
    ml: 2,
    [theme.breakpoints.down(400)]: {
      ml: 1,
    },
  },
  iconStyle: { fontSize: "14px", m: "0 4px 0 0" },
  indexBoxStyle: {
    height: "60vh",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  captionStyle: {
    display: "none",
    fontSize: "2em",
    fontWeight: "bold",
    fontFamily: "open-sans",
  },
  slideNumberStyle: {
    display: "none",
    fontSize: "20px",
    fontWeight: "bold",
  },
};

export default vesselStyle;
