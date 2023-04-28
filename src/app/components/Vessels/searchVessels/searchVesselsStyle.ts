import { theme } from "../../../../theme/theme";

const searchVesselsStyl = {
  labelStyle: {
    fontSize: "16px",
    fontWeight: 700,
    color: "black",
    width: "250px",
    transform: "translate(6%, -30%) scale(0.65) ",
  },

  desktopPickupInputStyle: {
    fontSize: "14px",
    fontWeight: 600,
    maxWidth: "250px",
    width: "100%",
    mb: 2,
    opacity: 0.9,
    [theme.breakpoints.up(900)]: {
      mb: 0,
    },
  },
  desktopReturnInputStyle: {
    fontSize: "14px",
    fontWeight: 600,
    opacity: 0.9,
    maxWidth: "250px",
    width: "94.5%",
    ml: 2,
  },
  autocompleteStyle: {
    width: 200,
    margin: "0 5px 0 0",
    [theme.breakpoints.down(600)]: { width: 200, m: "10px" },
  },
  sizeAutocompleteStyle: {
    width: 200,
    margin: "0 5px 0 0",
    [theme.breakpoints.down(800)]: {
      width: 150,
    },
  },
  mobilePickupInputStyle: {
    fontSize: "14px",
    fontWeight: 600,
    maxWidth: "250px",
    opacity: 0.9,
    mr: "2px",
  },
  mobileReturnInputStyle: {
    fontSize: "14px",
    fontWeight: 600,
    opacity: 0.9,
    maxWidth: "250px",
    ml: "2px",
  },
  typeAutocompleteStyle: {
    width: 200,
    margin: "0",
    [theme.breakpoints.down(800)]: { width: 140 },
  },
};

export default searchVesselsStyl;
