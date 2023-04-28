import { useEffect } from "react";
import SearchVessels from "../../components/Vessels/searchVessels";
import AvailableVessels from "../../components/Vessels/availableVessels";
import Logo from "../../components/HomePage/MainFeed/mainLogo";
import { useAppSelector } from "../../hooks";
import { Box } from "@mui/material";
const topBoxStyle = {
  display: "flex",
  flexDirection: "column",
  background: "#162753",
};

function Vessels() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <Box sx={topBoxStyle}>
        <Logo />
        <SearchVessels />
        <AvailableVessels />
      </Box>
    </>
  );
}

export default Vessels;
