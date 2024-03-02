import { useState, useEffect } from "react";
import instance from "../../services/api";
import Company from "../company/Company";
import Loading from "../loading/Loading";
import Error from "../error/Error";

const HomeView = () => {
  const [companyInfo, setCompanyInfo] = useState(undefined);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    instance
      .get("company")
      .then((res) => {
        setCompanyInfo(res.data);
      })
      .catch((error) => {
        setError(true);
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
    // finally je deo JS Promise API-ja koji se izvrsava bez obzira da li je Promise
    // resen uspesno ili ne (da li je otiso u then ili catch)
    //  ova funkcija se uvek izvrsava nakon sto su se izvrsili then i catch blokovi
  }, []);

  return (
    <>
      <h1>HomeView</h1>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Company companyInfo={companyInfo} />
      )}
    </>
  );
};

export default HomeView;
