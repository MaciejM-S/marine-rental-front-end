import { useNavigate } from "react-router-dom";
import { Vessel as VesselInterface } from "../../../../../typings/vessel";
import StepperComponent from "./stepperComponent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import HeightIcon from "@mui/icons-material/Height";
import SailingIcon from "@mui/icons-material/Sailing";
import FeedIcon from "@mui/icons-material/Feed";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import AnimatedButton from "./animatedButton";
import { Button, ButtonGroup } from "@mui/material";
import vesselStyle from "./vesselStyle";

const {
  mainCardStyle,
  nameStyle,
  priceBox,
  perDayStyle,
  perWeekStyle,
  priceStyle,
  descBox,
  descStyle,
  iconStyle,
} = vesselStyle;

export default function Vessel(props: { key: number; ves: VesselInterface }) {
  const navigate = useNavigate();
  const handleView = () => {
    navigate("/" + props.ves._id);
  };
  return (
    <>
      <Card elevation={8} sx={mainCardStyle}>
        <StepperComponent images={props.ves.pictures} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography sx={nameStyle} component="h2">
            {props.ves.name}
          </Typography>
          <Box sx={priceBox}>
            <Typography sx={perDayStyle}>
              <span style={priceStyle}>€{props.ves.pricePerDay}</span>
              /day{" "}
            </Typography>
            <Typography sx={perWeekStyle}>
              <span style={priceStyle}>€{props.ves.pricePerWeek}/week</span>
            </Typography>
          </Box>
          <Divider />
          <Box sx={descBox}>
            <Typography sx={{ ...descStyle, ml: 0 }} component="h2">
              <HeightIcon sx={{ ...iconStyle, transform: "rotate(90deg)" }} />{" "}
              {props.ves.size}
            </Typography>
            <Typography sx={descStyle} component="h2">
              <SailingIcon sx={iconStyle} />
              {props.ves.type}
            </Typography>
            <Typography sx={descStyle} component="h2">
              <FeedIcon sx={iconStyle} />
              {props.ves.year}
            </Typography>
          </Box>
          <Divider />
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <ButtonGroup>
            <Button color="primary" size="small" onClick={handleView}>
              <FullscreenIcon sx={{ fontSize: 16, mr: "2px" }} />
              View ad
            </Button>
            <AnimatedButton _id={props.ves._id} />
          </ButtonGroup>
        </CardActions>
      </Card>
    </>
  );
}
