import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const FetchCountries = () => {
  const [sortOrder, setSortOrder] = useState("asc");
  const [countries, setCountries] = useState([]);

  const [isOceaniaClicked, setIsOceaniaClicked] = useState(false);
  const [isSmallerClicked, setIsSmallerClicked] = useState(false);

  const { apiData } = useFetch(
    "https://restcountries.com/v2/all?fields=name,region,area"
  );

  useEffect(() => {
    setCountries(apiData);
   
  }, [apiData]);
  const handleSortClick = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const displayCountries = [...countries].sort((a, b) => {
    if (sortOrder === "asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  const handleOceania = () => {
    setIsOceaniaClicked(!isOceaniaClicked);
    setIsSmallerClicked(false);
  };

  const handleSmaller = () => {
    setIsSmallerClicked(!isSmallerClicked);
    setIsOceaniaClicked(false);
  };

  return (
    <div>
      <div className="buttonDiv">
        <div >
          <button
            onClick={handleOceania}
            className={isOceaniaClicked ? "highlight" : "unhighlight"}
          >
            Oceania Region
          </button>
          <button
            onClick={handleSmaller}
            className={isSmallerClicked ? "highlight" : "unhighlight"}
          >
            Smaller by Lithuania in Area
          </button>
        </div>

        <div >
          <button onClick={handleSortClick} className="sortBtn">
            Sort {sortOrder === "asc" ? "Ascending" : "Descending"}
          </button>
        </div>
      </div>

      {isOceaniaClicked ? (
        <div>
          {displayCountries.map((country) =>
            country.region === "Oceania" ? (
              <div className="list">
                <p key={country.name}>Country: {country.name}</p>
                <p>Region: {country.region}</p>
                <p>Area: {country.area}</p>
              </div>
            ) : null
          )}
        </div>
      ) : isSmallerClicked ? (
        <div>
          {displayCountries.map((country) =>
            country.area < 63500 ? (
              <div className="list">
                <p key={country.name}>Country: {country.name}</p>
                <p>Region: {country.region}</p>
                <p>Area: {country.area}</p>
              </div>
            ) : null
          )}
        </div>
      ) : (
        <div>
          {displayCountries.map((country) => (
            <>
              <div className="list">
                <p key={country.name}>Country: {country.name}</p>
                <p>Region: {country.region}</p>
                <p>Area: {country.area}</p>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
};

export default FetchCountries;
