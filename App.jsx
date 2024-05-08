import { useState } from "react";
import CountrieList from "./components/CountrieList";
import FilterContainer from "./components/FilterContainer";
import Header from "./components/Header";
import SearchContainer from "./components/SearchContainer";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";
import themeContext  from "./contexts/ThemeContext";
import ThemeProvider from "./contexts/ThemeContext";


export default function App() {

  let [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
