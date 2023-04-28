import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { changeSize } from "../../../../../features/criterions/criterionsSlice";
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

const sizes = ['small', 'medium', 'large']

function SizeDrawer(props: {
  open: boolean;
  handleSize: (arg: boolean) => void;
}) {
  const dispatch = useAppDispatch();
  const size = useAppSelector((state) => state.criterions.size);
  const theme = useTheme();
  const handleDrawerClose = () => {
    props.handleSize(false);
  };
  const handleItemButton = (text: string) => {
    if(text==='clear'){
      dispatch(changeSize(undefined))
    }else{ dispatch(changeSize(text))}
    props.handleSize(false);
  };

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
          City{" "}
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
        {["clear", ...sizes].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton
              onClick={() => {
                handleItemButton(text);
              }}
            >
              <DeleteForeverIcon
                sx={{ display: text !== "clear" ? "none" : "block" }}
              />
              <ListItemText sx={{
                color:text===size?"black":"rgba(45,45,45,0.75)",
                textDecoration:text===size?"underline":"none"
                } } primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default SizeDrawer;
