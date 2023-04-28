import { useAppDispatch, useAppSelector } from "../../../hooks";
import { changeCity } from "../../../../features/criterions/criterionsSlice";
import { locations } from "../../../../typings/location";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import searchVesselsStyle from "./searchVesselsStyle";

type City = { label: string }[];
const { autocompleteStyle } = searchVesselsStyle;

function Location() {
  const dispatch = useAppDispatch();
  const { city } = useAppSelector((state) => state.criterions);
  const handleLocation = (e: React.SyntheticEvent<Element, Event>) => {
    if (!e.currentTarget.textContent) {
      dispatch(changeCity(undefined));
    } else {
      dispatch(changeCity(e.currentTarget.textContent));
    }
  };
  const cities: City = locations.map((location) => ({ label: location }));
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        value={city ? { label: city } : null}
        options={cities}
        onChange={handleLocation}
        sx={autocompleteStyle}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{ sx: { fontWeight: 700, height: 20 } }}
            label="City"
          />
        )}
      />
    </>
  );
}

export default Location;
