import { theme } from "../../../../theme/theme";

const topVesselsStyle = {
  titleStyle: {
    fontSize: "35px",
    fontWeight: 700,
    color: "#162753",
    [theme.breakpoints.down(900)]: {
      fontSize: "25px",
    },
  },
  mainBoxIndexStyle: {
    bgcolor: "background.paper",
    pt: 4,
    pb: 3,
  },
};

export default topVesselsStyle;
