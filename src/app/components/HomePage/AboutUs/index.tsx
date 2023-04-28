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
          <img style={imgStyle} src={aboutUs} alt="" />
        </Box>
        <Box sx={textBoxStyle}>
          <Typography component="h3" sx={titleStyle}>
            Feel the best marine experience with our rental deals{" "}
          </Typography>
          <Typography component="h4" sx={descriptionStyle}>
            We are a water equipment rental company based in Rhodos. Amet
            consectetur adipisicing elit. Natus delectus et iure quia nisi,
            inventore culpa similique accusantium ducimus architecto soluta sunt
            aliquid dignissimos atque consequatur numquam dolorem nam omnis!
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam cum
            rem qui cumque possimus, harum quia ipsa quaerat nostrum animi
            corrupti debitis officia quidem, molestiae consectetur doloribus
            voluptas, temporibus pariatur!{" "}
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default AboutUs;
