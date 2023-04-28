import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { changeVessels } from "../../../features/criterions/criterionsSlice";
import {
  changeCitySort,
  changeTypeSort,
  changeSizeSort,
  changePickupDaySort,
  changeReturnDaySort,
} from "../../../features/criterions/sortCriterionsSlice";
import { changeCurrentPage } from "../../../features/criterions/criterionsSlice";
import { changeVesNum } from "../../../features/criterions/criterionsSlice";
import Location from "./searchVessels/location";
import Size from "./searchVessels/size";
import Type from "./searchVessels/type";
import DesktopVesselsDateRange from "./searchVessels/desktopVesselsDateRange";
import MobileVesselsDateRange from "./searchVessels/mobileVesselsDateRange";
import MobileFilter from "./searchVessels/mobileFilter/mobileFilter";
import vesselStyle from "./vesselsStyle";
import { theme } from "../../../theme/theme";
import { Box, Paper, Typography, Button } from "@mui/material";
import { CircularProgress } from "@mui/material";
import { baseUrl } from "../../../features/baseUrl";

const {
  mainPaperStyle,
  submitButtonStyle,
  mainBoxStyle,
  featuersBoxStyle,
  dateRangeBoxStyle,
} = vesselStyle;

function SearchVessels() {
  const [loading, setLoading] = React.useState(false);
  const { city, size, type, pickupDay, returnDay } = useAppSelector(
    (state) => state.criterions
  );
  const { criterion } = useAppSelector((state) => state.sortCriterions);
  const dispatch = useAppDispatch();
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  const handleSearch = () => {
    setLoading(true);
    fetch(baseUrl+"/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{vessels ( 
          city:"${city}", 
          size:"${size}", 
          type:"${type}",
          pickupDay:"${pickupDay}", 
          returnDay:"${returnDay}",
          sort:"${criterion}",
          page:1
          ) 
          {
      _id
      name
      user
      location
      year
      size
      type
      pricePerDay
      pricePerWeek
      pickupDay
      returnDay
      amount
      pictures {
      data
          }
  }}
  `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        dispatch(changeVessels(res.data.vessels));
        dispatch(changeCitySort(city));
        dispatch(changeSizeSort(size));
        dispatch(changeTypeSort(type));
        dispatch(changePickupDaySort(pickupDay));
        dispatch(changeReturnDaySort(returnDay));
        dispatch(changeCurrentPage(1));
        if (res.data.vessels && res.data.vessels.length > 0) {
          dispatch(changeVesNum(res.data.vessels[0].amount));
        } else {
          dispatch(changeVesNum(0));
        }
      });
  };

  return (
    <>
      <Paper sx={mainPaperStyle}>
        <Box sx={mainBoxStyle}>
          <Typography sx={{ mb: 1, mt: 2, fontWeight: 600, fontSize: "18px" }}>
            Find your vessel:
          </Typography>
          <Box sx={featuersBoxStyle}>
            <Location />
            <Size />
            <Type />
          </Box>
          <Box
            sx={{
              [theme.breakpoints.up(600)]: {
                display: "none",
              },
            }}
          >
            <MobileFilter />
          </Box>
          <Box sx={dateRangeBoxStyle}>
            {windowWidth > 600 && <DesktopVesselsDateRange />}
            {windowWidth <= 600 && <MobileVesselsDateRange />}
          </Box>
          <Button
            disabled={loading}
            variant="contained"
            onClick={handleSearch}
            sx={submitButtonStyle}
          >
            Show available vessels
            {loading && <CircularProgress sx={{ ml: 1 }} size={18} />}
          </Button>
        </Box>
      </Paper>
    </>
  );
}

export default SearchVessels;
