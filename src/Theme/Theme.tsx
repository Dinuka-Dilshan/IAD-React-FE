import { green, indigo } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {},
  palette: {
    primary: {
      main: "#2162FE",
      light: "white",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  spacing:4,

});

export default theme;
