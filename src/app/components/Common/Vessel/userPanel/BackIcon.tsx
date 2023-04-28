import { IconButton } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { useNavigate } from "react-router-dom";

type BackIconProps = {
  setOpenAvatar?: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenInfo?: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenPassword?: React.Dispatch<React.SetStateAction<boolean>>;
  resetData?: () => void;
  setFile?: React.Dispatch<React.SetStateAction<File | undefined>>;
  resetModal?: () => void;
};

function BackIcon() {
  const navigate = useNavigate();

  return (
    <>
      <IconButton
        onClick={() => {
          navigate("/vessels");
        }}
      >
        <ExitToAppIcon
          color="primary"
          sx={{ transform: "rotate(180deg)", fontSize: 35 }}
        />
      </IconButton>
    </>
  );
}

export default BackIcon;
