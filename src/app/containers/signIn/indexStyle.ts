import { theme } from "../../../theme/theme";

const indexStyle = {
  helperTextProps: {
    sx: {
      color: theme.palette.primary.main,
      fontWeight: 700,
    },
  },
  mainBoxStyle: {
    my: 8,
    mx: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  buttonStyle: { mt: 3, mb: 2, color: "white", fontWeight: 600 },
};

export default indexStyle;
