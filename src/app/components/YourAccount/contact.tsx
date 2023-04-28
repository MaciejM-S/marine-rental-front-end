import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import InfoModal from "./contact/infoModal";
import PasswordModal from "./contact/passwordModal";
import AvatarModal from "./contact/avatarModal";
import { avatarURL } from "../../../helperFunctions/avatarUrl";
import { theme } from "../../../theme/theme";
import { Box, Typography, Card, Divider, Avatar, Button } from "@mui/material";
import yourAccountStyle from "./yourAccountStyle";
import { authenticateUser } from "../../../features/user/userSlice";

const {
  mainCardStyle,
  keyStyle,
  featureStyle,
  avatarStyle,
  updateButtonStyle,
} = yourAccountStyle;

function Contact() {
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch()
  const [openAvatar, setOpenAvatar] = useState(false);
  const handleAvatar = () => {
    setOpenAvatar(true);
  
  };
  const [openInfo, setOpenInfo] = useState(false);
  const handleInfo = () => {
    setOpenInfo(true);
  };
  const [openPassword, setOpenPassword] = useState(false);
  const handlePassword = () => {
    setOpenPassword(true);
  };

  return (
    <>
      <Card elevation={6} sx={mainCardStyle}>
        <Typography sx={{ m: 1, fontWeight: 600 }}>
          Your profile details:
        </Typography>
        <Divider />
        <Box display={"flex"} sx={{ alignItems: "center", m: 1 }}>
          <Typography>Avatar:</Typography>
          <Avatar src={avatarURL(user.avatar)} sx={avatarStyle} />
          <Button
            variant="outlined"
            size="small"
            sx={{ ml: "auto", width: "110px", fontSize: "11px" }}
            onClick={handleAvatar}
          >
            Update Avatar
          </Button>
        </Box>
        <Divider />
        <Box display={"flex"} sx={{ flexDirection: "column", m: 1 }}>
          <Box display={"flex"}>
            <Typography sx={{ ...keyStyle }}>First name:</Typography>
            <Typography sx={{ ...featureStyle, textTransform: "capitalize" }}>
              {user.firstName}
            </Typography>
            <Button
              variant="outlined"
              size="small"
              sx={updateButtonStyle}
              onClick={handleInfo}
            >
              Update Profile
            </Button>
          </Box>
          <Box display={"flex"} sx={{ mt: 1 }}>
            <Typography sx={keyStyle}>Last name:</Typography>
            <Typography sx={{ ...featureStyle, textTransform: "capitalize" }}>
              {user.lastName}
            </Typography>
          </Box>
        </Box>
        <Box
          display={"flex"}
          sx={{
            m: 1,
            [theme.breakpoints.down(400)]: {
              flexDirection: "column",
            },
          }}
        >
          <Typography sx={keyStyle}>Telephone num:</Typography>
          <Typography
            sx={{ ...featureStyle, display: "flex", alignItems: "center" }}
          >
            {user.telephone || (
              <Typography
                sx={{
                  fontSize: 10,
                  textDecoration: "underline",
                  cursor: "pointer",
                }}
                onClick={handleInfo}
              >
                update your telephone number
              </Typography>
            )}
          </Typography>
        </Box>
        <Box display={"flex"} sx={{ m: 1 }}>
          <Typography sx={keyStyle}>Email:</Typography>
          <Typography sx={featureStyle}> {user.email}</Typography>
        </Box>
        <Divider />
        <Box display={"flex"} sx={{ m: 1 }}>
          <Typography sx={keyStyle}>Password:</Typography>
          <Typography sx={{ ...featureStyle, mr: 1 }}> *******</Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{ ml: "auto", width: "125px", fontSize: "11px" }}
            onClick={handlePassword}
          >
            Update Password
          </Button>
        </Box>
      </Card>
      <AvatarModal openAvatar={openAvatar} setOpenAvatar={setOpenAvatar} />
      <InfoModal user={user} openInfo={openInfo} setOpenInfo={setOpenInfo} />
      <PasswordModal
        openPassword={openPassword}
        setOpenPassword={setOpenPassword}
      />
    </>
  );
}

export default Contact;
