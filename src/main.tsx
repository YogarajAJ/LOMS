import React from "react";
import ReactDOM from "react-dom/client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const theme = createTheme({
  palette: {
    mode: "light", // or "dark"
    primary: {
      main: "#28b2b6", // your desired primary color
      contrastText: "#ffffff", // text color on primary background
    },
    secondary: {
      main: "#0f547e", // your desired secondary color
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
