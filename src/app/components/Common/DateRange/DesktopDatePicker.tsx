import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  changePickupDay,
  changeReturnDay,
} from "../../../../features/criterions/criterionsSlice";
import FindVesBtn from "./FindVesBtn";
import dateRangeStyle from "./dateRangeStyle";
import { theme } from "../../../../theme/theme";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { TextField } from "@mui/material";

const {
  labelStyle,
  pickupTextInputPropsStyle,
  returnTextInputPropsStyle,
  returnFormHelperTextStyle,
  pickupFormHelperTextStyle,
  pickupDayTextStyle,
  returnDayTextStyle,
} = dateRangeStyle;

function DesktopDateRange() {
  const dispatch = useAppDispatch();
  const { pickupDay, returnDay } = useAppSelector((state) => state.criterions);
  const [pickupDayError, setPickupDayError] = React.useState("");
  const [returnDayError, setReturnDayError] = React.useState("");
  const handleChangePickup = (newValue: Dayjs | null) => {
    if (!newValue?.isValid()) {
      return setPickupDayError("please input correct date");
    } else {
      setPickupDayError("");
      dispatch(changePickupDay(dayjs(newValue).format("YYYY-MM-DD")));
      if (dayjs(newValue).isAfter(returnDay)) {
        dispatch(
          changeReturnDay(dayjs(newValue).add(1, "day").format("YYYY-MM-DD"))
        );
      }
    }
  };
  const handleChangeReturn = (newValue: Dayjs | null) => {
    if (!newValue?.isValid()) {
      return setReturnDayError("please input correct date");
    } else {
      setReturnDayError("");
      dispatch(changeReturnDay(dayjs(newValue).format("YYYY-MM-DD")));
    }
  };
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DesktopDatePicker
        label="Pickup day"
          PopperProps={{
            sx: { opacity: 0.97 },
          }}
          inputFormat="DD/MM/YYYY"
          minDate={dayjs(dayjs().format("YYYY-MM-DD"))}
          value={pickupDay}
          onChange={handleChangePickup}
          renderInput={(params) => {
            return (
              <TextField
                color="secondary"
                label="Pick up day"
                value={pickupDay}
                {...params}
                helperText={pickupDayError}
                sx={pickupDayTextStyle}
                InputProps={{
                  ...params.InputProps,
                  sx: {
                    pickupTextInputPropsStyle,
                  },
                }}
                InputLabelProps={{
                  ...params.InputLabelProps,
                  sx: labelStyle,
                }}
                FormHelperTextProps={{
                  sx: pickupFormHelperTextStyle,
                }}
              />
            );
          }}
        />
        <DesktopDatePicker
          label="Return day"
          inputFormat="DD/MM/YYYY"
          minDate={dayjs(dayjs(pickupDay).format("YYYY-MM-DD"))}
          value={returnDay}
          onChange={handleChangeReturn}
          renderInput={(params) => (
            <TextField
              color="secondary"
              sx={returnDayTextStyle}
              {...params}
              label="Return day"
              helperText={returnDayError}
              InputProps={{
                ...params.InputProps,
                sx: {
                  returnTextInputPropsStyle,
                },
              }}
              InputLabelProps={{
                ...params.InputLabelProps,
                sx: {
                  ...labelStyle,
                  [theme.breakpoints.up(900)]: {
                    transform: "translate(5.5%,-30%) scale(0.65) ",
                  },
                },
              }}
              FormHelperTextProps={{
                sx: returnFormHelperTextStyle,
              }}
            />
          )}
        />
      </LocalizationProvider>
      <FindVesBtn
        returnDayError={returnDayError}
        pickupDayError={pickupDayError}
      />
    </>
  );
}

export default DesktopDateRange;
