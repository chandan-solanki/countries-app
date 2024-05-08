import { createContext, useState } from "react";

export const themeContext = createContext();

export default function ThemeProvider({ children }) {
  
  let [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark"))
  );

  return (
    <themeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </themeContext.Provider>
  );
}
