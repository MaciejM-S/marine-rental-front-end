import { Box, Typography, Card, Avatar } from "@mui/material";
import React from "react";
import { Skeleton } from "@mui/material";
import { Buffer } from "buffer";
import { theme } from "../../../../../theme/theme";
import { baseUrl } from "../../../../../features/baseUrl";

const featureStyle = { ml: 1, fontWeight: 600 };
const skeletonStyle = {
  maxWidth: 350,
  p: 2,
  mt: 3,
  mb: 2,
  ml: "auto",
  height: 120,
  borderRadius: "4px",
}
const cardStyle = { maxWidth: 350, p: 2, mt: 3, mb: 2, ml: "auto" }
function Contact(props: { ownerId: string | undefined }) {
  const [loading, setLoading] = React.useState(false);
  const [owner, setOwner] = React.useState<{
    firstName?: string;
    lastName?: string;
    telephone?: string;
    email?: string;
    avatar?: { data: Buffer } | null;
  }>({ firstName: "", lastName: "", telephone: "", email: "", avatar: null });

  React.useEffect(() => {
    setLoading(true);
    console.log(props.ownerId);
    if (props.ownerId) {
      fetch(baseUrl+"/vessel-contact/" + props.ownerId)
        .then((res) => res.json())
        .then((res) => {
          console.log(res.contactCard);
          setLoading(false);
          setOwner(res.contactCard);
        });
    }
  }, []);

  
  const userFirstName = () => {
    if (owner && owner.firstName) {
      return owner.firstName.charAt(0).toUpperCase() + owner.firstName.slice(1);
    }
  };
  const userLastName = () => {
    if (owner && owner.lastName) {
      return owner.lastName.charAt(0).toUpperCase() + owner.lastName.slice(1);
    }
  };

  if (loading) {
    return (
      <>
        <Skeleton
          sx={skeletonStyle}
          variant="rectangular"
        />
      </>
    );
  }
  let avatarSrc;
  if (owner.avatar && owner.avatar.data) {
    avatarSrc =
      "data:image/jpeg;base64," +
      Buffer.from(owner.avatar.data).toString("base64");
  } else {
    avatarSrc = undefined;
  }
  return (
    <Card elevation={6} sx={cardStyle}>
      <Typography sx={{ mb: 1 }}>Owner's Contact Card: </Typography>
      <Box display={"flex"} sx={{ alignItems: "center", [theme.breakpoints.down(400)]:{flexDirection:'column'} }}>
        {owner.avatar && (
          <Box sx={{ m: 1, ml: 0 }}>
            <Avatar src={avatarSrc}>
              {owner.firstName && owner.firstName[0].toUpperCase()}
            </Avatar>
          </Box>
        )}
        <Typography sx={featureStyle}>{userFirstName()}</Typography>
        <Typography sx={featureStyle}>{userLastName()}</Typography>
      </Box>

      {owner?.telephone && (
        <Box display={"flex"} sx={{[theme.breakpoints.down(400)]:{justifyContent:'center'} }}>
          <Typography>Telephone number:</Typography>
          <Typography sx={featureStyle}>{owner?.telephone}</Typography>
        </Box>
      )}
      <Box display={"flex"} sx={{[theme.breakpoints.down(400)]:{justifyContent:'center'} }} >
        <Typography>Email:</Typography>
        <Typography sx={featureStyle}> {owner?.email}</Typography>
      </Box>
    </Card>
  );
}

export default Contact;
