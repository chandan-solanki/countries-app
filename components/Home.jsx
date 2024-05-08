import CountrieList from "./CountrieList";
import FilterContainer from "./FilterContainer";
import SearchContainer from "./SearchContainer";
import Home from "./Home";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { findRenderedComponentWithType } from "react-dom/test-utils";

export default function Home() {
  let [isDark] = useTheme();
  let [query, setQuery] = useState("");
  let [isToggle, setToggle] = useState(false);

  const filterContainerRef = useRef();

  let [filterCntry, setfilterCntry] = useState("");

  function listClickHandler(e) {
    setfilterCntry(e.currentTarget.innerText);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      const target = event.target;

      if (
        filterContainerRef.current &&
        !filterContainerRef.current.contains(target)
      ) {
        setToggle(false);
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <main className={`main-section set-layout ${isDark ? "dark-mode" : ""} `}>
        <div className="feature-container">
          <SearchContainer setQuery={setQuery} />
          <FilterContainer
            listClickHandler={listClickHandler}
            region={filterCntry}
            ref={filterContainerRef}
            isToggle = {isToggle}
            setToggle ={setToggle}
          />
        </div>
        <CountrieList filterCntry={filterCntry} query={query} />
      </main>
    </>
  );
}
