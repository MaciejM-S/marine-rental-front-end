import { Paper } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { theme } from "../../../../../theme/theme";
import DesktopDateRange from "../../../Common/DateRange/DesktopDatePicker";
import MobileDateRange from "../../../Common/DateRange/MobileDatePicker";
import { useEffect, useState } from "react";

const paperStyle = {
  display: "flex",
  top: "230px",
  left: "50%",
  p: "25px 10px 0px",
  flexDirection: "column",
  position: "absolute",
  transform: "translate(-50%)",
  justifyContent: "center",
  background: "rgba(255,255,255,0.72)",
  minWidth: "250px",
  alignItems: "center",
  [theme.breakpoints.up(600)]: {
    p: "15px 40px 0px",
  },
  [theme.breakpoints.up(900)]: {
    flexDirection: "row",
    top: "400px",
    width: "80%",
    maxWidth: "750px",
    p: 4,
  },
 
};


function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function DatePicker() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Paper
          sx={{...paperStyle,  [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]:windowSize.innerHeight>300?
          {flexDirection:'row', top:124, width:'80%', padding:'0 20px '}:
          {flexDirection:'row', top:65, width:'80%', padding:'0 20px'},
          [`${theme.breakpoints.down(1000)} and (orientation: portrait)`]:
              windowSize.innerHeight>800?{top:400}:{}
        }}
        >
          {(windowSize.innerWidth > 900 || windowSize.innerWidth === 900) && (
            <DesktopDateRange />
          )}
          {windowSize.innerWidth < 900 && <MobileDateRange />}
        </Paper>
      </LocalizationProvider>
    </>
  );
}

export default DatePicker;
