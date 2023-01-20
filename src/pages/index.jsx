import React from "react";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import HomePanel from "../components/HomePanel";
import Header from "../components/Header";
import Projects from "../components/Projects";

let theme = createTheme({
  palette: {
    background: {
      default: "#222222",
    },
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#ffffff",
    },
  },
});

theme = responsiveFontSizes(theme);

export default function index() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <HomePanel />
      <Projects />
    </ThemeProvider>
  );
}
