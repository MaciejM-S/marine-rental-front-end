import aboutUs from "../../../../pub/jachtpng.png";
import { Box, Typography } from "@mui/material";
import aboutUsStyle from "./aboutUsStyle";

const {
  mainBoxStyle,
  boxImageStyle,
  imgStyle,
  textBoxStyle,
  titleStyle,
  descriptionStyle,
} = aboutUsStyle;

function AboutUs() {
  return (
    <>
      <Box sx={mainBoxStyle}>
        <Box sx={boxImageStyle}>
          <img style={imgStyle} src={aboutUs} alt="jacht" />
        </Box>
        <Box sx={textBoxStyle}>
          <Typography component="h3" sx={titleStyle}>
            Feel the best marine experience with our rental deals{" "}
          </Typography>
          <Typography component="h4" sx={descriptionStyle}>
            The user accounts and vessels added to the application are for
            demonstration purposes only and not associated with real users or
            products. They are used solely for demonstrating the functionality
            of this application. Please note that any reservations or requests
            made for these test boats will not be processed. We apologize for
            any inconvenience caused.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
