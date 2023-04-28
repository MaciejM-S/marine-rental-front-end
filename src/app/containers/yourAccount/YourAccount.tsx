import { useEffect } from "react";
import Contact from "../../components/YourAccount/contact";
import ActionNav from "../../components/YourAccount/actionNav";
import { theme } from "../../../theme/theme";
import { Box } from "@mui/material";
const mainBoxStyle = {
    pl: 4,
    pr: 4,
    flexDirection: "row-reverse",
    [theme.breakpoints.down(1400)]: {
      flexDirection: "column",
      alignItems: "center",
      pl: 0,
      pr: 0,
    },
  };
function YourAccount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Box display={"flex"} sx={mainBoxStyle}>
        <Contact />
        <ActionNav />
      </Box>
    </>
  );
}
export default YourAccount;
