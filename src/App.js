import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ThemeContext } from "./ThemeContext";
import Main from "./components/Main";
import NotFound404 from "./components/NotFound404";
import { lightTheme, darkTheme } from "./Theme";

function App() {
  const [theme, setTheme] = useState(() => {
    return window.localStorage.getItem("theme") || "light";
  });
  const [language, setLanguage] = useState(() => {
    return window.localStorage.getItem("language") || "english";
  });

  const muiTheme = theme === "light" ? lightTheme : darkTheme;

  // Save theme and language settings to localStorage
  useEffect(() => {
    window.localStorage.setItem("theme", theme);
    window.localStorage.setItem("language", language);
  }, [theme, language]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, language, setLanguage }}>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ko" element={<Main />} />
            <Route path="*" element={<NotFound404 />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
