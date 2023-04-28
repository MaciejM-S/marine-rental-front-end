import { theme } from "../../../../theme/theme";

export const noItemStyle = {
  display: "block",
  fontSize: "22px",
  fontWeight: 600,
  pl: 2,
  pr: 2,
  pt: 5,
  opacity: 0.85,
  color: theme.palette.secondary.main,
  textAlign: "center",
};
const actionNavStyle = {
  helperTextProps: {
    sx: {
      fontWeight: 700,
      color: theme.palette.primary.main,
    },
  },
  imageErrorStyle: {
    m: "-20px 0 30px 30px",
    fontWeight: 700,
    color: theme.palette.primary.main,
    fontSize: 13,
  },
  yearErrorStyle: {
    ml: 2,
    mt: 0.25,
    fontSize: 12,
  },
  mainBoxStyle: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  infoStyle: {
    color: theme.palette.secondary.main,
    textAlign: "center",
    p: 1,
    fontWeight: 700,
    fontSize: 20,
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    transition: "0.5s",
    top: 15,
    width: "75vw",
    [theme.breakpoints.down(450)]: {
      width: "85vw",
      fontSize: 15,
    },
  },
  favoriteMainBoxStyle: {
    position: "relative",
    maxWidth: 800,
    width: "60vw",
    p: 4,
    pt: 7,
    overflow: "hidden",
    borderRadius: 2,
    [theme.breakpoints.down(1000)]: {
      width: "85vw",
    },
  },
   favoriteInfoStyle : {
    color: theme.palette.secondary.main,
    textAlign: "center",
    p: 1,
    fontWeight: 700,
    fontSize: 20,
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    transition: "0.5s",
    top:15,
    width:'75vw',
    [theme.breakpoints.down(450)]:{
      width:'85vw',
    fontSize: 15,
    }
  }, 
  yourVesMainBoxStyle : {
    position: "relative",
    maxWidth:800,
    width: "60vw",
    p: 3,
    pt: 7,
    overflow: "hidden",
    borderRadius: 2,
    [theme.breakpoints.down(1400)]: {
      width: "85vw",
    },
  }
};

export default actionNavStyle;
