import * as React from "react";
import { useAppDispatch } from "../../../hooks";
import { changeUserNav } from "../../../../features/navigation/navigationSlice";
import {
  changeVesselRemoved,
  changeVesselAdded,
  changeVesselUpdated,
} from "../../../../features/navigation/navigationSlice";
import { theme } from "../../../../theme/theme";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import Dialog from "@mui/material/Dialog";
import Button from "@mui/material/Button";
import { CircularProgress } from "@mui/material";
import miniVesselStyle from "./miniVesselStyle";
import { baseUrl } from "../../../../features/baseUrl";
const { removeButtonStyle } = miniVesselStyle;
type RemoveDialogType = {
  id: string | undefined;
  open: boolean;
  handleClose: () => void;
};
export default function RemoveDialog(props: RemoveDialogType) {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = React.useState(false);
  const handleRemove = () => {
    console.log(props.id);
    props.handleClose();
    fetch(baseUrl+"/removeVessel/" + props.id, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.message === "removed") {
          setLoading(false);
          dispatch(changeUserNav(1));
          dispatch(changeVesselRemoved(true));
          dispatch(changeVesselAdded(false));
          dispatch(changeVesselUpdated(false));
        }
      });
  };
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          sx={{ m: 2, [theme.breakpoints.down(500)]: { fontSize: 14 } }}
          id="alert-dialog-title"
        >
          {
            "Do you want to permanently remove this vessel from the marine rental store?"
          }
        </DialogTitle>
        <DialogActions
          sx={{ m: 1, mr: 2, [theme.breakpoints.down(500)]: { ml: 1 } }}
        >
          <Button
            disabled={loading}
            sx={removeButtonStyle}
            onClick={handleRemove}
          >
            Yes
            {loading && (
              <CircularProgress size={12} sx={{ ml: 1, color: "white" }} />
            )}
          </Button>
          <Button
            disabled={loading}
            onClick={props.handleClose}
            sx={removeButtonStyle}
            autoFocus
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
