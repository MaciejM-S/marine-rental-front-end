import React from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  changeUserNav,
  changeVesselAdded,
  changeVesselRemoved,
  changeVesselUpdated,
} from "../../../features/navigation/navigationSlice";
import Favorite from "./actionNav/favorite";
import AddVessel from "./actionNav/addVessel";
import YourVessels from "./actionNav/yourVessels";
import { theme } from "../../../theme/theme";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SailingIcon from "@mui/icons-material/Sailing";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { resetVessel } from "../../../features/vessel/vesselSlice";

import yourAccountStyle from "./yourAccountStyle";

const { panelStyle, actionMainBoxStyle, tabsStyle } = yourAccountStyle;
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box
          sx={{
            p: 3,
            [theme.breakpoints.down(400)]: {
              p: 1,
            },
          }}
        >
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
export default function ActionNav() {
  const dispatch = useAppDispatch();
  const { userAccount } = useAppSelector((state) => state.navigation);
  const [width, setWidth] = useState<number>(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    dispatch(changeUserNav(newValue));
    dispatch(resetVessel());
    dispatch(changeVesselAdded(false));
    dispatch(changeVesselUpdated(false));
    dispatch(changeVesselRemoved(false));
  };
  return (
    <Box sx={actionMainBoxStyle}>
      <Box
        sx={{
          [theme.breakpoints.down(1400)]: {
            width: "100vw",
            position: "absolute",
            left: 0,
            display: "flex",
            justifyContent: "center",
          },
        }}
      >
        <Tabs
          orientation={width > 1400 ? "vertical" : "horizontal"}
          variant="scrollable"
          value={userAccount}
          onChange={handleChange}
          aria-label="tabs"
          sx={tabsStyle}
        >
          <Tab
            label={width > 500 ? "Favorite" : ""}
            {...a11yProps(0)}
            sx={{ alignSelf: "end" }}
            icon={<FavoriteIcon />}
            iconPosition="end"
          />
          <Tab
            label={width > 500 ? "Your vessels" : ""}
            {...a11yProps(1)}
            sx={{ alignSelf: "end" }}
            icon={<SailingIcon />}
            iconPosition="end"
          />
          <Tab
            label={width > 500 ? "Add vessel" : ""}
            {...a11yProps(2)}
            sx={{ alignSelf: "end" }}
            icon={<AddCircleOutlineIcon />}
            iconPosition="end"
          />
        </Tabs>
      </Box>
      <Box sx={{ m: "0 auto" }}>
        <TabPanel value={userAccount} index={0}>
          <Box sx={{ ...panelStyle, minHeight: "70vh" }}>
            <Favorite />
          </Box>
        </TabPanel>
        <TabPanel value={userAccount} index={1}>
          <Box sx={{ ...panelStyle, minHeight: "70vh" }}>
            <YourVessels />
          </Box>
        </TabPanel>
        <TabPanel value={userAccount} index={2}>
          <Box sx={panelStyle}></Box>
          <AddVessel />
        </TabPanel>
      </Box>
    </Box>
  );
}
