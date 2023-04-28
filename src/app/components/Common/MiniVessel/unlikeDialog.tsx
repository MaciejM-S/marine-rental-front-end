import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import { CircularProgress } from "@mui/material";
import miniVesselStyle from "./miniVesselStyle";
import { baseUrl } from "../../../../features/baseUrl";
const { buttonStyle } = miniVesselStyle;

type UnlikeDialogProps = {
  open: boolean;
  handleFavoriteUser?: () => void;
  handleClose: () => void;
  _id: string;
};

export default function UnlikeDialog(props: UnlikeDialogProps) {
  const [loading, setLoading] = React.useState(false);
  const handleUnlike = () => {
    setLoading(true);
    fetch(baseUrl+"/unlike/" + props._id, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
      body: JSON.stringify({ id: props._id }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        props.handleFavoriteUser && props.handleFavoriteUser();
        props.handleClose();
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
        <DialogTitle sx={{ m: 2 }} id="alert-dialog-title">
          {"Do you want to  remove this vessel from your favorites?"}
        </DialogTitle>
        <DialogActions sx={{ m: 1, mr: 2 }}>
          <Button disabled={loading} sx={buttonStyle} onClick={handleUnlike}>
            Yes
            {loading && (
              <CircularProgress size={12} sx={{ ml: 1, color: "white" }} />
            )}
          </Button>
          <Button
            disabled={loading}
            onClick={props.handleClose}
            sx={buttonStyle}
            autoFocus
          >
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
