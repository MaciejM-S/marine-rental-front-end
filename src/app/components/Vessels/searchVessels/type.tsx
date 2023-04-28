import { useAppDispatch, useAppSelector } from "../../../hooks";
import { changeType } from "../../../../features/criterions/criterionsSlice";
import { typeConst } from "../../../../features/CONSTANTS";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import searchVesselsStyle from "./searchVesselsStyle";
type TypeType = { label: string }[];

const { typeAutocompleteStyle } = searchVesselsStyle;

function Type() {
  const dispatch = useAppDispatch();
  const { type } = useAppSelector((state) => state.criterions);
  const arr = Object.values(typeConst);
  const types: TypeType = arr.map((type) => ({ label: type }));
  const handleType = (e: React.SyntheticEvent<Element, Event>) => {
    if (!e.currentTarget.textContent) {
      dispatch(changeType(undefined));
    } else {
      dispatch(changeType(e.currentTarget.innerHTML));
    }
  };
  return (
    <>
      <Autocomplete
        disablePortal
        value={type ? { label: type } : null}
        id="combo-box-demo"
        options={types}
        sx={typeAutocompleteStyle}
        onChange={handleType}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{ sx: { fontWeight: 700 } }}
            label="Type"
          />
        )}
      />
    </>
  );
}

export default Type;
