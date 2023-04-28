import { Carousel } from "react-carousel-minimal";
import { Buffer } from "buffer";
import React from "react";
import vesselStyle from "./vesselStyle";

const { captionStyle, slideNumberStyle } = vesselStyle;

type GalleryProps = {
  pictures: [{ data: { data: Buffer } }];
};
function Gallery(props: GalleryProps) {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  React.useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  let data;
  if (props.pictures) {
    data = props.pictures.map((picture, index) => {
      return {
        image: `data:image/png;base64,${Buffer.from(
          props.pictures[index].data.data
        ).toString("base64")}`,
      };
    });
  } else {
    data = [{ image: undefined }];
  }
  const thumbnails = () => {
    if (data.length === 1 || window.innerWidth < 700) {
      return false;
    } else {
      return true;
    }
  };
  const dots = () => {
    if (data.length === 1) {
      return false;
    } else {
      return true;
    }
  };
  const style = () => {
    if (window.innerWidth < 1000) {
      console.log(window.innerHeight);
      return {
        textAlign: "center",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        maxWidth: "800px",
        maxHeight:
          window.innerHeight < 700 ? window.innerHeight - 50 + "px" : "600px",
        margin: "0px auto 40px",
      };
    } else {
      return {
        textAlign: "center",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        maxWidth: "1000px",
        maxHeight:
          window.innerHeight < 700 ? window.innerHeight - 50 + "px" : "600px",
        margin: "0px auto 40px",
      };
    }
  };
  const boxStyle = () => {
    if (window.innerWidth < 450) {
      return { padding: "0" };
    } else {
      return { padding: "0 35px" };
    }
  };
  return (
    <div className="App">
      <div
        style={{
          textAlign: "center",
          padding:
            data.length === 1 || window.innerWidth < 700
              ? "50px 0 0"
              : "50px 0",
        }}
      >
        <div style={boxStyle()}>
          <Carousel
            data={data}
            width="100%"
            height={
              window.innerHeight < 700
                ? window.innerHeight - 50 + "px"
                : "600px"
            }
            captionStyle={captionStyle}
            radius="1px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            dots={dots()}
            showNavBtn={dots()}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={thumbnails()}
            thumbnailWidth={window.innerWidth < 1000 ? "60px" : "100px"}
            style={style()}
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
