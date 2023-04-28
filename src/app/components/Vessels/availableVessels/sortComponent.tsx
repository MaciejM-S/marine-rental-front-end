import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  changeVessels,
  changeCurrentPage,
} from "../../../../features/criterions/criterionsSlice";
import { changeCriterion } from "../../../../features/criterions/sortCriterionsSlice";
import { theme } from "../../../../theme/theme";
import Autocomplete from "@mui/material/Autocomplete";
import { TextField, Paper, Typography } from "@mui/material";
import { baseUrl } from "../../../../features/baseUrl";

const sortCriterions = [
  { title: "The date: oldest first" },
  { title: "The date: newest first" },
  { title: "Price per day: lowest first" },
  { title: "Price per day: highest first" },
  { title: "Price per week: lowest first" },
  { title: "Price per week: highest first" },
];

type SortProps = {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const mainPaperStyle = {
  p: 1,
  width: 300,
  opacity: 0.9,
  [theme.breakpoints.down(800)]: {
    width: 270,
  },
  [theme.breakpoints.down(600)]: {
    mt: 1,
    mb: 1,
  },
  [theme.breakpoints.down(400)]: {
    width: 230,
  },
};
function SortComponent(props: SortProps) {
  const dispatch = useAppDispatch();
  const { criterion, city, size, type, pickupDay, returnDay } = useAppSelector(
    (state) => state.sortCriterions
  );
  const fetchVessels = (sort: string) => {
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
          sort:"${sort}",
          page:1,
          ) 
          {
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
  }}
  `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(changeVessels(res.data.vessels));
        props.setLoading(false);
      });
  };
  const handleSort = (e: React.SyntheticEvent<Element, Event>) => {
    dispatch(changeCurrentPage(1));
    props.setLoading(true);
    if (e.currentTarget.textContent) {
      dispatch(changeCriterion(e.currentTarget.textContent));
      fetchVessels(e.currentTarget.textContent);
    }
  };
  return (
    <Paper sx={mainPaperStyle}>
      <Autocomplete
        id="size-small-outlined"
        size="small"
        disableClearable={true}
        options={sortCriterions}
        getOptionLabel={(option) => option.title}
        onChange={handleSort}
        defaultValue={{ title: criterion }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={
              <Typography sx={{ textAlign: "left", ml:1 }}>
                Sort 
              </Typography>
            }
            InputProps={{
              ...params.InputProps,
              sx: { fontSize: "12px" },
            }}
            InputLabelProps={{
              sx: { width: 115 },
            }}
          />
        )}
      />
    </Paper>
  );
}

export default SortComponent;
