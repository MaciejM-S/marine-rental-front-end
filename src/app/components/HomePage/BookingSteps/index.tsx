import ChooseLocation from "./chooseLocation";
import PickupDate from "./pickupDate";
import RentYourVessel from "./rentYourVessel";
import { Box, Typography } from "@mui/material";
import bookingStepsStyle from "./bookingStepsStyle";
const { titleStyle, mainBoxStyle, itemStyle } = bookingStepsStyle;

function BookingSteps() {
  return (
    <>
      <Typography sx={titleStyle}>Our Working Steps:</Typography>
      <Box sx={mainBoxStyle}>
        <Box sx={itemStyle}>
          <ChooseLocation />
        </Box>
        <Box sx={itemStyle}>
          <PickupDate />
        </Box>
        <Box sx={itemStyle}>
          <RentYourVessel />
        </Box>
      </Box>
    </>
  );
}

export default BookingSteps;
