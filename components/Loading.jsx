import { useTheme } from "../hooks/useTheme";

export default function Loading() {
  let [isDark] = useTheme();

  return (
    <div className={`loading-container ${isDark ? "dark-mode" : ""}`}>
      <div className="circle-loading"></div>
    </div>
  );
}
