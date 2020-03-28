import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log("url", url);
  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        console.log("data", data);

        setData(data);
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
        setIsLoading(undefined);
      }
    }

    if (url !== "") {
      getData();
    }
  }, [url]);

  return [data, isLoading];
}
