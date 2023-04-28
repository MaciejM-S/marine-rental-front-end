import moment from "moment";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TextField from "@mui/material/TextField";

type VesDate = {
  year: number | null;
  setYearError: React.Dispatch<React.SetStateAction<boolean>>;
  handleYear: (year: string) => void;
};

function VesDate(props: VesDate) {
  return (
    <DatePicker
      views={["year"]}
      label="Year of Launching"
      value={props.year?.toString()}
      maxDate={moment().format("YYYY")}
      onChange={(newValue: any) => {
        if (!newValue) {
          return;
        }
        if (
          Number.isNaN(newValue.year()) ||
          !newValue.year() ||
          (newValue.year() < 1850 && newValue.year > 2023)
        ) {
          props.setYearError(true);
        } else if (newValue) {
          props.setYearError(false);
          props.handleYear(newValue.year());
        }
      }}
      renderInput={(params) => <TextField {...params} helperText={null} />}
    />
  );
}

export default VesDate;
