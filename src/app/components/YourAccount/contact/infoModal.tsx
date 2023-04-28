import * as React from "react";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch} from "../../../hooks";
import { closed, InitialState } from "../../../../features/user/userSlice";
import { updateInfo } from "../../../../features/user/userSlice";
import logoDark from "../../../../pub/vector.png";
import { theme } from "../../../../theme/theme";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
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
};
const helperStyle = {
  sx: {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
};
type AvatarProps = {
  user: InitialState;
  openInfo: boolean;
  setOpenInfo: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function InfoModal(props: AvatarProps) {
  const dispatch = useAppDispatch();
  const { firstName, lastName, telephone, loading, updated } = useAppSelector(
    (state) => state.user
  );
  const [firstNameErr, setFirstNameErr] = useState("");
  const [lastNameErr, setLastNameErr] = useState("");
  const [telephoneErr, setTelephoneErr] = useState("");
  const userInfo = {
    firstName:
      firstName && firstName.charAt(0).toUpperCase() + firstName.slice(1),
    lastName: lastName && lastName.charAt(0).toUpperCase() + lastName.slice(1),
    telephone: telephone || "",
  };
  const [info, setInfo] = useState(userInfo);
  useEffect(() => {
    setInfo(userInfo);
  }, [props.openInfo]);
  const focusTelephone = () => {
    if (props.user.telephone === null || props.user.telephone === "") {
      console.log("dziala");
      setInfo({ ...info, telephone: "+" });
    }
  };
  const resetData = () => {
    setInfo(userInfo);
    dispatch(closed());
  };
  const handleFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 20) {
      setFirstNameErr("maximal last name length is 20 characters");
      return;
    } else if (e.target.value === "") {
      setFirstNameErr("this field is required");
      setInfo({ ...info, firstName: e.target.value });
    } else {
      setFirstNameErr("");
      setInfo({ ...info, firstName: e.target.value });
    }
  };
  const handleLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 20) {
      setFirstNameErr("maximal first name length is 20 characters");
      return;
    } else if (e.target.value === "") {
      setLastNameErr("this field is required");
      setInfo({ ...info, lastName: e.target.value });
    } else {
      setLastNameErr("");
      setInfo({ ...info, lastName: e.target.value });
    }
  };
  const handleTelephone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = e.target.value.length;
    if (e.target.value.length > 13) {
      setTelephoneErr("maximal number length is 12 numbers");
    } else if (
      /^([0-9])$/.test(e.target.value[index - 1]) ||
      e.target.value === "+"
    ) {
      setInfo({ ...info, telephone: e.target.value });
      setTelephoneErr("");
    }
  };
  const handleSubmit = () => {
    dispatch(closed());
    if (
      info.telephone.length < 10 &&
      info.telephone !== "+" &&
      info.telephone !== ""
    ) {
      setTelephoneErr("minimal phone number length is 9 digits");
      return;
    } else {
      setTelephoneErr("");
    }
    dispatch(updateInfo(info));
  };

  return (
    <div>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={props.openInfo}
        onClose={() => {
          props.setOpenInfo(false);
          resetData();
        }}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
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
            <Typography component="h1" variant="h5" sx={{ m: 1 }}>
              Update Your Profile
            </Typography>
          </Box>
          <Grid container component="main">
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            <Box sx={{ m: 2, mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={info.firstName}
                    onChange={handleFirstName}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    color="secondary"
                    FormHelperTextProps={helperStyle}
                    helperText={firstNameErr}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    value={info.lastName}
                    onChange={handleLastName}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    color="secondary"
                    helperText={lastNameErr}
                    FormHelperTextProps={helperStyle}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={handleTelephone}
                    value={info.telephone}
                    onFocus={focusTelephone}
                    fullWidth
                    name="password"
                    label="Telephone Number"
                    type="tel"
                    id="password"
                    color="secondary"
                    helperText={telephoneErr}
                    FormHelperTextProps={helperStyle}
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
                  profile updated
                </Typography>
              )}

              <Button
                disabled={loading}
                type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2, color: "white" }}
              >
                Update Profile
                {loading && <CircularProgress sx={{ ml: 1 }} size={15} />}
              </Button>
            </Box>
            <Grid container justifyContent="flex-end"></Grid>
          </Grid>

          <BackIcon setOpenInfo={props.setOpenInfo} resetData={resetData} />
        </Box>
      </Modal>
    </div>
  );
}
