import TextField from "@mui/material/TextField";
type VesName = {
  handleName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  nameError: String;
  helperTextProps: {};
  name: String | null;
};

function VesName(props: VesName) {
  return (
    <TextField
      onChange={props.handleName}
      required
      fullWidth
      id="Ship Name"
      label="Ship Name"
      name="name"
      autoComplete="name"
      helperText={props.nameError}
      value={props.name}
      FormHelperTextProps={props.helperTextProps}
    />
  );
}

export default VesName;
