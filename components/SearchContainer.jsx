import React from "react";

export default function SearchContainer({ setQuery }) {
  return (
    <>
      <div className="search-container">
        <span className="search-icon">
          <i className="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </span>
        <input
          placeholder="Search for a country..."
          type="text"
          name="search"
          id="search-input"
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </>
  );
}
