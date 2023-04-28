import { Divider, Typography, Box } from "@mui/material";
import { theme } from "../../../../../theme/theme";
import BackIcon from "./BackIcon";

const boxStyle = {
  position: "relative",
  display: "flex",
  justifyContent: "center",
};

const typoStyle = {
  fontSize: "20px",
  textAlign: "center",
  m: 2,
  [theme.breakpoints.down(500)]: { fontSize: "15px" },
};
function UserPanel() {
  return (
    <>
      <Box sx={boxStyle}>
        <BackIcon />
        <Typography sx={typoStyle}>Go back to browsing vessels</Typography>
      </Box>
      <Divider />
    </>
  );
}
export default UserPanel;
