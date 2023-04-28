import { Button, Box } from "@mui/material";
import { theme } from "../../../../theme/theme";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import mainFeedStyle from "./mainFeedStyle";

const { mobileBoxStyle, desktopBoxStyle, buttonStyle, iconStyle } =
  mainFeedStyle;

type TopButtonProps = {
  handleScroll: () => void;
};

function TopButton(props: TopButtonProps) {
  const handleButton = () => {
    props.handleScroll();
  };

  return (
    <>
      <Box sx={desktopBoxStyle}>
        <Button
          variant="contained"
          onClick={handleButton}
          sx={buttonStyle}
          color="secondary"
        >
          <StarBorderPurple500Icon sx={{ mr: 0.5 }} />
          Top Deals
        </Button>
      </Box>
      <Box sx={mobileBoxStyle}>
        <Button
          onClick={handleButton}
          sx={{ ...buttonStyle, color: "white" }}
          size="medium"
          variant="outlined"
        >
          <StarBorderPurple500Icon sx={iconStyle} />
          Top Deals
        </Button>
      </Box>
    </>
  );
}
export default TopButton;
