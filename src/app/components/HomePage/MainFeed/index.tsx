import Logo from "./mainLogo";
import SearchBoatsSection from "./searchBoats";
import BookingSteps from "../BookingSteps";
import AboutUs from "../AboutUs";
import TopVessels from "../TopVessels";
import { Box } from "@mui/material";

const topBoxStyle = { display: "flex", alignItems: "center" };

function MainFeedContainer() {
  return (
    <>
      <Box sx={{ background: "#162753" }}>
        <Box sx={topBoxStyle}>
          <Logo />
        </Box>
        <Box>
          <SearchBoatsSection />
        </Box>
        <Box>
          <BookingSteps />
        </Box>
        <Box>
          <AboutUs />
        </Box>
        <Box>
          <TopVessels />
        </Box>
      </Box>
    </>
  );
}

export default MainFeedContainer;
