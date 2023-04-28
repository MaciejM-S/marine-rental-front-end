import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { typeConst } from "../../../../../features/CONSTANTS";
import { addType } from "../../../../../features/vessel/vesselSlice";
import { theme } from "../../../../../theme/theme";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";

const formTypoStyle = {
  [theme.breakpoints.down(500)]: {
    fontSize: "12px",
  },
};
export default function VesType() {
  const dispatch = useAppDispatch();
  const { type } = useAppSelector((state) => state.vessel);
  const handleType = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(addType(e.target.value));
  };
  return (
    <FormControl sx={{ m: "12px 26px" }}>
      <FormLabel id="demo-radio-buttons-group-label">Type:</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={handleType}
        value={type}
      >
        <FormControlLabel
          value={typeConst.SAILING}
          control={<Radio />}
          label={<Typography sx={formTypoStyle}>Sailing Yacht</Typography>}
        />
        <FormControlLabel
          value={typeConst.MOTOR}
          control={<Radio />}
          label={<Typography sx={formTypoStyle}>Motor Yacht</Typography>}
        />
        <FormControlLabel
          value={typeConst.GULET}
          control={<Radio />}
          label={<Typography sx={formTypoStyle}>Gulet Yacht</Typography>}
        />
      </RadioGroup>
    </FormControl>
  );
}
