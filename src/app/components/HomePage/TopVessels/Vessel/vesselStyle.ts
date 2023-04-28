import { theme } from "../../../../../theme/theme";

const vesselStyle = {
  mainCardStyle: {
    display: "flex",
    flexDirection: "column",
    mb: 4,
    width: "50%",
    margin: "0 auto",
    minWidth: "230px",
    [theme.breakpoints.down(700)]: {
      width: "75%",
    },
    [theme.breakpoints.down(500)]: {
      width: "90%",
    },
  },
  nameStyle: {
    textAlign: "center",
    mt: -1,
    mb: 1,
    fontSize: "20px",
    fontWeight: "600",
    textTransform: "capitalize",
    color: theme.palette.secondary.main,
  },
  priceBox: { display: "flex", justifyContent: "center", m: 2 },
  perDayStyle: {
    padding: "2px 5px",
    opacity: 0.7,
    color: theme.palette.secondary.main,
  },
  perWeekStyle: { padding: "2px 5px", opacity: 0.75 },
  priceStyle: { fontWeight: "700" },
  descBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "16px 0",
  },
  descStyle: {
    display: "flex",
    alignItems: "center",
    opacity: 0.75,
    fontSize: "16px",
    ml: 2,
  },
  iconStyle: { fontSize: "14px", m: "0 4px 0 0" },
};

export default vesselStyle;
