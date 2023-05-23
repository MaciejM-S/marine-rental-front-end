import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { changeMainNav } from "../../../../features/navigation/navigationSlice";
import { authenticateUser } from "../../../../features/user/userSlice";
import NavItems from "./navItems";
import SignItems from "./signItems";
import MobileBar from "./mobileBar";
import UserAvatar from "./userAvatar";
import navbarStyle from "./navbarStyle";
import { Box, Paper } from "@mui/material";

const { desktopBoxStyle, mobileBoxStyle } = navbarStyle;

function NavBarContainer() {
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector((state) => state.user.authenticated);
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname === "/") {
      navigate("/home");
    }
    if (window.location.pathname === "/home") {
      dispatch(changeMainNav(0));
    } else if (window.location.pathname === "/vessels") {
      dispatch(changeMainNav(1));
    } else if (window.location.pathname === "/your-account") {
      dispatch(changeMainNav(2));
    } else {
      dispatch(changeMainNav(3));
    }
  });
  useEffect(() => {
    dispatch(authenticateUser());
  }, []);
  return (
    <>
      <Paper
        elevation={4}
        sx={{
          background: "#143060",
          borderRadius: 0,
        }}
      >
        {/* Mobile Menu */}
        <Box sx={mobileBoxStyle}>
          <MobileBar />
        </Box>
        {/* Desktop Menu */}
        <Box sx={desktopBoxStyle}>
          <NavItems />
          {!authenticated && <SignItems />}
          {authenticated && <UserAvatar />}
        </Box>
      </Paper>
    </>
  );
}

export default NavBarContainer;
