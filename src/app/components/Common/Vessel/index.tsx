import { Container, Box } from "@mui/material";
import MainLogo from "../../HomePage/MainFeed/mainLogo";
import Gallery from "./gallery";
import Info from "./info";
import React from "react";
import { useParams } from "react-router-dom";
import { Vessel as VesselType } from "../../../../typings/vessel";
import { CircularProgress } from "@mui/material";
import OwnerPanel from "./ownerPanel/ownerPanel";
import UserPanel from "./userPanel/userPanel";
import FavoritesPanel from "./favoritesPanel/favoritesPanel";
import vesselStyle from "./vesselStyle";
import { baseUrl } from "../../../../features/baseUrl";
const { indexBoxStyle } = vesselStyle;

function VesselProfile() {
  let { id, owner } = useParams();
  const [vessel, setVessel] = React.useState<VesselType | undefined>(undefined);
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    fetch(baseUrl+"/vessel-owner/" + id, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setVessel(res);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box sx={indexBoxStyle}>
        <CircularProgress
          size={100}
          thickness={1.5}
          sx={{ transform: "translate(45%)" }}
        />
      </Box>
    );
  }
  return (
    <>
      <Box sx={{ background: "#162753" }}>
        <MainLogo />
      </Box>
      {owner === "owner" && <OwnerPanel />}
      {owner === "favorites" && <FavoritesPanel />}
      {owner !== "owner" && owner !== "favorites" && <UserPanel />}
      <Gallery pictures={vessel?.pictures} />
      <Container>
        <Info vessel={vessel} />
      </Container>
    </>
  );
}

export default VesselProfile;
