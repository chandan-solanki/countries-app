import React, { forwardRef, useState } from "react";

const FilterContainer = forwardRef(
  ({ listClickHandler, region, isToggle, setToggle }, ref) => {

    function clickHandler(e) {
      setToggle(isToggle ? false : true);
    }

    return (
      <>
        <div className="filter-container" ref={ref} onClick={clickHandler}>
          <div className="select-reg-btn">
            <p className="select-region">
              {region !== "" ? region : "Filter by region"}
            </p>
            <span className="arrow-down">
              <i className="fa-solid fa-chevron-down" aria-hidden="true"></i>
            </span>
          </div>

          <div className={`list-region ${isToggle && "active-list-region"}`}>
            <ul>
              <li onClick={listClickHandler}>All</li>
              <li onClick={listClickHandler}>Africa</li>
              <li onClick={listClickHandler}>America</li>
              <li onClick={listClickHandler}>Asia</li>
              <li onClick={listClickHandler}>Europe</li>
              <li onClick={listClickHandler}>Oceania</li>
            </ul>
          </div>
        </div>
      </>
    );

  }
);

export default FilterContainer;
