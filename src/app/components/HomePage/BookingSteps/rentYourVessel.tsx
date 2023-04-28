import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import { changeMainNav } from "../../../../features/navigation/navigationSlice";
import { useAppDispatch } from "../../../hooks";
import { Box, Typography, Paper } from "@mui/material";
import SailingIcon from "@mui/icons-material/Sailing";
import styles from "./commonStyles";

const { mainBoxStyle, iconStyle, topSentStyle, botSentenceStyle } = styles;
function RentYourVessel() {
  const dispatch = useAppDispatch();
  const signedIn = useAppSelector((state) => state.user.authenticated);
  const navigate = useNavigate();
  const handleStep = () => {
    if (signedIn) {
      navigate("/your-account");
      dispatch(changeMainNav(2));
    } else {
      navigate("/sign-in");
    }
  };
  return (
    <Box sx={mainBoxStyle}>
      <Paper elevation={2} sx={{ cursor: "pointer" }} onClick={handleStep}>
        <SailingIcon sx={iconStyle} />
      </Paper>
      <Typography component="h4" sx={topSentStyle}>
        Rent Your Vessel
      </Typography>
      <Typography sx={botSentenceStyle} component="h5">
        You want to rent your vessel when you do not use it? Sing Up, add your
        vessel, make a deal - so simple.
      </Typography>
    </Box>
  );
}
export default RentYourVessel;
