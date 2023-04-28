import { Container, Paper, Skeleton } from "@mui/material";

function LoadingComponent() {
  return (
    <Container sx={{ pt: 2 }} maxWidth="md">
    <Paper
      elevation={5}
      sx={{
        position: "relative",
        width:'50%',
        minWidth:'250px',
        height: 550,
        ml: "auto",
        mr: "auto",
        borderRadius: 3,
        pt: 0,
      }}
    >
      <Skeleton
        sx={{
          position: "absolute",
          height: 400,
          borderRadius: 4,
          width: "100%",
          top: -89,
          overflow: "hidden",
        }}
      />

      <Skeleton
        sx={{
          position: "absolute",
          height: 40,
          borderRadius: 2,
          width: "50%",
          top: 280,
          overflow: "hidden",
          left:'50%',
          transform:'translateX(-50%)'
        }}
      />
      <Skeleton
        sx={{
          position: "absolute",
          height: 40,
          borderRadius: 2,
          width: "60%",
          top: 360,
          overflow: "hidden",
          left:'50%',
          transform:'translateX(-50%)'
        }}
      />
      <Skeleton
        sx={{
          position: "absolute",
          height: 40,
          borderRadius: 2,
          width: "60%",
          top: 440,
          overflow: "hidden",
          left:'50%',
          transform:'translateX(-50%)'
        }}
      />
    </Paper>
    </Container>
  );
}

export default LoadingComponent;
