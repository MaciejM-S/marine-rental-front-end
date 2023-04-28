import { theme } from "../../../theme/theme";

const yourAccountStyle = {
  mainCardStyle: {
    maxWidth: 350,
    minWidth: 320,
    mb: 2,
    mt: 7.75,
    ml: "auto",
    p: 1,
    alignSelf: "start",
    [theme.breakpoints.down(1400)]: {
      m: "50px auto 0 auto",
      alignSelf: "center",
    },
    [theme.breakpoints.down(400)]: { minWidth: 0 },
  },
  keyStyle: {
    [theme.breakpoints.down(400)]: {
      fontSize: 12,
      [theme.breakpoints.down(300)]: {
        fontSize: 10,
      },
    },
  },
  featureStyle: {
    ml: 1,
    fontWeight: 600,
    [theme.breakpoints.down(400)]: {
      fontSize: 12,
    },
  },
  avatarStyle: {
    ml: 1,
    boxShadow:
      "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
  },
  updateButtonStyle: { ml: "auto", width: "110px", fontSize: "11px" },
  panelStyle: {
    [theme.breakpoints.down(1400)]: {
      marginTop: "50px",
    },
  },
  actionMainBoxStyle: {
    flexGrow: 1,
    bgcolor: "background.paper",
    display: "flex",
    m: 1,
    [theme.breakpoints.down(1000)]: { flexDirection: "column" },
  },
  tabsStyle: {
    borderRight: 1,
    borderColor: "divider",
    mt: 5,
    mb: 12,
    [theme.breakpoints.between(1000, 1400)]: { pt: -6 },
    [theme.breakpoints.down(1000)]: { mb: 0, borderRight: 0, mt: 2 },
  },
};

export default yourAccountStyle;
