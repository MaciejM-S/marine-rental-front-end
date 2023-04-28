import { theme } from "../../../../theme/theme";

const miniVesselStyle = {
  iconStyle: {
    fontSize: 40,
    opacity: 0.9,
    textAlign: "center",
    mt: 0.5,
  },
  paperStyle: {
    width: 45,
    position: "absolute",
    bottom: 40,
    right: 50,
    textAlign: "center",
    cursor: "pointer",
    zIndex: 10,
    [theme.breakpoints.down(800)]: {
      bottom: 7,
      right: 50,
    },
    [theme.breakpoints.down(450)]: {
      right: 40,
    },
    [theme.breakpoints.down(350)]: {
      right: 10,
    },
  },
  addedBoxStyle: {
    position: "absolute",
    width: "100px",
    bottom: -30,
    left: -26,
    transition: "1s",
  },
  addedTypoStyle: {
    fontSize: "10px",
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },
  noLikeBoxStyle: {
    position: "absolute",
    width: "100px",
    bottom: -30,
    left: -26,
    transition: "1s",
  },
  noLikeTypoStyle: {
    fontSize: "10px",
    color: theme.palette.secondary.main,
    fontWeight: 600,
  },
  manageTitleStyle: {
    fontSize: "14px",
  },
  manageMainBoxStyle: {
    color: theme.palette.secondary.main,
    pt: 1,
    mt: 1,
    display: "flex",
    [theme.breakpoints.between(800, 1000)]: {
      flexDirection: "column",
    },
  },
  deleteBoxStyle: {
    display: "flex",
    ml: 1,
    [theme.breakpoints.between(800, 1000)]: {
      m: 1,
    },
    "&:hover": {
      color: theme.palette.primary.main,
      transition: "0.2s",
      cursor: "pointer",
    },
  },
  displayBoxStyle: {
    display: "flex",
    ml: 1,
    [theme.breakpoints.between(800, 1000)]: {
      m: 1,
    },
    "&:hover": {
      color: theme.palette.primary.main,
      transition: "0.2s",
      cursor: "pointer",
    },
  },
  editBoxStyle: {
    display: "flex",
    [theme.breakpoints.between(800, 1000)]: {
      m: 1,
    },
    "&:hover": {
      color: theme.palette.primary.main,
      transition: "0.2s",
    },
    cursor: "pointer",
  },
  buttonStyle: {
    background: theme.palette.primary.main,
    transition: "0.3s",
    color: "white",
    "&:hover": {
      background: theme.palette.secondary.main,
    },
  },
  removeButtonStyle: {
    background: theme.palette.primary.main,
    transition: "0.3s",
    color: "white",
    "&:hover": {
      background: theme.palette.secondary.main,
    },
  },

  mainPaperStyle: {
    position: "relative",
    opacity: 0.9,
    m: "15px auto",
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "900px",
    [theme.breakpoints.down(800)]: { flexDirection: "column" },
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
  priceBox: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    mt: 3,
    mr: 5,
    [theme.breakpoints.down(800)]: {
      margin: "0 auto 15px",
      flexWrap: "wrap",
      alignItems: "center",
    },
    cursor: "pointer",
  },
  perDayStyle: {
    padding: "2px 5px",
    opacity: 0.7,
    color: theme.palette.secondary.main,
  },
  pictureStyle: {
    width: "300px",
    height: "180px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    [theme.breakpoints.down(800)]: {
      margin: "0 auto",
      width: "auto",
      maxWidth: "480px",
      height: "250px",
    },
    [theme.breakpoints.down(450)]: {
      height: "250px",
    },
    [theme.breakpoints.down(350)]: {
      height: "200px",
    },
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
    [theme.breakpoints.down(400)]: {
      ml: 1,
    },
  },
  nextIconStyle: { fontSize: "14px", m: "0 4px 0 0" },
};

export default miniVesselStyle;
