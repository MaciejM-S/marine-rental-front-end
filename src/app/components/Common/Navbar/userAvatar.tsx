import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import store from "../../../store";
import { loggedOut } from "../../../../features/user/userSlice";
import { avatarURL } from "../../../../helperFunctions/avatarUrl";
import { changeMainNav } from "../../../../features/navigation/navigationSlice";
import { theme } from "../../../../theme/theme";
import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Logout from "@mui/icons-material/Logout";
import Avatar from "@mui/material/Avatar";
import { baseUrl } from "../../../../features/baseUrl";

function UserAvatar() {
  const dispatch = useAppDispatch();
  const { avatar, firstName, error } = useAppSelector((state) => state.user);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    setLoading(true);
    fetch(baseUrl+"/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message === "loggedOut") {
          store.dispatch(loggedOut());
          localStorage.removeItem("token222");
          setLoading(false);
          navigate(`/home`);
          dispatch(changeMainNav(0));
        }
      })
      .catch((error) => {
        navigate("/error");
      })
      .then(() => {
        if (error) {
          navigate("/error");
        }
      });
  };
  return (
    <Box sx={{ m: "4px 15px" }}>
      <Avatar
        onClick={handleClick}
        src={avatarURL(avatar)}
        sx={{
          background: "white",
          color: theme.palette.secondary.main,
          width: 38,
          height: 38,
          cursor: "pointer",
          boxShadow:
            "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
        }}
      >
        {firstName && firstName[0]}
      </Avatar>{" "}
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem disabled={loading} onClick={handleLogout}>
          {loading ? (
            <CircularProgress size={15} sx={{ mr: 1 }} />
          ) : (
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
          )}
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default UserAvatar;
