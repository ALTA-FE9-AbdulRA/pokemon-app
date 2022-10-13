import React, { useEffect, useMemo, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "pages";
import PokeDetails from "pages/PokeDetails";
import { ThemeContext } from "utils/context";

function App() {
  const [isLight, setIsLight] = useState (true);
  const theme = useMemo (() => ({ isLight, setIsLight}), [isLight]);

  useEffect (() => {
    if (isLight) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLight]);

  return (
    <ThemeContext.Provider value={theme} >
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PokeDetails" element={< PokeDetails />}/>
      </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
};

export default App;