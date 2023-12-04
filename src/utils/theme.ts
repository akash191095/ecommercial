import { ThemeOptions, createTheme } from "@mui/material/styles";

export const themeOptions: ThemeOptions = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f51b5",
      light: "rgb(223, 220, 212)",
    },
    secondary: {
      main: "rgb(239, 51, 70)",
    },
    background: {
      default: "#0b0c22",
      paper: "#0b0c22",
    },
    text: {
      secondary: "rgb(44, 56, 126)",
    },
    info: {
      main: "rgb(222, 156, 238)",
    },
    divider: "rgba(239, 51, 70, 1)",
  },
});
