import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import {
  addPricePerDay,
  addPricePerWeek,
} from "../../../../../features/vessel/vesselSlice";
import { theme } from "../../../../../theme/theme";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { InputAdornment, TextField } from "@mui/material";

const CustomTextField = styled(TextField)(({ theme }) => ({
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    display: "none",
  },
  "& input[type=number]": {
    MozAppearance: "textfield",
  },
}));
const helperTextProps = {
  sx: {
    fontWeight: 700,
    color: theme.palette.primary.main,
  },
};
type PriceProps = {
  pricePerDay: number | null;
  pricePerWeek: number | null;
  perDayErr: string | null;
  perWeekErr: string | null;
  setPerDayErr: React.Dispatch<React.SetStateAction<string | null>>;
  setPerWeekErr: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function VesPrice(props: PriceProps) {
  const dispatch = useAppDispatch();
  const { pricePerDay, pricePerWeek } = useAppSelector((state) => state.vessel);
  const handlePerDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      dispatch(addPricePerDay(null));
      props.setPerDayErr("enter price per day");
    } else {
      props.setPerDayErr("");
      dispatch(addPricePerDay(Number(e.target.value)));
    }
  };
  const handlePerWeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      dispatch(addPricePerWeek(null));
      props.setPerWeekErr("enter price per week");
    } else {
      props.setPerWeekErr("");
      dispatch(addPricePerWeek(Number(e.target.value)));
    }
  };
  return (
    <Box sx={{ ml: 3, mb: 2 }}>
      <Typography
        sx={{ color: "rgba(0,0,0,0.6)", mb: 2 }}
        id="input-slider"
        gutterBottom
      >
        Price:
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid sx={{ display: "flex", alignItems: "center" }} item xs></Grid>
      </Grid>

      <Grid container spacing={2} alignItems="center">
        <Grid sx={{ display: "flex", alignItems: "center" }} item xs>
          <CustomTextField
            onChange={handlePerDay}
            value={pricePerDay}
            sx={{
              width: 175,
              mt: 0,
              mb: 0,
              height: 75,
            }}
            id="perDay"
            label="per Day"
            name="perDay"
            autoComplete="day"
            helperText={props.perDayErr}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              type: "number",
              "aria-labelledby": "input-slider",
            }}
            FormHelperTextProps={helperTextProps}
            type={"number"}
          />
        </Grid>

        <Grid sx={{ display: "flex", alignItems: "center" }} item xs>
          <CustomTextField
            onChange={handlePerWeek}
            value={pricePerWeek}
            sx={{ width: 175, mt: 0, mb: 0, height: 75 }}
            id="perWeek"
            label="per Week"
            name="perWeek"
            autoComplete="week"
            helperText={props.perWeekErr}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
              type: "number",
              "aria-labelledby": "input-slider",
            }}
            FormHelperTextProps={helperTextProps}
            type={"number"}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
