import * as React from "react";
import dayjs, { Dayjs } from "dayjs";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  changePickupDay,
  changeReturnDay,
} from "../../../../features/criterions/criterionsSlice";
import { theme } from "../../../../theme/theme";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import searchVesselsStyle from "./searchVesselsStyle";

const { labelStyle, desktopPickupInputStyle, desktopReturnInputStyle } =
  searchVesselsStyle;

function DesktopVesselsDateRange() {
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
                FormHelperTextProps={{
                  sx: { color: theme.palette.primary.main, fontWeight: 700 },
                }}
                InputProps={{
                  ...params.InputProps,
                  sx: desktopPickupInputStyle,
                }}
                InputLabelProps={{
                  ...params.InputLabelProps,
                  sx: { ...labelStyle, opacity: 0.8 },
                }}
              />
            );
          }}
        />
        <DesktopDatePicker
          label="Return day"
          inputFormat="DD/MM/YYYY"
          minDate={dayjs(dayjs().add(1, "day").format("YYYY-MM-DD"))}
          value={returnDay}
          onChange={handleChangeReturn}
          renderInput={(params) => (
            <TextField
              color="primary"
              {...params}
              label="Return day"
              helperText={returnDayError}
              FormHelperTextProps={{
                sx: {
                  color: theme.palette.primary.main,
                  fontWeight: 700,
                  ml: 4,
                },
              }}
              InputProps={{
                ...params.InputProps,
                sx: desktopReturnInputStyle,
              }}
              InputLabelProps={{
                ...params.InputLabelProps,
                sx: {
                  ...labelStyle,
                  opacity: 0.8,
                  transform: "translate(12%, -30%) scale(0.65) ",
                },
              }}
            />
          )}
        />
      </LocalizationProvider>
    </>
  );
}

export default DesktopVesselsDateRange;
