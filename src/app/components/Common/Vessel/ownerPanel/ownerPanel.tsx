import { Divider, Typography, Box } from "@mui/material";
import { theme } from "../../../../../theme/theme";
import BackIcon from "./BackIcon";

const typoStyle = {
  fontSize: "20px",
  textAlign: "center",
  mt: 2,
  mb: 2,
  [theme.breakpoints.down(500)]: { fontSize: "15px" },
}

function OwnerPanel() {
  return (
    <>
      <Box
        sx={{ position: "relative", display: "flex", justifyContent: "center" }}
      >
        <BackIcon />
        <Typography
          sx={typoStyle}
        >
          This is how the other users can see your vessel:
        </Typography>
      </Box>
      <Divider />
    </>
  );
}

export default OwnerPanel;
