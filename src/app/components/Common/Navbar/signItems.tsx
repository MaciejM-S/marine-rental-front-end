import { useNavigate } from "react-router-dom";
import { theme } from "../../../../theme/theme";
import { Button, Box } from "@mui/material";

const buttonStyle = {
  m: 1,
  width: "100px",
  [theme.breakpoints.down(400)]: {
    width: "75px",
    fontSize: "11px",
    m: "2px",
  },
};

function SignItems() {
  const navigate = useNavigate();

  return (
    <>
      <Box
        sx={{
          display: "flex",
          [theme.breakpoints.down(900)]: {
            ml: "auto",
            mr: "3px",
          },
        }}
      >
        <Button
          sx={buttonStyle}
          variant="outlined"
          onClick={() => {
            navigate("/sign-in");
          }}
        >
          Sign In
        </Button>
        <Button
          sx={buttonStyle}
          variant="outlined"
          onClick={() => {
            navigate("/sign-up");
          }}
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
}

export default SignItems;
