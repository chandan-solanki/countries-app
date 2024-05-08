import { useContext } from "react";
import { themeContext } from "../contexts/ThemeContext";

export const useTheme = () => useContext(themeContext);
