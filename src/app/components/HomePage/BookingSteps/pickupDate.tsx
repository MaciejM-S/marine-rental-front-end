import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../hooks";
import { changeMainNav } from "../../../../features/navigation/navigationSlice";
import { Box, Typography, Paper } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import styles from "./commonStyles";
const { mainBoxStyle, iconStyle, topSentStyle, botSentenceStyle } = styles;

function PickupDate() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleStep = () => {
    navigate("/vessels");
    dispatch(changeMainNav(1));
  };
  return (
    <Box sx={mainBoxStyle}>
      <Paper sx={{ cursor: "pointer" }} onClick={handleStep} elevation={2}>
        <CalendarMonthIcon sx={iconStyle} />
      </Paper>
      <Typography component="h4" sx={topSentStyle}>
        {" "}
        Pick-Up Date
      </Typography>
      <Typography sx={botSentenceStyle} component="h5">
        Pickup the best date to rent a sail for you and search for vessels. Use
        owners' contact card to finalize a deal.{" "}
      </Typography>
    </Box>
  );
}

export default PickupDate;
