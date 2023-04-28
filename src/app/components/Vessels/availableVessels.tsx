import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changeCurrentPage } from "../../../features/criterions/criterionsSlice";
import SortComponent from "./availableVessels/sortComponent";
import {
  changeVessels,
  changeVesNum,
} from "../../../features/criterions/criterionsSlice";
import { theme } from "../../../theme/theme";
import { Box, Typography, Container, Paper, Pagination } from "@mui/material";
import Vessel from "../Common/MiniVessel/miniVessel";
import { CircularProgress } from "@mui/material";
import { baseUrl } from "../../../features/baseUrl";

const mainSortComponentStyle = {
  display: "flex",
  justifyContent: "space-between",
  margin: "0 auto",
  mt: 2,
  maxWidth: "900px",
  [theme.breakpoints.down(600)]: {
    display: "flex",
    flexDirection: "column",
  },
};

function AvailableVessels() {
  const {
    city,
    size,
    type,
    pickupDay,
    returnDay,
    vesNum,
    currentPage,
    vessels,
  } = useAppSelector((state) => state.criterions);
  const dispatch = useAppDispatch();
  const { criterion } = useAppSelector((state) => state.sortCriterions);
  const [loading, setLoading] = React.useState(false);
  const handlePagination = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(changeCurrentPage(value));
    fetchVessels(value);
  };
  const fetchVessels = (value: number) => {
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
          page:${value},
          ){
            _id
            name
            description
            user
            location
            year
            size
            type
            pricePerDay
            pricePerWeek
            pickupDay
            returnDay
            pictures {
            data
                }
            amount    
        }}
        `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        dispatch(changeVessels(res.data.vessels));
        if (res.data.vessels.length > 0) {
          dispatch(changeVesNum(res.data.vessels[0].amount));
        } else {
          dispatch(changeVesNum(0));
        }
      });
  };
  React.useEffect(() => {
    fetchVessels(1);
  }, []);

  if (loading) {
    return (
      <Box sx={{ textAlign: "center", m: 4.5 }}>
        <CircularProgress thickness={1.5} size={75} />
      </Box>
    );
  }
  return (
    <>
      <Box>
        <Container>
          <Box sx={mainSortComponentStyle}>
            <Box>
              <Typography component="h3" variant="h5" sx={{ color: "white" }}>
                {" "}
                Available ({vessels && vesNum}) vessels:{" "}
              </Typography>
            </Box>
            <SortComponent setLoading={setLoading} />
          </Box>
        </Container>
        <Container>
          {vessels &&
            vessels.map((vessel, index) => (
              <Vessel id={index} ves={vessel} yourVessels={false} />
            ))}
        </Container>
      </Box>
      {vesNum && vesNum > 5 && (
        <Pagination
          color="primary"
          sx={{ textAlign: "center", m: 2 }}
          count={Math.floor(vesNum / 5) + 1}
          page={currentPage}
          onChange={handlePagination}
        />
      )}
    </>
  );
}

export default AvailableVessels;
