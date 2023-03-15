const sortCountries = (countries, sortOrder) => {
    return [...countries].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  };

  export default sortCountries;
  