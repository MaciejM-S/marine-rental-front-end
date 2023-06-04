import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { authenticateUser, updateAvatar } from "../../../../features/user/userSlice";
import logoDark from "../../../../pub/vector.png";
import { avatarURL } from "../../../../helperFunctions/avatarUrl";
import { theme } from "../../../../theme/theme";
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { Button, Paper, Input, Avatar, IconButton } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import BackIcon from "./common/BackIcon";
import { CircularProgress } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "0%",
  right: "0%",
  minWidth: "25%",
  maxWidth: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  height: "100%",
  textAlign: "center",
};

type AvatarProps = {
  openAvatar: boolean;
  setOpenAvatar: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AvatarModal(props: AvatarProps) {
  const dispatch = useAppDispatch();
  const { avatar, firstName, loading } = useAppSelector((state) => state.user);
  const [file, setFile] = useState<undefined | File>();
  const [helperText, setHelperText] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target && e.target.files && e.target.files[0]) {
    }
    if (e.target && e.target.files) {
      if (e.target.files.length === 0) {
        setFile(undefined);
        return;
      }
      setFile(e.target.files[0]);
    }
  };
  const handleSubmit = () => {
    if (!file) {
      setHelperText("please upload your avatar");
      return;
    } else {
      dispatch(updateAvatar(file));
      dispatch(authenticateUser());
    }
  };

  return (
    <div>
      <Modal
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        open={props.openAvatar}
        onClose={() => {
          setFile(undefined);
          props.setOpenAvatar(false);
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
              m: "10vh auto 0",
            }}
          >
            <img
              src={logoDark}
              style={{ width: "40px", marginLeft: "-10px" }}
              alt=""
            />
            <BackIcon setOpenAvatar={props.setOpenAvatar} setFile={setFile} />
            <Typography component="span" variant="h5" sx={{ ml: 1 }}>
              Update Avatar
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
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{
                m: "8px auto",
                mt: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                [`${theme.breakpoints.down(
                  1000
                )} and (orientation: landscape)`]: {
                  mt: 0,
                },
              }}
            >
              <Box
                sx={{
                  m: 2,
                  [theme.breakpoints.down(700)]: {
                    mt: 0,
                  },
                }}
              >
                <Avatar
                  sx={{
                    m: "0 auto",
                    width: "10vh",
                    height: "10vh",
                    boxShadow:
                      "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
                  }}
                  alt={firstName ? firstName : undefined}
                  src={avatarURL(avatar)}
                />
              </Box>
              <Grid sx={{ p: 1 }}>
                <Input type="file" onChange={handleChange} />
              </Grid>

              <Grid>
                <Box sx={{ display: "flex", justifyContent: "center", m: 1 }}>
                  {" "}
                  {file && (
                    <img
                      src={URL.createObjectURL(file)}
                      alt=""
                      style={{ maxHeight: "20vh" }}
                    />
                  )}
                </Box>
              </Grid>
              <Grid>
                <Typography sx={{ color: theme.palette.primary.main }}>
                  {helperText}
                </Typography>
              </Grid>

              <Grid>
                <Button
                  fullWidth
                  onClick={handleSubmit}
                  variant="contained"
                  disabled={loading}
                  sx={{
                    mt: 3,
                    mb: 2,
                    color: "white",
                    p: "6px 60px",
                    [`${theme.breakpoints.down(
                      1000
                    )} and (orientation: landscape)`]: {
                      mt: 0,
                    },
                  }}
                >
                  Update avatar
                  {loading && (
                    <CircularProgress sx={{ ml: "10px" }} size={14} />
                  )}
                </Button>
              </Grid>
            </Box>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
