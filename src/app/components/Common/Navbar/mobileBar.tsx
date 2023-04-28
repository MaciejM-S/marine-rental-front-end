import * as React from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { changeMainNav } from "../../../../features/navigation/navigationSlice";
import { useNavigate } from "react-router-dom";
import UserAvatar from "./userAvatar";
import navbarStyle from "./navbarStyle";
import SignItems from "./signItems";
import MobileLogo from "./mobileLogo";
import HomeIcon from "@mui/icons-material/Home";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SailingIcon from "@mui/icons-material/Sailing";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem, Fade, Box } from "@mui/material";

const { menuIconStyle, iconStyle, iconButtonStyle, itemStyle } = navbarStyle;

function MobileMenu() {
  const dispatch = useAppDispatch();
  const signedIn = useAppSelector((state) => state.user.authenticated);
  const mainNav = useAppSelector((state) => state.navigation.mainNav);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleMenu = (type: string) => {
    switch (type) {
      case "home":
        dispatch(changeMainNav(0));
        navigate("/home");
        break;
      case "vessels":
        dispatch(changeMainNav(1));
        navigate("/vessels");
        break;
      case "your-account":
        dispatch(changeMainNav(2));
        navigate("/your-account");
        break;
    }
    handleClose();
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <MobileLogo />
      {!signedIn && <SignItems />}
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem
          sx={{
            ...itemStyle,
            textDecoration: mainNav === 0 ? "underline" : "none",
          }}
          onClick={() => {
            handleMenu("home");
          }}
        >
          {" "}
          <HomeIcon sx={iconStyle} /> Home
        </MenuItem>
        <MenuItem
          sx={{
            ...itemStyle,
            textDecoration: mainNav === 1 ? "underline" : "none",
          }}
          onClick={() => {
            handleMenu("vessels");
          }}
        >
          {" "}
          <SailingIcon sx={iconStyle} /> Vessels
        </MenuItem>
        {signedIn && (
          <MenuItem
            sx={{
              ...itemStyle,
              textDecoration: mainNav === 2 ? "underline" : "none",
            }}
            onClick={() => {
              handleMenu("your-account");
            }}
          >
            <AccountBoxIcon sx={iconStyle} />
            Your Account
          </MenuItem>
        )}
      </Menu>
      <IconButton
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={iconButtonStyle}
      >
        <MenuIcon sx={menuIconStyle} />
      </IconButton>
      {signedIn && <UserAvatar />}
    </Box>
  );
}

export default MobileMenu;
