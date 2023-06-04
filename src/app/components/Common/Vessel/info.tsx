import { Vessel as VesselType } from "../../../../typings/vessel";
import Contact from "./info/contact";
import PinDropIcon from "@mui/icons-material/PinDrop";
import vesselStyle from "./vesselStyle";
import { theme } from "../../../../theme/theme";
import { Box, Typography, Divider } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import SailingIcon from "@mui/icons-material/Sailing";
import HeightIcon from "@mui/icons-material/Height";

const {
  mainBoxStyle,
  infoStyle,
  priceBox,
  perDayStyle,
  perWeekStyle,
  priceStyle,
  descBox,
  descStyle,
  iconStyle,
} = vesselStyle;

type InfoProps = {
  vessel: VesselType | undefined;
};

function Info(props: InfoProps) {
  return (
    <>
      <Box sx={mainBoxStyle}>
        <Typography sx={{ mb: 1, fontWeight: 600, fontSize: "18px" }}>
          {" "}
          {props.vessel && props.vessel.name}{" "}
        </Typography>
        <Divider />

        <Box display={"flex"} sx={infoStyle}>
          <Box sx={descBox}>
            <Typography sx={{ ...descStyle, ml: 0 }} component="h2">
              <HeightIcon sx={{ ...iconStyle, transform: "rotate(90deg)" }} />{" "}
              {props.vessel && props.vessel.size}
            </Typography>
            <Typography sx={descStyle} component="h2">
              <SailingIcon sx={iconStyle} />
              {props.vessel && props.vessel.type}
            </Typography>
            <Typography sx={descStyle} component="h2">
              <FeedIcon sx={iconStyle} />
              {props.vessel && props.vessel.year}
            </Typography>
          </Box>

          <Box
            sx={{
              ...priceBox,
              ml: "auto",
              mr: "auto",
              opacity: 0.7,
              [theme.breakpoints.down(800)]: {
                m: 0,
                mt: 2,
                mb: 2,
              },
            }}
          >
            <PinDropIcon />
            <Typography>{props.vessel && props.vessel.location}</Typography>
          </Box>

          <Box sx={priceBox}>
            <Typography sx={perDayStyle}>
              <span style={priceStyle}>
                € {props.vessel && props.vessel.pricePerDay}
              </span>
              /day{" "}
            </Typography>
            <Typography sx={perWeekStyle}>
              <span style={priceStyle}>
                € {props.vessel && props.vessel.pricePerWeek}/week
              </span>
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mt: 2, lineHeight: "150%", ml: 2 }}>
          {props.vessel && props.vessel.description}
        </Box>

        <Contact ownerId={props.vessel?.user} />
      </Box>
    </>
  );
}

export default Info;
