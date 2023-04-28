import { Typography } from "@mui/material";

function Error() {
  return (
    <>
      <Typography
        sx={{
          fontSize: 25,
          m: "40px auto 48vh",
          p: 1,
          textAlign: "center",
        }}
      >
        Something went wrong, please try again later.
      </Typography>
    </>
  );
}

export default Error;
