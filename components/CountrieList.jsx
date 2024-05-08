import CountryCard from "./CountryCard";
import { Component, useEffect, useState } from "react";
import Loading from "./Loading";

export default function CountrieList({ query, filterCntry }) {
  const [countryData, setcountryData] = useState([]);

  let arrCards = [];

  function makeRequest(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setcountryData(data);
      })
      .catch((err) => {
        console.log(err);
        setcountryData([]);
      });
  }

  useEffect(() => {

    let url = "";

    if (filterCntry !== "" && filterCntry !== "All") {
      url = `https://restcountries.com/v3.1/region/${filterCntry.toLowerCase()}`;
    } else {
      url = "https://restcountries.com/v3.1/all";
    }

    makeRequest(url);
  }, [filterCntry]);

  useEffect(() => {
    let url = "";

    if (query !== "") {
      url = `https://restcountries.com/v3.1/name/${query.trim()}`;
    } else {
      url = "https://restcountries.com/v3.1/all";
    }
    makeRequest(url);
  }, [query]);

  if (countryData.status !== 404) {
    if (Array.isArray(countryData)) {
      arrCards = countryData.map((country, i) => {
        return (
          <CountryCard
            key={i}
            name={country.name.common}
            imgSrc={country.flags.svg}
            population={country.population.toLocaleString("en-US")}
            region={country.region}
            capital={country.capital}
            cntryCode={country.cca2}
          />
        );
      });
    }
  } else {
    return <div className="country-not-found">Country not Found !!</div>;
  }

  return arrCards.length === 0 ? (
    <Loading />
  ) : (
    <div className="country-items">{arrCards}</div>
  );
}
