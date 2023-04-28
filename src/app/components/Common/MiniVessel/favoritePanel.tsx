import { Box, Paper, Tooltip, Typography } from "@mui/material";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import StarIcon from "@mui/icons-material/Star";
import UnlikeDialog from "./unlikeDialog";
import React from "react";
import { theme } from "../../../../theme/theme";
import { CircularProgress } from "@mui/material";
import { useAppSelector } from "../../../hooks";
import miniVesselStyle from "./miniVesselStyle";
import { baseUrl } from "../../../../features/baseUrl";

const {
  paperStyle,
  addedBoxStyle,
  iconStyle,
  addedTypoStyle,
  noLikeBoxStyle,
  noLikeTypoStyle,
} = miniVesselStyle;

type FavoritePanelProps = {
  _id: string;
  handleFavoriteUser?: () => void;
  favorite?: boolean;
};

function FavoritePanel(props: FavoritePanelProps) {
  const [liked, setLiked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [changedToLike, setChangedToLike] = React.useState(false);
  const [changedToNoLike, setChangedToNoLike] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const loggedIn = useAppSelector((state) => state.user.authenticated);

  const handleClose = () => {
    setOpen(false);
  };

  const signedIn = useAppSelector((state) => state.user.authenticated);

  React.useEffect(() => {
    if (signedIn) {
      isFavorite();
    }
  }, []);

  const isFavorite = () => {
    fetch(baseUrl+"/isFavorite/" + props._id, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setLiked(res.message);
      });
  };

  const handleFavorite = () => {
    if (props.favorite) {
      setOpen(true);
      return;
    }
    setLoading(true);
    fetch(baseUrl+"/handleFavorite/" + props._id + "/" + liked, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (res.message === "changed") {
          if (!liked) {
            setChangedToLike(true);
            setChangedToNoLike(false);
          } else {
            setChangedToLike(false);
            setChangedToNoLike(true);
          }
          setLiked(!liked);
        }
      });
  };
  if (!loggedIn) {
    return (
      <Tooltip title="sign up to like vessels">
        <Paper elevation={2} sx={paperStyle} onClick={handleFavorite}>
          <StarBorderPurple500OutlinedIcon
            sx={{ ...iconStyle, color: "gray" }}
          />
        </Paper>
      </Tooltip>
    );
  }
  return (
    <>
      <Paper elevation={2} sx={paperStyle} onClick={handleFavorite}>
        {changedToLike && (
          <Box sx={addedBoxStyle}>
            <Typography sx={addedTypoStyle}>added to your favorites</Typography>
          </Box>
        )}
        {changedToNoLike && (
          <Box sx={noLikeBoxStyle}>
            <Typography sx={noLikeTypoStyle}>removed from favorites</Typography>
          </Box>
        )}
        {loading ? (
          <CircularProgress />
        ) : liked ? (
          <StarIcon
            sx={{ ...iconStyle, color: theme.palette.secondary.main }}
          />
        ) : (
          <StarBorderPurple500OutlinedIcon color="secondary" sx={iconStyle} />
        )}
      </Paper>
      <UnlikeDialog
        _id={props._id}
        open={open}
        handleClose={handleClose}
        handleFavoriteUser={props.handleFavoriteUser}
      />
    </>
  );
}

export default FavoritePanel;
