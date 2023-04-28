import { createTheme } from "@mui/material"

export const theme = createTheme({
  palette: {
    primary: {
      main: '#6dc5cb',
    },
    secondary: {
      main: '#143060',
    }
  },

  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),

  }
})