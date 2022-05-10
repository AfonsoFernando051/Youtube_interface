import React, { useState, useEffect, useMemo } from 'react';
import { ThemeProvider, createTheme, makeStyles } from "@material-ui/core";

import Home from "./Home";

const useStyles = makeStyles({
  root: {

  }
})

function App() {
  const [darkMode, setDarkMode] = useState(false);


  const updateMode = (mode) => {
    setDarkMode(mode)
  }

  const theme = useMemo(() => createTheme({
    spacing: 4,
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: "#f44336",
      },
      secondary: {
        main: "#3EA6FF",
      },
      background: {
        default: darkMode ? '#232323' : '#FFF',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#FFF',
      }
    },
  }), [darkMode]);

  return (
    < ThemeProvider theme={theme} >
      <Home darkMode={darkMode} setDarkMode={updateMode} />
    </ ThemeProvider >)
}

export default App;
