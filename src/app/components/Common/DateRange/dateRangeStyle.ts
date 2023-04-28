import { theme } from "../../../../theme/theme";

const dateRangeStyle = {
  labelStyle: {
    fontSize: "16px",
    fontWeight: 600,
    color: "black",
    width: "350px",
    transform: "translate(6%, -30%) scale(0.65) ",
  },
  pickupTextInputPropsStyle: {
    fontSize: "16px",
    fontWeight: 600,
    maxWidth: "250px",
    width: "100%",
    mb: 2,
    [theme.breakpoints.up(900)]: {
      mb: 0,
    },
  },
  returnTextInputPropsStyle: {
    fontSize: "16px",
    fontWeight: 600,
    maxWidth: "250px",
    width: "100%",
    mb: 2,
    [theme.breakpoints.up(900)]: {
      mb: 0,
    },
  },
  returnFormHelperTextStyle: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    ml: 4,
  },
  pickupFormHelperTextStyle: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
    ml: "16px",
  },
  pickupDayTextStyle: { height: "80px", mt: "23px" },
  returnDayTextStyle: { height: "80px", mt: "23px", ml: "16px" },
  buttonStyle: {
    color: "white",
    border: "white 2px solid",
    margin: "10px",
    fontSize: "10px",
    [theme.breakpoints.up(900)]: {
      margin: "15px",
      fontSize: "14px",
    },
  },
  mobileLabelStyle: {
    fontSize: "16px",
    fontWeight: 600,
    color: "black",
    width: "350px",
    transform: "translate(6%, -30%) scale(0.65) ",
  },
  mobilePickupTextInputPropsStyle: {
    fontSize: "16px",
    fontWeight: 600,
    maxWidth: "250px",
    width: "100%",
    mb: 2,
    [theme.breakpoints.up(900)]: {
      mb: 0,
    },
  },
  mobileReturnTextInputPropsStyle: {
    fontSize: "16px",
    fontWeight: 600,
    maxWidth: "250px",
    width: "100%",
    mb: 2,
    [theme.breakpoints.up(900)]: {
      mb: 0,
    },
  },
  mobileReturnFieldStyle: {
    height: "80px",
    mt: "3px",
    [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
      mt: "23px",
      ml: 3,
    },
  },
};

export default dateRangeStyle;
