import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { theme } from "../../../theme/theme";
import Logo from "../../components/Common/Navbar/mainLogo";

function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number }
) {
  return (
  <Box  sx={{bgcolor: theme.palette.secondary.main,}}>
  <Box sx={{display:'flex',  justifyContent:'center', pt:4}} >
  <Logo />
  </Box>
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        bgcolor: theme.palette.secondary.main,
      }}
    >
      
      <Box
        sx={{
          position: "relative",
          display: "inline-flex",
          height: "120px",
          mb: 4,
        }}
      >
        <CircularProgress
          variant="determinate"
          {...props}
          sx={{ position: "static", color: "white" }}
          size={120}
          thickness={2}
        />
        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="white"
            sx={{ fontSize: 25 }}
          >{`${Math.round(props.value)}%`}</Typography>
        </Box>
      </Box>{" "}
    </Box>
  </Box>

  );
}

export default function Loading(props: { counter: number }) {
  return <CircularProgressWithLabel value={props.counter} />;
}
