import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { changeType } from "../../../../../features/criterions/criterionsSlice";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function TypeDrawer(props: {
  open: boolean;
  handleType: (arg: boolean) => void;
}) {
  const dispatch = useAppDispatch();
  const type = useAppSelector((state) => state.criterions.type);
  const theme = useTheme();
  const handleDrawerClose = () => {
    props.handleType(false);
  };
  const handleItemButton = (text: string) => {
    if (text === "clear") {
      dispatch(changeType(undefined));
    } else {
      dispatch(changeType(text));
    }
    props.handleType(false);
  };
  const types: string[] = ["sailing", "motor", "gulet"];
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={props.open}
    >
      <DrawerHeader>
        <Typography sx={{ mr: "auto", ml: 1, textTransform: "uppercase" }}>
          Type{" "}
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "ltr" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {["clear", ...types].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                handleItemButton(text);
              }}
            >
              <DeleteForeverIcon
                sx={{ display: text !== "clear" ? "none" : "block" }}
              />
              <ListItemText
                sx={{
                  color: text === type ? "black" : "rgba(45,45,45,0.75)",
                  textDecoration: text === type ? "underline" : "none",
                }}
                primary={text}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default TypeDrawer;
