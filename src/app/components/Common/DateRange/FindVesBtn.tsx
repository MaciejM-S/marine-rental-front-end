import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { changeMainNav } from "../../../../features/navigation/navigationSlice";
import { changeVessels } from "../../../../features/criterions/criterionsSlice";
import {
  changeCitySort,
  changeSizeSort,
  changeTypeSort,
  changeReturnDaySort,
  changePickupDaySort,
} from "../../../../features/criterions/sortCriterionsSlice";
import {
  changeCurrentPage,
  changeVesNum,
} from "../../../../features/criterions/criterionsSlice";
import { styled } from "@mui/material/styles";
import { theme } from "../../../../theme/theme";
import { CircularProgress } from "@mui/material";
import { Button } from "@mui/material";
import dateRangeStyle from "./dateRangeStyle";
import { baseUrl } from "../../../../features/baseUrl";

const { buttonStyle } = dateRangeStyle;

type FindVesProps = {
  returnDayError: string;
  pickupDayError: string;
};

const MyButton = styled(Button)({
  "&.Mui-disabled": {
    opacity: 1,
    background: theme.palette.secondary.main,
    color: "white",
  },
});

function FindVesBtn(props: FindVesProps) {
  const dispatch = useAppDispatch();
  const { city, size, type, pickupDay, returnDay } = useAppSelector(
    (state) => state.criterions
  );
  const { criterion } = useAppSelector((state) => state.sortCriterions);
  const [loading, setLoading] = React.useState(true);
  const navigate = useNavigate();
  const handleFindVes = () => {
    if (props.returnDayError !== "" && props.pickupDayError !== "") {
      return;
    }
    setLoading(true);
    fetch( baseUrl+"/graphql", {
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
        setLoading(false);
        dispatch(changeMainNav(1));
        navigate("/vessels");
      });
  };

  return (
    <>
      {loading ? (
        <Button variant="contained" onClick={handleFindVes} sx={buttonStyle}>
          Find a Vessel
        </Button>
      ) : (
        <MyButton disabled variant="contained" sx={buttonStyle}>
          Searching
          <CircularProgress size={16} sx={{ ml: 1 }} />
        </MyButton>
      )}
    </>
  );
}

export default FindVesBtn;
