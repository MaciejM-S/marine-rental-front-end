import { useEffect } from "react";
import { theme } from "../../../theme/theme";
import { Box } from "@mui/material";
import Logo from "../../components/HomePage/MainFeed/mainLogo";
import Button from "../../components/HomePage/MainFeed/button";
import SearchBoatsSection from "../../components/HomePage/MainFeed/searchBoats";
import BookingSteps from "../../components/HomePage/BookingSteps";
import AboutUs from "../../components/HomePage/AboutUs";
import TopVessels from "../../components/HomePage/TopVessels";
import { useAppDispatch } from "../../hooks";
import { changeMainNav } from "../../../features/navigation/navigationSlice";

const topBoxStyle = {
  display: "flex",
  alignItems: "center",
  [`${theme.breakpoints.down(900)} and (orientation: landscape)`]: {},
};

function HomePage() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (window.location.pathname === "/home") {
      dispatch(changeMainNav(0));
    } else if (window.location.pathname === "/vessels") {
      dispatch(changeMainNav(1));
    } else if (window.location.pathname === "/your-account") {
      dispatch(changeMainNav(2));
    } else {
      dispatch(changeMainNav(3));
    }
  });
  const handleScroll = () => {
    const topVes = document.getElementById("topVes");
    if (topVes) {
      topVes.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Box sx={{ background: "#162753" }}>
        <Box sx={topBoxStyle}>
          <Logo />
          <Button handleScroll={handleScroll} />
        </Box>
        <Box>
          <SearchBoatsSection />
        </Box>
        <Box sx={{ background: "white" }}>
          <BookingSteps />
        </Box>
        <Box sx={{ background: "white" }}>
          <AboutUs />
        </Box>
        <Box id="topVes">
          <TopVessels />
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
