import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { Button, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { theme } from "../../../../theme/theme";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  changePickupDay,
  changeReturnDay,
} from "../../../../features/criterions/criterionsSlice";
import FindVesBtn from "./FindVesBtn";
import { MobileDatePicker } from "@mui/x-date-pickers";
import dateRangeStyle from "./dateRangeStyle";
const {mobileLabelStyle,
  mobilePickupTextInputPropsStyle,
  mobileReturnTextInputPropsStyle,
  mobileReturnFieldStyle} = dateRangeStyle


function MobileDateRange() {
  const { pickupDay, returnDay } = useAppSelector((state) => state.criterions);
  const dispatch = useAppDispatch();
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
        <MobileDatePicker
          inputFormat="DD/MM/YYYY"
          minDate={dayjs(dayjs().format("YYYY-MM-DD"))}
          value={pickupDay}
          onChange={handleChangePickup}
          renderInput={(params) => {
            return (
              <TextField
                color="secondary"
                value={pickupDay}
                {...params}
                helperText={pickupDayError}
                label="Pick up day"
                sx={{ height: "80px", mt: "23px" }}
                InputProps={{
                  ...params.InputProps,
                  sx: {
                    mobilePickupTextInputPropsStyle,
                  },
                }}
                InputLabelProps={{
                  ...params.InputLabelProps,
                  sx: mobileLabelStyle,
                }}
                FormHelperTextProps={{
                  sx: {
                    color: theme.palette.secondary.main,
                    fontWeight: 700,
                    ml: "16px",
                  },
                }}
              />
            );
          }}
        />
        <MobileDatePicker
          label="Return day"
          inputFormat="DD/MM/YYYY"
          minDate={dayjs(dayjs(pickupDay).format("YYYY-MM-DD"))}
          value={returnDay}
          onChange={handleChangeReturn}
          renderInput={(params) => (
            <TextField
              color="secondary"
              sx={mobileReturnFieldStyle}
              {...params}
              label="Return day"
              helperText={returnDayError}
              InputProps={{
                ...params.InputProps,
                sx: {
                  mobileReturnTextInputPropsStyle,
                },
              }}
              InputLabelProps={{
                ...params.InputLabelProps,
                sx: {
                  ...mobileLabelStyle,
                  [theme.breakpoints.up(900)]: {
                    transform: "translate(5.5%,-30%) scale(0.65) ",
                  },
                },
              }}
              FormHelperTextProps={{
                sx: {
                  color: theme.palette.secondary.main,
                  fontWeight: 700,
                  ml: 4,
                },
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

export default MobileDateRange;
