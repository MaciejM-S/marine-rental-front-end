import { useAppDispatch, useAppSelector } from "../../../hooks";
import { changeSize } from "../../../../features/criterions/criterionsSlice";
import { sizeConst } from "../../../../features/CONSTANTS";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import searchVesselsStyle from "./searchVesselsStyle";
const { sizeAutocompleteStyle } = searchVesselsStyle;

type Size = { label: string }[];

function Size() {
  const dispatch = useAppDispatch();
  const { size } = useAppSelector((state) => state.criterions);
  const arr = Object.values(sizeConst);
  const sizes: Size = arr.map((size) => ({ label: size }));
  const handleSize = (e: React.SyntheticEvent<Element, Event>) => {
    if (!e.currentTarget.textContent) {
      dispatch(changeSize(undefined));
    } else {
      dispatch(changeSize(e.currentTarget.innerHTML));
    }
  };
  return (
    <>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        onChange={handleSize}
        value={size ? { label: size } : null}
        options={sizes}
        sx={sizeAutocompleteStyle}
        renderInput={(params) => (
          <TextField
            {...params}
            InputLabelProps={{ sx: { fontWeight: 700 } }}
            label="Size"
          />
        )}
      />
    </>
  );
}

export default Size;
