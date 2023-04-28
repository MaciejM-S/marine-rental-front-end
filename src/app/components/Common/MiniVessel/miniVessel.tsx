import { useNavigate } from "react-router-dom";
import { Buffer } from "buffer";
import { Vessel as VesselInterface } from "../../../../typings/vessel";
import ManagePanel from "./managePanel";
import FavoritePanel from "./favoritePanel";
import { theme } from "../../../../theme/theme";
import { Paper, Box, Typography, CardContent, Divider } from "@mui/material";
import PinDropIcon from "@mui/icons-material/PinDrop";
import FeedIcon from "@mui/icons-material/Feed";
import HeightIcon from "@mui/icons-material/Height";
import SailingIcon from "@mui/icons-material/Sailing";
import miniVesselStyle from "./miniVesselStyle";

const {
  mainPaperStyle,
  nameStyle,
  priceBox,
  perDayStyle,
  pictureStyle,
  perWeekStyle,
  priceStyle,
  descBox,
  descStyle,
  nextIconStyle,
} = miniVesselStyle;

type vesselProps = VesselInterface;
function MiniVessel(props: {
  ves: vesselProps;
  id?: number;
  yourVessels: boolean;
  favorite?: boolean;
  handleFavorite?: () => void;
}) {
  const navigate = useNavigate();
  const handleVessel = () => {
    if (!props.yourVessels && !props.favorite)
      return navigate("/" + props.ves._id);
    if (props.favorite) return navigate("" + props.ves._id + "/favorites");
  };
  const Picture = () => {
    if (props.ves.pictures[0] && props.ves.pictures[0].data.data) {
      return (
        <Paper
          onClick={handleVessel}
          sx={{
            ...pictureStyle,
            cursor: props.yourVessels ? "default" : "pointer",
            [theme.breakpoints.between(800, 1000)]: {
              marginTop: props.yourVessels ? "45px" : "0",
              height: props.yourVessels ? "220px" : "180px",
            },
            backgroundImage:
              props.ves.pictures &&
              "url(data:image/jpeg;base64," +
                Buffer.from(props.ves.pictures[0].data.data, "binary").toString(
                  "base64"
                ) +
                ")",
          }}
        />
      );
    } else if (props.ves.pictures[0] && props.ves.pictures[0].data) {
      return (
        <Paper
          onClick={handleVessel}
          sx={{
            ...pictureStyle,
            cursor: props.yourVessels ? "default" : "pointer",
            backgroundImage:
              props.ves.pictures &&
              "url(data:image/jpeg;base64," + props.ves.pictures[0].data + ")",
          }}
        />
      );
    } else return <></>;
  };
  return (
    <>
      <Paper elevation={8} sx={mainPaperStyle}>
        <Box
          sx={{
            margin: "10px",
            [theme.breakpoints.down(500)]: {
              margin: 0,
            },
          }}
        >
          <Picture />{" "}
        </Box>
        <Box sx={{ p: 1, mt: "10px", cursor: "pointer" }}>
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography sx={nameStyle} component="h2">
              {props.ves.name}
            </Typography>
            <Divider />
            <Box sx={descBox}>
              <Typography sx={{ ...descStyle, ml: 0 }} component="h2">
                <HeightIcon
                  sx={{ ...nextIconStyle, transform: "rotate(90deg)" }}
                />{" "}
                {props.ves.size}
              </Typography>
              <Typography sx={descStyle} component="h2">
                <SailingIcon sx={nextIconStyle} />
                {props.ves.type}
              </Typography>
              <Typography sx={descStyle} component="h2">
                <FeedIcon sx={nextIconStyle} />
                {props.ves.year}
              </Typography>
            </Box>
            <Divider />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography sx={{ p: 1, textAlign: "center" }}>
                {" "}
                <PinDropIcon
                  sx={{ transform: "translateY(25%)" }}
                  color="secondary"
                />{" "}
                {props.ves.location}
              </Typography>{" "}
              {!props.yourVessels && (
                <FavoritePanel
                  _id={props.ves._id}
                  handleFavoriteUser={props?.handleFavorite}
                  favorite={props.favorite}
                />
              )}
            </Box>
          </CardContent>
        </Box>
        <Box onClick={handleVessel} sx={priceBox}>
          <Typography sx={perDayStyle}>
            <span style={priceStyle}>€{props.ves.pricePerDay}</span>
            /day{" "}
          </Typography>
          <Typography sx={{ ...perWeekStyle }}>
            <span style={priceStyle}>€{props.ves.pricePerWeek}/week</span>
          </Typography>
          {props.yourVessels && <ManagePanel ves={props.ves} />}
        </Box>
      </Paper>
    </>
  );
}

export default MiniVessel;
