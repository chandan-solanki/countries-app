import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CountryCard({
  name,
  imgSrc,
  population,
  region,
  capital,
  cntryCode,
}) {
  return (
    <>
      <Link className="a-cntry-links" to={`./${name}`}>
        <div className="cntry-item">
          <img src={imgSrc} alt="" className="cntry-flag" />
          <p className="cntry-name">{name}</p>
          <div className="cntry-details">
            <p className="cntry-popul">
              Population:{" "}
              <span className="data-popu txtColorBg">{population}</span>
            </p>
            <p className="cntry-region">
              Region: <span className="data-cap txtColorBg">{region}</span>
            </p>
            <p className="cntry-capital">
              Capital: <span className="data-cap txtColorBg">{capital}</span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
