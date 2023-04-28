import { theme } from "../../../../theme/theme";

const footerStyle = {
  logoStyle: {
    width: "220px",
  },
  contactRowStyle: {
    display: "flex",
    justifyContent: "center",
    color: "#CCC",
    mt: 1,
  },
  textStyle: {
    [theme.breakpoints.down(450)]: {
      fontSize: "12px",
    },
  },
};

export default footerStyle;
