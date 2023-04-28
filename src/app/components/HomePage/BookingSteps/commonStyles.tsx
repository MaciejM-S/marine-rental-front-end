import { theme } from "../../../../theme/theme";
const styles: {
  mainBoxStyle: {};
  iconStyle: {};
  topSentStyle: {};
  botSentenceStyle: {};
} = {
  mainBoxStyle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: 200,
    [theme.breakpoints.down(700)]: {
      width: 300,
    },
    [theme.breakpoints.down(500)]: {
      width: 240,
    },
  },
  iconStyle: {
    fontSize: "30px",
    color: theme.palette.secondary.main,
    p: "6px 12px",
    borderRadius: "4px",
  },
  topSentStyle: {
    fontWeight: 600,
    margin: "10px 0",
    textTransform: "uppercase",
  },
  botSentenceStyle: {
    textAlign: "center",
  },
};

export default styles;
