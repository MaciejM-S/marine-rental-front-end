import React from "react";
import { useEffect } from "react";
import { theme } from "../../../../../theme/theme";
import { Box } from "@mui/material";
import { baseUrl } from "../../../../../features/baseUrl";

function NewUserInfo() {
  const [isNewUser, setIsNewUser] = React.useState(false);
  useEffect(() => {
    fetch(baseUrl+"/checkIfFirst", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token222"),
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setIsNewUser(res.message);
      });
  }, []);

  if (isNewUser) {
    return (
      <Box sx={{ color: theme.palette.primary.main, fontWeight: 700 }}>
        Congrats! Your first vessel will be deployed on our landing site.
      </Box>
    );
  } else {
    return <></>;
  }
}
export default NewUserInfo;
