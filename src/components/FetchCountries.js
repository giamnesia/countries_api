import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import SmallerCountries from "./SmallerCountries";
import OceaniaCountries from "./OceanaCountries";
import AllCountries from "./AllCountries";

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
        <div>
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

        <div>
          <button onClick={handleSortClick} className="sortBtn">
            Sort {sortOrder === "asc" ? "Ascending" : "Descending"}
          </button>
        </div>
      </div>

      {isOceaniaClicked ? (
        <OceaniaCountries countries={countries} sortOrder={sortOrder} />
      ) : isSmallerClicked ? (
        <SmallerCountries countries={countries} sortOrder={sortOrder} />
      ) : (
        <div>
          <AllCountries countries={countries} sortOrder={sortOrder} />
        </div>
      )}
    </div>
  );
};

export default FetchCountries;
