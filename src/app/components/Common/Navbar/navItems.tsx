import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import navbarStyle from "./navbarStyle";
import { changeMainNav } from "../../../../features/navigation/navigationSlice";
import { resetSortCriterionsState } from "../../../../features/criterions/sortCriterionsSlice";
import { resetCriterionState } from "../../../../features/criterions/criterionsSlice";
import { Tabs, Tab } from "@mui/material";
const { tabStyle } = navbarStyle;

function NavItems() {
  const dispatch = useAppDispatch();
  const authenticated = useAppSelector((state) => state.user.authenticated);
  const mainNav = useAppSelector((state) => state.navigation.mainNav);
  const navigate = useNavigate();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(resetCriterionState());
    dispatch(resetSortCriterionsState());
    dispatch(changeMainNav(newValue));
    switch (newValue) {
      case 0:
        navigate("/home");
        break;
      case 1:
        navigate("/vessels");
        break;
      case 2:
        navigate("/your-account");
        break;
      case 3:
        navigate("sign-in");
        break;
    }
  };
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
      disableFocusRipple: true,
      disableRipple: true,
    };
  }
  return (
    <Tabs
      value={mainNav}
      onChange={handleChange}
      aria-label="basic tabs example"
      scrollButtons={false}
      sx={{ width: "100%" }}
      TabIndicatorProps={{ sx: { display: "none" } }}
    >
      <Tab
        label="Home"
        {...a11yProps(0)}
        sx={{ ...tabStyle, ml: "auto" }}
        disableFocusRipple={true}
        disableRipple={true}
      />
      <Tab
        label="Vessels"
        {...a11yProps(1)}
        sx={tabStyle}
        disableFocusRipple={true}
        disableRipple={true}
      />
      {authenticated && (
        <Tab
          label="Your account"
          {...a11yProps(2)}
          disableFocusRipple={true}
          disableRipple={true}
          sx={tabStyle}
        />
      )}
    </Tabs>
  );
}

export default NavItems;
