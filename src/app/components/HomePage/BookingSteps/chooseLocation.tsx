import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { changeMainNav } from "../../../../features/navigation/navigationSlice";
import styles from "./commonStyles";
import { Box, Typography, Paper } from "@mui/material";
import MapIcon from "@mui/icons-material/Map";
const { mainBoxStyle, iconStyle, topSentStyle, botSentenceStyle } = styles;

function ChooseLocation() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleStep = () => {
    navigate("/vessels");
    dispatch(changeMainNav(1));
  };

  return (
    <Box sx={mainBoxStyle}>
      <Paper sx={{ cursor: "pointer" }} onClick={handleStep} elevation={2}>
        <MapIcon sx={iconStyle} />
      </Paper>
      <Typography component="h4" sx={topSentStyle}>
        {" "}
        Choose Criterions
      </Typography>
      <Typography sx={botSentenceStyle} component="h5">
        Find the nearest Marine Store point. If you have more criterions choose
        size and type of vessel you are looking for.
      </Typography>
    </Box>
  );
}

export default ChooseLocation;
