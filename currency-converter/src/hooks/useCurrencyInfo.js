import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({}); // State to store fetched data

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
        const response = await fetch(url); // Fetch the data
        const result = await response.json(); // Parse JSON
        setData(result[currency]); // Set state with the fetched currency rates
      } catch (error) {
        console.error("Error fetching currency data:", error); // Handle errors
      }
    };

    fetchData(); // Call the fetch function
  }, [currency]); // Re-run effect when `currency` changes

  return data; // Return the data state
}

export default useCurrencyInfo;
