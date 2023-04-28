import { useEffect } from "react";
import { useState } from "react";
import {useAppSelector } from "../../../hooks";
import Vessel from "../../Common/MiniVessel/miniVessel";
import { Vessel as VesselInterface } from "../../../../typings/vessel";
import { Box, Typography, CircularProgress } from "@mui/material";
import actionNavStyle from "./actionNavStyle"
import { noItemStyle } from "./actionNavStyle";
import { baseUrl } from "../../../../features/baseUrl";

const {infoStyle, yourVesMainBoxStyle} = actionNavStyle
function YourVessels() {
  const { vesselAdded, vesselUpdated, vesselRemoved } = useAppSelector(
    (state) => state.navigation
  );
  const [vessels, setVessels] = useState<VesselInterface[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    fetch(baseUrl+"/yourVessels", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setVessels(res);
        setLoading(false);
      });
  }, [vesselRemoved]);

  if (vessels && vessels.length === 0) {
    return (
      <Typography sx={noItemStyle}>
        You haven't added any vessels yet.
      </Typography>
    );
  }
  return (
    <>
      {loading ? (
        <CircularProgress sx={{ mt: 5 }} size={75} />
      ) : (
        <Box
          sx={yourVesMainBoxStyle}
        >
          <Typography sx={{ ...infoStyle, display: vesselAdded ? 'block' : 'none',  }}>
            You have successfully added a vessel!
          </Typography>
          <Typography sx={{ ...infoStyle,  display: vesselUpdated ? 'block' : 'none', }}>
            You have successfully updated a vessel!
          </Typography>
          <Typography sx={{ ...infoStyle,  display: vesselRemoved ? 'block' : 'none', }}>
            You have successfully removed a vessel!
          </Typography>
          {!vesselAdded&&!vesselUpdated&&!vesselRemoved&&
          <Typography sx={infoStyle}>
          Vessels you have added:
        </Typography>
          }          
          {vessels &&
            vessels.map((vessel, index) => (
              <Vessel id={index} ves={vessel} yourVessels={true} />
            ))}
        </Box>
      )}
    </>
  );
}

export default YourVessels;
