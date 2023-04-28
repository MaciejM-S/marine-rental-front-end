import TextField from "@mui/material/TextField";

type VesDescription = {
  description: String | null;
  handleDescription: (e: React.ChangeEvent<HTMLInputElement>) => void;
  descriptionError: String;
  helperTextProps: {};
};

function VesDescription(props: VesDescription) {
  return (
    <>
      <TextField
        value={props.description}
        onChange={props.handleDescription}
        helperText={props.descriptionError}
        fullWidth
        id="Description"
        label="Description"
        name="Description"
        autoComplete="Description"
        multiline={true}
        minRows={3}
        maxRows={8}
        required={true}
        FormHelperTextProps={props.helperTextProps}
      />
    </>
  );
}

export default VesDescription;
