import React from "react";
const useFetch = (url) => {
  const [apiData, setApiData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [url]);

  return {  apiData };
};

export default useFetch;