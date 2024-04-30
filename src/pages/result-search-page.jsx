import { useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const ResultSearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchStatus, setSearchStatus] = useState("product");
  const location = useLocation();
  const urlSearchParams = new URLSearchParams(location.search);
  const keyword = urlSearchParams.get("q");
  const status = urlSearchParams.get("st");

  const changeStatusSearchHandler = () => {
    if (searchStatus === "product") {
      setSearchStatus("shop");
      setSearchParams((params) => ({ ...params, q: keyword, st: searchStatus }));
    } else {
      setSearchStatus("product");
      setSearchParams((params) => ({ ...params, q: keyword, st: searchStatus }));
    }
  };

  return (
    <section>
      <button onClick={changeStatusSearchHandler}>Klik</button>
      <span>Kata kunci: {keyword}</span>
      <br />
      <span>Status: {status}</span>
    </section>
  );
};

export default ResultSearchPage;
