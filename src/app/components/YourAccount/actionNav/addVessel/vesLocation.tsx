import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { addLocation } from "../../../../../features/vessel/vesselSlice";
import { locations as locationTypings } from "../../../../../typings/location";
import TextField from "@mui/material/TextField";

const locations = locationTypings.map((location) => ({
  value: location,
  label: location,
}));

function VesLocation() {
  const dispatch = useAppDispatch();
  const { location } = useAppSelector((state) => state.vessel);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(location);
    dispatch(addLocation(e.target.value));
  };
  return (
    <TextField
      sx={{ m: "20px 0 0" }}
      id="outlined-select-currency-native"
      select
      label="City"
      defaultValue="EUR"
      onChange={handleChange}
      SelectProps={{
        native: true,
      }}
    >
      {locations.map((option) => (
        <option key={option.value} value={option.label}>
          {option.label}
        </option>
      ))}
    </TextField>
  );
}

export default VesLocation;
