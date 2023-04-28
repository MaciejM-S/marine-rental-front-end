import { theme } from "../../../../../../theme/theme";

const datePickerStyle = {
  labelStyle: {
    fontSize: "16px",
    fontWeight: 400,
    color: "black",
    width: "250px",
    transform: "translate(6%, -30%) scale(0.65) ",
    opacity: 0.6,
  },
  helperTextProps: {
    sx: {
      fontSize: 12,
      fontWeight: 700,
      color: theme.palette.primary.main,
      ml: 2,
    },
  },
  pickupStyle: {
    fontSize: "14px",
    fontWeight: 400,
    maxWidth: "200px",
    width: "100%",
    mb: 2,
    [theme.breakpoints.up(900)]: {
      mb: 0,
    },
  },

  returnStyle: {
    fontSize: "14px",
    fontWeight: 400,
    maxWidth: "200px",
    [theme.breakpoints.up(900)]: {
      ml: 2,
    },
  },
};

export default datePickerStyle;
