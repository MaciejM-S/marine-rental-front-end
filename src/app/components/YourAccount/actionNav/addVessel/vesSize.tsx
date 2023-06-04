import * as React from "react";
import { addSize } from "../../../../../features/vessel/vesselSlice";
import { sizeConst } from "../../../../../features/CONSTANTS";
import { theme } from "../../../../../theme/theme";
import Radio from "@mui/material/Radio";
import { Typography } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useAppDispatch, useAppSelector } from "../../../../hooks";

const formControlStyle = {
  m: "12px 26px",
  [theme.breakpoints.down(500)]: { m: "12px 0 0 26px" },
};
const formTypoStyle = {
  [theme.breakpoints.down(500)]: {
    fontSize: "12px",
  },
};
export default function VesSize() {
  const dispatch = useAppDispatch();
  const { size } = useAppSelector((state) => state.vessel);
  const handleSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addSize(e.target.value));
  };
  return (
    <FormControl sx={formControlStyle}>
      <FormLabel id="demo-radio-buttons-group-label">Size:</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        value={size}
        onChange={handleSize}
      >
        <FormControlLabel
          value={sizeConst.SMALL}
          control={<Radio />}
          label={
            <Typography sx={formTypoStyle}>
              {" "}
              Small up to 33 feet (10 m)
            </Typography>
          }
        />
        <FormControlLabel
          value={sizeConst.MEDIUM}
          control={<Radio />}
          label={
            <Typography sx={formTypoStyle}>
              {" "}
              Near-shore 33-45 feet (10-14 m)
            </Typography>
          }
        />
        <FormControlLabel
          value={sizeConst.LARGE}
          control={<Radio />}
          label={
            <Typography sx={formTypoStyle}>
              {" "}
              Offshore more than 45 feet (14 m)
            </Typography>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
