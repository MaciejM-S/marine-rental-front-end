import * as React from "react";
import { useState } from "react";
import { Vessel as VesselInterface } from "../../../../typings/vessel";
import LoadingComponent from "./LoadingComponent";
import MainContainer from "./mainContainer";
import topVessels from "./topVessels";
import Container from "@mui/material/Container";
import { Typography, Box } from "@mui/material";
import { baseUrl } from "../../../../features/baseUrl";

const { titleStyle, mainBoxIndexStyle } = topVessels;
export default function TopVessels() {
  const [loading, setLoading] = useState(true);
  const [vessels, setVessels] = useState<VesselInterface[] | undefined>(
    undefined
  );
  React.useEffect(() => {
    fetch(baseUrl+"/firstVessels")
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        setVessels(res.vessels);
      });
  }, []);

  return (
    <Box sx={{ background: "white", pb: 4 }}>
      <main>
        <Box sx={mainBoxIndexStyle}>
          <Container maxWidth="sm">
            <Typography
              sx={titleStyle}
              component="h1"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Explore Our Top Deals:
            </Typography>
          </Container>
        </Box>
        {loading ? <LoadingComponent /> : <MainContainer vessels={vessels} />}
      </main>
    </Box>
  );
}
