import DateRange from "./dateRange";
import { Box, Typography } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function DatePicker() {
  return (
    <>
      <Box sx={{ color: "rgba(0, 0, 0, 0.6)", ml: 2.5 }}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Typography>Enter dates when your vessel is available: </Typography>
          <Box sx={{ mt: 2, mb: 2 }}>
            <DateRange />
          </Box>
        </LocalizationProvider>
      </Box>
    </>
  );
}

export default DatePicker;
