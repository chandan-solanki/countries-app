import { useEffect, useState } from "react";
import Loading from "./Loading";
import { useParams } from "react-router-dom";
import BorderBtn from "./BorderBtn";
import { useTheme } from "../hooks/useTheme";

export default function CountryDetail() {
  const params = useParams();

  let [isDark] = useTheme();

  let cntryName = params.countryDetail;

  const [cntryData, setCntryData] = useState({});
  let [notFound, setNotFound] = useState(false);

  useEffect(() => {
    let url = `https://restcountries.com/v3.1/name/${cntryName}`;
    makeRequest(url);
  }, [cntryName]);

  function clickHandler(e) {
    let url = `https://restcountries.com/v3.1/alpha/${e.currentTarget.innerText}`;
    makeRequest(url);
  }

  async function makeRequest(url) {
    try {
      const res = await fetch(url);
      const data = await res.json();
      const [objcntry] = data;

      setCntryData({
        nativeName: Object.values(objcntry.name.nativeName)
          .map((it) => it.official)
          .join(","),
        flag: objcntry.flags.svg,
        name: objcntry.name.common,
        tld: objcntry.tld.map((it) => it).join(","),
        population: objcntry.population.toLocaleString("en-US"),
        currencies: Object.values(objcntry.currencies)
          .map((it) => it.name)
          .join(","),
        region: objcntry.region,
        languages: Object.values(objcntry.languages)
          .map((it) => it)
          .join(","),
        subRegion: objcntry.subregion,
        capitals: objcntry.capital.map((it) => it).join(","),
        borderCntries:
          objcntry.borders === undefined
            ? "This country have not border countries"
            : objcntry.borders.map((it) => {
                return <BorderBtn handler={clickHandler} key={it} name={it} />;
              }),
      });
      // cntryName = objcntry.name.common;
    } catch (err) {
      setNotFound(true);
      console.error(err);
    }
  }

  if (notFound)
    return <div className="country-not-found">Country not Found !!</div>;

  return Object.keys(cntryData).length === 0 ? (
    <Loading />
  ) : (
    <>
      <main className={`main-section set-layout ${isDark && "dark-mode"}`}>
        <button className="back-btn" onClick={() => history.back()}>
          <span>
            <i className="fa-solid fa-arrow-left-long"></i>
          </span>
          Back{" "}
        </button>

        <div className="country-container">
          <img
            src={cntryData.flag}
            alt={cntryData.name + " flag"}
            className="main-country-img"
          />

          <div className="main-country-details">
            <p className="country-name">{cntryData.name}</p>

            <div className="details-country">
              <div className="cntry-main-details">
                <p className="font-bold">
                  Native Name :{" "}
                  <span className="txtColorBg">{cntryData.name}</span>
                </p>
                <p className="font-bold">
                  Top Level Domain :{" "}
                  <span className="txtColorBg">{cntryData.tld}</span>
                </p>
                <p className="font-bold">
                  Population :{" "}
                  <span className="txtColorBg">{cntryData.population}</span>
                </p>
                <p className="font-bold">
                  Currencies :{" "}
                  <span className="txtColorBg">{cntryData.currencies}</span>
                </p>
                <p className="font-bold">
                  Region :{" "}
                  <span className="txtColorBg">{cntryData.region}</span>
                </p>
                <p className="font-bold">
                  Languages :{" "}
                  <span className="txtColorBg">{cntryData.languages}</span>
                </p>
                <p className="font-bold">
                  Sub Region :{" "}
                  <span className="txtColorBg">{cntryData.subRegion}</span>
                </p>
                <p className="font-bold">
                  Capital :{" "}
                  <span className="txtColorBg">{cntryData.capitals}</span>
                </p>
              </div>

              <div className="border-country">
                <p>Border Countries : </p>
                <div className="border-btn-container">
                  {cntryData.borderCntries}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
