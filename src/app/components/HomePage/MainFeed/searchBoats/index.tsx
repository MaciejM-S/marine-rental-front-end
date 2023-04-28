import { Box, Typography } from "@mui/material";
import yacht from "../../../../../pub/yacht0.png";
import MainDescription from "./MainDescription";
import DatePicker from "./DatePicker";
import { theme } from "../../../../../theme/theme";
import { useEffect, useState } from "react";

const boxStyle = {
  position: "relative",
  width: "100%",
  height: "650px",
  backgroundImage: `url('${yacht}')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center 45%",
  [theme.breakpoints.up(900)]: {
    height: "600px",
  },
  [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]: {
    height: "300px",
  },
};

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function SearchBoats() {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <Box
      sx={{
        ...boxStyle,
        [`${theme.breakpoints.down(1000)} and (orientation: landscape)`]:
          windowSize.innerWidth > 500 && windowSize.innerHeight < 400
            ? { height: 230 }
            : {height: 330},
            [`${theme.breakpoints.down(1000)} and (orientation: portrait)`]:
              windowSize.innerHeight>800?{height: 750}:{}
            
      }}
    >
      <MainDescription />
      <DatePicker />
    </Box>
  );
}

export default SearchBoats;
