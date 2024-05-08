
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  let[isDark, setIsDark] = useTheme();
  console.log({isDark})

  if(isDark) {document.body.classList.add("dark-mode")}

  return (
    <>
      <header className={isDark ? "set-layout dark-mode" : "set-layout"}>
        <nav className="nav-bar">
          <p className="title-nav">Where in the world?</p>
          <div className="theme-container">
            <button
              id="themeBtn"
              onClick={() => {
                setIsDark(!isDark);
                localStorage.setItem("isDark", !isDark);
              }}
            >
              <span className="theme-icon">
                <i
                  className={isDark ? "fa-solid fa-sun" : "fa-solid fa-moon"}
                  aria-hidden="true"
                ></i>
              </span>
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
