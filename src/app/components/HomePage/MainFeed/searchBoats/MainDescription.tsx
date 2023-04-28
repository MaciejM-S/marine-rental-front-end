import { Box, Typography, Paper } from "@mui/material";
import { theme } from "../../../../../theme/theme";


const descriptionBoxStyle = {
  position: "absolute",
  width: "100%",
  top: "20px",
};

const paperStyle = {
  backgroundColor: "rgba(255,255,255,0.3)",
  padding: "15px 25px",
  [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]:{
    p:1,
    mt:-2,
  }
};

const topSentStyle = {
  textAlign: "center",
  color: "#143060",
  fontWeight: "600",
  fontSize: "20px",
  textTransform: "uppercase",
  [theme.breakpoints.between(400,900)]:{
    fontSize: "36px",
  },
  [theme.breakpoints.up(900)]:{
    fontSize: "67px",
  },
  [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]:{
    fontSize:'25px'
  },
  [`${theme.breakpoints.down(700)} and (orientation: landscape)`]:{
    fontSize:'15px'
  }
};
const botSentStyle = {
  textAlign: "center",
  color: "#143060",
  fontWeight: "500",
  fontSize: "16px",
  textTransform: "uppercase",
  [theme.breakpoints.between(400, 900)]:{
    fontSize: "20px",
  },
  [theme.breakpoints.up(900)]:{
    fontSize: "30px",
  },
  [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]:{
    fontSize:'15px'
  },
  [`${theme.breakpoints.down(700)} and (orientation: landscape)`]:{
    fontSize:'12px'
  }
};

function MainDescription() {
  return (
    <Box sx={{ ...descriptionBoxStyle }}>
      <Paper elevation={1} square={true} sx={paperStyle}>
        <Typography sx={topSentStyle}> A great selection </Typography>
        <Typography sx={botSentStyle}>
          {" "}
          of unique vessels for marine-life lovers!{" "}
        </Typography>
      </Paper>
    </Box>
  );
}

export default MainDescription;
