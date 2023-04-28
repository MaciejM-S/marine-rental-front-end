import { useState } from "react";
import { useAppSelector } from "../../../../hooks";
import LocationDrawer from "./locationDrawer";
import { theme } from "../../../../../theme/theme";
import SizeDrawer from "./sizeDrawer";
import TypeDrawer from "./typeDrawer";
import { Box, Button } from "@mui/material";
const mainBoxStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const buttonStyle = {
  color: "rgba(0,0,0,0.87)",
  borderColor: "rgba(15,15,15,0.27)",
  height: "50px",
  m: "10px 15px",
  fontWeight: 600,
  minWidth: "100px",
  [theme.breakpoints.down(400)]: {
    minWidth: "70px",
    m: "5px 5px",
    fontSize: "12px",
    p: 1,
  },
};
function MobileFilter() {
  const { city } = useAppSelector((state) => state.criterions);
  const { size } = useAppSelector((state) => state.criterions);
  const { type } = useAppSelector((state) => state.criterions);
  const [openLocation, setOpenLocation] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  const [openType, setOpenType] = useState(false);
  const handleLocation = (action: boolean) => {
    setOpenLocation(action);
  };
  const handleSize = (action: boolean) => {
    setOpenSize(action);
  };
  const handleType = (action: boolean) => {
    setOpenType(action);
  };
  return (
    <>
      <Box sx={mainBoxStyle}>
        <Button
          disabled={openLocation || openSize || openType}
          variant="outlined"
          onClick={() => {
            handleLocation(true);
          }}
          sx={{
            ...buttonStyle,
            color: city ? theme.palette.primary.main : "rgba(0,0,0,0.87)",
          }}
        >
          {city ? city : "city"}
        </Button>
        <Button
          disabled={openLocation || openSize || openType}
          variant="outlined"
          onClick={() => {
            handleSize(true);
          }}
          sx={{
            ...buttonStyle,
            color: size ? theme.palette.primary.main : "rgba(0,0,0,0.87)",
          }}
        >
          {size ? size : "size"}
        </Button>
        <Button
          disabled={openLocation || openSize || openType}
          variant="outlined"
          onClick={() => {
            handleType(true);
          }}
          sx={{
            ...buttonStyle,
            color: type ? theme.palette.primary.main : "rgba(0,0,0,0.87)",
          }}
        >
          {type ? type : "type"}
        </Button>
      </Box>
      <LocationDrawer open={openLocation} handleLocation={handleLocation} />
      <SizeDrawer open={openSize} handleSize={handleSize} />
      <TypeDrawer open={openType} handleType={handleType} />
    </>
  );
}

export default MobileFilter;
