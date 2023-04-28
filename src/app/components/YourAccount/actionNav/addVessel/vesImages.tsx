import { useState } from "react";
import { useAppDispatch } from "../../../../hooks";
import { addPictures } from "../../../../../features/vessel/vesselSlice";
import { theme } from "../../../../../theme/theme";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import ImageIcon from "@mui/icons-material/Image";

const imageMainBoxStyle = {
  width: "125px",
  height: "100px",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "5px",
  m: 1,
  boxShadow: 3,
};

type VesImagesProps = {
  setImageError: React.Dispatch<React.SetStateAction<string>>;
};

function VesImages(props: VesImagesProps) {
  const dispatch = useAppDispatch();
  const [files, setFiles] = useState<undefined | string[]>();
  const handleAddPicture = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files?.length > 5) {
      return props.setImageError("toMany");
    }
    const pictures = [];
    if (e.target.files) {
      for (const picture of e.target.files) {
        pictures.push(URL.createObjectURL(picture));
      }
      setFiles(pictures);
      if (pictures.length === 0) {
        dispatch(addPictures(null));
      } else {
        dispatch(addPictures(e.target.files));
      }
    }
  };

  return (
    <Box sx={{ m: "0 20px" }}>
      <Button
        sx={{
          color: "white",
          [theme.breakpoints.down(450)]: {
            fontSize: "10px",
          },
        }}
        variant="contained"
        component="label"
      >
        Add pictures (up to 5 photos)
        <input
          onChange={handleAddPicture}
          hidden
          accept="image/*"
          multiple
          type="file"
        />
        <ImageIcon sx={{ ml: 1 }} />
      </Button>
      <Box sx={{ display: "flex", flexWrap: "wrap", m: "20px 0" }}>
        {files?.map((file) => (
          <Box
            sx={{ ...imageMainBoxStyle, backgroundImage: `url('${file}')` }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
}

export default VesImages;
