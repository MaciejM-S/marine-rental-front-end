import * as React from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { updatePassword } from "../../../../features/user/userSlice";
import logoDark from "../../../../pub/vector.png";
import { theme } from "../../../../theme/theme";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BackIcon from "./common/BackIcon";
import { CircularProgress } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "0%",
  right: "0%",
  maxWidth: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: "100%",
  [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
    height: "450px",
    overflow: "scroll",
  },
};

const heleperStyle = {
  sx: {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
};

type AvatarProps = {
  openPassword: boolean;
  setOpenPassword: React.Dispatch<React.SetStateAction<boolean>>;
};
const initialState = {
  currentPass: "",
  newPass: "",
  repeatedPass: "",
};
export default function PasswordModal(props: AvatarProps) {
  const dispatch = useAppDispatch();
  const { updated, incorrectPass, loading } = useAppSelector(
    (state) => state.user
  );
  const [info, setInfo] = React.useState(initialState);
  const [currentPassErr, setCurrentPassErr] = React.useState("");
  const [newPassErr, setNewPassErr] = React.useState("");
  const [repeatedPassErr, setRepeatedPassErr] = React.useState("");
  const validate = () => {
    if (info.currentPass === "") setCurrentPassErr("this field is required");
    if (info.newPass === "") setNewPassErr("this field is required");
    if (info.repeatedPass === "") setRepeatedPassErr("this field is required");
    if (info.newPass.length < 6)
      setNewPassErr("minimal password length i 6 characters");
    else if (info.newPass !== info.repeatedPass) {
      setNewPassErr("entered passwords are not the same");
    } else {
      setCurrentPassErr("");
      setNewPassErr("");
      setRepeatedPassErr("");
    }
  };
  const handleCurrentPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, currentPass: e.target.value });
    if ((e.target.value = "")) {
      setCurrentPassErr("this field is required");
      return;
    }
    setCurrentPassErr("");
  };
  const handleNewPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 40) {
      setNewPassErr("maximal password length is 40 characters");
      return;
    }
    setNewPassErr("");
    setInfo({ ...info, newPass: e.target.value });
  };
  const handleRepeatedPass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo({ ...info, repeatedPass: e.target.value });
    if (e.target.value === "") {
      return setRepeatedPassErr("this field is required");
    }
    setRepeatedPassErr("");
  };
  const handleSubmit = () => {
    validate();
    if (
      info.newPass === "" ||
      info.currentPass === "" ||
      info.newPass !== info.repeatedPass
    ) {
      return;
    }
    dispatch(updatePassword(info));
  };
  const resetModal = () => {
    setCurrentPassErr("");
    setNewPassErr("");
    setRepeatedPassErr("");
    setInfo(initialState);
  };
  return (
    <div>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={props.openPassword}
        onClose={() => {
          props.setOpenPassword(false);
          resetModal();
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableScrollLock={false}
        sx={{
          [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
            height: "150vh",
          },
        }}
      >
        <Box id="modal-modal-title" sx={style}>
          <Box
            display="flex"
            sx={{
              alignItems: "center",
              justifyContent: "center",
              m: "150px auto 0",
              [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]:
                {
                  mt: 1,
                },
            }}
          >
            <img src={logoDark} style={{ width: "40px" }} alt="" />
            <Typography component="h1" variant="h5" sx={{ ml: 1 }}>
              Change Password
            </Typography>
          </Box>
          <Grid
            sx={{
              [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]:
                {
                  height: "450px",
                },
            }}
            container
            component="main"
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ m: 2, mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={info.currentPass}
                    helperText={currentPassErr}
                    onChange={handleCurrentPass}
                    name="password"
                    label="Current  Password"
                    type="password"
                    autoComplete="new-password"
                    color="secondary"
                    FormHelperTextProps={heleperStyle}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={info.newPass}
                    helperText={newPassErr}
                    onChange={handleNewPass}
                    name="password"
                    label="New Password"
                    type="password"
                    autoComplete="new-password"
                    color="secondary"
                    FormHelperTextProps={heleperStyle}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    value={info.repeatedPass}
                    helperText={repeatedPassErr}
                    onChange={handleRepeatedPass}
                    name="password"
                    label="Repeat New Password"
                    type="password"
                    autoComplete="new-password"
                    color="secondary"
                    FormHelperTextProps={heleperStyle}
                  />
                </Grid>
              </Grid>
              {updated && (
                <Typography
                  component="div"
                  variant="h6"
                  sx={{
                    m: "15px 0 0",
                    textAlign: "center",
                    color: theme.palette.secondary.main,
                    fontWeight: 600,
                  }}
                >
                  Password Has Been Updated
                </Typography>
              )}
              {incorrectPass && (
                <Typography
                  component="div"
                  variant="h6"
                  sx={{
                    m: "15px 0 0",
                    textAlign: "center",
                    color: theme.palette.primary.main,
                    fontWeight: 700,
                  }}
                >
                  Entered Password Is Incorrect!
                </Typography>
              )}
              <Button
                onClick={handleSubmit}
                fullWidth
                variant="contained"
                disabled={loading}
                sx={{ mt: 3, mb: 2, color: "white" }}
              >
                Update new password
                {loading && <CircularProgress size={15} sx={{ ml: 1 }} />}
              </Button>
            </Box>
          </Grid>
          <BackIcon
            setOpenPassword={props.setOpenPassword}
            resetModal={resetModal}
          />
        </Box>
      </Modal>
    </div>
  );
}
