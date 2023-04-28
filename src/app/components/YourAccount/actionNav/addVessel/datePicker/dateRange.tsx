import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { useAppDispatch, useAppSelector } from "../../../../../hooks";
import {
  addPickupDay,
  addReturnDay,
} from "../../../../../../features/vessel/vesselSlice";
import { theme } from "../../../../../../theme/theme";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import datePickerStyle from "./datePickerStyle";

const { labelStyle, helperTextProps, pickupStyle, returnStyle } =
  datePickerStyle;
function DateRange() {
  const dispatch = useAppDispatch();
  const { pickupDay, returnDay } = useAppSelector((state) => state.vessel);
  const [pickupDayError, setPickupDateError] = React.useState("");
  const [returnDayError, setReturnDayError] = React.useState("");
  const handleChangePickup = (newValue: Dayjs | null) => {
    if (!newValue?.isValid()) {
      return setPickupDateError("please input correct date");
    }
    setPickupDateError("");
    dispatch(addPickupDay(dayjs(newValue).format("YYYY-MM-DD")));
  };
  const handleChangeReturn = (newValue: Dayjs | null) => {
    if (!newValue?.isValid()) {
      return setReturnDayError("please input correct date");
    }
    dispatch(addReturnDay(dayjs(newValue).format("YYYY-MM-DD")));
    setReturnDayError("");
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
          PopperProps={{}}
          inputFormat="DD/MM/YYYY"
          minDate={dayjs(dayjs().format("YYYY-MM-DD"))}
          value={pickupDay}
          onChange={handleChangePickup}
          renderInput={(params) => {
            return (
              <TextField
                color="primary"
                {...params}
                label="Pick up day"
                helperText={pickupDayError}
                FormHelperTextProps={helperTextProps}
                InputProps={{
                  ...params.InputProps,
                  sx: pickupStyle,
                }}
                InputLabelProps={{
                  ...params.InputLabelProps,
                  sx: labelStyle,
                }}
              />
            );
          }}
        />
        <DesktopDatePicker
          label="Return day"
          inputFormat="DD/MM/YYYY"
          minDate={dayjs(pickupDay)}
          value={returnDay}
          onChange={handleChangeReturn}
          renderInput={(params) => (
            <TextField
              color="primary"
              {...params}
              helperText={returnDayError}
              label="Return day"
              FormHelperTextProps={{
                ...helperTextProps,
                sx: { ...helperTextProps.sx, ml: 4 },
              }}
              InputProps={{
                ...params.InputProps,
                sx: returnStyle,
              }}
              InputLabelProps={{
                ...params.InputLabelProps,
                sx: {
                  ...labelStyle,
                  [theme.breakpoints.up(900)]: {
                    transform: "translate(12%, -30%) scale(0.65) ",
                  },
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
}

export default DateRange;
