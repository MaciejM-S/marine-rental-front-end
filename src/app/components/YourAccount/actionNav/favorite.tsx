import React from "react";
import { Vessel as VesselType } from "../../../../typings/vessel";
import Vessel from "../../Common/MiniVessel/miniVessel";
import { Box, Typography, CircularProgress } from "@mui/material";
import { noItemStyle } from "./actionNavStyle";
import actionNavStyle from "./actionNavStyle";
import { baseUrl } from "../../../../features/baseUrl";

const { favoriteInfoStyle, favoriteMainBoxStyle } = actionNavStyle;

function Favorite() {
  const [likedVessels, setLikedVessels] = React.useState<
    undefined | [VesselType]
  >(undefined);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    handleFavorite();
  }, []);
  const handleFavorite = () => {
    setLoading(true);
    fetch(baseUrl+"/getFavorites", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data !== "noVessels") setLikedVessels(res.data);
      });
  };
  if (!likedVessels || (likedVessels && likedVessels.length < 1)) {
    return (
      <>
        {loading ? (
          <CircularProgress sx={{ mt: 5 }} size={75} />
        ) : (
          <Typography sx={{ ...noItemStyle }}>
            You haven't liked any vessels yet.
          </Typography>
        )}
      </>
    );
  }
  return (
    <>
      {loading ? (
        <CircularProgress sx={{ mt: 5 }} size={75} />
      ) : (
        <Box sx={favoriteMainBoxStyle}>
          <Typography sx={favoriteInfoStyle}>
            Vessels you have liked:
          </Typography>
          {likedVessels &&
            likedVessels.map((vessel, index) => {
              return (
                <Vessel
                  handleFavorite={handleFavorite}
                  id={index}
                  ves={vessel}
                  yourVessels={false}
                  favorite={true}
                />
              );
            })}
        </Box>
      )}
    </>
  );
}

export default Favorite;
