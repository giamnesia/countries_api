import { useState, useEffect } from "react";
import sortCountries from "../hooks/sortCountries";

const OceaniaCountries = ({ countries, sortOrder }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const holder = countries.filter((country) => country.region === "Oceania");

  const totalPages = Math.ceil(holder.length / countriesPerPage);

  useEffect(() => {
    setData(holder.slice(0, countriesPerPage));
  }, [countriesPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    const startIndex = (pageNumber - 1) * countriesPerPage;
    const endIndex = startIndex + countriesPerPage;
    setData(holder.slice(startIndex, endIndex));
  };

  const displayCountries = sortCountries(data, sortOrder);

  return (
    <div>
      <div class='page'>
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            className="btnpage"
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
      {displayCountries.map((country) => (
        <div className="list">
          <p key={country.name}>Country: {country.name}</p>
          <p>Region: {country.region}</p>
          <p>Area: {country.area}</p>
        </div>
      ))}
    </div>
  );
};

export default OceaniaCountries;
