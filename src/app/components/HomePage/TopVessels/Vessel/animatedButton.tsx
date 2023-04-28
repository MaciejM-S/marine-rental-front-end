import React from "react";
import { useState } from "react";
import { useAppSelector } from "../../../../hooks";
import { theme } from "../../../../../theme/theme";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Button, Tooltip, Zoom } from "@mui/material";
import { Box } from "@mui/system";
import { baseUrl } from "../../../../../features/baseUrl";

type AniamtedButtonProps = {
  _id: string;
};

function AnimatedButton(props: AniamtedButtonProps) {
  const signedIn = useAppSelector((state) => state.user.authenticated);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    if (signedIn) {
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
    }
  }, []);
  React.useEffect(() => {}, [signedIn]);
  const handleLike = () => {
    setLoading(true);
    fetch(baseUrl+"/handleFavorite/" + props._id + "/" + liked, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
    }).then(() => {
      setLoading(false);
    });
    setLiked(!liked);
  };
  if (signedIn) {
    return (
      <>
        <Button
          disabled={loading}
          variant="outlined"
          sx={{ width: 75, height: 31 }}
          onClick={handleLike}
        >
          <Zoom in={!liked}>
            <Box
              sx={{
                fontSize: 13,
                position: "absolute",
                display: "flex",
                alignItems: "center",
              }}
            >
              <StarBorderIcon sx={{ fontSize: 15, mr: "1px" }} />
              Like
            </Box>
          </Zoom>
          <Zoom in={liked}>
            <Box
              sx={{
                fontSize: 13,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                color: theme.palette.secondary.main,
              }}
            >
              <StarRateIcon sx={{ fontSize: 16 }} />
            </Box>
          </Zoom>
        </Button>
      </>
    );
  } else {
    return (
      <>
        {" "}
        <Tooltip title="sign up to like vessels">
          <Box>
            <Button
              disabled={true}
              variant="outlined"
              sx={{ width: 75, height: 31, ml: 1 }}
              onClick={handleLike}
            >
              <Box
                sx={{
                  fontSize: 13,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <StarBorderIcon sx={{ fontSize: 15, mr: "1px" }} />
                Like
              </Box>
            </Button>{" "}
          </Box>
        </Tooltip>
      </>
    );
  }
}

export default AnimatedButton;
