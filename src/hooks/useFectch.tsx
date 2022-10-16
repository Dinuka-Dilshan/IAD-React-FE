import { useCallback, useState } from "react";

const URL_BASE = "http://localhost:8080";

const useFetch = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [data, setData] = useState<any>(null);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = useCallback(
    async (
      url: string,
      options: { type: "GET" | "DELETE" | "POST"; body?: any }
    ) => {

     
      try {
        setIsFetching(true);
        setIsError(false);
        const responce = await fetch(`${URL_BASE}${url}`, {
          method: options.type,
          body: options.body ? JSON.stringify(options.body) : null,
          headers: {
            "content-type": "application/json",
          },
        });

        if (!responce.ok) {
          throw new Error();
        }
        const data = await responce.json();
        setData(data);
        setIsFetching(false);
      } catch (error) {
        setIsError(true);
        setIsFetching(false);
      }
    },
    []
  );

  return { data, fetchData, isFetching, isError };
};

export default useFetch;
