import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ScreenshotMonitorIcon from "@mui/icons-material/ScreenshotMonitor";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Typography } from "@mui/material";
import { theme } from "../../../../theme/theme";
import { editVessel } from "../../../../features/vessel/vesselSlice";
import { useAppDispatch } from "../../../hooks";
import { changeUserNav } from "../../../../features/navigation/navigationSlice";
import RemoveDialog from "./removeDialog";
import { Vessel as VesselInterface } from "../../../../typings/vessel";
import {
  addName,
  addDescription,
  addYear,
  addLocation,
  addSize,
  addType,
  addPricePerDay,
  addPricePerWeek,
  addPickupDay,
  addReturnDay,
} from "../../../../features/vessel/vesselSlice";
import { useNavigate } from "react-router-dom";
import { changeVesselRemoved } from "../../../../features/navigation/navigationSlice";
import miniVesselStyle from "./miniVesselStyle";

const {manageTitleStyle,
  manageMainBoxStyle,
  deleteBoxStyle,
  displayBoxStyle,
  editBoxStyle} = miniVesselStyle

type VesselProps = VesselInterface;


function ManagePanel(props: { ves: VesselProps }) {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
    dispatch(changeVesselRemoved(false));
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEdit = () => {
    if (props.ves._id) {
      dispatch(editVessel(props.ves._id));
      dispatch(changeUserNav(2));
      dispatch(addName(props.ves.name));
      if (props.ves.description) {
        dispatch(addDescription(props.ves.description));
      }
      dispatch(addYear(props.ves.year));
      dispatch(addLocation(props.ves.location));
      dispatch(addPricePerDay(props.ves.pricePerDay));
      dispatch(addPricePerWeek(props.ves.pricePerWeek));
      dispatch(addSize(props.ves.size));
      dispatch(addType(props.ves.type));
      dispatch(addPickupDay(props.ves.pickupDay));
      dispatch(addReturnDay(props.ves.returnDay));
    }
  };
  const handleDisplay = () => {
    if (props.ves) {
      return navigate("" + props.ves._id + "/owner");
    }
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: 2,
          transform:'translateX(-7%)'
       
        }}
      >
        <Box sx={{ mt: 1 }}>
          <Typography sx={{ fontWeight: 700, opacity: 0.7 }}>
            available dates:
          </Typography>
          <Box sx={{ display: "flex", [theme.breakpoints.between(800,1000)]:{
            flexDirection:'column'
          } }}>
            <Typography>{props.ves.pickupDay} -&nbsp;</Typography>
            <Typography>{props.ves.returnDay}</Typography>
          </Box>
        </Box>
        <Box
          sx={manageMainBoxStyle}
        >
          <Box
            sx={editBoxStyle}
            onClick={handleEdit}
          >
            <EditIcon />
            <Typography sx={manageTitleStyle}>edit </Typography>
          </Box>
          <Box
            sx={deleteBoxStyle}
            onClick={handleClickOpen}
          >
            <DeleteForeverIcon />
            <Typography sx={manageTitleStyle}>remove</Typography>
          </Box>
          <Box
            sx={displayBoxStyle}
            onClick={handleDisplay}
          >
            <ScreenshotMonitorIcon />
            <Typography sx={manageTitleStyle}>display</Typography>
          </Box> 
        </Box>
      </Box>   
      <RemoveDialog
            open={open}
            handleClose={handleClose}
            id={props.ves._id}
          />
    </>
  );
}

export default ManagePanel;
