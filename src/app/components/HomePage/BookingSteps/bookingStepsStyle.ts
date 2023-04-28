import { theme } from "../../../../theme/theme"

const bookingStepsStyle = {
  titleStyle : {
    textAlign: "center",
    pt: "100px",
    color: "#143060",
    background: "white",
    fontSize: "33px",
    fontWeight: "700",
    [theme.breakpoints.down(900)]: {
      pt: "50px",
      fontSize: "25px",
    },
  },
  mainBoxStyle : {
    display: "flex",
    flexDirection: "column",
    background: "white",
    justifyContent: "center",
    padding: "30px 5% 40px",
    alignItems: "center",
    [theme.breakpoints.up(700)]: {
      flexDirection: "row",
    },
  },
  itemStyle : {
    height: "250px",
    margin: "15px 3%",
    [theme.breakpoints.down(750)]: {
      margin: "10px 1%",
      height: "200px",
    },
  },

}


export default bookingStepsStyle